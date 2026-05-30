// ===== CONFIGURATION =====
const videoUrls = {
  geosis: "https://www.youtube.com/embed/iKM08kw_-Cc",
  sigislan: "https://www.youtube.com/embed/XpyUwttZT2M",
  marine: "https://www.youtube.com/embed/NNMoobb-7ZM",
};

// ===== VIDEO MODAL FUNCTIONS =====
function openVideoModal(projectKey) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");

  if (!modal || !iframe) {
    console.error("❌ Video modal elements not found");
    return;
  }

  const videoUrl = videoUrls[projectKey] || projectKey;
  iframe.src = videoUrl + "?autoplay=1&rel=0&modestbranding=1&controls=1";

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Focus management for accessibility
  const closeBtn = modal.querySelector("button");
  if (closeBtn) closeBtn.focus();
}

function closeVideoModal(event) {
  // Close if: clicked backdrop, close button, or ESC key
  if (!event || event.target.id === "videoModal" || event.target.closest("button")) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoFrame");

    if (iframe) iframe.src = ""; // Stop video
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  }
}

// Close modal with ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeVideoModal();
  }
});

// ===== CASE STUDY TOGGLE =====
function toggleCaseStudy(projectKey) {
  const element = document.getElementById("case-study-" + projectKey);
  const button = event?.currentTarget;

  if (element) {
    const isHidden = element.classList.contains("hidden");
    element.classList.toggle("hidden");

    // Update aria-expanded for accessibility
    if (button) {
      button.setAttribute("aria-expanded", !isHidden);
    }

    // Smooth scroll to case study if opening
    if (!isHidden) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
  }
}

// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ===== DYNAMIC YEAR =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== LAZY LOAD IMAGES (Optional Enhancement) =====
if ("loading" in HTMLImageElement.prototype) {
  // Browser supports native lazy loading
  document.querySelectorAll("img").forEach((img) => {
    img.setAttribute("loading", "lazy");
  });
}

// ===== CONSOLE LOG FOR DEBUG =====
console.log("✅ Portfolio loaded successfully!");
console.log("🎨 Designer: Rizky Ramdani");
console.log("🔗 rizky.getopurtunity.online");
