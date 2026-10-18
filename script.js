
/* =========================================
   PARK HYOJIN PORTFOLIO — V14
   HOME / WORKS / PREVIEW / ARCHIVE / ABOUT
========================================= */

const ASSET = "./assets/";
const $ = id => document.getElementById(id);

/* =========================================
   01. PROJECT DATA
========================================= */

const projects = [
  {
    slug: "logbook",
    title: "LOGBOOK",
    category: "ALBUM / VISUAL IDENTITY",
    type: "Album",
    year: "2026",
    role: "Art Direction, Graphic Design, Photography, Film",

    description: `아티스트의 삶을 ‘항해와 기록’이라는 하나의 여정으로 담아낸 앨범, LOGBOOK.

아티스트가 지나온 장소와 자연, 그곳에 남겨진 기억을 따라 듣는 이도
함께 길을 떠나기를 바랐다. 바다 한가운데에서 미지의 땅을 찾아 나서듯,
각 트랙은 새로운 풍경이 되고 그 안의 심벌은 저마다의 세계를 여는 열쇠가 된다.

트랙리스트를 하나의 지도로, 음악 속 기억들을 고유한 기호와 이미지로 풀어내며,
한 곡씩 따라갈 때마다 새로운 장소와 이야기를 발견하는 경험을 만들고자 했다.`,

    cover: "logbook/logbook-cover.png",
    hero: "logbook/노마드.png",

    images: [
      ["logbook/logbook-map-12.png", "Map System", "wide"],
      ["logbook/logbook-symbol-09.png", "Track Symbols", "wide"]
    ],

    tooltip: "Artist visuals, map-based symbols, photography and film."
  },

  
  {
    slug: "okelvin",
    title: "O KELVIN",
    category: "ALBUM / TYPOGRAPHY",
    type: "Album",
    year: "2026",
    role: "Typography Design, Graphic Design",

    description: `무의식과 기억 속을 여행하는 듯한 O KELVIN의 몽환적이고 으스스한 분위기를
    아날로그한 질감과 실험적인 타이포그래피로 시각화했다.

일곱 트랙의 주제에 맞춰 동일한 O KELVIN 레터링을 서로 다른 형태와 질감으로 변주하고,
이를 트랙별 타이포그래피로 연결했다. 앨범 커버 리터칭 작업도 함께 진행했다.`,

    cover: "0kelvin/0KELVIN-thumb.png",
    hero: "0kelvin/okelvin-hero.png",

    images: [
      ["0kelvin/0kelvin_cover.png", "Album Cover", "wide"],
      ["0kelvin/0kelvin_type-02.png", "Typography", ""]
    ],

    tooltip: "Seven typographic variations inspired by individual tracks."
  },


  {
    slug: "OfftheCuff",
    title: "OfftheCuff",
    category: "MERCHANDISE / CAMPAIGN",
    type: "Merchandise",
    year: "2024—2026",
    role: "Brand Identity, Apparel Design, Art Direction, Photography, Production",
    description: `연세대학교의 상징을 동시대 트렌드와 결합해, 단순한 학교 굿즈를 넘어
    취향 기반의 패션 머천다이즈로 확장한 브랜드 프로젝트.

    1인 디자이너로 일하며 시즌별 콘셉트 기획부터 제품 그래픽, 캠페인 비주얼, 스타일링과 촬영,
    생산 및 판매 운영까지 참여하며 디자인을 실제 상품과 브랜드 경험으로 연결했다.
2026년 누적 매출 약 1억 480만 원과 인스타그램 팔로워 2,000명 이상을 기록했다.`,
    cover: "offthecuff/하3.png",
    hero: "offthecuff/하3.png",
    images: [
      ["p15_0.webp", "Campaign Key Visual", "wide"],
      ["offthecuff/하3.png", "Campaign Photography", "wide"],
      ["p17_2.webp", "Apparel Campaign", ""],
      ["p17_0.webp", "Graphic Specification", ""],
      ["p18_9.webp", "Season Archive", ""]
    ],
    tooltip: "Apparel design, campaign photography and production."
  },

  {
    slug: "ryu",
    title: "RYU",
    category: "CONCERT / PROMOTION",
    type: "Concert",
    year: "2024-2025",
    role: "Concert Artworks, Graphic Design, Merchandise",
    description: `연세대학교 흑인음악동아리 RYU의 공연별 콘셉트에 맞춰 키비주얼과 그래픽을 제작하고,
    이를 공연 포스터, 머천다이즈, SNS 콘텐츠와 영상으로 확장했다.`,
    cover: "RYU-THUMB.jpg",
    hero: "ryu/hail_cover.jpg",
    images: [
      ["p11_1.webp", "Summer Concert", ""],
      ["p11_0.webp", "Winter Concert", ""],
      ["p11_2.webp", "Merchandise", ""],
      ["p11_3.webp", "Printed Materials", ""]
    ],
    tooltip: "Concert visuals and merchandise."
  },

  {
    slug: "love-revolution",
    title: "LOVE REVOLUTION 2016",
    category: "ALBUM / VISUAL DIRECTION",
    type: "Album",
    year: "2026",

    role: "Art Direction, Album Artwork, Logo Design, Styling, Garment Customization, Photography",

    description: `2016년 한국 대중가요를 샘플링해 전자음악과 힙합으로 재해석한 앨범 프로젝트다.(발매예정)
<연애혁명>이라는 당시 한국에서 유행했던 웹툰을 모티프로 해 음악과 패션,
디지털 문화를 비주얼 콘셉트로 가져왔다. 그 시절의 사진 꾸미기 감성에서 출발한
로고와 앨범 아트워크를 제작하고, NERDY 져지를 리폼해 스타일링과 촬영까지 진행했다.`,

    cover: "lr-thumb.png",
    hero: "love-revolution/IMG_0848.JPG",
    images: [],

    tooltip: "Unreleased album, visual identity, styling and photography."
  },
  {
    slug: "rugged",
    title: "RUGGED AND SLUGGISH",
    category: "ALBUM / GRAPHIC DESIGN",
    type: "Album",
    year: "2025",
    role: "Brand Identity, Graphic Design",
    description: "EKO의 앨범을 위한 키아트 및 그래픽 디자인.",
    cover: "ruggish-thumb.PNG",
    hero: "삼분할Artboard-1-copy-3.PNG",
    images: [
      ["p09_0.webp", "Album Artwork", ""],
      ["p09_1.webp", "Tracklist", ""]
    ],
    tooltip: "Album artwork and tracklist design."
  },

  {
    slug: "omphi",
    title: "omphi",
    category: "INTERACTIVE / EXPERIENCE",
    type: "Interactive",
    year: "2026",

    role: "Creative Direction, Product Design, Graphic Design, Character Design, Interactive Web, Physical Prototyping",

    description: `omphi는 엄마와 딸을 잇는 배꼽(Omphalos)에서 출발한 인터랙티브 커뮤니케이션 프로젝트다.

가장 가깝지만 때로는 솔직한 마음을 전하기 어려운 모녀 관계에 주목해, 말하지 않아도
서로의 감정을 전달할 수 있는 펫 디바이스를 기획했다. 말랑이의 촉각적 재미와 사이버덱의 디지털 감성을 결합해 무거운 주제를 친근하고 유쾌하게 풀어내고, 제품부터 그래픽, 웹, 전시까지 하나의 경험으로 확장했다.`,

    cover: "omphi/omphi-hero.png",
    hero: "omphi/omphi-hero.png",

    images: [
      ["p25_0.webp", "Interactive Object", "wide"],
      ["p27_0.webp", "Web Experience", "wide"],
      ["p27_1.webp", "Exhibition", ""],
      ["p27_3.webp", "Exhibition Detail", ""]
    ],

    tooltip: "An interactive experience exploring the emotional connection between mother and daughter."
  },

  {
    slug: "cortex-error",
    title: "CORTEX ERROR",
    category: "FASHION / DIGITAL EXPERIENCE",
    type: "Digital Fashion",
    year: "2026",
    role: "Fashion, CLO 3D, Graphic Design, Brand Direction, Film",
    description: "인지적 불안정성을 시각화한 디지털 패션 컬렉션.",
    cover: "p23_0.webp",
    images: [
      ["p23_0.webp", "Collection Looks", "wide"],
      ["p24_0.webp", "Editorial", "wide"],
      ["p24_1.webp", "Detail", ""]
    ],
    tooltip: "Digital fashion collection and 3D editorial."
  },

  {
    slug: "eggs-it",
    title: "EGGS-IT",
    category: "ARTBOOK / EDITORIAL",
    type: "Artbook",
    year: "2025",
    role: "Artbook Design, Editorial Design, Illustration, Art Direction",
    description: "껍질과 탈피를 주제로 디지털 그래픽과 수채화를 결합한 아트북.",
    cover: "p19_0.webp",
    images: [
      ["p19_0.webp", "Artbook", "wide"],
      ["p20_0.webp", "Editorial", ""],
      ["p20_1.webp", "Illustration", ""]
    ],
    tooltip: "Artbook and editorial design."
  },

  {
    slug: "aq-zenda",
    title: "AQ ZENDA",
    category: "SPECULATIVE DESIGN / BRAND IDENTITY",
    type: "Speculative Design",
    year: "2026",

    role: "Speculative Design, Concept Development, Brand Identity, Product Concept, Exhibition Design",

    description: `AQ ZENDA는 개인의 미감이 점수와 등급으로 평가되는 미래를 상상하고,
    그 세계에 존재할 법한 미감 측정 서비스를 브랜딩한 스페큘레이티브 디자인 프로젝트다.

‘잰다’에서 이름을 가져온 ZENDA는 저울로 취향을 측정한다는 발상에서 출발했다.
측정된 등급을 가축의 식별용 이표에서 착안한 패션 액세서리로 제작해,
사람들이 자신의 미감 등급을 자발적으로 귀에 달고 다니는 사회를 표현했다.`,

    cover: "aq-zenda/final_PRINTArtboard-1.png",
    hero: "aq-zenda/final_PRINTArtboard-1.png",
    images: [],

    tooltip: "Speculative design exploring a future where taste becomes a social score."
  },

  {
    slug: "valsason",
    title: "VALSASON",
    category: "PODCAST / CONTENT BRANDING",
    type: "Podcast",
    year: "2024—2025",

    role: "Creative Direction, Graphic Design, Content Planning, Filming, Editing, Channel Operation",

    description: `‘처음 본 사람과 스몰토크로는 하지 않을 이야기’를 주제로,
  20대의 시선에서 사회와 문화의 다양한 이슈를 자유롭게 풀어내는 독립 비디오 팟캐스트.

  서로 다른 관점을 편견 없이 나누는 콘텐츠를 기획하고,
  아이덴티티 디자인부터 촬영, 편집, 배포와 채널 운영까지 전 과정을 진행했다.`,

    cover: "valsason/valsason-logo.png",
    hero: "valsason/valsason-hero.png",

    images: [
      ["valsason/valsason-poster01.png", "Graphic System", "wide"]
    ],

    tooltip: "Independent video podcast, visual identity and content production."
  },

  {
    slug: "pepperoni-pizza-club",
    title: "PEPPERONI PIZZA CLUB",
    category: "MUSIC / ALBUM PRODUCTION",
    type: "Music",
    year: "2024",
    role:  "Logo Design, Production, A&R, Album Artwork, Film",
    description: `독립 음악 크루 PEPPERONI PIZZA CLUB의 첫 번째 앨범 <THE 1ST DELIVERY>.
크루의 로고와 비주얼 아이덴티티를 구축하고, 탑라인 제작과 녹음부터 앨범 아트워크, 티저 영상까지 직접 제작했다. 음악과 비주얼을 하나의 아이덴티티로 연결한 독립 음악 프로젝트.`,
    cover: "ppc-thumb.png",
    hero: "ㅇㅇㄷ_2.png",
    images: [
      ["p32_0.webp", "Visual Identity", "wide"],
      ["p33_0.webp", "Photography", ""]
    ],
    tooltip: "Music identity and photography."
  },

  {
    slug: "artist-that-only-i-know",
    title: "ARTIST THAT ONLY I KNOW",
    category: "EVENT / POSTER",
    type: "Poster",
    year: "2025",
    role: "Poster Design",
    description: "음악 네트워킹 이벤트를 위한 포스터 디자인.",
    cover: "p12_0.webp",
    images: [
      ["p12_0.webp", "Event Poster", "wide"]
    ],
    tooltip: "Poster design for a music networking event."
  }
];

