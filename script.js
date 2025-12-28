const config = {
  eyebrow: "Memory Collage",
  title: "For Sofia",
  subtitle: "A cozy collage of our favorite moments together.",
  noteTitle: "Why this collage",
  noteBody:
    "Every photo is a little reminder that the best part of every season is you.",
  footerNote:
    "Made with love",
};

// Rotating quotes
const quotes = [
  "In every moment captured, there's a thousand moments cherished.",
  "The best moments are the ones we share together.",
  "Every picture tells a story, and ours is my favorite.",
  "Together is my favorite place to be.",
  "Life's greatest adventure is found in the simplest moments with you.",
  "You're the reason every day feels like a celebration.",
  "In a world full of moments, ours are the ones that matter most.",
  "Every memory with you is a treasure I hold close to my heart.",
  "With you, every season becomes magical.",
  "Our story is written in photographs and painted with love.",
  "The best days are the ones spent making memories with you.",
  "Time spent with you is my favorite time."
];

let currentQuoteIndex = 0;

// Get all photo files from the assets/photos directory
const photoFiles = [
  "IMG-20250727-WA0000.jpg",
  "IMG-20250727-WA0001.jpg",
  "IMG-20250727-WA0002.jpg",
  "IMG-20250727-WA0003.jpg",
  "IMG-20250727-WA0004.jpg",
  "IMG-20250727-WA0005.jpg",
  "IMG-20250727-WA0006.jpg",
  "IMG-20250727-WA0007.jpg",
  "IMG-20250727-WA0008.jpg",
  "IMG-20250727-WA0009.jpg",
  "IMG-20250727-WA0010.jpg",
  "IMG-20250727-WA0011.jpg",
  "IMG-20250727-WA0012.jpg",
  "IMG-20250727-WA0013.jpg",
  "IMG-20250727-WA0014.jpg",
  "IMG-20250727-WA0015.jpg",
  "IMG-20250727-WA0016.jpg",
  "IMG-20250727-WA0017.jpg",
  "IMG-20250727-WA0018.jpg",
  "IMG-20250727-WA0019.jpg",
  "IMG-20250727-WA0020.jpg",
  "IMG-20250727-WA0021.jpg",
  "IMG-20250727-WA0022.jpg",
  "IMG-20250727-WA0023.jpg",
  "IMG-20250727-WA0024.jpg",
  "IMG-20250727-WA0025.jpg",
  "IMG-20250727-WA0026.jpg",
  "IMG-20250727-WA0027.jpg",
  "IMG-20250727-WA0028.jpg",
  "IMG-20250727-WA0029.jpg",
  "IMG-20250727-WA0030.jpg",
  "IMG-20250727-WA0031.jpg",
  "IMG-20250727-WA0032.jpg",
  "IMG-20250727-WA0033.jpg",
  "IMG-20250727-WA0034.jpg",
  "IMG-20250727-WA0035.jpg",
  "IMG-20250727-WA0036.jpg",
  "IMG-20250727-WA0037.jpg",
  "IMG-20250727-WA0038.jpg",
  "IMG-20250727-WA0039.jpg",
  "IMG-20250727-WA0040.jpg",
  "IMG-20250727-WA0041.jpg",
  "IMG-20250727-WA0042.jpg",
  "IMG-20250727-WA0043.jpg",
  "IMG-20250727-WA0044.jpg",
  "IMG-20250727-WA0045.jpg",
  "IMG-20250728-WA0006.jpg",
  "IMG-20250728-WA0007.jpg",
  "IMG-20250728-WA0008.jpg",
  "IMG-20250728-WA0009.jpg",
  "IMG-20250728-WA0010.jpg",
  "IMG-20250728-WA0011.jpg",
  "IMG-20250728-WA0012.jpg",
  "IMG-20250728-WA0013.jpg",
  "IMG-20250728-WA0014.jpg",
  "IMG-20250728-WA0015.jpg",
  "IMG-20250728-WA0016.jpg",
  "IMG-20250728-WA0017.jpg",
  "IMG-20250728-WA0018.jpg",
  "IMG-20250728-WA0019.jpg",
  "IMG-20250728-WA0020.jpg",
  "IMG-20250728-WA0021.jpg",
  "IMG-20250728-WA0022.jpg",
  "IMG-20250728-WA0023.jpg",
  "IMG-20250728-WA0024.jpg",
  "IMG-20250728-WA0025.jpg",
  "IMG-20250728-WA0026.jpg",
  "IMG-20250728-WA0027.jpg",
  "IMG-20250728-WA0028.jpg",
  "IMG-20250728-WA0029.jpg",
  "IMG-20250728-WA0030.jpg",
  "IMG-20250728-WA0031.jpg",
  "IMG-20250728-WA0032.jpg",
  "IMG-20250728-WA0033.jpg",
  "IMG-20250728-WA0034.jpg",
  "IMG-20250728-WA0035.jpg",
  "IMG-20250728-WA0036.jpg",
  "IMG-20250728-WA0037.jpg",
  "IMG-20251216-WA0000.jpg",
  "IMG-20251216-WA0001.jpg",
  "IMG-20251216-WA0002.jpg",
  "IMG-20251216-WA0003.jpg",
  "IMG-20251216-WA0004.jpg",
  "IMG-20251216-WA0005.jpg",
  "IMG-20251216-WA0006.jpg",
  "IMG-20251216-WA0007.jpg",
  "IMG-20251216-WA0008.jpg",
  "IMG-20251216-WA0009.jpg",
  "IMG-20251216-WA0010.jpg",
  "IMG-20251216-WA0012.jpg",
  "IMG-20251216-WA0013.jpg",
  "IMG-20251216-WA0014.jpg",
  "IMG-20251216-WA0015.jpg",
  "IMG-20251216-WA0016.jpg",
  "IMG-20251216-WA0017.jpg",
  "IMG-20251216-WA0018.jpg",
  "IMG-20251216-WA0019.jpg",
  "IMG-20251216-WA0020.jpg",
  "IMG-20251216-WA0021.jpg",
  "IMG-20251216-WA0023.jpg",
  "IMG-20251216-WA0024.jpg",
  "IMG-20251216-WA0025.jpg",
  "IMG-20251216-WA0026.jpg",
  "IMG-20251216-WA0027.jpg",
  "IMG-20251216-WA0028.jpg",
  "IMG-20251216-WA0029.jpg",
  "IMG-20251216-WA0030.jpg",
  "IMG-20251216-WA0031.jpg",
  "IMG-20251216-WA0032.jpg",
  "IMG-20251216-WA0033.jpg",
  "IMG-20251216-WA0034.jpg",
];

