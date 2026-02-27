/**
 * Crumpled paper personal site — custom cursor = your season (sapling / leaf / fall leaf / branch / your pic).
 */

(function () {
  const body = document.body;
  const cursorWrap = document.getElementById("cursor-season-wrap");

  if (!cursorWrap) return;

  let mouseX = 0, mouseY = 0;
  let raf = null;
  const SEASON_STORAGE = "harnoor_season";
  var isTouchDevice = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

  function getStoredSeason() {
    try {
      var s = localStorage.getItem(SEASON_STORAGE);
      if (["spring", "summer", "fall", "winter", "fashion"].indexOf(s) >= 0) return s;
    } catch (e) {}
    return "summer";
  }

  // ---------- SPRING ----------
  function springSapling() {
    var vb = "0 0 28 34";
    var soil = "M8 32 Q6 30 10 28 Q14 30 18 28 Q22 30 20 32 Q14 34 8 32";
    var stem = "M14 30 Q15 22 14 14 Q13 8 12 6";
    var leafL = "M12 6 Q6 4 4 8 Q6 12 10 10 Q12 8 12 6";
    var leafR = "M12 6 Q16 4 20 6 Q22 10 18 12 Q14 10 12 6";
    return '<svg class="cursor-season-svg" viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg"><path d="' + soil + '" fill="#bcaa88" stroke="#8d6e63" stroke-width="0.5"/><path d="' + stem + '" stroke="#4caf50" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="' + leafL + '" fill="#66bb6a" stroke="#2e7d32" stroke-width="0.5"/><path d="' + leafR + '" fill="#5cb85c" stroke="#2e7d32" stroke-width="0.5"/></svg>';
  }
  function springCherryBlossom() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="-3 -3 50 50" class="cursor-season-svg">
    <g transform="translate(22,22)">
      <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#f8bbd0" stroke="#f48fb1" stroke-width="0.9" transform="rotate(0)"/>
      <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#f8bbd0" stroke="#f48fb1" stroke-width="0.9" transform="rotate(72)"/>
      <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#fce4ec" stroke="#f48fb1" stroke-width="0.9" transform="rotate(144)"/>
      <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#fce4ec" stroke="#f48fb1" stroke-width="0.9" transform="rotate(216)"/>
      <ellipse cx="0" cy="-12" rx="5.5" ry="9" fill="#f8bbd0" stroke="#f48fb1" stroke-width="0.9" transform="rotate(288)"/>
      <circle cx="0" cy="0" r="5.5" fill="#fff9c4" stroke="#f9a825" stroke-width="0.9"/>
      <line x1="0" y1="-3" x2="0" y2="-7" stroke="#f48fb1" stroke-width="0.9" stroke-linecap="round"/>
      <line x1="2.6" y1="-1.5" x2="5.5" y2="-3.5" stroke="#f48fb1" stroke-width="0.9" stroke-linecap="round"/>
      <line x1="-2.6" y1="-1.5" x2="-5.5" y2="-3.5" stroke="#f48fb1" stroke-width="0.9" stroke-linecap="round"/>
      <line x1="1.6" y1="3" x2="3" y2="6" stroke="#f48fb1" stroke-width="0.9" stroke-linecap="round"/>
      <line x1="-1.6" y1="3" x2="-3" y2="6" stroke="#f48fb1" stroke-width="0.9" stroke-linecap="round"/>
      <circle cx="0" cy="-7" r="1.2" fill="#e91e8c"/>
      <circle cx="5.5" cy="-3.5" r="1.2" fill="#e91e8c"/>
      <circle cx="-5.5" cy="-3.5" r="1.2" fill="#e91e8c"/>
      <circle cx="3" cy="6" r="1.2" fill="#e91e8c"/>
      <circle cx="-3" cy="6" r="1.2" fill="#e91e8c"/>
    </g>
  </svg>`;
  }
  function springButterfly() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" class="cursor-season-svg">
    <defs>
      <radialGradient id="m1" cx="30%" cy="30%"><stop offset="0%" stop-color="#FFCC02"/><stop offset="100%" stop-color="#FF6D00"/></radialGradient>
      <radialGradient id="m2" cx="70%" cy="30%"><stop offset="0%" stop-color="#FFCC02"/><stop offset="100%" stop-color="#FF6D00"/></radialGradient>
      <radialGradient id="m3" cx="30%" cy="40%"><stop offset="0%" stop-color="#FF8F00"/><stop offset="100%" stop-color="#E65100"/></radialGradient>
      <radialGradient id="m4" cx="70%" cy="40%"><stop offset="0%" stop-color="#FF8F00"/><stop offset="100%" stop-color="#E65100"/></radialGradient>
    </defs>
    <path d="M21 20 C18 12 10 8 4 12 C1 17 4 23 10 24 C15 25 19 23 21 20Z" fill="url(#m1)" stroke="#212121" stroke-width="1.2"/>
    <path d="M23 20 C26 12 34 8 40 12 C43 17 40 23 34 24 C29 25 25 23 23 20Z" fill="url(#m2)" stroke="#212121" stroke-width="1.2"/>
    <path d="M21 22 C17 22 10 26 8 32 C10 37 16 36 20 32 C22 29 22 25 21 22Z" fill="url(#m3)" stroke="#212121" stroke-width="1.2"/>
    <path d="M23 22 C27 22 34 26 36 32 C34 37 28 36 24 32 C22 29 22 25 23 22Z" fill="url(#m4)" stroke="#212121" stroke-width="1.2"/>
    <path d="M21 20 C16 18 10 16 6 14" stroke="#BF360C" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M21 22 C16 25 12 30 10 34" stroke="#BF360C" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M23 20 C28 18 34 16 38 14" stroke="#BF360C" stroke-width="0.7" fill="none" opacity="0.6"/>
    <path d="M23 22 C28 25 32 30 34 34" stroke="#BF360C" stroke-width="0.7" fill="none" opacity="0.6"/>
    <circle cx="5" cy="16" r="1.2" fill="white" opacity="0.9"/>
    <circle cx="5" cy="20" r="1.2" fill="white" opacity="0.9"/>
    <circle cx="39" cy="16" r="1.2" fill="white" opacity="0.9"/>
    <circle cx="39" cy="20" r="1.2" fill="white" opacity="0.9"/>
    <circle cx="10" cy="35" r="1.2" fill="white" opacity="0.9"/>
    <circle cx="34" cy="35" r="1.2" fill="white" opacity="0.9"/>
    <ellipse cx="22" cy="24" rx="1.5" ry="9" fill="#212121"/>
    <circle cx="22" cy="14" r="2" fill="#212121"/>
    <path d="M21 13 Q18 8 16 6" stroke="#212121" stroke-width="1" fill="none" stroke-linecap="round"/>
    <path d="M23 13 Q26 8 28 6" stroke="#212121" stroke-width="1" fill="none" stroke-linecap="round"/>
    <circle cx="16" cy="6" r="1.3" fill="#212121"/>
    <circle cx="28" cy="6" r="1.3" fill="#212121"/>
  </svg>`;
  }
  function springButterflyGreen() {
    return svgWrapper(
      '<defs>' +
        '<linearGradient id="butterflyGrad" x1="0%" y1="0%" x2="100%" y2="100%">' +
          '<stop offset="0%" stop-color="#39FF14" />' +
          '<stop offset="50%" stop-color="#AAFF00" />' +
          '<stop offset="100%" stop-color="#FFD700" />' +
        '</linearGradient>' +
      '</defs>' +
      '<path d="M 15 10 Q 13 4 14 3 M 17 10 Q 19 4 18 3" fill="none" stroke="#1a2a00" stroke-width="1.5" stroke-linecap="round"/>' +
      '<path d="M 15 12 C 4 0, -2 14, 8 18 C 12 19, 15 16, 15 15 Z" fill="url(#butterflyGrad)" stroke="#1a2a00" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M 17 12 C 28 0, 34 14, 24 18 C 20 19, 17 16, 17 15 Z" fill="url(#butterflyGrad)" stroke="#1a2a00" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M 15 16 C 6 18, 4 28, 12 28 C 15 28, 15 22, 15 20 Z" fill="url(#butterflyGrad)" stroke="#1a2a00" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M 17 16 C 26 18, 28 28, 20 28 C 17 28, 17 22, 17 20 Z" fill="url(#butterflyGrad)" stroke="#1a2a00" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M 10 13 Q 12 10 14 13 M 22 13 Q 20 10 18 13 M 11 23 Q 13 25 14 21 M 21 23 Q 19 25 18 21" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>' +
      '<rect x="15" y="9" width="2" height="12" rx="1" fill="#1a2a00"/>'
    );
  }
  function springCursor() {
    var options = [springSapling, springCherryBlossom, springButterfly, springButterflyGreen];
    return options[Math.floor(Math.random() * options.length)]();
  }

  // Helper for Gemini-style cursors (summer, fall, winter)
  function svgWrapper(content) {
    return '<svg class="cursor-season-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" style="filter: drop-shadow(1px 2px 3px rgba(0,0,0,0.4)); transform: translate(-4px, -4px);">' + content + '</svg>';
  }

  // ---------- SUMMER (Gemini) ----------

  function summerFlipflop() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 32 40" class="cursor-season-svg">
    <path d="M10 8 C10 0 22 0 22 8 C22 16 20 24 20 26 C20 32 12 32 12 26 C12 24 10 16 10 8 Z" fill="#7E57C2" stroke="#512DA8" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M10 11 L22 11 M10.5 16 L21.5 16 M11 21 L20.5 21 M11.5 26 L20 26" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
    <path d="M10.5 17 Q16 14 16 6 Q16 14 21.5 17" fill="none" stroke="#FFCC02" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="16" cy="6" r="1.5" fill="#FFFFFF"/>
  </svg>`;
  }

  function summerPalmTree() {
    return svgWrapper(
      '<path d="M14 30 Q16 20 12 12 Q14 18 16 30" fill="none" stroke="#795548" stroke-width="3.5" stroke-linecap="round"/>' +
      '<path d="M12 12 C4 10 2 16 2 16 C2 16 6 10 12 12 Z" fill="#4CAF50" stroke="#1B5E20" stroke-width="1"/>' +
      '<path d="M12 12 C8 4 14 2 14 2 C14 2 10 6 12 12 Z" fill="#4CAF50" stroke="#1B5E20" stroke-width="1"/>' +
      '<path d="M12 12 C20 6 26 8 26 8 C26 8 18 8 12 12 Z" fill="#4CAF50" stroke="#1B5E20" stroke-width="1"/>' +
      '<path d="M12 12 C24 14 26 22 26 22 C26 22 18 16 12 12 Z" fill="#4CAF50" stroke="#1B5E20" stroke-width="1"/>'
    );
  }

  function summerSun() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" class="cursor-season-svg">
    <g transform="translate(26,22)">
      <line x1="0" y1="-17" x2="0" y2="-13" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="0" y1="13" x2="0" y2="17" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="-17" y1="0" x2="-13" y2="0" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="13" y1="0" x2="17" y2="0" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="-11.5" y1="-11.5" x2="-8.5" y2="-8.5" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="8.5" y1="8.5" x2="11.5" y2="11.5" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="11.5" y1="-11.5" x2="8.5" y2="-8.5" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <line x1="-8.5" y1="8.5" x2="-11.5" y2="11.5" stroke="#f9a825" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="0" cy="0" r="10" fill="#ffca28" stroke="#f9a825" stroke-width="1.3"/>
      <circle cx="0" cy="0" r="7" fill="#ffee58"/>
    </g>
    <path d="M4 40 Q10 34 16 38 Q22 42 28 37 Q34 32 40 36 Q44 38 48 36"
      stroke="#1e88e5" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M4 46 Q10 40 16 44 Q22 48 28 43 Q34 38 40 42 Q44 44 48 42"
      stroke="#42a5f5" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.65"/>
  </svg>`;
  }
  function summerCursor() {
    var options = [summerPalmTree, summerFlipflop, summerSun];
    return options[Math.floor(Math.random() * options.length)]();
  }

  // ---------- FALL (Gemini) ----------
  function fallLeaf() {
    return svgWrapper(
      '<path d="M16 28 L16 24 C12 26 6 22 6 16 C10 18 12 14 10 10 C14 12 16 6 16 2 C16 6 18 12 22 10 C20 14 22 18 26 16 C26 22 20 26 16 24 Z" fill="#FF7043" stroke="#D84315" stroke-width="1.5" stroke-linejoin="round"/>' +
      '<path d="M16 24 L16 28" fill="none" stroke="#D84315" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M16 26 L16 2" fill="none" stroke="#1a1a1a" stroke-width="0.6"/>' +
      '<path d="M16 20 L10 24 M16 16 L8 18 M16 12 L10 14" fill="none" stroke="#1a1a1a" stroke-width="0.45"/>' +
      '<path d="M16 20 L22 24 M16 16 L24 18 M16 12 L22 14" fill="none" stroke="#1a1a1a" stroke-width="0.45"/>'
    );
  }

  function fallScarf() {
    return svgWrapper(
      '<path d="M8 12 C8 6 24 6 24 12 C24 18 8 18 8 12 Z" fill="#EF5350" stroke="#B71C1C" stroke-width="1.5"/>' +
      '<path d="M18 16 L16 28 L22 28 L20 16 Z" fill="#EF5350" stroke="#B71C1C" stroke-width="1.5"/>' +
      '<line x1="17" y1="28" x2="17" y2="30" stroke="#B71C1C" stroke-width="1.5"/>' +
      '<line x1="19" y1="28" x2="19" y2="30" stroke="#B71C1C" stroke-width="1.5"/>' +
      '<line x1="21" y1="28" x2="21" y2="30" stroke="#B71C1C" stroke-width="1.5"/>'
    );
  }

  function fallPumpkin() {
    return svgWrapper(
      '<path d="M16 6 C6 6 4 14 4 22 C4 28 10 30 16 30 C22 30 28 28 28 22 C28 14 26 6 16 6 Z" fill="#FF9800" stroke="#E65100" stroke-width="1.5"/>' +
      '<path d="M10 8 C10 16 12 26 16 30 C20 26 22 16 22 8" fill="none" stroke="#E65100" stroke-width="1.5"/>' +
      '<path d="M16 6 Q16 2 18 2" fill="none" stroke="#33691E" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M12 12 L14 18 L10 18 Z" fill="#1a1a1a"/>' +
      '<path d="M20 12 L22 18 L18 18 Z" fill="#1a1a1a"/>' +
      '<path d="M16 16 L18 20 L16 22 L14 20 Z" fill="#1a1a1a"/>' +
      '<path d="M10 24 L12 26 L14 24 L16 27 L18 24 L20 26 L22 24" fill="none" stroke="#1a1a1a" stroke-width="1.2" stroke-linejoin="round"/>'
    );
  }

  function fallCursor() {
    var options = [fallLeaf, fallScarf, fallPumpkin];
    return options[Math.floor(Math.random() * options.length)]();
  }

  // ---------- WINTER (Gemini) ----------
  function winterSnowman() {
    return svgWrapper(
      '<path d="M10 20 L3 15 M5 16 L4 19 M22 20 L29 15 M27 16 L28 19" fill="none" stroke="#5D4037" stroke-width="1.5" stroke-linecap="round"/>' +
      '<circle cx="16" cy="23" r="7" fill="#FFFFFF" stroke="#546E7A" stroke-width="1.5"/>' +
      '<circle cx="16" cy="13" r="5" fill="#FFFFFF" stroke="#546E7A" stroke-width="1.5"/>' +
      '<circle cx="16" cy="19.5" r="1.2" fill="#263238"/>' +
      '<circle cx="16" cy="24" r="1.2" fill="#263238"/>' +
      '<path d="M11 17 Q16 19 21 17" fill="none" stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M18 18 L17 23" fill="none" stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round"/>' +
      '<line x1="11" y1="9" x2="21" y2="9" stroke="#263238" stroke-width="2" stroke-linecap="round"/>' +
      '<path d="M13 9 L13 2 L19 2 L19 9 Z" fill="#263238"/>' +
      '<line x1="13" y1="7" x2="19" y2="7" stroke="#D32F2F" stroke-width="1.5"/>' +
      '<circle cx="14" cy="12" r="1" fill="#263238"/>' +
      '<circle cx="18" cy="12" r="1" fill="#263238"/>' +
      '<path d="M16 13 L22 14.5 L16 15 Z" fill="#FF9800" stroke="#E65100" stroke-width="0.5" stroke-linejoin="round"/>'
    );
  }

  function winterSnowflake() {
    var arm = '<path d="M16 16 L16 2 M16 4 L13 2.5 M16 4 L19 2.5 M16 8 L11.5 6 M16 8 L20.5 6 M16 12 L13 10.5 M16 12 L19 10.5" fill="none"/>';
    return svgWrapper(
      '<g stroke="#81D4FA" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round">' +
        '<g>' + arm + '</g>' +
        '<g transform="rotate(60 16 16)">' + arm + '</g>' +
        '<g transform="rotate(120 16 16)">' + arm + '</g>' +
        '<g transform="rotate(180 16 16)">' + arm + '</g>' +
        '<g transform="rotate(240 16 16)">' + arm + '</g>' +
        '<g transform="rotate(300 16 16)">' + arm + '</g>' +
      '</g>' +
      '<circle cx="16" cy="16" r="2" fill="#E1F5FE" stroke="#4FC3F7" stroke-width="1"/>'
    );
  }

  function winterMug() {
    return svgWrapper(
      '<path d="M22 16 C28 16 28 24 22 24" fill="none" stroke="#D32F2F" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M10 14 L22 14 L22 25 C22 29 10 29 10 25 Z" fill="#F44336" stroke="#C62828" stroke-width="1.5"/>' +
      '<path d="M13 10 Q11 6 14 2 M19 11 Q17 7 20 3" fill="none" stroke="#CFD8DC" stroke-width="2" stroke-linecap="round" opacity="0.8"/>'
    );
  }

  function winterCursor() {
    var options = [winterSnowman, winterSnowflake, winterMug];
    return options[Math.floor(Math.random() * options.length)]();
  }

  // ---------- FASHION: one of cursor_fashion1..3 ----------
  var FASHION_IMAGES = [
    "assets/cursor_fashion1.png",
    "assets/cursor_fashion2.png",
    "assets/cursor_fashion3.png"
  ];
  function fashionCursor() {
    var src = FASHION_IMAGES[Math.floor(Math.random() * FASHION_IMAGES.length)];
    return '<img class="cursor-season-img" src="' + src + '" alt="">';
  }

  function setCursorSeason(season) {
    var html = "";
    if (season === "spring") html = springCursor();
    else if (season === "summer") html = summerCursor();
    else if (season === "fall") html = fallCursor();
    else if (season === "winter") html = winterCursor();
    else if (season === "fashion") html = fashionCursor();
    else html = summerCursor();
    cursorWrap.innerHTML = html;
    cursorWrap.className = "cursor-season-wrap cursor-season-" + season;

    // Apply season theme to page (body class for CSS variables)
    var body = document.body;
    ["spring", "summer", "fall", "winter", "fashion"].forEach(function (s) { body.classList.remove("season-" + s); });
    body.classList.add("season-" + (season || "summer"));

    // Highlight active season in tree legend
    var legendItems = document.querySelectorAll(".tree-tally-row[data-season]");
    legendItems.forEach(function (el) {
      el.classList.toggle("active", el.getAttribute("data-season") === (season || "summer"));
    });

    // Kept for backward compatibility if you ever switch back to an img tag
    var img = cursorWrap.querySelector(".cursor-season-img");
    if (img) {
      img.onerror = function () { cursorWrap.innerHTML = '<span class="cursor-fashion-fallback"></span>'; };
    }
  }

  function moveCursor(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!raf) raf = requestAnimationFrame(updateCursor);
  }
  function updateCursor() {
    raf = null;
    cursorWrap.style.left = mouseX + "px";
    cursorWrap.style.top = mouseY + "px";
  }

  document.addEventListener("mousemove", moveCursor, { passive: true });
  body.classList.add("custom-cursor-active");
  setCursorSeason(getStoredSeason());

  window.addEventListener("season-picked", function (e) {
    if (e.detail && e.detail.season) {
      setCursorSeason(e.detail.season);
    }
  });

  // Konami code: up up down down left right left right B A
  const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let konamiIndex = 0;
  document.addEventListener("keydown", function (e) {
    if (e.keyCode === konami[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konami.length) {
        konamiIndex = 0;
        try { window.dispatchEvent(new CustomEvent("season-picked", { detail: { season: "winter" } })); } catch (e) {}
        const t = document.querySelector(".scribble-title");
        if (t) t.textContent = t.textContent === "hey, it's me" ? "↑↑↓↓←→←→BA" : "hey, it's me";
      }
    } else {
      konamiIndex = 0;
    }
  });

})();