/* =========================================
   02. PROJECT DISPLAY ORDER
========================================= */

/* HOME CONVEYOR — ALL 9 PROJECTS */

const featuredSlugs = [
  "logbook","okelvin","love-revolution","pepperoni-pizza-club",
  "OfftheCuff",
  "ryu",
  "omphi",
  
  
  
  "aq-zenda","valsason"
  
];

const homeThumbnailBySlug = {
  "logbook": "home-thumbs/lb.png",
  "okelvin": "home-thumbs/okelvin.png",
  "love-revolution": "home-thumbs/lr.png",
  
  "OfftheCuff": "home-thumbs/oc.png",
  "ryu": "home-thumbs/ryu.png",
  "omphi": "home-thumbs/omphi.png",
  
  "valsason": "home-thumbs/vss.png",
  
  "aq-zenda": "home-thumbs/aq.png",
  "pepperoni-pizza-club": "home-thumbs/ppc.png",
  
};

const projectSlugs = [
  "logbook",
  "ryu",
  "OfftheCuff",
  "valsason",
  "omphi",
  "aq-zenda"
];

const visualSlugs = [
  "okelvin",
  "love-revolution",
  "pepperoni-pizza-club"
];

const archiveOrder = [
  ...projectSlugs,
  ...visualSlugs
];

/* =========================================
   03. SHARED STATE
========================================= */

const conveyor = $("conveyor");
const track = $("conveyorTrack");
const character = $("characterCursor");
const bubble = $("cursorBubble");

let activeProject = 0;
let previousPage = "home";

let cursorX = -1000;
let cursorY = -1000;

/* =========================================
   04. BUILD HOME CONVEYOR
========================================= */

const conveyorProjects = featuredSlugs
  .map(slug => {
    const index = projects.findIndex(
      project => project.slug === slug
    );

    return {
      project: projects[index],
      index
    };
  })
  .filter(item => item.project && item.project.cover);

function createTile(project, index) {
  const tile = document.createElement("div");

  tile.className = "work-item";
  if (project.slug === "valsason") {
    tile.classList.add("is-valsason");
  }
  const photoSlugs = [
    "OfftheCuff",
    "omphi",
    "valsason",
    "aq-zenda"
  ];

  if (photoSlugs.includes(project.slug)) {
    tile.classList.add("is-photo");
  }
  tile.dataset.index = String(index);
  tile.tabIndex = 0;

  tile.setAttribute("role", "link");
  tile.setAttribute(
    "aria-label",
    `${project.title} 열기`
  );

  const wrap = document.createElement("div");
  wrap.className = "work-image-wrap";

  const img = document.createElement("img");
  img.className = "work-image";
  img.src = ASSET + (
    homeThumbnailBySlug[project.slug] ||
    project.homeCover ||
    project.cover
  );
  img.alt = project.title;
  img.draggable = false;

  wrap.appendChild(img);

  const caption = document.createElement("div");
  caption.className = "work-caption";
  caption.textContent = project.title;

  tile.append(wrap, caption);

  tile.addEventListener("keydown", event => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      openArchive(index);
    }
  });

  return tile;
}

/* Repeat three times for seamless looping */

for (let repeat = 0; repeat < 3; repeat++) {
  conveyorProjects.forEach(({ project, index }) => {
    track.appendChild(createTile(project, index));
  });
}

/* =========================================
   05. CONTINUOUS CONVEYOR
========================================= */

let beltWidth = 0;
let beltX = 0;
let beltReady = false;
let lastFrame = 0;
let pointerState = null;

const AUTO_SPEED = 42;

function normalizeBelt() {
  if (!beltWidth) return;

  while (beltX <= -2 * beltWidth) {
    beltX += beltWidth;
  }

  while (beltX > -beltWidth) {
    beltX -= beltWidth;
  }
}

function paintBelt() {
  track.style.transform =
    `translate3d(${beltX}px, 0, 0)`;
}

function measureBelt() {
  const first = track.children[0];

  const next =
    track.children[conveyorProjects.length];

  if (!first || !next) return;

  const width =
    next.offsetLeft - first.offsetLeft;

  if (width <= 0) return;

  if (!beltReady) {
    beltWidth = width;
    beltX = -width;
    beltReady = true;
  } else if (Math.abs(width - beltWidth) > 1) {
    const ratio = beltX / beltWidth;

    beltWidth = width;
    beltX = ratio * width;
  }

  normalizeBelt();
  paintBelt();
}

/* =========================================
   06. CURSOR TYPING TOOLTIP
========================================= */

let tooltipProject = null;
let typingTimer = null;

function changeTooltip(index) {
  if (index === tooltipProject) return;

  tooltipProject = index;

  clearInterval(typingTimer);
  typingTimer = null;

  if (!character || !bubble) return;

  bubble.textContent = "";
  character.classList.remove("talking");

  if (index === null) return;

  const project = projects[index];

  const text = project
    ? [project.title, project.tooltip]
        .filter(Boolean)
        .join("\n")
    : "";

  let count = 0;

  character.classList.add("talking");

  typingTimer = setInterval(() => {
    count += 1;
    bubble.textContent = text.slice(0, count);

    if (count >= text.length) {
      clearInterval(typingTimer);
      typingTimer = null;
    }
  }, 25);
}

function getHoveredIndex() {
  if (cursorX < 0 || cursorY < 0) {
    return null;
  }

  const element = document.elementFromPoint(
    cursorX,
    cursorY
  );

  const image = element?.closest(
    ".work-image-wrap"
  );

  const tile = image?.closest(".work-item");

  if (!tile) return null;

  return Number(tile.dataset.index);
}

/* =========================================
   07. CONVEYOR ANIMATION
========================================= */