// Sweet captions to randomly assign
const sweetCaptions = [
  "Us being us 💛",
  "Golden moment",
  "This smile though",
  "Heart so full",
  "My favorite human",
  "Love this one",
  "Pure happiness",
  "Making memories",
  "Together is my favorite",
  "Can't stop smiling",
  "Best day ever",
  "You + Me = ❤️",
  "Sunshine vibes",
  "Forever mood",
  "Living our story",
  "Sweet moments",
  "My happy place",
  "Adventures with you",
  "Cozy times",
  "Simply perfect",
];

// Generate photo data from filenames
const generatePhotoData = (filename, index) => {
  // Extract date from filename (format: IMG-YYYYMMDD-WA####.jpg)
  const dateMatch = filename.match(/IMG-(\d{8})-/);
  const caption = sweetCaptions[index % sweetCaptions.length];
  
  if (dateMatch) {
    const dateStr = dateMatch[1];
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[parseInt(month) - 1];
    const monthShort = monthName.substring(0, 3);
    return {
      src: `assets/photos/${filename}`,
      caption: caption,
      date: `${monthShort} ${day}, ${year}`,
      monthYear: `${monthName} ${year}`,
      sortDate: new Date(`${year}-${month}-${day}`),
      tags: [],
      note: "",
      isFavorite: false,
      id: filename,
    };
  }
  return {
    src: `assets/photos/${filename}`,
    caption: caption,
    date: "2025",
    monthYear: "2025",
    sortDate: new Date(),
    tags: [],
    note: "",
    isFavorite: false,
    id: filename,
  };
};

