const config = {
  eyebrow: "Holiday Memories",
  title: "Merry Christmas, Sofia",
  subtitle: "A cozy collage of our favorite moments together.",
  signature: "With love, Rob",
  noteTitle: "Why this collage",
  noteBody:
    "Every photo is a little reminder that the best part of every season is you.",
  footerNote:
    "Here is to more cocoa nights, more adventures, and a hundred more Christmases together.",
};

const photos = [
  {
    src: "assets/photos/01.jpg",
    caption: "Snowy walk, warm hands.",
    date: "Dec 2023",
  },
  {
    src: "assets/photos/02.jpg",
    caption: "Our first holiday tree together.",
    date: "Dec 2022",
  },
  {
    src: "assets/photos/03.jpg",
    caption: "Cocoa night and a movie marathon.",
    date: "Jan 2023",
  },
  {
    src: "assets/photos/04.jpg",
    caption: "The night we laughed until midnight.",
    date: "Feb 2023",
  },
  {
    src: "assets/photos/05.jpg",
    caption: "That cozy cabin weekend.",
    date: "Mar 2023",
  },
  {
    src: "assets/photos/06.jpg",
    caption: "Matching scarves kind of day.",
    date: "Apr 2023",
  },
  {
    src: "assets/photos/07.jpg",
    caption: "City lights and your smile.",
    date: "May 2023",
  },
  {
    src: "assets/photos/08.jpg",
    caption: "The sunset we never wanted to end.",
    date: "Jun 2023",
  },
  {
    src: "assets/photos/09.jpg",
    caption: "Picnic blanket, endless conversations.",
    date: "Jul 2023",
  },
  {
    src: "assets/photos/10.jpg",
    caption: "Our little weekend getaway.",
    date: "Aug 2023",
  },
  {
    src: "assets/photos/11.jpg",
    caption: "That rainy day cafe stop.",
    date: "Sep 2023",
  },
  {
    src: "assets/photos/12.jpg",
    caption: "Favorite sweater weather moment.",
    date: "Oct 2023",
  },
];

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

const placeholderSvg = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="420" height="320">
     <defs>
       <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
         <stop offset="0%" stop-color="#f2d7c6"/>
         <stop offset="100%" stop-color="#e8bfa0"/>
       </linearGradient>
     </defs>
     <rect width="100%" height="100%" fill="url(#g)"/>
     <text x="50%" y="50%" font-size="22" text-anchor="middle" fill="#6b4033" font-family="Arial, sans-serif">
       Add your photo
     </text>
   </svg>`
);

const placeholderSrc = `data:image/svg+xml;utf8,${placeholderSvg}`;

const byId = (id) => document.getElementById(id);

const setText = (id, value) => {
  const el = byId(id);
  if (el) {
    el.textContent = value;
  }
};

const renderCollage = () => {
  const grid = byId("collageGrid");
  if (!grid) {
    return;
  }

  const fragment = document.createDocumentFragment();

  photos.forEach((photo, index) => {
    const figure = document.createElement("figure");
    figure.className = "polaroid";

    const tilt = (index % 2 === 0 ? -1 : 1) * (1.5 + (index % 3) * 0.6);
    const raise = (index % 3) * 4;
    figure.style.setProperty("--tilt", `${tilt}deg`);
    figure.style.setProperty("--raise", `${raise * -1}px`);

    const img = document.createElement("img");
    img.src = photo.src;
    img.alt = photo.caption;
    img.loading = "lazy";
    img.addEventListener("error", () => {
      img.src = placeholderSrc;
    });

    const caption = document.createElement("figcaption");
    caption.textContent = photo.caption;

    const date = document.createElement("span");
    date.className = "date";
    date.textContent = photo.date;

    caption.appendChild(date);
    figure.appendChild(img);
    figure.appendChild(caption);
    fragment.appendChild(figure);
  });

  grid.appendChild(fragment);
};

const renderHighlights = () => {
  const grid = byId("highlightGrid");
  if (!grid) {
    return;
  }

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

const applyConfig = () => {
  setText("eyebrow", config.eyebrow);
  setText("title", config.title);
  setText("subtitle", config.subtitle);
  setText("signature", config.signature);
  setText("noteTitle", config.noteTitle);
  setText("noteBody", config.noteBody);
  setText("footerNote", config.footerNote);
};

const init = () => {
  applyConfig();
  renderCollage();
  renderHighlights();
};

document.addEventListener("DOMContentLoaded", init);
