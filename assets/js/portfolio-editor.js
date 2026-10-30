(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const source = document.body.dataset.source;
  const storageKey = "rido-portfolio-editor-draft-v1";
  const lists = ["videos", "links", "sections", "metrics"];
  let data = null;
  let baseline = null;
  let selectedIndex = 0;
  let dirty = false;
  let savedDraft = null;
  let saveTimer = null;
  let inputId = 0;

  const clone = (value) => JSON.parse(JSON.stringify(value));
  const currentProject = () => data && data.projects[selectedIndex];
  const projectName = (project, index) => project.title.trim() || `Proyek baru ${index + 1}`;

  function setStatus(message) { $("load-state").textContent = message; }

  function showErrors(messages, title = "Periksa isian ini") {
    $("error-title").textContent = title;
    $("error-list").replaceChildren();
    messages.forEach((message) => {
      const item = document.createElement("li");
      item.textContent = String(message);
      $("error-list").append(item);
    });
    $("error-panel").hidden = false;
    $("error-panel").focus();
  }

  function clearErrors() { $("error-panel").hidden = true; }

  function validateStructure(candidate) {
    if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return ["File harus berisi satu objek JSON."];
    if (candidate.schema_version !== 1 || !Array.isArray(candidate.projects)) return ["File ini bukan portfolio.json yang didukung (schema_version: 1 dan daftar projects diperlukan)."];
    const errors = [];
    const rowFields = { videos: ["title", "url", "description", "poster"], links: ["label", "url"], sections: ["title", "body"], metrics: ["label", "value", "note"] };
    candidate.projects.forEach((project, index) => {
      const label = `Proyek ${index + 1}`;
      if (!project || typeof project !== "object" || Array.isArray(project)) { errors.push(`${label}: isinya harus berupa objek.`); return; }
      if (typeof project.builtin !== "boolean") errors.push(`${label}: nilai builtin harus true atau false.`);
      const fields = project.builtin ? ["title", "slug", "poster"] : ["title", "slug", "category", "summary", "poster", "poster_alt"];
      fields.forEach((field) => { if (typeof project[field] !== "string") errors.push(`${label}: ${field} harus berupa teks.`); });
      if (!project.builtin && typeof project.published !== "boolean") errors.push(`${label}: nilai published harus true atau false.`);
      if (!project.builtin && (!Array.isArray(project.tags) || project.tags.some((tag) => typeof tag !== "string"))) errors.push(`${label}: tags harus berupa daftar teks.`);
      const kinds = project.builtin ? ["videos"] : lists;
      kinds.forEach((kind) => {
        if (!Array.isArray(project[kind])) { errors.push(`${label}: ${kind} harus berupa daftar, boleh kosong [].`); return; }
        project[kind].forEach((row, rowIndex) => {
          if (!row || typeof row !== "object" || Array.isArray(row)) { errors.push(`${label}, ${kind} ${rowIndex + 1}: format tidak valid.`); return; }
          rowFields[kind].forEach((key) => {
            const optional = (kind === "videos" && ["description", "poster"].includes(key)) || (kind === "metrics" && key === "note");
            if (!(optional && row[key] === undefined) && typeof row[key] !== "string") errors.push(`${label}, ${kind} ${rowIndex + 1}: ${key} harus berupa teks.`);
          });
        });
      });
    });
    if (!errors.length && baseline) {
      const builtins = baseline.projects.filter((project) => project.builtin);
      builtins.forEach((original) => {
        const matches = candidate.projects.filter((project) => project.slug === original.slug && project.builtin);
        if (matches.length !== 1) errors.push(`Proyek bawaan “${original.title}” harus tetap ada tepat satu kali. Gunakan file terbaru dari website.`);
        else if (matches[0].title !== original.title) errors.push(`Judul proyek bawaan “${original.title}” tidak boleh diubah melalui editor ini.`);
      });
      candidate.projects.filter((project) => project.builtin).forEach((project) => {
        if (!builtins.some((original) => original.slug === project.slug)) errors.push(`Proyek baru “${project.title}” harus memakai builtin: false.`);
      });
    }
    return errors;
  }

  function validationErrors(candidate) {
    const structureErrors = validateStructure(candidate);
    if (structureErrors.length) return structureErrors;
    if (!window.PortfolioData || typeof window.PortfolioData.validate !== "function") return ["Pemeriksa data gagal dimuat. Muat ulang halaman sebelum mengunduh file untuk website."];
    try { return window.PortfolioData.validate(candidate); }
    catch (_error) { return ["Data belum bisa diperiksa. Pastikan file mengikuti format portfolio.json dari website."]; }
  }

  function rememberDraft() {
    if (!data) return;
    const record = { savedAt: new Date().toISOString(), source, data };
    try {
      localStorage.setItem(storageKey, JSON.stringify(record));
      $("save-note").textContent = "Draf tersimpan di browser ini. Unduh cadangan untuk menyimpannya sebagai file.";
    } catch (_error) {
      $("save-note").textContent = "Browser tidak dapat menyimpan draf. Unduh cadangan agar isian tidak hilang.";
    }
  }

  function changed({ refreshSelector = false } = {}) {
    dirty = true;
    $("publish-next").hidden = true;
    if (savedDraft) { savedDraft = null; $("draft-notice").hidden = true; }
    clearErrors();
    clearTimeout(saveTimer);
    saveTimer = setTimeout(rememberDraft, 300);
    if (refreshSelector) renderSelector();
    const project = currentProject();
    $("project-heading").textContent = projectName(project, selectedIndex);
    $("project-badge").textContent = project.builtin || project.published ? "Tampil di website" : "Draf";
    setStatus("Ada perubahan. Unduh portfolio.json setelah selesai mengisi.");
  }

  function renderSelector() {
    $("project-select").replaceChildren();
    data.projects.forEach((project, index) => {
      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = projectName(project, index) + (!project.builtin && !project.published ? " — draf" : "");
      $("project-select").append(option);
    });
    $("project-select").value = String(selectedIndex);
  }

  function field(labelText, value, onInput, { textarea = false, placeholder = "", wide = false, help = "" } = {}) {
    const label = document.createElement("label");
    label.className = "row-field" + (wide ? " full-width" : "");
    const title = document.createElement("span");
    title.textContent = labelText;
    const input = document.createElement(textarea ? "textarea" : "input");
    input.id = `editor-row-input-${++inputId}`;
    if (textarea) input.rows = 3;
    else input.type = "text";
    input.value = value || "";
    input.placeholder = placeholder;
    input.addEventListener("input", () => { onInput(input.value); changed(); });
    label.append(title, input);
    if (help) {
      const hint = document.createElement("span");
      hint.className = "help";
      hint.textContent = help;
      label.append(hint);
    }
    return label;
  }

  function renderRows(kind) {
    const project = currentProject();
    const container = $(`${kind}-rows`);
    container.replaceChildren();
    const rows = project[kind] || [];
    if (!rows.length) {
      const empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = { videos: "Belum ada video untuk proyek ini.", links: "Belum ada tautan.", sections: "Tambahkan setidaknya satu bagian sebelum menampilkan proyek.", metrics: "Belum ada angka hasil." }[kind];
      container.append(empty);
      return;
    }
    rows.forEach((row, index) => {
      const element = document.createElement("div");
      element.className = "entry-row";
      const heading = document.createElement("div");
      heading.className = "entry-heading";
      const title = document.createElement("strong");
      title.textContent = `${{ videos: "Video", links: "Tautan", sections: "Bagian", metrics: "Angka" }[kind]} ${index + 1}`;
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "text-button danger";
      remove.textContent = "Hapus";
      remove.setAttribute("aria-label", `Hapus ${title.textContent.toLowerCase()}`);
      remove.addEventListener("click", () => {
        if (Object.values(row).some((value) => typeof value === "string" && value.trim()) && !window.confirm(`Hapus ${title.textContent.toLowerCase()} ini?`)) return;
        rows.splice(index, 1);
        renderRows(kind);
        changed();
      });
      heading.append(title, remove);
      const grid = document.createElement("div");
      grid.className = "field-grid";
      const addField = (key, label, options) => grid.append(field(label, row[key], (value) => {
        if (kind === "videos" && row[key] !== value) {
          if (key === "url") {
            ["kicker", "play_label", "option_description"].forEach((name) => { delete row[name]; });
            ["video_heading", "video_kicker", "video_description"].forEach((name) => { delete project[name]; });
          }
          if (key === "title") delete row.play_label;
          if (key === "description") delete row.option_description;
          if (key === "poster") delete row.poster_alt;
        }
        row[key] = value;
      }, options));
      if (kind === "videos") {
        addField("title", "Judul video", { placeholder: "Contoh: Cara kerja rekomendasi buku", wide: true });
        addField("url", "Tautan video", { placeholder: "https://youtu.be/…", wide: true });
        addField("description", "Keterangan singkat (opsional)", { textarea: true, wide: true, placeholder: "Apa yang dijelaskan dalam video ini?" });
        addField("poster", "Gambar sampul (opsional)", { wide: true, placeholder: project.poster || "/assets/img/nama-gambar.webp", help: "Kosongkan untuk memakai gambar proyek." });
      } else if (kind === "links") {
        addField("label", "Tulisan tombol", { placeholder: "GitHub" });
        addField("url", "Tautan", { placeholder: "https://github.com/…" });
      } else if (kind === "sections") {
        addField("title", "Judul bagian", { wide: true, placeholder: "Masalah" });
        addField("body", "Isi", { textarea: true, wide: true });
      } else {
        addField("label", "Nama ukuran", { placeholder: "Recall@10" });
        addField("value", "Nilai dan satuan", { placeholder: "10,75%" });
        addField("note", "Konteks angka", { textarea: true, wide: true, placeholder: "Data evaluasi, jumlah sampel, atau sumber hasil." });
      }
      element.append(heading, grid);
      container.append(element);
    });
  }

  function renderProject() {
    const project = currentProject();
    if (!project) return;
    $("project-heading").textContent = projectName(project, selectedIndex);
    $("project-kind").textContent = project.builtin ? "Proyek yang sudah ada. Di sini kamu bisa mengatur videonya." : "Proyek tambahan. Isi dan atur kapan ditampilkan.";
    $("project-badge").textContent = project.builtin || project.published ? "Tampil di website" : "Draf";
    $("new-project-fields").hidden = project.builtin;
    $("delete-project-button").hidden = project.builtin;
    if (!project.builtin) {
      document.querySelectorAll("[data-project-field]").forEach((input) => { input.value = project[input.dataset.projectField] || ""; });
      $("project-tags").value = project.tags.join(", ");
      $("project-published").checked = project.published;
      ["links", "sections", "metrics"].forEach(renderRows);
    }
    renderRows("videos");
  }

  function activate(candidate, { isImport = false } = {}) {
    data = clone(candidate);
    selectedIndex = 0;
    $("editor-workspace").hidden = false;
    $("download-button").disabled = false;
    $("backup-button").disabled = false;
    renderSelector();
    renderProject();
    clearErrors();
    $("publish-next").hidden = true;
    if (isImport) { dirty = true; rememberDraft(); }
  }

  function readStoredDraft() {
    try {
      const record = JSON.parse(localStorage.getItem(storageKey));
      if (record && record.source === source && record.data && !validateStructure(record.data).length && JSON.stringify(record.data) !== JSON.stringify(data)) {
        savedDraft = record;
        const date = new Date(record.savedAt);
        const when = Number.isNaN(date.getTime()) ? "sebelumnya" : date.toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });
        $("draft-message").textContent = `Ada draf tersimpan dari ${when}. Pulihkan untuk melanjutkannya. Mulai mengedit data website akan mengganti draf ini.`;
        $("draft-notice").hidden = false;
      }
    } catch (_error) { /* A missing or invalid browser backup does not prevent editing. */ }
  }

  function download(filename, candidate) {
    const blob = new Blob([JSON.stringify(candidate, null, 2) + "\n"], { type: "application/json;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.download = filename;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
    dirty = false;
    rememberDraft();
  }

  $("project-select").addEventListener("change", (event) => { selectedIndex = Number(event.target.value); renderProject(); clearErrors(); });
  document.querySelectorAll("[data-project-field]").forEach((input) => {
    input.addEventListener("input", () => {
      const project = currentProject();
      if (!project || project.builtin) return;
      project[input.dataset.projectField] = input.value;
      changed({ refreshSelector: input.dataset.projectField === "title" });
    });
  });
  $("project-tags").addEventListener("input", (event) => { currentProject().tags = event.target.value.split(",").map((tag) => tag.trim()).filter(Boolean); changed(); });
  $("project-published").addEventListener("change", (event) => { currentProject().published = event.target.checked; changed({ refreshSelector: true }); });
  document.querySelectorAll("[data-add-row]").forEach((button) => {
    button.addEventListener("click", () => {
      const kind = button.dataset.addRow;
      const blank = { videos: { title: "", url: "", description: "", poster: "" }, links: { label: "", url: "" }, sections: { title: "", body: "" }, metrics: { label: "", value: "", note: "" } };
      currentProject()[kind].push(blank[kind]);
      renderRows(kind);
      changed();
      $(`${kind}-rows`).lastElementChild.querySelector("input, textarea").focus();
    });
  });
  $("add-project-button").addEventListener("click", () => {
    data.projects.push({ slug: "", title: "", builtin: false, published: false, category: "", summary: "", poster: "", poster_alt: "", links: [], sections: [], metrics: [], tags: [], videos: [] });
    selectedIndex = data.projects.length - 1;
    renderSelector();
    renderProject();
    changed();
    $("project-title").focus();
  });
  $("delete-project-button").addEventListener("click", () => {
    const project = currentProject();
    if (project.builtin || !window.confirm(`Hapus proyek “${projectName(project, selectedIndex)}” dari file ini?`)) return;
    data.projects.splice(selectedIndex, 1);
    selectedIndex = Math.max(0, selectedIndex - 1);
    renderSelector();
    renderProject();
    changed();
  });
  $("import-button").addEventListener("click", () => $("import-file").click());
  $("import-file").addEventListener("change", async (event) => {
    const file = event.target.files[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { showErrors(["File terlalu besar. Pilih portfolio.json, bukan file gambar atau video."]); return; }
    try {
      const candidate = JSON.parse(await file.text());
      const errors = validateStructure(candidate);
      if (errors.length) { showErrors(errors, "File belum bisa dibuka"); return; }
      // An unfinished backup is editable even when it is not ready to publish.
      if (dirty && !window.confirm("Ganti isian saat ini dengan file ini? Unduh cadangan lebih dahulu jika masih diperlukan.")) return;
      activate(candidate, { isImport: true });
      $("draft-notice").hidden = true;
      setStatus(`File “${file.name}” dibuka. Periksa isinya sebelum mengunduh untuk website.`);
    } catch (_error) { showErrors(["File tidak bisa dibaca sebagai JSON. Pilih file yang diunduh dari editor ini atau _data/portfolio.json."], "File belum bisa dibuka"); }
  });
  $("backup-button").addEventListener("click", () => {
    download("portfolio-cadangan.json", data);
    setStatus("Cadangan diunduh. File ini bisa dibuka lagi di editor, termasuk isian yang belum lengkap.");
  });
  $("download-button").addEventListener("click", () => {
    const errors = validationErrors(data);
    if (errors.length) { showErrors(errors); return; }
    clearErrors();
    download("portfolio.json", data);
    $("publish-next").hidden = false;
    setStatus("portfolio.json diunduh. Unggah untuk mengganti _data/portfolio.json di repositori website, lalu commit.");
  });
  $("restore-button").addEventListener("click", () => {
    if (!savedDraft) return;
    if (dirty && !window.confirm("Ganti isian saat ini dengan draf yang tersimpan?")) return;
    const errors = validateStructure(savedDraft.data);
    if (errors.length) { showErrors(errors, "Draf tidak cocok dengan data website terbaru"); return; }
    activate(savedDraft.data, { isImport: true });
    $("draft-notice").hidden = true;
    setStatus("Draf dipulihkan. Periksa isinya sebelum mengunduh untuk website.");
  });
  $("discard-draft-button").addEventListener("click", () => {
    try { localStorage.removeItem(storageKey); } catch (_error) { /* Storage may be disabled. */ }
    savedDraft = null;
    $("draft-notice").hidden = true;
  });
  window.addEventListener("beforeunload", (event) => {
    if (!dirty) return;
    rememberDraft();
    event.preventDefault();
    event.returnValue = "";
  });

  async function initialize() {
    try {
      const response = await fetch(source, { cache: "no-store" });
      if (!response.ok) throw new Error("fetch");
      const candidate = await response.json();
      const errors = validateStructure(candidate);
      if (errors.length) { showErrors(errors, "Data website belum bisa dibuka"); setStatus("Buka cadangan JSON atau periksa data di repositori."); return; }
      baseline = clone(candidate);
      if (data) {
        setStatus("Data website sudah dimuat sebagai acuan. File yang kamu buka tetap dipertahankan.");
        return;
      }
      activate(candidate);
      setStatus("Data website sudah dimuat. Pilih proyek untuk mengatur video atau menambah isinya.");
      readStoredDraft();
    } catch (_error) {
      setStatus("Data website gagal dimuat. Muat ulang halaman, atau buka _data/portfolio.json yang diunduh dari GitHub.");
      readStoredDraft();
    }
  }
  initialize();
})();