let photos = photoFiles.map((file, index) => generatePhotoData(file, index));
let filteredPhotos = [...photos];
let favoritesOnly = false;
let sortNewestFirst = true;
let sortBySeason = false;
let currentSpotlightIndex = 0;
let searchQuery = "";
let currentModalPhoto = null;
let searchTimeout = null;
let deletedPhotosStack = []; // For undo functionality
let slideshowInterval = null;
let isSlideshowPlaying = false;

const highlights = [
  {
    title: "First holiday together",
    body: "A tiny tree, a big blanket, and a night that felt like magic.",
  },
  {
    title: "Favorite tradition",
    body: "Hot cocoa, a handwritten note, and a walk with holiday lights.",
  },
  {
    title: "Looking ahead",
    body: "New adventures, new photos, and more reasons to celebrate us.",
  },
];

const byId = (id) => document.getElementById(id);

const setText = (id, value) => {
  const el = byId(id);
  if (el) {
    el.textContent = value;
  }
};

// Debounce function for search input
const debounce = (func, wait) => {
  return (...args) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Toast notification system
const showToast = (message, type = "success", duration = 3000) => {
  // Remove existing toast if any
  const existingToast = document.querySelector(".toast");
  if (existingToast) {
    existingToast.remove();
  }

  const toast = document.createElement("div");
  toast.className = `toast toast--${type}`;

  const icons = {
    success: "✓",
    error: "✕",
    info: "ℹ",
    warning: "⚠"
  };

  toast.innerHTML = `
    <span class="toast__icon">${icons[type] || icons.info}</span>
    <span class="toast__message">${message}</span>
  `;

  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("toast--visible");
  });

  // Auto remove
  setTimeout(() => {
    toast.classList.remove("toast--visible");
    setTimeout(() => toast.remove(), 300);
  }, duration);
};

// Get current modal photo index
const getCurrentModalIndex = () => {
  if (!currentModalPhoto) return -1;
  return filteredPhotos.findIndex((p) => p.id === currentModalPhoto.id);
};

// Navigate to next/previous photo in modal
const navigateModal = (direction) => {
  const currentIndex = getCurrentModalIndex();
  if (currentIndex === -1) return;

  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = filteredPhotos.length - 1;
  if (newIndex >= filteredPhotos.length) newIndex = 0;

  openModal(filteredPhotos[newIndex]);
};

// Slideshow functions
const startSlideshow = () => {
  if (filteredPhotos.length === 0) return;

  isSlideshowPlaying = true;
  const slideshowBtn = byId("slideshowBtn");
  if (slideshowBtn) {
    slideshowBtn.innerHTML = "⏸ Pause";
    slideshowBtn.classList.add("is-playing");
  }

  // Open first photo if modal not open
  if (!currentModalPhoto) {
    openModal(filteredPhotos[0]);
  }

  slideshowInterval = setInterval(() => {
    navigateModal(1);
  }, 3000);

  showToast("Slideshow started", "info");
};

const stopSlideshow = () => {
  isSlideshowPlaying = false;
  const slideshowBtn = byId("slideshowBtn");
  if (slideshowBtn) {
    slideshowBtn.innerHTML = "▶ Slideshow";
    slideshowBtn.classList.remove("is-playing");
  }

  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
};

const toggleSlideshow = () => {
  if (isSlideshowPlaying) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
};

// Undo delete functionality
const undoDelete = () => {
  if (deletedPhotosStack.length === 0) return;

  const restored = deletedPhotosStack.pop();
  photos.splice(restored.index, 0, restored.photo);
  saveData();
  filterAndSortPhotos();
  renderGallery();
  renderSpotlight();
  updateStats();

  showToast("Photo restored!", "success");

  // Hide undo button if stack is empty
  if (deletedPhotosStack.length === 0) {
    const undoBtn = byId("undoDeleteBtn");
    if (undoBtn) undoBtn.hidden = true;
  }
};

// File validation
const validateFile = (file) => {
  const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
  const maxSize = 10 * 1024 * 1024; // 10MB

  if (!validTypes.includes(file.type)) {
    showToast(`Invalid file type: ${file.name}. Please use JPG, PNG, GIF, or WebP.`, "error");
    return false;
  }

  if (file.size > maxSize) {
    showToast(`File too large: ${file.name}. Maximum size is 10MB.`, "error");
    return false;
  }

  return true;
};