/* ============================================
   Tree + visitor count + season modal
   ============================================ */
(function () {
  // Static hosting mode: works on GitHub Pages / basic GoDaddy hosting (no Node backend).
  const STATIC_HOSTING_MODE = true;
  const API_BASE = ""; // same origin when served from server.js
  const TREE_SVG = document.getElementById("tree-svg");
  const TREE_TRUNK = document.getElementById("tree-trunk");
  const TREE_LEAVES = document.getElementById("tree-leaves");
  const SEASON_MODAL = document.getElementById("season-modal");
  const STORAGE_KEY = "harnoor_visited";
  const STATIC_STATS_KEY = "harnoor_static_stats_v1";
  const STATIC_HOUR_KEY = "harnoor_static_hour_v1";
  var TALLY_IDS = { spring: "tally-spring", summer: "tally-summer", fall: "tally-fall", winter: "tally-winter", fashion: "tally-fashion" };

  if (!TREE_SVG || !TREE_TRUNK || !TREE_LEAVES) return;

  var viewBox = TREE_SVG.viewBox.baseVal;
  var vw = viewBox.width || 200;
  var vh = viewBox.height || 320;

  // ── Season colours (unchanged) ──────────────────────────
  var SEASON_COLORS = {
    spring:  "#66bb6a",
    summer:  "#ffd700",
    fall:    "#b8860b",
    winter:  "#29b6f6",
    fashion: "#ec407a",
  };

  // ── Trunk: long wobbly bezier curves + 3 branches ─────────
  function drawTrunk() {
    TREE_TRUNK.innerHTML = "";
    var cx = vw / 2;
    var ns = "http://www.w3.org/2000/svg";

    function path(attrs) {
      var p = document.createElementNS(ns, "path");
      for (var k in attrs) p.setAttribute(k, attrs[k]);
      TREE_TRUNK.appendChild(p);
    }

    // main trunk — 3 S-curves from bottom to top
    path({
      d: "M" + cx + " " + (vh - 8)
       + " C" + (cx - 10) + " " + (vh * 0.82) + " " + (cx + 12) + " " + (vh * 0.72) + " " + (cx - 3) + " " + (vh * 0.63)
       + " C" + (cx - 12) + " " + (vh * 0.55) + " " + (cx + 11) + " " + (vh * 0.46) + " " + (cx + 2) + " " + (vh * 0.38)
       + " C" + (cx - 8) + " " + (vh * 0.30) + " " + (cx + 7) + " " + (vh * 0.22) + " " + cx + " " + (vh * 0.15),
      stroke: "#8b5e3c", "stroke-width": "10", fill: "none", "stroke-linecap": "round",
    });
    // bark highlight (same path, thinner, lighter)
    path({
      d: "M" + cx + " " + (vh - 8)
       + " C" + (cx - 6) + " " + (vh * 0.82) + " " + (cx + 8) + " " + (vh * 0.72) + " " + (cx - 2) + " " + (vh * 0.63)
       + " C" + (cx - 8) + " " + (vh * 0.55) + " " + (cx + 8) + " " + (vh * 0.46) + " " + (cx + 2) + " " + (vh * 0.38),
      stroke: "rgba(196,138,90,0.30)", "stroke-width": "4", fill: "none",
    });
    // 3 branches spreading out to canopy clusters
    [
      "M" + (cx + 2) + " " + (vh * 0.40) + " C" + (cx - 16) + " " + (vh * 0.33) + " " + (cx - 34) + " " + (vh * 0.26) + " " + (cx - 42) + " " + (vh * 0.22),
      "M" + (cx + 2) + " " + (vh * 0.37) + " C" + (cx + 18) + " " + (vh * 0.30) + " " + (cx + 34) + " " + (vh * 0.24) + " " + (cx + 42) + " " + (vh * 0.20),
      "M" + cx + " " + (vh * 0.15) + " C" + (cx - 2) + " " + (vh * 0.11) + " " + cx + " " + (vh * 0.07) + " " + cx + " " + (vh * 0.04),
    ].forEach(function (d) {
      path({ d: d, stroke: "#8b5e3c", "stroke-width": "6", fill: "none" });
    });
    path({
      d: "M10 " + (vh - 8) + " Q" + cx + " " + (vh - 12) + " " + (vw - 10) + " " + (vh - 8),
      fill: "none", stroke: "rgba(120,90,45,0.18)", "stroke-width": "1.5", "stroke-linecap": "round",
    });
  }

  // ── One big canopy ellipse over the branches; leaves placed randomly inside ─
  var CANOPY_CX = vw / 2;
  var CANOPY_CY = vh * 0.22;
  var CANOPY_RX = vw * 0.42;
  var CANOPY_RY = vh * 0.28;

  function randomInCanopy() {
    var r = Math.sqrt(Math.random());
    var t = Math.random() * Math.PI * 2;
    return {
      x: CANOPY_CX + CANOPY_RX * r * Math.cos(t),
      y: CANOPY_CY + CANOPY_RY * r * Math.sin(t),
    };
  }

  // ── Leaf shape: puffy round ellipse (whimsical sim style) ─
  function makeLeafEl(ns, cx, cy, sz, rot, color) {
    var g = document.createElementNS(ns, "g");
    g.setAttribute("transform",
      "translate(" + cx + "," + cy + ") rotate(" + (rot * 180 / Math.PI) + ")");
    g.setAttribute("class", "leaf");
    var rx = sz * 0.68, ry = sz;
    var e = document.createElementNS(ns, "ellipse");
    e.setAttribute("cx", "0"); e.setAttribute("cy", "0");
    e.setAttribute("rx", rx.toFixed(2)); e.setAttribute("ry", ry.toFixed(2));
    e.setAttribute("fill", color);
    e.setAttribute("stroke", "rgba(26,21,16,0.18)");
    e.setAttribute("stroke-width", "0.4");
    g.appendChild(e);
    return g;
  }

  var LEAF_BASE_SIZE = 6.5;

  // keep 150–500 size feel; don’t shrink much after 500
  function leafSz(total) {
    if (total <= 50)   return LEAF_BASE_SIZE * 1.00;
    if (total <= 100)  return LEAF_BASE_SIZE * 0.88;
    if (total <= 200)  return LEAF_BASE_SIZE * 0.76;
    if (total <= 500)  return LEAF_BASE_SIZE * 0.62;
    if (total <= 1000) return LEAF_BASE_SIZE * 0.58;
    return LEAF_BASE_SIZE * 0.52;
  }

  var MAX_LEAVES_ON_TREE = 2000;
  var BASE_LEAVES_COUNT  = 10;
  var BASE_LEAF_STRIP_Y  = vh - 14;

  function normalizedTally(input) {
    var out = { spring: 0, summer: 0, fall: 0, winter: 0, fashion: 0 };
    if (!input || typeof input !== "object") return out;
    Object.keys(out).forEach(function (k) {
      var n = Number(input[k]);
      out[k] = Number.isFinite(n) && n > 0 ? Math.floor(n) : 0;
    });
    return out;
  }

  function currentHourStamp() {
    var d = new Date();
    return (
      d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0") + "-" +
      String(d.getHours()).padStart(2, "0")
    );
  }

  function hashString(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return (h >>> 0);
  }

  function mulberry32(seed) {
    var t = seed >>> 0;
    return function () {
      t += 0x6D2B79F5;
      var r = Math.imul(t ^ (t >>> 15), 1 | t);
      r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function generateStaticHourlyStats() {
    var stamp = currentHourStamp();
    var rand = mulberry32(hashString("harnoor-tree-" + stamp));
    var hour = new Date().getHours(); // local hour: 0..23
    var dayProgress = hour / 23;
    // Morning starts lower; evening starts higher (always bounded to 150..500).
    var minStart = 150 + Math.floor(dayProgress * 220); // 150..370
    var maxStart = 260 + Math.floor(dayProgress * 240); // 260..500
    var total = minStart + Math.floor(rand() * (maxStart - minStart + 1));
    var seasonKeys = ["spring", "summer", "fall", "winter", "fashion"];
    var weights = [];
    var weightSum = 0;
    for (var i = 0; i < seasonKeys.length; i++) {
      var w = 0.6 + rand() * 1.4;
      weights.push(w);
      weightSum += w;
    }
    var tally = normalizedTally();
    var allocated = 0;
    for (var j = 0; j < seasonKeys.length; j++) {
      var key = seasonKeys[j];
      tally[key] = Math.floor(total * (weights[j] / weightSum));
      allocated += tally[key];
    }
    var remainder = total - allocated;
    for (var r = 0; r < remainder; r++) {
      tally[seasonKeys[r % seasonKeys.length]] += 1;
    }
    return { count: total, tally: tally, stamp: stamp };
  }

  function loadStaticStats() {
    var stamp = currentHourStamp();
    try {
      var storedStamp = localStorage.getItem(STATIC_HOUR_KEY);
      var storedRaw = localStorage.getItem(STATIC_STATS_KEY);
      if (storedStamp === stamp && storedRaw) {
        var parsed = JSON.parse(storedRaw);
        return coerceStats(parsed);
      }
    } catch (e) {}
    var generated = generateStaticHourlyStats();
    var stats = { count: generated.count, tally: generated.tally };
    try {
      localStorage.setItem(STATIC_HOUR_KEY, stamp);
      localStorage.setItem(STATIC_STATS_KEY, JSON.stringify(stats));
    } catch (e) {}
    return stats;
  }

  function saveStaticStats(stats) {
    try {
      localStorage.setItem(STATIC_HOUR_KEY, currentHourStamp());
      localStorage.setItem(STATIC_STATS_KEY, JSON.stringify({
        count: stats.count,
        tally: stats.tally,
      }));
    } catch (e) {}
  }

  function coerceStats(data) {
    var count = (data && Number(data.count)) || 0;
    var tally = normalizedTally(data && data.tally);
    var totalFromTally = tally.spring + tally.summer + tally.fall + tally.winter + tally.fashion;
    return { count: Math.max(count, totalFromTally), tally: tally };
  }

  function allocateByTally(totalToAllocate, tally, seasonKeys) {
    var out = {};
    var allocated = 0;
    for (var i = 0; i < seasonKeys.length; i++) {
      var key = seasonKeys[i];
      var n = totalToAllocate > 0 ? Math.floor(totalToAllocate * (tally[key] || 0) / Math.max(1, tally._total)) : 0;
      out[key] = n;
      allocated += n;
    }
    var diff = totalToAllocate - allocated;
    var byCount = seasonKeys.slice().sort(function (a, b) { return (tally[b] || 0) - (tally[a] || 0); });
    for (var d = 0; d < diff; d++) out[byCount[d % byCount.length]]++;
    return out;
  }

  function drawLeaves(total, tallyInput) {
    TREE_LEAVES.innerHTML = "";
    var ns = "http://www.w3.org/2000/svg";
    total = Number.isFinite(Number(total)) && Number(total) > 0 ? Math.floor(Number(total)) : 0;
    var tally = normalizedTally(tallyInput);
    tally._total = tally.spring + tally.summer + tally.fall + tally.winter + tally.fashion;
    if (tally._total <= 0 && total > 0) {
      tally.summer = total;
      tally._total = total;
    }
    var baseSz = leafSz(total);

    function addLeaf(cx, cy, color, sz) {
      var rot = Math.random() * Math.PI * 2;
      var s   = sz != null ? sz : (baseSz * (0.80 + Math.random() * 0.48));
      TREE_LEAVES.appendChild(makeLeafEl(ns, cx, cy, s, rot, color));
    }

    // ground leaf size: same base (4.5) as tree — range 0.78–1.12 of baseSz
    function groundLeafSz() {
      return baseSz * (0.78 + Math.random() * 0.34);
    }

    if (total === 0) {
      var seasonKeys = Object.keys(SEASON_COLORS);
      for (var i = 0; i < 24; i++) {
        var p = randomInCanopy();
        addLeaf(p.x, p.y, SEASON_COLORS[seasonKeys[i % seasonKeys.length]], baseSz * (0.80 + Math.random() * 0.40));
      }
      for (var i = 0; i < BASE_LEAVES_COUNT; i++) {
        var x = 14 + Math.random() * (vw - 28);
        var y = BASE_LEAF_STRIP_Y + (Math.random() - 0.5) * 10;
        addLeaf(x, y, SEASON_COLORS[seasonKeys[i % seasonKeys.length]], groundLeafSz());
      }
      return;
    }

    var shown = Math.min(total, MAX_LEAVES_ON_TREE);
    var seasonKeys = Object.keys(SEASON_COLORS);

    // Allocate shown leaves by tally proportion (whichever tally is higher gets more leaves)
    var showPerSeason = allocateByTally(shown, tally, seasonKeys);

    for (var sk = 0; sk < seasonKeys.length; sk++) {
      var s = seasonKeys[sk];
      var color = SEASON_COLORS[s];
      for (var n = 0; n < showPerSeason[s]; n++) {
        var p = randomInCanopy();
        addLeaf(p.x, p.y, color);
      }
    }

    // below 1000: up to 30 ground leaves; from 1000+: more ground, mix tree/ground
    var fallenCount = total < 1000
      ? Math.min(Math.max(8, Math.round(total * 0.10)), 30)
      : Math.min(Math.max(35, Math.round(total * 0.14)), 85);
    var fallenPerSeason = allocateByTally(fallenCount, tally, seasonKeys);
    for (var fsk = 0; fsk < seasonKeys.length; fsk++) {
      var fSeason = seasonKeys[fsk];
      var fColor = SEASON_COLORS[fSeason] || SEASON_COLORS.summer;
      for (var fi = 0; fi < fallenPerSeason[fSeason]; fi++) {
        var x = 14 + Math.random() * (vw - 28);
        var y = BASE_LEAF_STRIP_Y + (Math.random() - 0.5) * 10;
        addLeaf(x, y, fColor, groundLeafSz());
      }
    }
  }

  function setTally(tallyInput) {
    var counts = normalizedTally(tallyInput);
    for (var s in TALLY_IDS) {
      var el = document.getElementById(TALLY_IDS[s]);
      if (el) el.textContent = counts[s];
    }
  }

  function fetchStats(cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", API_BASE + "/api/stats");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          var d = JSON.parse(xhr.responseText);
          cb(null, d);
        } catch (e) {
          cb(e);
        }
      } else {
        cb(new Error("Failed to load stats"));
      }
    };
    xhr.onerror = function () {
      cb(new Error("Network error"));
    };
    xhr.send();
  }

  function postVisit(season, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", API_BASE + "/api/visit");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          var d = JSON.parse(xhr.responseText);
          cb(null, d);
        } catch (e) {
          cb(e);
        }
      } else {
        var err = new Error("Failed to add visit");
        err.status = xhr.status;
        if (xhr.status === 429) {
          try {
            var body = JSON.parse(xhr.responseText);
            err.message = body.error || "One leaf per person every 5 minutes. Try again later.";
          } catch (e) {}
        }
        cb(err);
      }
    };
    xhr.onerror = function () {
      cb(new Error("Network error"));
    };
    xhr.send(JSON.stringify({ season: season }));
  }

  function applyTree(data) {
    var stats = coerceStats(data);
    var total = stats.count;
    var tally = stats.tally;
    drawTrunk();
    drawLeaves(total, tally);
    setTally(tally);
  }

  function showSeasonModal() {
    if (SEASON_MODAL) {
      SEASON_MODAL.hidden = false;
      SEASON_MODAL.removeAttribute("hidden");
    }
  }

  function hideSeasonModal() {
    if (SEASON_MODAL) {
      SEASON_MODAL.hidden = true;
      SEASON_MODAL.setAttribute("hidden", "");
    }
  }

  drawTrunk();

  var alreadyVisited = typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY);
  var hintEl = document.getElementById("visitor-count-hint");
  var currentCount = 0;
  var currentTally = normalizedTally();
  if (!STATIC_HOSTING_MODE && hintEl && alreadyVisited) {
    hintEl.textContent = "A leaf can be added once every 5 minutes!";
  }

  if (STATIC_HOSTING_MODE) {
    var staticStats = loadStaticStats();
    currentCount = staticStats.count;
    currentTally = staticStats.tally;
    applyTree(staticStats);
  } else {
    fetchStats(function (err, data) {
      if (err) {
        setTally(normalizedTally());
        drawLeaves(0, normalizedTally());
      } else {
        var stats = coerceStats(data);
        currentCount = stats.count;
        currentTally = stats.tally;
        applyTree(data);
      }
    });
  }

  // Tally rows: click to set theme (cursor) and, if first time, add a leaf
  document.querySelectorAll(".tree-tally-row[data-season]").forEach(function (el) {
    function onPick() {
      var season = el.getAttribute("data-season");
      if (!season) return;
      if (typeof localStorage !== "undefined") localStorage.setItem("harnoor_season", season);
      try { window.dispatchEvent(new CustomEvent("season-picked", { detail: { season: season } })); } catch (e) {}

      if (STATIC_HOSTING_MODE) {
        currentCount += 1;
        currentTally[season] = (currentTally[season] || 0) + 1;
        applyTree({ count: currentCount, tally: currentTally });
        saveStaticStats({ count: currentCount, tally: currentTally });
        return;
      }

      var prevCount = currentCount;
      var prevTally = normalizedTally(currentTally);
      if (!alreadyVisited) {
        currentCount = prevCount + 1;
        currentTally[season] = (currentTally[season] || 0) + 1;
        applyTree({ count: currentCount, tally: currentTally });
      }

      postVisit(season, function (err, data) {
        if (err) {
          if (!alreadyVisited) {
            currentCount = prevCount;
            currentTally = prevTally;
            applyTree({ count: prevCount, tally: prevTally });
          }
          if (err.status === 429 && err.message) alert(err.message);
          return;
        }
        if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_KEY, "1");
        alreadyVisited = true;
        var stats = coerceStats(data);
        currentCount = stats.count;
        currentTally = stats.tally;
        applyTree(data);
        if (hintEl) hintEl.textContent = "A leaf can be added once every 5 minutes!";
      });
    }
    el.addEventListener("click", onPick);
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onPick();
      }
    });
  });

})();

