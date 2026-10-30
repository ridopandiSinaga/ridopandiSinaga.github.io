(function (root, factory) {
  "use strict";
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  else root.PortfolioData = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const builtinSlugs = [
    "agentic-customer-service", "chat-opa", "bilingual-text-to-cypher",
    "sentiment-quest", "book-recommender", "agentic-chess-arena",
    "customer-segmentation", "soothemate"
  ];
  const object = value => value !== null && typeof value === "object" && !Array.isArray(value);
  const filled = value => typeof value === "string" && value.trim().length > 0;
  const assetPath = value => typeof value === "string" && /^\/assets\/[A-Za-z0-9_./-]+$/.test(value) && !value.split("/").includes("..");
  const httpsUrl = value => {
    try {
      const url = new URL(value);
      return url.protocol === "https:" && !url.username && !url.password && !/[\s\\]/.test(value);
    } catch (_) { return false; }
  };

  function videoEmbedUrl(value) {
    if (!httpsUrl(value)) return null;
    const url = new URL(value);
    if (url.port) return null;
    const host = url.hostname;
    const parts = url.pathname.split("/").filter(Boolean);
    let id;
    if (host === "youtu.be") id = parts.length === 1 ? parts[0] : null;
    else if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"].includes(host)) {
      if (url.pathname === "/watch") id = url.searchParams.get("v");
      else if (["embed", "shorts", "live"].includes(parts[0]) && parts.length === 2) id = parts[1];
    } else if (host === "drive.google.com") {
      if (parts[0] === "file" && parts[1] === "d" && parts.length >= 3 && parts.length <= 4 && (!parts[3] || ["view", "preview", "edit"].includes(parts[3]))) id = parts[2];
      else if (url.pathname === "/open") id = url.searchParams.get("id");
      if (!/^[A-Za-z0-9_-]{10,}$/.test(id || "")) return null;
      const preview = new URL(`https://drive.google.com/file/d/${id}/preview`);
      const resourceKey = url.searchParams.get("resourcekey");
      if (resourceKey) preview.searchParams.set("resourcekey", resourceKey);
      return preview.href;
    }
    if (!/^[A-Za-z0-9_-]{11}$/.test(id || "")) return null;
    const embed = new URL(`https://www.youtube-nocookie.com/embed/${id}`);
    const time = url.searchParams.get("start") || url.searchParams.get("t") || "";
    let seconds = 0;
    if (/^\d+$/.test(time)) seconds = Number(time);
    else {
      const match = time.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      if (match) seconds = Number(match[1] || 0) * 3600 + Number(match[2] || 0) * 60 + Number(match[3] || 0);
    }
    if (seconds > 0 && Number.isSafeInteger(seconds)) embed.searchParams.set("start", String(seconds));
    return embed.href;
  }

  function validate(data, options = {}) {
    const errors = [];
    if (!object(data) || data.schema_version !== 1 || !Array.isArray(data.projects)) return ["Format file harus schema_version: 1 dengan daftar projects."];
    const seen = new Set();
    const builtins = new Set();
    const checkText = (value, name, required = false) => {
      if (value !== undefined && typeof value !== "string") errors.push(`${name}: isi dengan teks.`);
      else if (required && !filled(value)) errors.push(`${name}: belum diisi.`);
    };
    const checkImage = (value, name, required = false) => {
      checkText(value, name, required);
      if (!filled(value)) return;
      if (!assetPath(value) && !httpsUrl(value)) errors.push(`${name}: gunakan /assets/... atau URL HTTPS.`);
      else if (assetPath(value) && options.assetExists && !options.assetExists(value)) errors.push(`${name}: file ${value} belum ada. Unggah gambar terlebih dahulu.`);
    };
    const list = (value, name, callback) => {
      if (value === undefined) return;
      if (!Array.isArray(value)) { errors.push(`${name}: harus berupa daftar.`); return; }
      value.forEach((entry, index) => {
        if (!object(entry)) errors.push(`${name} ${index + 1}: format tidak valid.`);
        else callback(entry, `${name} ${index + 1}`);
      });
    };
    data.projects.forEach((project, index) => {
      const name = `Proyek ${index + 1}${filled(project?.title) ? ` (${project.title})` : ""}`;
      if (!object(project)) { errors.push(`${name}: format tidak valid.`); return; }
      if (typeof project.builtin !== "boolean") errors.push(`${name}: builtin harus true atau false.`);
      const fields = project.builtin ? ["title", "slug", "poster"] : ["title", "slug", "category", "summary", "poster", "poster_alt"];
      fields.forEach(key => { if (typeof project[key] !== "string") errors.push(`${name}: ${key} harus berupa teks, boleh kosong untuk draf.`); });
      const arrays = project.builtin ? ["videos"] : ["videos", "links", "sections", "metrics", "tags"];
      arrays.forEach(key => { if (!Array.isArray(project[key])) errors.push(`${name}: ${key} harus berupa daftar, boleh kosong [].`); });
      const required = project.builtin || project.published === true;
      if (!project.builtin && typeof project.published !== "boolean") errors.push(`${name}: published harus true atau false.`);
      checkText(project.slug, `${name} / slug`, required);
      checkText(project.title, `${name} / judul`, required);
      if (filled(project.slug)) {
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) errors.push(`${name}: slug hanya boleh huruf kecil, angka, dan tanda hubung.`);
        if (project.slug === "projects" || seen.has(project.slug)) errors.push(`${name}: slug sudah dipakai. Pilih slug lain.`);
        seen.add(project.slug);
      }
      if (project.builtin) {
        if (!builtinSlugs.includes(project.slug)) errors.push(`${name}: proyek bawaan tidak dikenali.`);
        builtins.add(project.slug);
      } else if (builtinSlugs.includes(project.slug)) errors.push(`${name}: slug milik proyek bawaan.`);
      checkImage(project.poster, `${name} / gambar`, !project.builtin && required);
      ["video_heading", "video_kicker", "video_description"].forEach(key => checkText(project[key], `${name} / ${key}`));
      list(project.videos, `${name} / video`, (video, label) => {
        checkText(video.title, `${label} / judul`, true);
        if (!videoEmbedUrl(video.url)) errors.push(`${label}: gunakan tautan video YouTube atau Google Drive yang valid.`);
        ["description", "kicker", "poster_alt", "play_label", "option_description"].forEach(key => checkText(video[key], `${label} / ${key}`));
        checkImage(video.poster, `${label} / gambar`);
      });
      if (project.builtin) return;
      checkText(project.category, `${name} / kategori`);
      checkText(project.summary, `${name} / ringkasan`, required);
      checkText(project.poster_alt, `${name} / deskripsi gambar`, required);
      list(project.links, `${name} / tautan`, (link, label) => {
        checkText(link.label, `${label} / label`, true);
        if (!httpsUrl(link.url) && !assetPath(link.url)) errors.push(`${label}: gunakan URL HTTPS atau /assets/... untuk file.`);
        else if (assetPath(link.url) && options.assetExists && !options.assetExists(link.url)) errors.push(`${label}: file ${link.url} belum ada.`);
      });
      list(project.sections, `${name} / bagian`, (section, label) => {
        checkText(section.title, `${label} / judul`, required);
        checkText(section.body, `${label} / isi`, required);
      });
      if (required && (!Array.isArray(project.sections) || project.sections.length === 0)) errors.push(`${name}: isi sedikitnya satu bagian penjelasan.`);
      list(project.metrics, `${name} / angka`, (metric, label) => {
        checkText(metric.label, `${label} / label`, true);
        checkText(metric.value, `${label} / nilai`, true);
        checkText(metric.note, `${label} / konteks`, true);
      });
      if (project.tags !== undefined && (!Array.isArray(project.tags) || project.tags.some(tag => !filled(tag)))) errors.push(`${name}: setiap teknologi harus berupa teks yang terisi.`);
    });
    builtinSlugs.forEach(slug => { if (!builtins.has(slug)) errors.push(`Proyek bawaan ${slug} hilang dari file.`); });
    if (builtinSlugs.some((slug, index) => data.projects[index]?.slug !== slug || data.projects[index]?.builtin !== true)) errors.push("Urutan delapan proyek bawaan harus tetap sama; letakkan proyek baru setelahnya.");
    return errors;
  }
  return { validate, videoEmbedUrl, builtinSlugs };
});