// Load saved data from localStorage
const loadSavedData = () => {
  try {
    const saved = localStorage.getItem("sofiaPhotosData");
    if (saved) {
      const savedData = JSON.parse(saved);
      // Merge saved data with photos
      photos = photos.map((photo) => {
        const saved = savedData.find((p) => p.id === photo.id);
        return saved ? { ...photo, ...saved } : photo;
      });
    }
  } catch (e) {
    console.error("Error loading saved data:", e);
  }
};

// Save data to localStorage
const saveData = () => {
  try {
    localStorage.setItem("sofiaPhotosData", JSON.stringify(photos));
  } catch (e) {
    console.error("Error saving data:", e);
  }
};

// Get season from date
const getSeason = (date) => {
  const month = date.getMonth();
  if (month >= 2 && month <= 4) return { name: "Spring", order: 0, emoji: "🌸" };
  if (month >= 5 && month <= 7) return { name: "Summer", order: 1, emoji: "☀️" };
  if (month >= 8 && month <= 10) return { name: "Fall", order: 2, emoji: "🍂" };
  return { name: "Winter", order: 3, emoji: "❄️" };
};

// Filter and sort photos
const filterAndSortPhotos = () => {
  filteredPhotos = [...photos];

  // Filter by favorites
  if (favoritesOnly) {
    filteredPhotos = filteredPhotos.filter((p) => p.isFavorite);
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredPhotos = filteredPhotos.filter(
      (p) =>
        p.caption.toLowerCase().includes(query) ||
        p.date.toLowerCase().includes(query) ||
        p.note.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query))
    );
  }

  // Sort by season or date
  if (sortBySeason) {
    filteredPhotos.sort((a, b) => {
      const seasonA = getSeason(a.sortDate);
      const seasonB = getSeason(b.sortDate);
      if (seasonA.order !== seasonB.order) {
        return seasonA.order - seasonB.order;
      }
      return b.sortDate - a.sortDate;
    });
  } else if (sortNewestFirst) {
    filteredPhotos.sort((a, b) => b.sortDate - a.sortDate);
  } else {
    filteredPhotos.sort((a, b) => a.sortDate - b.sortDate);
  }
};

// Render gallery grouped by month/year
const renderGallery = () => {
  const grid = byId("galleryGrid");
  const empty = byId("galleryEmpty");
  if (!grid) return;

  grid.innerHTML = "";

  if (filteredPhotos.length === 0) {
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;

  // Group photos by season or monthYear
  const grouped = {};
  filteredPhotos.forEach((photo) => {
    let key;
    if (sortBySeason) {
      const season = getSeason(photo.sortDate);
      key = `${season.emoji} ${season.name}`;
    } else {
      key = photo.monthYear || "Other";
    }
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(photo);
  });

  const fragment = document.createDocumentFragment();
  let cardIndex = 0;

  // Render each group
  Object.entries(grouped).forEach(([groupName, photos]) => {
    // Group header
    const header = document.createElement("div");
    header.className = "gallery-month-header";
    header.innerHTML = `
      <span class="gallery-month-header__icon">${sortBySeason ? "" : "📅"}</span>
      <h3 class="gallery-month-header__title">${groupName}</h3>
      <span class="gallery-month-header__count">${photos.length} memories</span>
    `;
    fragment.appendChild(header);

    // Photos grid for this month
    const monthGrid = document.createElement("div");
    monthGrid.className = "gallery-month-grid";

    photos.forEach((photo) => {
      const card = document.createElement("article");
      card.className = "memory-card";
      card.style.animationDelay = `${cardIndex * 0.03}s`;
      cardIndex++;

      const media = document.createElement("div");
      media.className = "memory-card__media";

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.caption;
      img.loading = "lazy";

      // Add heart button
      const heartBtn = document.createElement("button");
      heartBtn.className = "memory-card__heart";
      heartBtn.innerHTML = "♥";
      heartBtn.setAttribute("aria-label", "Toggle favorite");
      if (photo.isFavorite) {
        heartBtn.classList.add("is-active");
      }

      heartBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        photo.isFavorite = !photo.isFavorite;
        heartBtn.classList.toggle("is-active", photo.isFavorite);
        saveData();
        updateStats();
      });

      const body = document.createElement("div");
      body.className = "memory-card__body";

      const date = document.createElement("p");
      date.className = "memory-card__date";
      date.textContent = photo.date;

      body.appendChild(date);

      // Only show note if it exists
      if (photo.note && photo.note.trim()) {
        const note = document.createElement("p");
        note.className = "memory-card__title";
        note.textContent = photo.note;
        body.appendChild(note);
      }

      media.appendChild(img);
      media.appendChild(heartBtn);
      card.appendChild(media);
      card.appendChild(body);

      card.addEventListener("click", () => openModal(photo));
      monthGrid.appendChild(card);
    });

    fragment.appendChild(monthGrid);
  });

  grid.appendChild(fragment);
};

