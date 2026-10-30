"use strict";
const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { validate, videoEmbedUrl } = require("../assets/js/portfolio-data.js");
const source = () => JSON.parse(fs.readFileSync(path.join(__dirname, "../_data/portfolio.json"), "utf8"));

test("shared YouTube and Drive links become playable embed URLs", () => {
  for (const url of ["https://youtu.be/7cjVj1ZyzyE?si=share", "https://www.youtube.com/watch?v=7cjVj1ZyzyE", "https://www.youtube.com/shorts/7cjVj1ZyzyE", "https://www.youtube-nocookie.com/embed/7cjVj1ZyzyE"]) {
    assert.equal(videoEmbedUrl(url), "https://www.youtube-nocookie.com/embed/7cjVj1ZyzyE");
  }
  assert.equal(videoEmbedUrl("https://youtu.be/7cjVj1ZyzyE?t=1m30s"), "https://www.youtube-nocookie.com/embed/7cjVj1ZyzyE?start=90");
  assert.equal(videoEmbedUrl("https://drive.google.com/file/d/1CurLILNcrjWqYlsKbJa-mzsdxVzhvn0I/view?usp=sharing"), "https://drive.google.com/file/d/1CurLILNcrjWqYlsKbJa-mzsdxVzhvn0I/preview");
});

test("unsupported and deceptive URLs cannot enter an iframe", () => {
  for (const url of ["javascript:alert(1)", "https://youtube.com.evil.example/watch?v=7cjVj1ZyzyE", "https://user:pass@youtube.com/watch?v=7cjVj1ZyzyE", "https://youtube.com:444/watch?v=7cjVj1ZyzyE", "https://youtube.com/playlist?list=123", "https://drive.google.com/drive/folders/123", "https://youtu.be/bad-id", "http://youtu.be/7cjVj1ZyzyE"]) {
    assert.equal(videoEmbedUrl(url), null, url);
  }
});

test("current data and unfinished drafts remain downloadable", () => {
  const data = source();
  data.projects.push({ builtin: false, published: false, slug: "", title: "", category: "", summary: "", poster: "", poster_alt: "", sections: [], links: [], metrics: [], videos: [], tags: [] });
  assert.deepEqual(validate(data), []);
  data.projects.at(-1).published = true;
  assert.ok(validate(data).some(error => error.includes("ringkasan")));
});

test("imports cannot remove built-in projects or reuse their URLs", () => {
  const data = source();
  data.projects.push({ builtin: false, published: false, slug: "book-recommender", title: "Duplicate" });
  assert.ok(validate(data).some(error => error.includes("slug sudah dipakai")));
  data.projects = data.projects.filter(project => project.slug !== "book-recommender");
  assert.ok(validate(data).some(error => error.includes("book-recommender hilang")));
  assert.ok(validate({ projects: [] }).length);
  assert.ok(validate(null).length);
  const reordered = source();
  [reordered.projects[0], reordered.projects[1]] = [reordered.projects[1], reordered.projects[0]];
  assert.ok(validate(reordered).some(error => error.includes("Urutan")));
  const missingLists = source();
  delete missingLists.projects[0].videos;
  assert.ok(validate(missingLists).some(error => error.includes("videos harus berupa daftar")));
});

test("missing images block deployment with the file name", () => {
  const data = source();
  assert.ok(validate(data, { assetExists: () => false }).some(error => error.includes("belum ada")));
  assert.deepEqual(validate(data, { assetExists: () => true }), []);
});

test("malformed form data and unsafe links are rejected without throwing", () => {
  const data = source();
  data.projects.push({ builtin: false, published: false, slug: "trial", title: "Trial", links: [{ label: "Demo", url: "javascript:alert(1)" }], sections: [null], metrics: "bad", tags: [12], poster: "/assets/../secrets.txt" });
  assert.ok(validate(data).length >= 5);
  data.projects[0].videos = [{ title: "Trial", url: "https://example.com/video" }];
  assert.ok(validate(data).some(error => error.includes("tautan video")));
});