function animate(time) {
  const delta = lastFrame
    ? Math.min((time - lastFrame) / 1000, 0.05)
    : 0.016;

  lastFrame = time;

  const homeVisible = !$("home").hidden;
  const modalClosed = $("preview").hidden;

  if (homeVisible && modalClosed && beltReady) {
    const hovered = getHoveredIndex();

    changeTooltip(hovered);

    if (!pointerState && hovered === null) {
      beltX -= AUTO_SPEED * delta;

      normalizeBelt();
      paintBelt();
    }
  } else {
    changeTooltip(null);
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
requestAnimationFrame(measureBelt);

window.addEventListener("load", measureBelt);
window.addEventListener("resize", measureBelt);

document.querySelectorAll(".work-image").forEach(img => {
  if (!img.complete) {
    img.addEventListener(
      "load",
      measureBelt,
      { once: true }
    );
  }
});

/* =========================================
   08. DRAG / CLICK / WHEEL
========================================= */

conveyor.addEventListener("pointerdown", event => {
  if (
    event.pointerType === "mouse" &&
    event.button !== 0
  ) {
    return;
  }

  pointerState = {
    id: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    lastX: event.clientX,
    moved: false,
    index: event.target.closest(".work-item")
      ?.dataset.index
  };

  if (event.pointerType === "mouse") {
    conveyor.setPointerCapture(event.pointerId);
  }
});

conveyor.addEventListener("pointermove", event => {
  if (
    !pointerState ||
    event.pointerId !== pointerState.id
  ) {
    return;
  }

  const state = pointerState;

  const distance = Math.hypot(
    event.clientX - state.startX,
    event.clientY - state.startY
  );

  if (distance > 7) {
    state.moved = true;
  }

  if (
    state.moved &&
    event.pointerType === "mouse"
  ) {
    beltX += event.clientX - state.lastX;

    normalizeBelt();
    paintBelt();
  }

  state.lastX = event.clientX;
});

conveyor.addEventListener("pointerup", event => {
  if (
    !pointerState ||
    event.pointerId !== pointerState.id
  ) {
    return;
  }

  const state = pointerState;
  pointerState = null;

  if (conveyor.hasPointerCapture(event.pointerId)) {
    conveyor.releasePointerCapture(event.pointerId);
  }

  const distance = Math.hypot(
    event.clientX - state.startX,
    event.clientY - state.startY
  );

  if (
    !state.moved &&
    distance <= 7 &&
    state.index !== undefined
  ) {
    openArchive(Number(state.index));
  }
});

conveyor.addEventListener("pointercancel", () => {
  pointerState = null;
});

conveyor.addEventListener(
  "wheel",
  event => {
    if (
      $("home").hidden ||
      !$("preview").hidden
    ) {
      return;
    }

    event.preventDefault();

    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    beltX -= delta;

    normalizeBelt();
    paintBelt();
  },
  { passive: false }
);

window.addEventListener("blur", () => {
  pointerState = null;
  cursorX = -1000;
  cursorY = -1000;

  changeTooltip(null);
});

/* =========================================
   09. WORKS INDEX
========================================= */

function hideWorksPreview() {
  $("worksHoverPreview").classList.remove(
    "visible"
  );
}

function moveWorksPreview(event) {
  const element = $("worksHoverPreview");

  if (!element.classList.contains("visible")) {
    return;
  }

  const w = element.offsetWidth;
  const h = element.offsetHeight;

  const x = Math.max(
    w / 2 + 10,
    Math.min(
      window.innerWidth - w / 2 - 10,
      event.clientX + w * 0.6
    )
  );

  const y = Math.max(
    h / 2 + 10,
    Math.min(
      window.innerHeight - h / 2 - 10,
      event.clientY
    )
  );

  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
}

function makeWorksRow(project) {
  const row = document.createElement("a");

  row.className = "works-row";
  row.href = `#archive/${project.slug}`;

  const title = document.createElement("span");
  title.className = "works-row-title";
  title.textContent = project.title;

  const category = document.createElement("span");
  category.className =
    "works-row-info works-row-category";
  category.textContent = project.type;

  const year = document.createElement("span");
  year.className =
    "works-row-info works-row-year";
  year.textContent = project.year;

  row.append(title, category, year);

  row.addEventListener("pointerenter", event => {
    if (
      event.pointerType !== "mouse" ||
      !project.cover
    ) {
      return;
    }

    $("worksHoverImage").src =
      ASSET + project.cover;

    $("worksHoverPreview").classList.add(
      "visible"
    );

    moveWorksPreview(event);
  });

  row.addEventListener(
    "pointermove",
    moveWorksPreview
  );

  row.addEventListener(
    "pointerleave",
    hideWorksPreview
  );

  row.addEventListener(
    "focus",
    hideWorksPreview
  );

  return row;
}

function renderWorks() {
  $("projectsList").replaceChildren();
  $("visualsList").replaceChildren();

  projectSlugs.forEach(slug => {
    const project = projects.find(
      p => p.slug === slug
    );

    if (project) {
      $("projectsList").appendChild(
        makeWorksRow(project)
      );
    }
  });

  visualSlugs.forEach(slug => {
    const project = projects.find(
      p => p.slug === slug
    );

    if (project) {
      $("visualsList").appendChild(
        makeWorksRow(project)
      );
    }
  });
}

renderWorks();

/* =========================================
   10. PAGE SWITCHING
========================================= */

function showPage(name) {
  const isPreview = name === "preview";

  if (!isPreview) {
    previousPage = name;
  }

  ["home", "works", "archive", "about"].forEach(id => {
    $(id).hidden = isPreview
      ? id !== previousPage
      : id !== name;
  });

  $("preview").hidden = !isPreview;

  const light =
    name === "works" ||
    name === "archive" ||
    (
      isPreview &&
      ["works", "archive"].includes(previousPage)
    );

  document.body.classList.toggle(
    "white-theme",
    light
  );

  document.body.classList.toggle(
    "modal-open",
    isPreview
  );

  hideWorksPreview();

  if (!isPreview) {
    window.scrollTo(0, 0);
  }

  if (name === "home") {
    requestAnimationFrame(measureBelt);
  }
}

/* =========================================
   11. SMALL PROJECT PREVIEW POPUP
========================================= */

function renderPreview(index) {
  const project = projects[index];

  if (!project) return;

  activeProject = index;

  const order = archiveOrder.indexOf(
    project.slug
  );

  $("previewNumber").textContent =
    `${String(order + 1).padStart(2, "0")} / ${archiveOrder.length}`;

  $("previewTitle").textContent =
    project.title;

  $("previewCategory").textContent =
    `${project.category} — ${project.year}`;

  const gallery = $("previewGallery");
  gallery.replaceChildren();

  const sources = [
    project.cover,
    ...(project.images || []).map(item => item[0])
  ].filter(Boolean);

  [...new Set(sources)]
    .slice(0, 3)
    .forEach(src => {
      const img = document.createElement("img");

      img.src = ASSET + src;
      img.alt = project.title;
      img.draggable = false;

      gallery.appendChild(img);
    });

  showPage("preview");
}

function openPreview(index) {
  const hash =
    `#preview/${projects[index].slug}`;

  if (location.hash === hash) {
    renderPreview(index);
  } else {
    location.hash = hash;
  }
}

/* =========================================
   12. DEFAULT PROJECT GALLERY
========================================= */

function renderDefaultGallery(gallery, project) {
  (project.images || []).forEach(
    ([src, caption, size]) => {
      const figure =
        document.createElement("figure");

      figure.className = "gallery-item";

      if (
        size === "wide" ||
        size === "narrow"
      ) {
        figure.classList.add(size);
      }

      const img = document.createElement("img");

      img.src = ASSET + src;
      img.alt =
        `${project.title} — ${caption}`;

      img.loading = "lazy";

      const text =
        document.createElement("figcaption");

      text.textContent = caption;

      figure.append(img, text);
      gallery.appendChild(figure);
    }
  );
}

/* =========================================
   13. LOGBOOK CUSTOM GALLERY
========================================= */

function renderLogbookGallery(gallery) {
  const folder = `${ASSET}logbook/`;

  // Nine individual track symbols
  const symbols = Array.from(
    { length: 9 },
    (_, i) =>
      `${folder}logbook-symbol-${String(i + 1).padStart(2, "0")}.png`
  );

  gallery.innerHTML = `
    <div class="logbook-layout">

      <!-- 01 / VISUAL SYSTEM -->
      <section class="logbook-section">

        <div class="logbook-section-head">
          <span>01 / VISUAL SYSTEM</span>
          
        </div>

        <div class="logbook-section-copy">
          <h2>Mapping the journey.</h2>

          <p>
            송도, 몽골, 평창, 서울, 제주에서 출발한 지형을 하나의 가상 지도로 재구성했다.
            각 트랙의 이야기를 상징하는 기호를 제작하고, 이를 지도에 적용해 하나의 여정으로 연결했다.
          </p>
        </div>

        <!-- SOURCE MAPS / TOPOGRAPHY -->
        <div class="logbook-maps-grid">

          <figure class="logbook-map-source">
            <div class="logbook-map-media">
              <img
                src="${folder}logbook-map-12.png"
                alt="송도, 몽골, 평창, 서울, 제주의 지도 윤곽"
                loading="lazy">
            </div>

            <figcaption>
              <strong>01 / SOURCE MAPS</strong>
              <span>
                SONGDO · MONGOLIA · PYEONGCHANG
                · SEOUL · JEJU
              </span>
            </figcaption>
          </figure>

          <figure class="logbook-map-terrain">
            <div class="logbook-map-media">
              <img
                src="${folder}logbook-symbol-10.png"
                alt="LOGBOOK 등고선 지도"
                loading="lazy">
            </div>

            <figcaption>
              <strong>02 / TOPOGRAPHY</strong>
              <span>IMAGINARY LOGBOOK TERRAIN</span>
            </figcaption>
          </figure>

        </div>

        <!-- NINE INDIVIDUAL TRACK SYMBOLS -->
        <div class="logbook-subsection-heading">
          <span>03 / TRACK SYMBOLS</span>
          
        </div>

        <div
          class="logbook-symbol-row"
          aria-label="아홉 개의 트랙 심벌">

          ${symbols.map((src, i) => `
            <figure class="logbook-symbol-item">
              <img
                src="${src}"
                alt="LOGBOOK 트랙 심벌 ${i + 1}"
                loading="lazy">

              <figcaption>
                ${String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          `).join("")}

        </div>

        <!-- FINAL COMBINED MAP -->
        <div class="logbook-subsection-heading logbook-final-heading">
          <span>04 / FINAL MAP</span>
          
        </div>

        <figure class="logbook-final-map">
          <img
            src="${folder}logbook-map-11.png"
            alt="LOGBOOK 완성 지도와 트랙 심벌"
            loading="lazy">
        </figure>

      </section>

      <!-- 02 / TRACKLIST -->
      <section class="logbook-section">

        <div class="logbook-section-head">
          <span>02 / TRACKLIST</span>
          
        </div>

        <div class="logbook-section-copy">
          <h2>The Tracklist.</h2>

          <p>
            트랙리스트를 하나의 지도처럼 제작해 트랙이 새로운 길의 지표가 되도록 하였다.
          </p>
        </div>

        <div class="logbook-tracklist-grid">

          <figure>
            <img
              src="${folder}track_yellow_최종Artboard-1_1.png"
              alt="LOGBOOK 트랙리스트 첫 번째 디자인"
              loading="lazy">
          </figure>

          <figure>
            <img
              src="${folder}track_yellow_최종Artboard-1_2.png"
              alt="LOGBOOK 트랙리스트 두 번째 디자인"
              loading="lazy">
          </figure>

        </div>

      </section>

      <!-- 03 / CONCEPT PHOTOS -->
      <section class="logbook-section">

        <div class="logbook-section-head">
          <span>03 / CONCEPT PHOTOS</span>
          
        </div>

        <div class="logbook-section-copy">
          <h2>Into the landscape.</h2>

          <p>
            음악에 담긴 장소와 자연의 감각을 담아 아티스트 프로필 촬영을 진행했다.
          </p>
        </div>

        <div class="logbook-photo-grid">

          <figure>
            <img
              src="${folder}하늘솥.png"
              alt="LOGBOOK 콘셉트 사진 1"
              loading="lazy">
          </figure>

          <figure>
            <img
              src="${folder}rock_1.png"
              alt="LOGBOOK 콘셉트 사진 2"
              loading="lazy">
          </figure>

          <figure>
            <img
              src="${folder}godong_1.png"
              alt="LOGBOOK 콘셉트 사진 3"
              loading="lazy">
          </figure>

        </div>

      </section>

      <!-- 04 / MUSIC VIDEO -->
      <section class="logbook-section">

        <div class="logbook-section-head">
          <span>04 / MUSIC VIDEO</span>
          
        </div>

        <div class="logbook-section-copy">
          <h2>The journey unfolds.</h2>

          <p>
            첫 트랙인 <GODONG>의 뮤직비디오에 각 트랙별 심벌을 순서대로 등장시켜
            앞으로 펼쳐질 여정을 암시하도록 구성했다.
          </p>
        </div>

        <div class="logbook-video">
          <iframe
            src="https://www.youtube.com/embed/OAKkAfwNIa0"
            title="LOGBOOK Music Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>

      </section>

    </div>
  `;
}

/* =====================================
   RYU — CONCERT VISUAL ARCHIVE
===================================== */



function renderRyuGallery(gallery) {

  const media = {
    reminisce: "ryu/25-2poster_text.png",

    posters: [
      {
        src: "ryu/ryu-poster01.jpg",
        title: "24-1 RSVP"
      },
      {
        src: "ryu/ryu-poster02.jpg",
        title: "24-2 RAVE"
      },
      {
        src: "ryu/ryu-poster03.png",
        title: "SKY NEWGENERATION HIPHOP CONCERT"
      },
      {
        src: "ryu/ryu-poster04.png",
        title: "25-1 RESONANT"
      }
    ],

    bracelet: "ryu/팔찌_RYU_수정.jpg",
    hoodieMockup: "ryu/reminisce-hoodie-mockup.png",
    hoodieReal: "ryu/reminisce-hoodie-real.jpg"
  };

  const image = (src, alt, className = "") => `
    <figure class="ryu-image ${className}">
      <img
        src="${ASSET}${src}"
        alt="${alt}"
        loading="lazy">
    </figure>
  `;

  gallery.innerHTML = `
    <div class="ryu-layout">

      <!-- 01 / CONCERT VISUALS -->
      <section class="ryu-section">

        <div class="ryu-section-label">
          <span>01 / CONCERT VISUALS</span>
          
        </div>

        <div class="ryu-feature-intro">
          <h2>Concept to Visual</h2>

          <p>
            공연마다 고유한 콘셉트를 설정하고, 이를 바탕으로 공연의 분위기와 정체성을 전달할 수 있는
            메인 그래픽과 포스터 비주얼을 제작하였다.
          </p>
        </div>

        <div class="ryu-feature-poster">
          ${image(
            media.reminisce,
            "REMINISCE Main Concert Poster"
          )}

          <p class="ryu-reminisce-caption">
            2025 Winter Concert REMINISCE
            겨울의 노스텔지어를 일으킬 수 있는 회상과 추억의 이미지를 비주얼로 표현했다.
          </p>
        </div>

        <div class="ryu-archive-heading">
          <span>CONCERT POSTER ARCHIVE</span>
          <span>SELECTED WORKS</span>
        </div>

        <div class="ryu-poster-archive">
          ${media.posters.map((poster) => `
            <figure class="ryu-archive-poster">
              <img
                src="${ASSET}${poster.src}"
                alt="${poster.title}"
                loading="lazy">

              <figcaption class="ryu-poster-title">
                ${poster.title}
              </figcaption>
            </figure>
          `).join("")}
        </div>

      </section>

      <!-- 02 / MERCHANDISE -->
      <section class="ryu-section">

        <div class="ryu-section-label">
          <span>02 / MERCHANDISE</span>
          
        </div>

        <div class="ryu-feature-intro">
          <h2>Beyond the poster.</h2>

          <p>
            공연의 비주얼 아이덴티티를 후드 집업과 팔찌에 적용해 머천다이즈로 확장하였다.
          </p>
        </div>

        <!-- bracelet main -->
        <div class="ryu-merch-main">
          ${image(
            media.bracelet,
            "REMINISCE Bracelet Merchandise"
          )}
        </div>

        <!-- hoodie sub -->
        <div class="ryu-merch-grid">

          <figure class="ryu-merch-item">
            <img
              src="${ASSET}${media.hoodieMockup}"
              alt="REMINISCE Hoodie Mockup"
              loading="lazy">
            <figcaption>HOODIE MOCKUP</figcaption>
          </figure>

          <figure class="ryu-merch-item ryu-merch-real">
            <img
              src="${ASSET}${media.hoodieReal}"
              alt="REMINISCE Hoodie Real Detail"
              loading="lazy">
            <figcaption>HOODIE DETAIL</figcaption>
          </figure>

        </div>

      </section>

      <!-- 03 / MUSIC VIDEO -->
      <section class="ryu-section">

        <div class="ryu-section-label">
          <span>03 / MUSIC VIDEO</span>
          
        </div>

        <div class="ryu-video">
          <iframe
            src="https://www.youtube.com/embed/s6_7QGhPO88"
            title="RYU Music Video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </div>

      </section>

    </div>
  `;
}



/* =====================================
   VALSASON — CUSTOM GALLERY V2
===================================== */

function renderValsasonGallery(gallery) {

  const folder = `${ASSET}valsason/`;

  const posters = [
    "valsason-poster01.png",
    "valsason-poster02.png",
    "valsason-poster03.png",
    "valsason-poster04.png"
  ];

  const episodes = [
    { src: "valsason-ep05.png", name: "EP.05" },
    { src: "valsason-ep16.png", name: "EP.16" }
  ];

  // 실제 유튜브 영상 ID를 입력하면 자동 표시
  const mainVideoId = "pwaHeev472k";

  // 인스타그램 릴스의 실제 permalink를 입력
  // 예: https://www.instagram.com/reel/실제ID/
  
  const reels = [
    {
      label: "TOP PERFORMING REEL",
      views: "410K",
      url: "https://www.instagram.com/reel/DFSOwk7P958/"
    },
    {
      label: "SELECTED REEL 02",
      views: "",
      url: "https://www.instagram.com/reel/DH5rYeDvH7u/"
    },
    {
      label: "SELECTED REEL 03",
      views: "",
      url: "https://www.instagram.com/reel/DHN6DtgPcLb/"
    }
  ];


  const validInstagramReel = url =>
    /^https:\/\/(?:www\.)?instagram\.com\/reel\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/.test(url);

  gallery.innerHTML = `
    <div class="valsason-layout">

      <!-- CHANNEL IMPACT -->
      <div class="valsason-stats">
        <div>
          <strong>410K</strong>
          <span>TOP INSTAGRAM REEL VIEWS</span>
        </div>
        <div>
          <strong>644</strong>
          <span>SUBSCRIBERS</span>
        </div>
        <div>
          <strong>20+</strong>
          <span>EPISODES PRODUCED</span>
        </div>
        
      </div>

      <!-- 01 / VISUAL IDENTITY -->
      <section class="valsason-section">

        <div class="valsason-label">
          <span>01 / VISUAL IDENTITY</span>
        </div>

        <div class="valsason-intro">
          <h2>From name to symbol.</h2>
          <p>‘발사손’의 초성인 ㅂㅅㅅ과 이름에서 따온 발사하는 손 형태를 결합해
          채널의 정체성을 상징하는 로고를 제작했다.
자유롭고 직설적인 대화의 태도를 간결하고 위트 있는 그래픽으로 표현했다.</p>
        </div>

        <figure class="valsason-logo">
          <img
            src="${folder}valsason-logo.png"
            alt="VALSASON Logo"
            loading="lazy">
        </figure>

      </section>

      <!-- 02 / GRAPHIC SYSTEM -->
      <section class="valsason-section">

        <div class="valsason-label">
          <span>02 / GRAPHIC SYSTEM</span>
          
        </div>

        <div class="valsason-intro">
          <h2>Four rules, one attitude.</h2>
          <p>발사손이 지향하는 대화의 태도를 네 가지 계명으로 정리하고 포스터 시리즈로 제작했다.
반복되는 손 모티프와 강한 타이포그래피, 고채도의 컬러로 채널의 유쾌한 성격을 시각화했다.</p>
        </div>

        <div class="valsason-posters">
          ${posters.map((src, i) => `
            <figure>
              <img
                src="${folder}${src}"
                alt="VALSASON Rule ${i + 1}"
                loading="lazy">
            </figure>
          `).join("")}
        </div>

      </section>

      <!-- 03 / CONTENT PRODUCTION -->
      <section class="valsason-section">

        <div class="valsason-label">
          <span>03 / CONTENT PRODUCTION</span>
          
        </div>

        <div class="valsason-intro">
          <h2>Talk it out.</h2>
          <p>사회와 문화의 다양한 이야기를 20대의 시선으로 풀어내는 비디오 팟캐스트.
주제 기획과 촬영, 편집, 썸네일 디자인부터 숏폼 콘텐츠 발행과 채널 운영까지 진행했다.</p>
        </div>

        <div class="valsason-episodes">
          ${episodes.map(ep => `
            <figure>
              <img
                src="${folder}${ep.src}"
                alt="${ep.name}"
                loading="lazy">
              <figcaption>${ep.name}</figcaption>
            </figure>
          `).join("")}
        </div>

        <div class="valsason-feature-video">
          ${mainVideoId
            ? `
              <iframe
                src="https://www.youtube.com/embed/${encodeURIComponent(mainVideoId)}"
                title="VALSASON Featured Episode"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>
            `
            : `
              <div class="valsason-video-placeholder">
                <span>FEATURED EPISODE</span>
                <small>VIDEO TO BE ADDED</small>
              </div>
            `}
        </div>

      </section>

      <!-- 04 / SHORT-FORM CONTENTS -->
      <section class="valsason-section">

        <div class="valsason-label">
          <span>04 / SHORT-FORM CONTENTS</span>
          
        </div>

        <div class="valsason-intro">
          <h2>Made to circulate.</h2>
          <p>본편의 대화를 짧고 직관적인 영상으로 재구성해 인스타그램 릴스와 숏폼 콘텐츠로 확장했다.
주목도를 높이는 장면 구성과 편집 리듬, 제목을 통해 새로운 시청자들의 유입을 유도했다.</p>
        </div>

        <div class="valsason-reels">
          ${reels.map((reel, i) => `
            <div class="valsason-reel-item">

              <div class="valsason-reel-media">
                ${validInstagramReel(reel.url)
                  ? `
                    <iframe
                      src="${reel.url.split("?")[0].replace(/\/?$/, "/")}embed/"
                      title="${reel.label}"
                      loading="lazy"
                      allowfullscreen>
                    </iframe>
                  `
                  : `
                    <div class="valsason-reel-placeholder">
                      <span>REEL ${String(i + 1).padStart(2, "0")}</span>
                    </div>
                  `}
              </div>

              <div class="valsason-reel-caption">
                <span>${reel.label}</span>
                ${reel.views ? `<strong>${reel.views} VIEWS</strong>` : ""}
              </div>

            </div>
          `).join("")}
        </div>

      </section>

    </div>
  `;
}



/* =====================================
   OfftheCuff — CUSTOM GALLERY
===================================== */

function renderOfftheCuffGallery(gallery) {

  const folder = `${ASSET}offthecuff/`;

  /* 01 — CAMPAIGN VISUALS */

  const campaignFeatured = {
    src: "하2.png",
    alt: "OfftheCuff Main Campaign"
  };

  const campaign = [
    {
      src: "하21.png",
      alt: "Campaign Duo"
    },
    {
      src: "축12.png",
      alt: "Football Campaign"
    },
    {
      src: "하25.png",
      alt: "Blue Jersey Portrait"
    },
    {
      src: "야6.png",
      alt: "Baseball Campaign"
    },
    {
      src: "축썸 긴버젼.JPG",
      alt: "Football Editorial"
    },
    {
      src: "하7.png",
      alt: "Sportswear Styling"
    },
    {
      src: "KakaoTalk_20260828_045823234_10.jpg",
      alt: "Outdoor Campaign"
    }
  ];

  /* 02 — WOMENSWEAR */

  const womenswear = [
    {
      src: "원숄6.png",
      alt: "Angel Wing Back Graphic"
    },
    {
      src: "원숄더8.png",
      alt: "One Shoulder Top"
    },
    {
      src: "원23.JPG",
      alt: "Womenswear Editorial"
    },
    {
      src: "KakaoTalk_20260829_004421721_08.png",
      alt: "Womenswear Styling"
    }
  ];

  /* PRODUCT LINEUP */

  const lineup = {
    src: "clothes.png",
    alt: "OfftheCuff Product Design Lineup"
  };

  /* 03 — FOUR SEASONS */

  const seasons = [
    {
      season: "25-1",
      title: "FAIRYCORE",
      keywords: "PLAYFUL / DOODLES / FAIRY",
      src: "1page_tex.png",
      alt: "25-1 Fairycore Key Visual"
    },
    {
      season: "25-2",
      title: "STREET GRAFFITI",
      keywords: "STREET / GRAFFITI / SKATE",
      src: "25-2.png",
      alt: "25-2 Street Graffiti Key Visual"
    },
    {
      season: "26-1",
      title: "GIRLISH CHECK",
      keywords: "GIRLISH / CHECK / EMBROIDERY",
      src: "TEASER1PG.png",
      alt: "26-1 Girlish Check Key Visual"
    },
    {
      season: "26-2",
      title: "COOL YOUTH",
      keywords: "HIP / COOL / YOUTHFUL",
      src: "teaser_1page.png",
      alt: "26-2 Cool Youth Key Visual"
    }
  ];

  const image = (src, alt, className = "") => `
    <figure class="otc-image ${className}">
      <img
        src="${folder}${src}"
        alt="${alt}"
        loading="lazy">
    </figure>
  `;

  
  const officialLinks = {
    instagram: "https://www.instagram.com/OfftheCuff_yonsei/",
    website: "https://sites.google.com/view/offthecuff/home?pli=1&authuser=0"
  };


  /* =====================================
     PAGE CONTENT
  ===================================== */

  gallery.innerHTML = `
    <div class="otc-layout">

      <!-- BRAND PERFORMANCE -->
      <div class="otc-stats">

        <div>
          <strong>₩104.8M</strong>
          <span>TOTAL BRAND SALES</span>
        </div>

        <div>
          <strong>₩47.9M</strong>
          <span>2026-1 SEASON SALES</span>
        </div>

        <div>
          <strong>2K+</strong>
          <span>BRAND FOLLOWERS</span>
        </div>

      </div>

      <!-- 01 / CAMPAIGN VISUALS -->
      <section class="otc-section">

        <div class="otc-section-label">
          <span>01 / CAMPAIGN VISUALS</span>
          
        </div>

        <div class="otc-section-heading">
          <h2>Season as a campaign.</h2>

          <p>스포츠 유니폼의 문법을 바탕으로 학교의 상징을 패션적인 방식으로 재해석했다.
제품과 스타일링, 촬영 무드까지 하나의 시즌 캠페인으로 구성했다.</p>
        </div>

        <!-- 26-2 CAMPAIGN KEY VISUAL -->
        <figure class="otc-campaign-keyvisual">
          <img
            src="${folder}TEASER.png"
            alt="OfftheCuff 26-2 Campaign Key Visual"
            loading="lazy">
        </figure>

        <!-- FEATURE + SCROLLING LOOKBOOK -->
        <div class="otc-campaign-showcase">

          <figure class="otc-campaign-feature">
            <img
              src="${folder}${campaignFeatured.src}"
              alt="${campaignFeatured.alt}"
              loading="lazy"
              draggable="false">
          </figure>

          <div class="otc-lookbook" id="otcLookbook">

            ${campaign.map(item => `
              <figure class="otc-lookbook-item">
                <img
                  src="${folder}${item.src}"
                  alt="${item.alt}"
                  loading="lazy"
                  draggable="false">
              </figure>
            `).join("")}

          </div>

        </div>

        <div class="otc-lookbook-footer">
          <span>26-2 CAMPAIGN / 08 IMAGES</span>
          <span>DRAG TO EXPLORE →</span>
        </div>

      </section>

      <!-- 02 / MERCHANDISE DESIGN -->
      <section class="otc-section otc-merch-section">

        <div class="otc-section-label">
          <span>02 / MERCHANDISE DESIGN</span>
      
        </div>

        <div class="otc-section-heading">
          <h2>From trend to merchandise.</h2>

          <p>블루와 화이트의 학교 아이덴티티를 유지하면서 다양한 실루엣의 의류로 확장했다.
여성복 스타일링과 그래픽 디테일을 통해 학교 머천다이즈를 패션 아이템으로 풀어냈다.</p>
        </div>

        <!-- WOMENSWEAR EDITORIAL -->
        <div class="otc-womenswear-grid">

          ${womenswear.map(item => `
            <figure class="otc-womenswear-item">
              <img
                src="${folder}${item.src}"
                alt="${item.alt}"
                loading="lazy">
            </figure>
          `).join("")}

        </div>

        <!-- PRODUCT DESIGN LINEUP -->
        <div class="otc-product-heading">
          <span>PRODUCT LINEUP</span>
        </div>

        <div class="otc-product-lineup">
          ${image(lineup.src, lineup.alt)}
        </div>

      </section>

      <!-- 03 / GRAPHIC CAMPAIGN ARCHIVE -->
      <section class="otc-section">

        <div class="otc-section-label">
          <span>03 / GRAPHIC CAMPAIGN ARCHIVE</span>
          
        </div>

        <div class="otc-section-heading">
          <h2>Four seasons, four moods.</h2>

          <p>각 시즌마다 고유한 콘셉트를 설정하고, 그에 맞는 키비주얼과 프로모션 그래픽을 제작했다.
서로 다른 분위기를 통해 OfftheCuff의 시각적 정체성을 확장했다.</p>
        </div>

        <div class="otc-season-grid">

          ${seasons.map(item => `
            <figure class="otc-season-card">

              <div class="otc-season-image">
                <img
                  src="${folder}${item.src}"
                  alt="${item.alt}"
                  loading="lazy">
              </div>

              <figcaption class="otc-season-caption">

                <div class="otc-season-info">
                  <span>${item.season}</span>
                  <strong>${item.title}</strong>
                </div>

                <p>${item.keywords}</p>

              </figcaption>

            </figure>
          `).join("")}

        </div>

      </section>


    </div>
  `;

  /* =====================================
     INDEPENDENT LOOKBOOK DRAG
  ===================================== */

  const lookbook = gallery.querySelector("#otcLookbook");

  if (!lookbook) return;

  let dragging = false;
  let startX = 0;
  let startScroll = 0;
  let pointerId = null;

  lookbook.addEventListener("pointerdown", event => {

    if (
      event.pointerType !== "mouse" ||
      event.button !== 0
    ) {
      return;
    }

    dragging = true;
    pointerId = event.pointerId;
    startX = event.clientX;
    startScroll = lookbook.scrollLeft;

    lookbook.classList.add("is-dragging");
    lookbook.setPointerCapture(pointerId);
  });

  lookbook.addEventListener("pointermove", event => {

    if (!dragging || event.pointerId !== pointerId) {
      return;
    }

    const distance = event.clientX - startX;
    lookbook.scrollLeft = startScroll - distance;
  });

  const stopDragging = () => {
    dragging = false;
    pointerId = null;
    lookbook.classList.remove("is-dragging");
  };

  lookbook.addEventListener("pointerup", stopDragging);
  lookbook.addEventListener("pointercancel", stopDragging);
  lookbook.addEventListener("lostpointercapture", stopDragging);
}




/* =========================================
   O KELVIN — TYPOGRAPHY EXPLORATION
========================================= */

function renderOKelvinGallery(gallery) {

  const folder = `${ASSET}0kelvin/`;

  /* ORIGINAL FILE NAMES */

  const pairs = [
    {
      logo: "0kelvin_type-02.png",
      track: "0kelvin_track-10.png"
    },
    {
      logo: "0kelvin_type-03.png",
      track: "0kelvin_track-11.png"
    },
    {
      logo: "0kelvin_type-04.png",
      track: "0kelvin_track-12.png"
    },
    {
      logo: "0kelvin_type-05.png",
      track: "0kelvin_track-13.png"
    },
    {
      logo: "0kelvin_type-06.png",
      track: "0kelvin_track-14.png"
    },
    {
      logo: "0kelvin_type-07.png",
      track: "0kelvin_track-15.png"
    },
    {
      logo: "0kelvin_type-08.png",
      track: "0kelvin_track-16.png"
    }
  ];

  /* =====================================
     PAGE CONTENT
  ===================================== */

  gallery.innerHTML = `
    <div class="okelvin-layout">

      <section class="okelvin-section">

        <!-- SECTION LABEL -->
        <div class="okelvin-section-label">
          <span>01 / TYPOGRAPHY EXPLORATION</span>
          
        </div>

        <!-- INTRO -->
        <div class="okelvin-intro">

          <h2>One name, different textures.</h2>

          <p>각 트랙의 해석에 따라 O KELVIN 레터링을 서로 다른 형태와 질감으로 변주했다.</p>

        </div>

        <!-- CLICK GUIDE -->
        <div class="okelvin-click-hint">
          CLICK TYPE
        </div>

        <!-- TYPOGRAPHY PAIR -->
        <div
          class="okelvin-pair"
          id="okelvinPair"
          role="button"
          tabindex="0"
          aria-label="다음 타이포그래피 보기">

          <!-- LEFT / O KELVIN -->
          <figure class="okelvin-panel">

            <img
              id="okelvinLogoImage"
              src="${folder}${pairs[0].logo}"
              alt="O KELVIN Typography"
              draggable="false">

          </figure>

          <!-- RIGHT / TRACK TYPOGRAPHY -->
          <figure class="okelvin-panel">

            <img
              id="okelvinTrackImage"
              src="${folder}${pairs[0].track}"
              alt="Track Typography"
              draggable="false">

          </figure>

        </div>

      </section>

      
      <!-- 02 / ALBUM APPLICATION -->
      <section class="okelvin-section okelvin-application">

        <div class="okelvin-section-label">
          <span>02 / ALBUM APPLICATION</span>
          
        </div>

        <div class="okelvin-intro">
          <h2>Beyond typography.</h2>

          <p> 나폴리탄 괴담의 지침서를 읽는 듯한 기묘한 현실감과, 무의식 속 우주를 여행하는 듯한
          비현실적인 분위기를 함께 담고자 했다. 낡은 필름과 인쇄물을 연상시키는 거친 질감을 활용해
          앨범 커버를 리터칭하고, 트랙리스트는 누군가가 찢어낸 노트를 훔쳐보는 듯한 느낌을 주었다. </p>
        </div>

        <!-- ALBUM APPLICATION GALLERY -->
        <div class="okelvin-application-grid">

          <!-- 01 / ALBUM COVER -->
          <figure class="okelvin-application-item">

            <div class="okelvin-application-media">
              <img
                src="${folder}0kelvin_cover.png"
                alt="O KELVIN Album Cover"
                loading="lazy">
            </div>

            <figcaption>
              ALBUM COVER / RETOUCHING
            </figcaption>

          </figure>

          <!-- 02 / TRACKLIST -->
          <figure class="okelvin-application-item">

            <div class="okelvin-application-media">
              <img
                src="${folder}0kelvin_track2.png"
                alt="O KELVIN Tracklist"
                loading="lazy">
            </div>

            <figcaption>
              TRACKLIST / TYPOGRAPHY
            </figcaption>

          </figure>

          <!-- 03 / BACK PAGE -->
          <figure class="okelvin-application-item">

            <div class="okelvin-application-media">
              <img
                src="${folder}0kelvin_track_back22.png"
                alt="O KELVIN Back Page"
                loading="lazy">
            </div>

            <figcaption>
              BACK PAGE / TYPOGRAPHY
            </figcaption>

          </figure>

        </div>


      </section>


    </div>
  `;


  /* =====================================
     CLICK TRANSITION
  ===================================== */

  const pairWrap =
    gallery.querySelector("#okelvinPair");

  const logoImage =
    gallery.querySelector("#okelvinLogoImage");

  const trackImage =
    gallery.querySelector("#okelvinTrackImage");

  let currentIndex = 0;
  let isAnimating = false;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* IMAGE PRELOAD */

  function preloadImage(src) {

    return new Promise(resolve => {

      const img = new Image();

      img.onload = resolve;
      img.onerror = resolve;

      img.src = folder + src;

      if (img.complete) {
        resolve();
      }

    });
  }


  /* UPDATE BOTH IMAGES */

  function updatePair(index) {

    currentIndex = index;

    const pair = pairs[currentIndex];

    // LEFT
    logoImage.src = folder + pair.logo;

    logoImage.alt =
      `O KELVIN Typography ${currentIndex + 1}`;

    // RIGHT
    trackImage.src = folder + pair.track;

    trackImage.alt =
      `Track Typography ${currentIndex + 1}`;

    // ACCESSIBILITY
    pairWrap.setAttribute(
      "aria-label",
      `다음 타이포그래피 보기. 현재 ${currentIndex + 1} / ${pairs.length}`
    );
  }


  /* SMOOTH TRANSITION */

  async function nextPair() {

    if (isAnimating) return;

    isAnimating = true;

    const nextIndex =
      (currentIndex + 1) % pairs.length;

    const next = pairs[nextIndex];

    let fadeOut;
    let fadeIn;

    try {

      // Load next pair before transition
      await Promise.all([
        preloadImage(next.logo),
        preloadImage(next.track)
      ]);

      if (reducedMotion) {
        updatePair(nextIndex);
        return;
      }

      // Fade out current pair
      fadeOut = pairWrap.animate(
        [
          {
            opacity: 1,
            transform: "translateY(0)"
          },
          {
            opacity: 0,
            transform: "translateY(-6px)"
          }
        ],
        {
          duration: 180,
          easing: "ease-in",
          fill: "forwards"
        }
      );

      await fadeOut.finished;

      pairWrap.style.opacity = "0";
      fadeOut.cancel();

      // Change both images
      updatePair(nextIndex);

      // Fade in next pair
      fadeIn = pairWrap.animate(
        [
          {
            opacity: 0,
            transform: "translateY(8px)"
          },
          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 350,
          easing: "cubic-bezier(.22, 1, .36, 1)",
          fill: "forwards"
        }
      );

      await fadeIn.finished;

    } catch (error) {

      // Keep gallery usable if animation fails
      updatePair(nextIndex);

    } finally {

      pairWrap.style.opacity = "";

      fadeOut?.cancel();
      fadeIn?.cancel();

      isAnimating = false;

    }
  }


  /* CLICK ANY TYPOGRAPHY */

  pairWrap.addEventListener("click", nextPair);


  /* KEYBOARD ACCESSIBILITY */

  pairWrap.addEventListener("keydown", event => {

    if (
      event.key === "Enter" ||
      event.key === " " ||
      event.key === "ArrowRight"
    ) {

      event.preventDefault();
      nextPair();

    }

  });

}


/* =========================================
   omphi — FINAL / CONSOLIDATED
   Brand Film → Physical Interaction →
   Visual Language → Web → Exhibition
========================================= */

function renderomphiGallery(gallery) {
  const folder = `${ASSET}omphi/assets/`;
  const img = name => `${folder}images/${name}`;
  const model = name => `${folder}models/${name}`;

  // 원본 omphi 표정 8개
  const expressions = [
    ["blue-sleep.png", "pink-basic.png"],
    ["blue-cry.png", "pink-shiny.png"],
    ["blue-basic.png", "pink-cry.png"],
    ["blue-shiny.png", "pink-wink.png"],
    ["blue-surprised.png", "pink-smile.png"],
    ["blue-star.png", "pink-squeeze.png"],
    ["blue-squeeze.png", "pink-shiny.png"],
    ["blue-smile.png", "pink-sleep.png"]
  ];

  // 표정 뒤에서 부유하는 기존 모티프만 유지
  const motifFiles = [
    "symbol_web-01.png",
    "symbol_web-02.png",
    "symbol_web-03.png",
    "symbol_web-04.png",
    "symbol_web-05.png"
  ];

  const floatingMotifs = Array.from({ length: 28 }, (_, i) => {
    const col = i % 7;
    const row = Math.floor(i / 7);

    const x =
      ((col + 0.5) / 7) * 100 +
      Math.sin(i * 7.13) * 3;

    const y =
      ((row + 0.5) / 4) * 100 +
      Math.cos(i * 5.37) * 4;

    const size = 60 + ((i * 37) % 110);

    return `
      <img
        class="omphi-v2-floater"
        src="${img(motifFiles[i % motifFiles.length])}"
        alt=""
        loading="lazy"
        draggable="false"
        style="
          left:${x}%;
          top:${y}%;
          width:${size}px;
          --delay:${-(i % 7)}s;
          --duration:${7 + (i % 6)}s;
          --distance:${10 + (i % 5) * 4}px;
        ">
    `;
  }).join("");

  // PET/HUB 공통 영상 위젯
  const videoWidget = (title, videoId) => `
    <details class="omphi-v2-video-widget">
      <summary>
        <span class="omphi-v2-widget-icon" aria-hidden="true">▶</span>
        <span>${title}</span>
        <span class="omphi-v2-widget-arrow" aria-hidden="true">↗</span>
      </summary>

      <div class="omphi-v2-widget-player">
        <iframe
          src="https://www.youtube.com/embed/${videoId}"
          title="${title}"
          loading="lazy"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowfullscreen>
        </iframe>
      </div>
    </details>
  `;

  gallery.innerHTML = `
    <div class="omphi-v2-layout">

      <!-- 00 / BRAND FILM -->
      <section class="omphi-v2-section">

        <div class="omphi-v2-label">
          <span>00 / BRAND FILM</span>
          
        </div>

        <div class="omphi-v2-film">
          <iframe
            src="https://www.youtube.com/embed/gjb4QVQwdbw"
            title="omphi Brand Film"
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowfullscreen>
          </iframe>
        </div>

      </section>


      <!-- 01 / PHYSICAL INTERACTION -->
      <section class="omphi-v2-section">

        <div class="omphi-v2-label">
          <span>01 / PHYSICAL INTERACTION</span>
          
        </div>

        <div class="omphi-v2-intro">
          <h2>Touch becomes emotion.</h2>

          <p>
            말랑한 실리콘 소재의 펫을 누르거나 감싸 안고, 쓰다듬는 행동에 따라 빛과 표정으로 반응하도록 기획했다. Arduino 프로그래밍과 회로 연결, 납땜을 직접 진행해
            실제로 작동하는 피지컬 프로토타입을 구현했다.
          </p>
        </div>

        <!-- PET FILM WIDGET -->
        <div class="omphi-v2-actionbar omphi-v2-actionbar--web">
          ${videoWidget("PET INTERACTION FILM", "kMOkN2JBj7M")}
        </div>

        <!-- PET INTERACTION -->
        <div class="omphi-v2-pet-grid">

          <div class="omphi-v2-pet-copy">
            <span class="omphi-v2-mini-label">01 / TOUCH</span>
            <h3>몸통 꾹!</h3>
            <p>펫과 나와의 인터랙션</p>

            <div class="omphi-v2-action">
              <strong>LIGHT PRESS</strong>
              <span>가볍게 누르면 빛나며 깨어난다.</span>
            </div>

            <div class="omphi-v2-action">
              <strong>HOLD</strong>
              <span>3초간 감싸 안으면 기뻐한다.</span>
            </div>

            <div class="omphi-v2-action">
              <strong>SQUEEZE</strong>
              <span>꼭 쥐면 놀란 표정으로 반응한다.</span>
            </div>

            <div class="omphi-v2-action">
              <strong>PAT</strong>
              <span>쓰다듬으면 장난기 있는 표정을 짓는다.</span>
            </div>
          </div>

          <!-- PET 3D MODEL -->
          <div class="omphi-v2-model-stage omphi-v2-pet-model">

            <model-viewer
              src="${model("omphi_render_for_GLB_6.17_5.glb")}"
              alt="omphi Pet 3D model"
              camera-controls
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="20deg"
              disable-zoom
              interaction-prompt="none"
              environment-image="neutral"
              shadow-intensity="0"
              exposure="0.88"
              camera-orbit="0deg 75deg 120%"
              field-of-view="30deg">
            </model-viewer>

           
          </div>

          <div class="omphi-v2-pet-copy">
            <span class="omphi-v2-mini-label">02 / CONNECT</span>
            <h3>코어 꾹!</h3>
            <p>상대에게 마음 신호를 보내는 인터랙션</p>

            <div class="omphi-v2-action">
              <strong>SEND</strong>
              <span>코어를 누르면 상대 펫에 신호를 보낸다.</span>
            </div>

            <div class="omphi-v2-action">
              <strong>RECEIVE</strong>
              <span>신호를 받으면 코어가 빛나고 표정이 바뀐다.</span>
            </div>

            <div class="omphi-v2-action">
              <strong>NO RESPONSE</strong>
              <span>응답이 없으면 신호가 조용히 사라진다.</span>
            </div>

            <div class="omphi-v2-action">
              <strong>CONNECT</strong>
              <span>서로 연결되면 빛과 색으로 감정을 주고받는다.</span>
            </div>
          </div>

        </div>


        <!-- SYMBOL HUB -->
        <div class="omphi-v2-hub-unit">

          <!-- TITLE / DESCRIPTION -->
          <div class="omphi-v2-intro">
            <h2>Make feelings visible.</h2>

            <p>
              omphi Pet을 허브에 도킹한 뒤 대화 주제와 감정을 고르면, 각각의 마음이 고유한 심볼과 색으로 나타난다. 두 사람이 선택한 키워드가 같을 때는 공통된 색으로 연결되어,
              자연스럽게 대화를 시작하는 계기를 만든다.
            </p>
          </div>

          <!-- FILM WIDGET -->
          <div class="omphi-v2-actionbar">
            ${videoWidget("HUB INTERACTION FILM", "Pwx3C7k4qqY")}
          </div>

          <!-- CENTERED 3D MODEL -->
          <div class="omphi-v2-model-stage omphi-v2-hub-model">

            <model-viewer
              src="${model("omphi-hub.glb")}"
              alt="omphi Symbol Hub 3D model"
              camera-controls
              auto-rotate
              auto-rotate-delay="0"
              rotation-per-second="18deg"
              disable-zoom
              interaction-prompt="none"
              environment-image="neutral"
              shadow-intensity="0"
              exposure="0.9"
              camera-orbit="0deg 72deg 120%"
              field-of-view="30deg">
            </model-viewer>

          </div>

        </div>

      </section>


      <!-- 02 / VISUAL LANGUAGE -->
      <section class="omphi-v2-section">

        <div class="omphi-v2-label">
          <span>02 / VISUAL LANGUAGE</span>
          
        </div>

        <div class="omphi-v2-intro">
          <h2>A language of feelings.</h2>

          <p>
            엄마와 딸을 이어주는 배꼽 역할을 하는 omphi에 다양한 감정을 담아내기 위해
            표정과 그래픽 모티프를 디자인했다. 배꼽의 형태에서 영감을 받아 둥근 형태를 활용하였다.
            
          </p>
        </div>

        <div class="omphi-v2-expression-stage">

          <!-- FLOATING BACKGROUND MOTIFS -->
          <div class="omphi-v2-motifs" aria-hidden="true">
            ${floatingMotifs}
          </div>

          <!-- EIGHT CHARACTER EXPRESSIONS -->
          <div class="omphi-v2-expression-row">

            ${expressions.map(([blue, pink], i) => `
              <button
                class="omphi-v2-expression"
                type="button"
                aria-label="omphi 표정 ${i + 1} 바꾸기">

                <img
                  class="omphi-v2-face-blue"
                  src="${img(blue)}"
                  alt="">

                <img
                  class="omphi-v2-face-pink"
                  src="${img(pink)}"
                  alt="">

              </button>
            `).join("")}

          </div>

        </div>

      </section>


      <!-- 03 / INTERACTIVE WEB -->
      <section class="omphi-v2-section">

        <div class="omphi-v2-label">
          <span>03 / INTERACTIVE WEB</span>
          
        </div>

        <div class="omphi-v2-intro">
          <h2>From touch to screen.</h2>

          <p>
            제품의 감정 표현과 연결 경험을 웹으로 확장했다. 3D 제품 탐색, 캐릭터 표정 변화,
            심볼 생성과 도킹까지 웹 인터랙션으로 구현해 온라인으로도 omphi의 세계를 체험하도록 했다.
          </p>
        </div>

        <div class="omphi-v2-actionbar">
          

          <a
            class="omphi-v2-link-widget"
            href="https://muii-is.github.io/omphi/"
            target="_blank"
            rel="noopener noreferrer">

            <span class="omphi-v2-widget-icon" aria-hidden="true">↗</span>
            <span>VISIT LIVE WEBSITE</span>
            <span class="omphi-v2-widget-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <figure class="omphi-v2-web">
          <img
            src="${ASSET}website browser mockup.png"
            alt="omphi interactive website mockup"
            loading="lazy">
        </figure>

      </section>


      <!-- 04 / EXHIBITION -->
      <section class="omphi-v2-section">

        <div class="omphi-v2-label">
          <span>04 / EXHIBITION</span>
          
        </div>

        <div class="omphi-v2-intro">
          <h2>Experience omphi.</h2>

          <p>
            omphi의 방 안에 들어와 있는 것처럼 전시 기물을 제작하고 배치하였다.
            모빌, 조명, 원단, 오브제 등을 활용해 omphi의 무드를 실제 공간에서 체험하도록 했다.
          </p>
        </div>

        <div class="omphi-v2-exhibition">

          <figure>
            <img
              src="${ASSET}p27_1.webp"
              alt="omphi exhibition view"
              loading="lazy">
          </figure>

          <figure>
            <img
              src="${ASSET}p27_3.webp"
              alt="omphi exhibition detail"
              loading="lazy">
          </figure>

        </div>

      </section>

    </div>
  `;

  // 모바일에서는 탭으로도 표정 변경 가능
  gallery.querySelectorAll(".omphi-v2-expression").forEach(button => {
    button.addEventListener("click", () => {
      const active = button.classList.toggle("is-active");
      button.setAttribute("aria-pressed", String(active));
    });

    button.setAttribute("aria-pressed", "false");
  });
}

/* =========================================
   PPC — INDEPENDENT MUSIC PROJECT
========================================= */

function renderPpcGallery(gallery) {

  gallery.innerHTML = `
    <div class="ppc-layout">

      <h2 class="ppc-video-title">TEASER FILM</h2>

      <div class="ppc-video">
        <iframe
          src="https://www.youtube.com/embed/D8mP2P5QIfY"
          title="PPC Teaser Film"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>

      <div class="ppc-links">
        <a
          class="ppc-soundcloud"
          href="https://on.soundcloud.com/SrQYNld7FSGqJGKTZV"
          target="_blank"
          rel="noopener noreferrer">

          <span class="ppc-soundcloud-icon">♫</span>
          <span>LISTEN ON SOUNDCLOUD</span>
          <span class="ppc-soundcloud-arrow">↗</span>

        </a>
      </div>

    </div>
  `;
}


/* =========================================
   AQ ZENDA — FULL VISUAL SHOWCASE
========================================= */

function renderAqZendaGallery(gallery) {

  const folder = `${ASSET}aq-zenda/`;

  gallery.innerHTML = `
    <div class="aqz-layout">

      <!-- LOGO -->
      <section class="aqz-section">

        <h2 class="aqz-label">LOGO</h2>

        <figure class="aqz-logo">
          <img
            src="${folder}AQZENDA-2.png"
            alt="AQ ZENDA Logo Geometry"
            loading="lazy">
        </figure>

      </section>

      <!-- ZENDA TAG -->
      <section class="aqz-section">

        <h2 class="aqz-label">ZENDA TAG</h2>

        <figure class="aqz-product aqz-product--tag">
          <img
            src="${folder}Gemini_Generated_Image_wpsabiwpsabiwpsa.png"
            alt="ZENDA TAG Concept Render"
            loading="lazy">
        </figure>

      </section>

      <!-- AQ SCALE -->
      <section class="aqz-section">

        <h2 class="aqz-label">AQ SCALE / EARLY CONCEPT</h2>

        <figure class="aqz-product aqz-product--scale">
          <img
            src="${folder}Gemini_Generated_Image_w43eszw43eszw43e.png"
            alt="AQ SCALE Concept Render"
            loading="lazy">
        </figure>

      </section>

    </div>
  `;
}
/* =========================================
   LOVE REVOLUTION 2016
========================================= */

function renderLoveRevolutionGallery(gallery) {

  const folder = `${ASSET}love-revolution/`;

  gallery.innerHTML = `
    <div class="lr-layout">

      <!-- 01 / VISUAL IDENTITY -->
      <section class="lr-section">

        <div class="lr-section-copy">
          <h2>01 / VISUAL IDENTITY</h2>

          <p>
            아이폰 하트 이모지와 스타를 상징하는 별을 결합한 로고를 활용한 앨범 커버를 제작했다.
          </p>
        </div>

        <div class="lr-identity">

          <figure class="lr-logo">
            <img
              src="${folder}unlegacy-08.png"
              alt="LOVE REVOLUTION Logo"
              loading="lazy">
          </figure>

          <figure class="lr-cover">
            <img
              src="${folder}unlegacy-04.png"
              alt="LOVE REVOLUTION Album Cover"
              loading="lazy">
          </figure>

        </div>

      </section>

      <!-- 02 / ART DIRECTION -->
      <section class="lr-section">

        <div class="lr-section-copy">
          <h2>02 / ART DIRECTION & PHOTOGRAPHY</h2>

          <p>
            2016년 당시 유행했던 NERDY 트랙 재킷을 직접 리폼해 프로필 촬영을 진행했다.
          </p>
        </div>

        <div class="lr-photo-grid">

          <!-- ORIGINAL STYLING PHOTO -->
          <figure>
            <img
              src="${folder}IMG_0848.JPG"
              alt="LOVE REVOLUTION Styling"
              loading="lazy">
          </figure>

          <!-- JERSEY DETAIL -->
          <figure>
            <img
              src="${folder}IMG_0826.JPG"
              alt="Reformed NERDY Jersey"
              loading="lazy">
          </figure>

          <!-- MIRROR PHOTO -->
          <figure>
            <img
              src="${folder}IMG_0869.JPG"
              alt="LOVE REVOLUTION Concept Photography"
              loading="lazy">
          </figure>

        </div>

      </section>

    </div>
  `;
}
/* =========================================
   14. FULL PROJECT ARCHIVE
========================================= */

function renderArchive(index) {
  const project = projects[index];

  if (!project) return;

  activeProject = index;

  /* Hero image */

  const hero = $("projectHero");
  const heroImage = $("projectHeroImage");

  const heroSrc =
    project.hero || project.cover;

  if (hero && heroImage) {
    hero.hidden = !heroSrc;

    if (heroSrc) {
      heroImage.src = ASSET + heroSrc;
      heroImage.alt =
        `${project.title} — Main Visual`;
    } else {
      heroImage.removeAttribute("src");
    }
  }

  /* Project number */

  const order = archiveOrder.indexOf(
    project.slug
  );

  $("archiveNumber").textContent =
    `${String(order + 1).padStart(2, "0")} / ${archiveOrder.length}`;

  /* Project information */

  $("archiveTitle").textContent =
    project.title;

    
      const archiveSubtitle = $("archiveSubtitle");

      if (archiveSubtitle) {
        const isValsason = project.slug === "valsason";

        archiveSubtitle.hidden = !isValsason;
        archiveSubtitle.textContent = isValsason
          ? "발표할사람손들어"
          : "";
      }


  $("archiveCategory").textContent =
    project.category;

  $("archiveDescription").textContent =
    project.description;

  $("archiveYear").textContent =
    project.year;

  const teamProjectSlugs = [
    "OfftheCuff",
    "omphi",
    "valsason",
    "pepperoni-pizza-club"
  ];

  const projectType = teamProjectSlugs.includes(project.slug)
    ? "TEAM PROJECT"
    : "INDIVIDUAL PROJECT";

  $("archiveRole").textContent =
    `${projectType} · ${project.role}`;

    
    /* OfftheCuff — OFFICIAL CHANNEL LINKS */

    let brandLinks = $("archiveBrandLinks");

    if (!brandLinks) {
      brandLinks = document.createElement("div");
      brandLinks.id = "archiveBrandLinks";
      brandLinks.className = "archive-brand-links";
    }

    brandLinks.replaceChildren();

    $("archiveDescription")
      .parentElement
      .appendChild(brandLinks);

    if (project.slug === "OfftheCuff") {

      const channels = [
        {
          label: "INSTAGRAM ↗",
          url: "https://www.instagram.com/OfftheCuff_yonsei/"
        },
        {
          label: "WEBSITE ↗",
          url: "" // 실제 공식 사이트 URL 입력
        }
      ];

      channels.forEach(channel => {
        if (!channel.url) return;

        const link = document.createElement("a");

        link.href = channel.url;
        link.textContent = channel.label;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        brandLinks.appendChild(link);
      });
    }

    brandLinks.hidden = brandLinks.children.length === 0;


  /* Project gallery */

  const gallery = $("archiveGallery");
  gallery.replaceChildren();

  if (project.slug === "logbook") {
    renderLogbookGallery(gallery);

  } else if (project.slug === "ryu") {
    renderRyuGallery(gallery);

  } else if (project.slug === "valsason") {
    renderValsasonGallery(gallery);

  } else if (project.slug === "OfftheCuff") {
    renderOfftheCuffGallery(gallery);
    
  } else if (project.slug === "okelvin") {
    renderOKelvinGallery(gallery);

  } else if (project.slug === "omphi") {
    renderomphiGallery(gallery);

  } else if (project.slug === "pepperoni-pizza-club") {
    renderPpcGallery(gallery);

  } else if (project.slug === "aq-zenda") {
    renderAqZendaGallery(gallery);

  } else if (project.slug === "love-revolution") {
    renderLoveRevolutionGallery(gallery);

  } else {
    renderDefaultGallery(gallery, project);
  }
  
  /* OfftheCuff — MOVE OFFICIAL LINKS TO INTRO */

  const oldBrandLinks = gallery.querySelector(".otc-official-links");
  const currentBrandLinks = $("archiveBrandLinks");

  if (project.slug === "OfftheCuff" && oldBrandLinks) {

    // 기존 상단 링크가 있으면 중복 방지
    if (currentBrandLinks) {
      currentBrandLinks.remove();
    }

    // 하단 링크를 상단 소개 영역으로 이동
    oldBrandLinks.classList.remove("otc-official-links");
    oldBrandLinks.classList.add("archive-brand-links");
    oldBrandLinks.id = "archiveBrandLinks";

    document.querySelector(".archive-description")
      .appendChild(oldBrandLinks);

  } else if (project.slug !== "OfftheCuff") {

    // 다른 프로젝트에서는 공식 링크 제거
    currentBrandLinks?.remove();

  }

  showPage("archive");
  requestAnimationFrame(updateArchiveHeroHeader);
}

function openArchive(index) {
  const hash =
    `#archive/${projects[index].slug}`;

  if (location.hash === hash) {
    renderArchive(index);
  } else {
    location.hash = hash;
  }
}

/* =========================================
   15. PREVIOUS / NEXT PROJECT
========================================= */

function moveArchive(direction) {
  const slug =
    projects[activeProject]?.slug;

  const position =
    archiveOrder.indexOf(slug);

  if (position < 0) return;

  const nextPosition =
    (
      position +
      direction +
      archiveOrder.length
    ) % archiveOrder.length;

  const nextSlug =
    archiveOrder[nextPosition];

  const nextIndex = projects.findIndex(
    p => p.slug === nextSlug
  );

  if (nextIndex >= 0) {
    openArchive(nextIndex);
  }
}

/* =========================================
   16. BUTTON EVENTS
========================================= */

function closePreview() {
  location.hash =
    previousPage === "works"
      ? "#works"
      : "#home";
}

$("previewBack").addEventListener(
  "click",
  closePreview
);

$("modalBackdrop").addEventListener(
  "click",
  closePreview
);

$("previewOpen").addEventListener(
  "click",
  () => openArchive(activeProject)
);

$("previewGallery").addEventListener(
  "click",
  () => openArchive(activeProject)
);

$("previewTitle").addEventListener(
  "click",
  () => openArchive(activeProject)
);

$("archiveBack").addEventListener(
  "click",
  () => moveArchive(-1)
);

$("archiveNext").addEventListener(
  "click",
  () => moveArchive(1)
);

$("nextProject").addEventListener(
  "click",
  () => moveArchive(1)
);

document.addEventListener(
  "keydown",
  event => {
    if (
      event.key === "Escape" &&
      !$("preview").hidden
    ) {
      closePreview();
    }
  }
);

/* =========================================
   17. URL ROUTER
========================================= */

function router() {
  const hash = decodeURIComponent(
    location.hash.slice(1)
  );

  if (hash.startsWith("preview/")) {
    const slug =
      hash.slice("preview/".length);

    const index = projects.findIndex(
      p => p.slug === slug
    );

    if (index >= 0) {
      renderPreview(index);
      return;
    }
  }

  if (hash.startsWith("archive/")) {
    const slug =
      hash.slice("archive/".length);

    const index = projects.findIndex(
      p => p.slug === slug
    );

    if (index >= 0) {
      renderArchive(index);
      return;
    }
  }

  if (hash === "works") {
    showPage("works");
  } else if (hash === "about") {
    showPage("about");
  } else {
    showPage("home");
  }
}

window.addEventListener(
  "hashchange",
  router
);

router();

/* =========================================
   18. CUSTOM CURSOR
========================================= */

const finePointer = window.matchMedia(
  "(pointer:fine)"
);

if (
  finePointer.matches &&
  character &&
  bubble
) {
  window.addEventListener(
    "pointermove",
    event => {
      cursorX = event.clientX;
      cursorY = event.clientY;

      character.style.left =
        `${cursorX}px`;

      character.style.top =
        `${cursorY}px`;

      character.classList.add("visible");

      const nearRight =
        cursorX > innerWidth - 300;

      const nearBottom =
        cursorY > innerHeight - 100;

      bubble.style.left =
        nearRight ? "auto" : "49px";

      bubble.style.right =
        nearRight ? "49px" : "auto";

      bubble.style.top =
        nearBottom ? "auto" : "8px";

      bubble.style.bottom =
        nearBottom ? "45px" : "auto";
    }
  );

  document.addEventListener(
    "mouseleave",
    () => {
      cursorX = -1000;
      cursorY = -1000;

      character.classList.remove(
        "visible",
        "talking"
      );

      changeTooltip(null);
    }
  );
} else if (character) {
  character.remove();
  document.body.style.cursor = "auto";
}

/* =========================================
   19. SOFT CURSOR AFTERIMAGE
========================================= */

document.addEventListener(
  "click",
  event => {
    if (!$("preview").hidden) return;

    if (
      event.target.closest("button, a")
    ) {
      return;
    }

    if (
      window.matchMedia(
        "(prefers-reduced-motion:reduce)"
      ).matches
    ) {
      return;
    }

    const stamp =
      document.createElement("img");

    stamp.className = "cursor-stamp";

    stamp.src =
      document.body.classList.contains(
        "white-theme"
      )
        ? ASSET + "cursor-01.png"
        : ASSET + "cursor-02.png";

    stamp.alt = "";

    stamp.style.left =
      `${event.clientX}px`;

    stamp.style.top =
      `${event.clientY}px`;

    document.body.appendChild(stamp);

    stamp.addEventListener(
      "animationend",
      () => stamp.remove(),
      { once: true }
    );
  }
);


/* HEADER COLOR ON PROJECT HERO */

function updateArchiveHeroHeader() {
  const archive = document.getElementById("archive");
  const hero = document.getElementById("projectHero");

  const isArchiveVisible = archive && !archive.hidden;
  const isHeroVisible = hero && !hero.hidden;

  const isOnHero =
    isArchiveVisible &&
    isHeroVisible &&
    window.scrollY < hero.offsetHeight * 0.72;

  document.body.classList.toggle(
    "archive-hero-top",
    Boolean(isOnHero)
  );
}

window.addEventListener("scroll", updateArchiveHeroHeader, {
  passive: true
});

window.addEventListener("hashchange", () => {
  requestAnimationFrame(updateArchiveHeroHeader);
});

requestAnimationFrame(updateArchiveHeroHeader);



/* =====================================
   HOME — TINKERBELL CURSOR SPARKLES
===================================== */

(() => {
  const home = document.getElementById("home");
  const about = document.getElementById("about");

  if (!home) return;

  if (!window.matchMedia("(pointer: fine)").matches) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sparkles = new Set();

  let lastTime = 0;
  let lastX = null;
  let lastY = null;

  function isSparklePageVisible() {
    const page = [home, about].find(
      element => element && !element.hidden
    );

    return Boolean(
      page &&
      page.getClientRects().length > 0 &&
      getComputedStyle(page).visibility !== "hidden"
    );
  }

  function createSparkle(x, y) {
    if (sparkles.size >= 36) return;

    const sparkle = document.createElement("span");
    const isStar = Math.random() < 0.45;

    sparkle.className = isStar
      ? "fairy-spark fairy-spark--star"
      : "fairy-spark";

    const size = isStar
      ? 3.5 + Math.random() * 2
      : 1 + Math.random() * 1.2;

    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    sparkle.style.left =
      `${x + (Math.random() - 0.5) * 15}px`;

    sparkle.style.top =
      `${y + (Math.random() - 0.5) * 12}px`;

    document.body.appendChild(sparkle);
    sparkles.add(sparkle);

    const driftX = (Math.random() - 0.5) * 24;
    const fallY = 16 + Math.random() * 25;
    const duration = 550 + Math.random() * 350;

    const animation = sparkle.animate(
      [
        {
          opacity: 0,
          transform: "translate3d(0,0,0) scale(.4)"
        },
        {
          opacity: 0.85,
          transform: "translate3d(0,3px,0) scale(1)",
          offset: 0.18
        },
        {
          opacity: 0,
          transform: `translate3d(${driftX}px,${fallY}px,0) scale(.35)`
        }
      ],
      {
        duration,
        easing: "ease-out",
        fill: "forwards"
      }
    );

    animation.finished
      .catch(() => {})
      .finally(() => {
        sparkle.remove();
        sparkles.delete(sparkle);
      });
  }

  function clearSparkles() {
    sparkles.forEach(sparkle => sparkle.remove());
    sparkles.clear();
  }

  window.addEventListener("pointermove", event => {
    if (!isSparklePageVisible()) return;

    if (event.pointerType && event.pointerType !== "mouse") {
      return;
    }

    const now = performance.now();

    if (now - lastTime < 42) return;

    if (
      lastX !== null &&
      Math.hypot(
        event.clientX - lastX,
        event.clientY - lastY
      ) < 5
    ) {
      return;
    }

    lastTime = now;
    lastX = event.clientX;
    lastY = event.clientY;

    createSparkle(event.clientX - 7, event.clientY + 10);

    if (Math.random() < 0.28) {
      createSparkle(event.clientX - 12, event.clientY + 7);
    }
  }, { passive: true });

  window.addEventListener("hashchange", () => {
    if (!isSparklePageVisible()) {
      clearSparkles();
    }
  });
})();