// Render spotlight
const renderSpotlight = () => {
  if (filteredPhotos.length === 0) return;

  const photo = filteredPhotos[currentSpotlightIndex % filteredPhotos.length];
  if (!photo) return;

  const img = byId("spotlightImage");
  const caption = byId("spotlightCaption");
  const date = byId("spotlightDate");
  const note = byId("spotlightNote");
  const tags = byId("spotlightTags");
  const likeBtn = byId("spotlightLike");

  if (img) img.src = photo.src;
  if (caption) caption.textContent = photo.caption;
  if (date) date.textContent = photo.date;
  if (note) note.textContent = photo.note || "Tap a photo to add a note.";
  if (tags) {
    tags.innerHTML = "";
    if (photo.tags && photo.tags.length > 0) {
      photo.tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.className = "tag";
        tagEl.textContent = tag;
        tags.appendChild(tagEl);
      });
    }
  }
  if (likeBtn) {
    likeBtn.classList.toggle("is-active", photo.isFavorite);
    likeBtn.setAttribute("aria-pressed", photo.isFavorite);
  }
};

// Open modal
const openModal = (photo) => {
  const modal = byId("photoModal");
  if (!modal) return;

  currentModalPhoto = photo;

  const img = byId("modalImage");
  const caption = byId("modalCaption");
  const date = byId("modalDate");
  const note = byId("modalNote");
  const tags = byId("modalTags");
  const favoriteBtn = byId("modalFavorite");

  if (img) img.src = photo.src;
  if (caption) caption.textContent = photo.caption;
  if (date) date.textContent = photo.date;
  if (note) note.value = photo.note || "";
  if (tags) {
    tags.innerHTML = "";
    if (photo.tags && photo.tags.length > 0) {
      photo.tags.forEach((tag) => {
        const tagEl = document.createElement("span");
        tagEl.className = "tag";
        tagEl.textContent = tag;
        tags.appendChild(tagEl);
      });
    }
  }
  if (favoriteBtn) {
    favoriteBtn.textContent = photo.isFavorite ? "♥ Favorited" : "♥ Favorite";
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
};

// Close modal
const closeModal = () => {
  const modal = byId("photoModal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  currentModalPhoto = null;
  stopSlideshow();
};

// Update stats
const updateStats = () => {
  const total = byId("statTotal");
  const favorites = byId("statFavorites");
  const moments = byId("statMoments");
  const collections = byId("statCollections");
  const days = byId("statDays");
  const totalPhotosCount = byId("totalPhotosCount");

  if (total) total.textContent = photos.length;
  if (favorites) {
    const favCount = photos.filter((p) => p.isFavorite).length;
    favorites.textContent = favCount;
  }
  if (moments) moments.textContent = photos.length;
  if (collections) collections.textContent = Math.ceil(photos.length / 12);
  if (totalPhotosCount) totalPhotosCount.textContent = photos.length;

  // Calculate days together since April 14, 2025
  if (days) {
    const startDate = new Date(2025, 3, 14); // Month is 0-indexed, so 3 = April
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    days.textContent = diffDays;
  }
};

// Render highlights
const renderHighlights = () => {
  const grid = byId("highlightGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const fragment = document.createDocumentFragment();

  highlights.forEach((item) => {
    const card = document.createElement("article");
    card.className = "highlight-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const body = document.createElement("p");
    body.textContent = item.body;

    card.appendChild(title);
    card.appendChild(body);
    fragment.appendChild(card);
  });

  grid.appendChild(fragment);
};

// Apply config
const applyConfig = () => {
  setText("eyebrow", config.eyebrow);
  setText("title", config.title);
  setText("subtitle", config.subtitle);
  setText("signature", config.signature);
  setText("noteTitle", config.noteTitle);
  setText("noteBody", config.noteBody);
  setText("footerNote", config.footerNote);
};

// Event listeners
const setupEventListeners = () => {
  // Toggle favorites
  const toggleFavorites = byId("toggleFavorites");
  if (toggleFavorites) {
    toggleFavorites.addEventListener("click", () => {
      favoritesOnly = !favoritesOnly;
      toggleFavorites.classList.toggle("is-active", favoritesOnly);
      toggleFavorites.setAttribute("aria-pressed", favoritesOnly);
      filterAndSortPhotos();
      renderGallery();
      renderSpotlight();
    });
  }

  // Toggle view (placeholder for moodboard view)
  const toggleView = byId("toggleView");
  if (toggleView) {
    toggleView.addEventListener("click", () => {
      document.body.classList.toggle("view-moodboard");
      toggleView.textContent = document.body.classList.contains("view-moodboard")
        ? "Grid view"
        : "Moodboard view";
    });
  }

  // Shuffle spotlight
  const shuffleSpotlight = byId("shuffleSpotlight");
  if (shuffleSpotlight) {
    shuffleSpotlight.addEventListener("click", () => {
      if (filteredPhotos.length > 0) {
        currentSpotlightIndex = Math.floor(Math.random() * filteredPhotos.length);
        renderSpotlight();
      }
    });
  }

  // Spotlight open
  const spotlightOpen = byId("spotlightOpen");
  if (spotlightOpen) {
    spotlightOpen.addEventListener("click", () => {
      if (filteredPhotos.length > 0) {
        const photo = filteredPhotos[currentSpotlightIndex % filteredPhotos.length];
        if (photo) openModal(photo);
      }
    });
  }

  // Spotlight like
  const spotlightLike = byId("spotlightLike");
  if (spotlightLike) {
    spotlightLike.addEventListener("click", () => {
      if (filteredPhotos.length > 0) {
        const photo = filteredPhotos[currentSpotlightIndex % filteredPhotos.length];
        if (photo) {
          photo.isFavorite = !photo.isFavorite;
          saveData();
          renderSpotlight();
          updateStats();
          renderGallery();
        }
      }
    });
  }

  // Search with debouncing
  const searchInput = byId("searchInput");
  if (searchInput) {
    const debouncedSearch = debounce(() => {
      filterAndSortPhotos();
      renderGallery();
      renderSpotlight();
    }, 300);

    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      debouncedSearch();
    });
  }

  // Toggle sort
  const toggleSort = byId("toggleSort");
  if (toggleSort) {
    toggleSort.addEventListener("click", () => {
      if (!sortBySeason) {
        sortNewestFirst = !sortNewestFirst;
        toggleSort.textContent = sortNewestFirst ? "↓ Newest" : "↑ Oldest";
        filterAndSortPhotos();
        renderGallery();
        renderSpotlight();
      }
    });
  }

  // Toggle season sort
  const toggleSeason = byId("toggleSeason");
  if (toggleSeason) {
    toggleSeason.addEventListener("click", () => {
      sortBySeason = !sortBySeason;
      toggleSeason.classList.toggle("is-active", sortBySeason);
      if (sortBySeason && toggleSort) {
        toggleSort.textContent = "↓ Newest";
        sortNewestFirst = true;
      }
      filterAndSortPhotos();
      renderGallery();
      renderSpotlight();
    });
  }

  // Clear filters
  const clearFilters = byId("clearFilters");
  if (clearFilters) {
    clearFilters.addEventListener("click", () => {
      favoritesOnly = false;
      searchQuery = "";
      sortBySeason = false;
      if (toggleFavorites) {
        toggleFavorites.classList.remove("is-active");
        toggleFavorites.setAttribute("aria-pressed", "false");
      }
      if (toggleSeason) {
        toggleSeason.classList.remove("is-active");
      }
      if (searchInput) searchInput.value = "";
      filterAndSortPhotos();
      renderGallery();
      renderSpotlight();
    });
  }

  // Modal close
  const closeModalBtn = byId("closeModal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  const modalOverlay = document.querySelector("[data-modal-close]");
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
  }

  // Modal favorite
  const modalFavorite = byId("modalFavorite");
  if (modalFavorite) {
    modalFavorite.addEventListener("click", () => {
      if (currentModalPhoto) {
        const photoIndex = photos.findIndex((p) => p.id === currentModalPhoto.id);
        if (photoIndex !== -1) {
          photos[photoIndex].isFavorite = !photos[photoIndex].isFavorite;
          saveData();
          updateStats();
          filterAndSortPhotos();
          renderGallery();
          renderSpotlight();
          // Update button text
          modalFavorite.textContent = photos[photoIndex].isFavorite
            ? "♥ Favorited"
            : "♥ Favorite";
        }
      }
    });
  }

  // Modal delete with undo support
  const modalDelete = byId("modalDelete");
  if (modalDelete) {
    modalDelete.addEventListener("click", () => {
      if (currentModalPhoto) {
        // Confirm deletion
        if (confirm("Delete this photo? You can undo this action.")) {
          // Remove from photos array
          const photoIndex = photos.findIndex((p) => p.id === currentModalPhoto.id);
          if (photoIndex !== -1) {
            // Store for undo
            deletedPhotosStack.push({
              photo: { ...photos[photoIndex] },
              index: photoIndex
            });

            photos.splice(photoIndex, 1);
            saveData();
            closeModal();
            filterAndSortPhotos();
            renderGallery();
            renderSpotlight();
            updateStats();

            // Show undo button
            const undoBtn = byId("undoDeleteBtn");
            if (undoBtn) undoBtn.hidden = false;

            showToast("Photo deleted. Click Undo to restore.", "info", 5000);
          }
        }
      }
    });
  }

  // Photo upload with validation
  const photoUpload = byId("photoUpload");
  if (photoUpload) {
    photoUpload.addEventListener("change", (e) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        let uploadCount = 0;
        Array.from(files).forEach((file) => {
          // Validate file
          if (!validateFile(file)) return;

          const reader = new FileReader();
          reader.onload = (event) => {
            const now = new Date();
            const monthNames = [
              "January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
            ];
            const newPhoto = {
              src: event.target.result,
              caption: sweetCaptions[Math.floor(Math.random() * sweetCaptions.length)],
              date: `${monthNames[now.getMonth()].substring(0, 3)} ${now.getDate()}, ${now.getFullYear()}`,
              monthYear: `${monthNames[now.getMonth()]} ${now.getFullYear()}`,
              sortDate: now,
              tags: [],
              note: "",
              isFavorite: false,
              id: `upload-${Date.now()}-${Math.random()}`,
            };

            photos.unshift(newPhoto);
            saveData();
            updateStats();
            filterAndSortPhotos();
            renderGallery();
            renderSpotlight();
            uploadCount++;

            if (uploadCount === 1) {
              showToast("Photo uploaded successfully!", "success");
            } else {
              showToast(`${uploadCount} photos uploaded!`, "success");
            }
          };
          reader.onerror = () => {
            showToast(`Failed to read file: ${file.name}`, "error");
          };
          reader.readAsDataURL(file);
        });
        // Clear input so same file can be selected again if needed
        photoUpload.value = "";
      }
    });
  }

  // Quote refresh button
  const refreshQuote = byId("refreshQuote");
  if (refreshQuote) {
    refreshQuote.addEventListener("click", () => {
      rotateQuote();
    });
  }

  // Slideshow button
  const slideshowBtn = byId("slideshowBtn");
  if (slideshowBtn) {
    slideshowBtn.addEventListener("click", toggleSlideshow);
  }

  // Undo delete button
  const undoDeleteBtn = byId("undoDeleteBtn");
  if (undoDeleteBtn) {
    undoDeleteBtn.addEventListener("click", undoDelete);
  }

  // Modal navigation buttons
  const prevPhotoBtn = byId("prevPhoto");
  const nextPhotoBtn = byId("nextPhoto");
  if (prevPhotoBtn) {
    prevPhotoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateModal(-1);
    });
  }
  if (nextPhotoBtn) {
    nextPhotoBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      navigateModal(1);
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const modal = byId("photoModal");
    const isModalOpen = modal && modal.classList.contains("is-open");

    // Escape key - close modal
    if (e.key === "Escape" && isModalOpen) {
      closeModal();
      return;
    }

    // Arrow keys - navigate photos in modal
    if (isModalOpen) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigateModal(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigateModal(1);
      }
    }

    // Spacebar - toggle slideshow (when modal is open)
    if (e.key === " " && isModalOpen) {
      e.preventDefault();
      toggleSlideshow();
    }
  });

  // Save note with toast feedback
  const saveNote = byId("saveNote");
  if (saveNote) {
    // Remove existing listener and add new one with toast
    saveNote.replaceWith(saveNote.cloneNode(true));
    const newSaveNote = byId("saveNote");
    newSaveNote.addEventListener("click", () => {
      const noteInput = byId("modalNote");
      if (currentModalPhoto && noteInput) {
        const photoIndex = photos.findIndex((p) => p.id === currentModalPhoto.id);
        if (photoIndex !== -1) {
          photos[photoIndex].note = noteInput.value;
          saveData();
          closeModal();
          filterAndSortPhotos();
          renderSpotlight();
          renderGallery();
          showToast("Note saved!", "success");
        }
      }
    });
  }
};