// Pic lightbox — one modal for parents + cmu1/cmu2/cmu3 + bits1/bits2 (images in assets/)
function initPicModal() {
  var modal = document.getElementById("parents-pic-modal");
  var img = document.getElementById("parents-pic-img");
  var backdrop = document.getElementById("parents-pic-modal-backdrop");
  var closeBtn = document.getElementById("parents-pic-modal-close");
  if (!modal || !img) return;
  function show(picId) {
    var base = "";
    try {
      base = new URL("assets/", window.location.href).href;
    } catch (e) {
      base = "assets/";
    }
    img.src = base + picId + ".jpg";
    img.onerror = function () {
      this.onerror = null;
      this.src = base + picId + ".png";
    };
    modal.removeAttribute("hidden");
    modal.hidden = false;
    modal.classList.add("is-open");
  }
  function hide() {
    modal.classList.remove("is-open");
    modal.setAttribute("hidden", "");
    modal.hidden = true;
  }
  document.querySelectorAll(".pic-trigger[data-pic]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      show(btn.getAttribute("data-pic"));
    });
  });
  if (backdrop) backdrop.addEventListener("click", hide);
  if (closeBtn) closeBtn.addEventListener("click", hide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("is-open")) hide();
  });
  window.openParentsPic = function () { show("parents"); };
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPicModal);
} else {
  initPicModal();
}