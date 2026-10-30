"""Check published output and a temporary new-project example; never deploy the example."""
import copy
import json
import os
import subprocess
import tempfile
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "_data/portfolio.json"


class Page(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.cards = []
        self.dialogs = []
        self.dots = []
        self.videos = []
        self.scripts = []
        self.images = []
        self.feed(source)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        classes = attrs.get("class", "").split()
        if "project-card" in classes:
            self.cards.append(attrs)
        if tag == "dialog":
            self.dialogs.append(attrs)
        if "data-slide" in attrs:
            self.dots.append(attrs)
        if "data-video-launch" in attrs:
            self.videos.append(attrs)
        if tag == "script" and attrs.get("src"):
            self.scripts.append(attrs["src"])
        if tag == "img":
            self.images.append(attrs)


def check_output(destination, config):
    source = (destination / "portfolio/index.html").read_text(encoding="utf8")
    page = Page(source)
    visible = [p for p in config["projects"] if p["builtin"] or p["published"]]
    assert len(page.cards) == len(page.dialogs) == len(page.dots) == len(visible)
    assert [p["data-project-slug"] for p in page.cards] == [p["slug"] for p in visible]
    assert len({p["id"] for p in page.dialogs}) == len(visible)
    assert {p["data-dialog"] for p in page.cards} == {p["id"] for p in page.dialogs}
    assert [int(p["data-slide"]) for p in page.dots] == list(range(len(visible)))
    assert len(page.videos) == sum(bool(p.get("videos")) for p in visible)
    assert all(image.get("src") or "hidden" in image for image in page.images), "Empty image source rendered"
    assert page.scripts.index("/assets/js/portfolio-data.js") < page.scripts.index("/assets/js/portfolio.js")
    assert json.loads((destination / "portfolio-data.json").read_text(encoding="utf8")) == config
    assert (destination / "portfolio-editor/index.html").is_file()
    assert (destination / "PANDUAN-PORTOFOLIO/index.html").is_file()
    return source


def main():
    original = DATA.read_bytes()
    current = json.loads(original)
    check_output(ROOT / "_site", current)
    sample = copy.deepcopy(current)
    sample["projects"][6]["videos"] = [{"title": "No-poster example", "url": "https://youtu.be/7cjVj1ZyzyE"}]
    sample["projects"].append({
        "builtin": False, "published": False, "slug": "validation-hidden-draft", "title": "Draft is hidden",
        "category": "", "summary": "", "poster": "", "poster_alt": "", "videos": [], "links": [], "sections": [], "metrics": [], "tags": []
    })
    sample["projects"].append({
        "builtin": False, "published": True, "slug": "validation-new-project", "title": "Rendering test",
        "category": "Example", "summary": "Temporary build validation.",
        "poster": "/assets/img/portfolio/book-recommender/product-ui.webp", "poster_alt": "Existing screenshot",
        "sections": [{"title": "Escaped content", "body": 'Line one\n<script>alert("test")</script>'}],
        "videos": [{"title": "Video example", "url": "https://youtu.be/7cjVj1ZyzyE"}],
        "links": [{"label": "Source", "url": "https://example.com/"}], "metrics": [], "tags": []
    })
    try:
        DATA.write_text(json.dumps(sample), encoding="utf8")
        with tempfile.TemporaryDirectory(prefix="portfolio-check-") as temp:
            subprocess.run(["bundle", "exec", "jekyll", "build", "--baseurl", "", "--destination", temp], cwd=ROOT, check=True)
            source = check_output(Path(temp), sample)
            assert "project-validation-hidden-draft-dialog" not in source
            assert "project-validation-new-project-dialog" in source
            assert '&lt;script&gt;alert(&quot;test&quot;)&lt;/script&gt;' in source
            assert '<script>alert("test")</script>' not in source
            if os.environ.get("RUNNER_TEMP"):
                (Path(os.environ["RUNNER_TEMP"]) / "portfolio-fixture.html").write_text(source, encoding="utf8")
    finally:
        DATA.write_bytes(original)
    print("Published output, draft filtering, new project navigation, video and text escaping verified.")


if __name__ == "__main__":
    main()