// Rotate quote function
const rotateQuote = () => {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  const quoteElement = byId("rotatingQuote");
  if (quoteElement) {
    quoteElement.style.opacity = "0";
    setTimeout(() => {
      quoteElement.textContent = quotes[currentQuoteIndex];
      quoteElement.style.opacity = "1";
    }, 200);
  }
};

// Gift Opening Animation
const initGiftScreen = () => {
  const giftScreen = byId("giftScreen");
  const appWrapper = byId("appWrapper");
  const openGiftBtn = byId("openGift");
  const giftBox = byId("giftBox");

  // Check if already opened this session
  if (sessionStorage.getItem("giftOpened") === "true") {
    if (giftScreen) giftScreen.style.display = "none";
    if (appWrapper) appWrapper.classList.add("is-visible");
    return;
  }

  // Handle gift opening
  const openGift = () => {
    if (giftScreen) {
      giftScreen.classList.add("is-opening");
      
      setTimeout(() => {
        giftScreen.classList.add("is-opened");
        if (appWrapper) appWrapper.classList.add("is-visible");
        sessionStorage.setItem("giftOpened", "true");
      }, 800);
    }
  };

  if (openGiftBtn) {
    openGiftBtn.addEventListener("click", openGift);
  }
  
  if (giftBox) {
    giftBox.addEventListener("click", openGift);
  }
};

