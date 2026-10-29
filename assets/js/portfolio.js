(() => {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  const getSavedTheme = () => {
    try {
      return window.localStorage.getItem("portfolio-theme");
    } catch (_) {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (_) {
      // The page still works when storage is unavailable.
    }
  };

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    const isDark = theme === "dark";
    themeToggle?.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    themeMeta?.setAttribute("content", isDark ? "#11110f" : "#f2f2f0");
  };

  const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(getSavedTheme() || preferredTheme);

  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });

  const track = document.querySelector("#project-track");
  const cards = track ? Array.from(track.querySelectorAll(".project-card")) : [];
  const previousButton = document.querySelector(".carousel-button--previous");
  const nextButton = document.querySelector(".carousel-button--next");
  const dots = Array.from(document.querySelectorAll(".carousel-dots button"));
  const counter = document.querySelector("#current-project");
  let activeIndex = 0;
  let scrollFrame = 0;
  let pointerStartScroll = 0;
  let pointerMoved = false;

  const setActiveProject = (index) => {
    activeIndex = Math.max(0, Math.min(index, cards.length - 1));

    if (counter) {
      counter.textContent = String(activeIndex + 1).padStart(2, "0");
    }

    dots.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeIndex;
      dot.classList.toggle("active", isActive);
      if (isActive) {
        dot.setAttribute("aria-current", "true");
      } else {
        dot.removeAttribute("aria-current");
      }
    });

    if (previousButton) previousButton.disabled = activeIndex === 0;
    if (nextButton) nextButton.disabled = activeIndex === cards.length - 1;
  };

  const projectOffset = (card) => {
    if (!track) return 0;
    const padding = Number.parseFloat(window.getComputedStyle(track).paddingLeft) || 0;
    return card.offsetLeft - padding;
  };

  const goToProject = (index, behavior = "smooth") => {
    if (!track || !cards[index]) return;
    track.scrollTo({ left: projectOffset(cards[index]), behavior });
    setActiveProject(index);
  };

  const findNearestProject = () => {
    if (!track || cards.length === 0) return 0;
    const current = track.scrollLeft;
    let nearest = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(projectOffset(card) - current);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    });

    return nearest;
  };

  previousButton?.addEventListener("click", () => goToProject(activeIndex - 1));
  nextButton?.addEventListener("click", () => goToProject(activeIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => goToProject(Number(dot.dataset.slide)));
  });

  track?.addEventListener(
    "scroll",
    () => {
      window.cancelAnimationFrame(scrollFrame);
      scrollFrame = window.requestAnimationFrame(() => setActiveProject(findNearestProject()));
    },
    { passive: true }
  );

  track?.addEventListener("pointerdown", () => {
    pointerStartScroll = track.scrollLeft;
    pointerMoved = false;
  });

  track?.addEventListener(
    "pointermove",
    () => {
      if (Math.abs(track.scrollLeft - pointerStartScroll) > 8) pointerMoved = true;
    },
    { passive: true }
  );

  track?.addEventListener("pointercancel", () => {
    pointerMoved = false;
  });

  track?.addEventListener("pointerup", () => {
    window.setTimeout(() => {
      pointerMoved = false;
    }, 0);
  });

  track?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToProject(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToProject(activeIndex - 1);
    }
  });

  window.addEventListener("resize", () => goToProject(activeIndex, "auto"), { passive: true });
  setActiveProject(0);

  const dialogTriggers = document.querySelectorAll("[data-dialog]");
  const dialogs = document.querySelectorAll(".case-dialog");
  const portfolioTitle = document.title;
  const historyKey = "portfolioCaseStudy";
  const projectSlugs = new Map([
    ["agentic-dialog", "agentic-customer-service"],
    ["chat-opa-dialog", "chat-opa"],
    ["agentic-chess-dialog", "agentic-chess-arena"],
    ["book-recommender-dialog", "book-recommender"],
    ["segmentation-dialog", "customer-segmentation"],
    ["soothemate-dialog", "soothemate"],
    ["sentiment-quest-dialog", "sentiment-quest"],
  ]);

  const caseStudyFromUrl = () => {
    const slug = window.location.hash.slice(1);
    const entry = Array.from(projectSlugs).find(([, projectSlug]) => projectSlug === slug);
    return entry ? document.getElementById(entry[0]) : null;
  };

  const updateDialogState = () => {
    const openDialog = Array.from(dialogs).find((dialog) => dialog.open);
    document.body.classList.toggle("dialog-open", Boolean(openDialog));
    const title = openDialog?.querySelector("h2")?.textContent.trim();
    document.title = title ? `${title} — Rido. Portfolio` : portfolioTitle;
  };

  const syncCaseStudyFromUrl = () => {
    const selectedDialog = caseStudyFromUrl();

    dialogs.forEach((dialog) => {
      if (dialog.open && dialog !== selectedDialog) dialog.close();
    });

    if (selectedDialog instanceof HTMLDialogElement && !selectedDialog.open) {
      const index = cards.findIndex((card) => card.dataset.dialog === selectedDialog.id);
      if (index !== -1) {
        goToProject(index, "instant");
        cards[index].focus({ preventScroll: true });
      }
      selectedDialog.showModal();
    }

    updateDialogState();
  };

  const openCaseStudy = (trigger) => {
    const dialog = document.getElementById(trigger.dataset.dialog);
    const slug = projectSlugs.get(trigger.dataset.dialog);
    if (!(dialog instanceof HTMLDialogElement) || !slug) return;

    if (caseStudyFromUrl() !== dialog) {
      const url = new URL(window.location.href);
      url.hash = slug;
      window.history.pushState(
        { ...window.history.state, [historyKey]: { slug } },
        "",
        url
      );
    }
    syncCaseStudyFromUrl();
  };

  dialogTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      if (pointerMoved) {
        event.preventDefault();
        window.setTimeout(() => {
          pointerMoved = false;
        }, 0);
        return;
      }

      openCaseStudy(trigger);
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openCaseStudy(trigger);
    });
  });

  const videoGalleries = document.querySelectorAll("[data-video-gallery]");

  const resetVideoGallery = (gallery, selectedOption = gallery.querySelector("[data-video-select].active")) => {
    if (!selectedOption) return;

    const stage = gallery.querySelector(".case-media-stage");
    const launch = gallery.querySelector("[data-video-launch]");
    const poster = launch?.querySelector("img");
    const kicker = launch?.querySelector(".case-video-copy small");
    const title = launch?.querySelector(".case-video-copy strong");
    const description = launch?.querySelector(".case-video-copy > span");

    stage?.querySelector("iframe")?.remove();
    if (!launch) return;

    launch.hidden = false;
    launch.dataset.videoSrc = selectedOption.dataset.videoSrc || "";
    launch.setAttribute("aria-label", selectedOption.dataset.videoLabel || "Play project video");

    if (poster) {
      poster.src = selectedOption.dataset.videoPoster || "";
      poster.alt = selectedOption.dataset.videoAlt || "";
    }

    if (kicker) kicker.textContent = selectedOption.dataset.videoKicker || "";
    if (title) title.textContent = selectedOption.dataset.videoTitle || "";
    if (description) description.textContent = selectedOption.dataset.videoDescription || "";

    gallery.querySelectorAll("[data-video-select]").forEach((option) => {
      const isSelected = option === selectedOption;
      option.classList.toggle("active", isSelected);
      option.setAttribute("aria-pressed", String(isSelected));
    });
  };

  videoGalleries.forEach((gallery) => {
    const stage = gallery.querySelector(".case-media-stage");
    const launch = gallery.querySelector("[data-video-launch]");

    gallery.querySelectorAll("[data-video-select]").forEach((option) => {
      option.addEventListener("click", () => resetVideoGallery(gallery, option));
    });

    launch?.addEventListener("click", () => {
      if (!stage || !launch.dataset.videoSrc || stage.querySelector("iframe")) return;

      const frame = document.createElement("iframe");
      frame.src = launch.dataset.videoSrc;
      frame.title = launch.getAttribute("aria-label") || "Project video";
      frame.loading = "lazy";
      frame.referrerPolicy = "strict-origin-when-cross-origin";
      frame.allow = "autoplay; encrypted-media; picture-in-picture";
      frame.setAttribute("allowfullscreen", "");

      launch.hidden = true;
      stage.append(frame);
    });
  });

  const imageGalleries = document.querySelectorAll("[data-image-gallery]");

  imageGalleries.forEach((gallery) => {
    const stageImage = gallery.querySelector("[data-gallery-image]");
    const kicker = gallery.querySelector("[data-gallery-kicker]");
    const title = gallery.querySelector("[data-gallery-title]");
    const description = gallery.querySelector("[data-gallery-description]");

    gallery.querySelectorAll("[data-image-select]").forEach((option) => {
      option.addEventListener("click", () => {
        if (stageImage instanceof HTMLImageElement && option.dataset.imageSrc) {
          stageImage.src = option.dataset.imageSrc;
          stageImage.alt = option.dataset.imageAlt || "Project screen";
        }

        if (kicker) kicker.textContent = option.dataset.imageKicker || "";
        if (title) title.textContent = option.dataset.imageTitle || "";
        if (description) description.textContent = option.dataset.imageDescription || "";

        gallery.querySelectorAll("[data-image-select]").forEach((candidate) => {
          const isSelected = candidate === option;
          candidate.classList.toggle("active", isSelected);
          candidate.setAttribute("aria-pressed", String(isSelected));
        });
      });
    });
  });

  dialogs.forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      // A queued close event must not clear a newly selected or reopened project.
      if (dialog.open) return;
      dialog.querySelectorAll("[data-video-gallery]").forEach((gallery) => resetVideoGallery(gallery));
      updateDialogState();

      if (caseStudyFromUrl() !== dialog) return;

      const entry = window.history.state?.[historyKey];
      if (entry?.slug === projectSlugs.get(dialog.id)) {
        // Undo an entry created by a card click, preserving Back/Forward behavior.
        window.history.back();
      } else {
        // Closing a directly shared link must keep the visitor on the portfolio.
        const url = new URL(window.location.href);
        url.hash = "";
        const state = { ...window.history.state };
        delete state[historyKey];
        window.history.replaceState(state, "", url);
      }
    });
  });

  window.addEventListener("popstate", syncCaseStudyFromUrl);
  window.addEventListener("hashchange", syncCaseStudyFromUrl);
  syncCaseStudyFromUrl();
})();