// Theme Management
const initThemeSwitcher = () => {
  const themeToggle = byId("themeToggle");
  const themeDropdown = byId("themeDropdown");
  const themeOptions = document.querySelectorAll(".theme-option");

  // Load saved theme
  const savedTheme = localStorage.getItem("selectedTheme") || "soft-pink";
  document.body.setAttribute("data-theme", savedTheme);
  updateActiveTheme(savedTheme);

  // Toggle dropdown
  if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      themeDropdown.hidden = !themeDropdown.hidden;
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!themeDropdown.contains(e.target) && e.target !== themeToggle) {
      themeDropdown.hidden = true;
    }
  });

  // Theme selection
  themeOptions.forEach(option => {
    option.addEventListener("click", () => {
      const theme = option.getAttribute("data-theme");
      document.body.setAttribute("data-theme", theme);
      localStorage.setItem("selectedTheme", theme);
      updateActiveTheme(theme);
      themeDropdown.hidden = true;
    });
  });
};

const updateActiveTheme = (theme) => {
  const themeOptions = document.querySelectorAll(".theme-option");
  themeOptions.forEach(option => {
    if (option.getAttribute("data-theme") === theme) {
      option.classList.add("active");
    } else {
      option.classList.remove("active");
    }
  });
};

// Initialize
const init = () => {
  initGiftScreen();
  initThemeSwitcher();
  loadSavedData();
  applyConfig();
  filterAndSortPhotos();
  renderGallery();
  renderSpotlight();
  renderHighlights();
  updateStats();
  setupEventListeners();
};

document.addEventListener("DOMContentLoaded", init);
