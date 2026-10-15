/* =====================================================
   EDIT YOUR CONTENT HERE
   ===================================================== */

var CERTS = [
  {
    title: "Professional Certification in Full Stack Web Development",
    issuer: "AlmaBetter",
    img: "./images/full-stack.png",
  },
  {
    title: "Practical Software Engineering",
    issuer: "AlmaBetter",
    img: "./images/PSE.png",
  },
  {
    title: "Design & Analysis of Algorithm",
    issuer: "AlmaBetter",
    img: "./images/DSA.png",
  },
  {
    title: "Introduction to Computer Programming",
    issuer: "AlmaBetter",
    img: "./images/CP.png",
  },
  {
    title: "Front-end Development",
    issuer: "AlmaBetter",
    img: "./images/frontend.png",
  },
  {
    title: "The Complete JavaScript Course: From Zero to Expert",
    issuer: "Udemy",
    img: "./images/udemy-js.jpg",
  },
  {
    title: "The Ultimate React Course: React, Redux & More",
    issuer: "Udemy",
    img: "./images/udemy-react.jpg",
  },
  {
    title: "Complete Web Design: from Figma to Webflow to Freelancing",
    issuer: "Udemy",
    img: "./images/udemy-figma.jpg",
  },
  {
    title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    issuer: "Udemy",
    img: "./images/udemy-node.jpg",
  },
];

var PROJECTS = [
  {
    kind: "Doctor appointment management system",
    title: "CareSync",
    img: "./images/caresync.png",
    pts: [
      "Separate patient, doctor and admin workflows",
      "Appointment booking with Stripe payment processing",
      "Cookie-based authentication, protected routes and role-based authorization",
      "Redux Toolkit for state management",
    ],
    tags: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],
    live: "",
    github: "",
  },
  {
    kind: "E-commerce application",
    title: "Trendor",
    img: "./images/trendora.png",
    pts: [
      "Product browsing and interactive interfaces",
      "Reusable React components styled with Tailwind CSS",
      "Connected to REST APIs",
    ],
    tags: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS"],
    live: "https://trendor-react-ecommerce-website.vercel.app/",
    github: "https://github.com/Bhranti0302/Trendor-React-Ecommerce-website",
  },
  {
    kind: "Tour booking application",
    title: "Natours",
    img: "./images/natour.png",
    pts: [
      "REST APIs for tours, users, bookings and reviews",
      "JWT and cookie-based authentication with role-based authorization",
      "Swagger/OpenAPI documentation",
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Swagger"],
    live: "https://natours-zyht.onrender.com",
    github: "https://github.com/Bhranti0302/natours",
  },
];

var SKILLS = [
  {
    icon: "</>",
    name: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "React.js",
      "Redux Toolkit",
      "React Router",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    icon: "▤",
    name: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MVC Architecture",
      "Middleware",
      "CRUD Operations",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    icon: "⛨",
    name: "Authentication & Security",
    items: [
      "JWT",
      "Cookie-Based Authentication",
      "Role-Based Access Control",
      "Protected Routes",
    ],
  },
  {
    icon: "⚒",
    name: "Tools & Design",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger/OpenAPI",
      "Stripe",
      "Cloudinary",
      "Vite",
      "npm",
      "Figma",
      "UI/UX Design",
    ],
  },
];

var JOBS = [
  {
    role: "Independent Full Stack Developer",
    co: "Self-Directed Projects and Continuous Learning",
    date: "Feb 2024 – Present",
    now: true,
    pts: [
      "Built full-stack MERN apps with React.js, Node.js, Express.js and MongoDB, including patient, doctor and admin role-based workflows.",
      "Designed REST APIs with CRUD operations; implemented JWT and cookie-based authentication, protected routes and role-based authorization.",
      "Integrated Stripe payments and Cloudinary media management; managed state with Redux Toolkit.",
      "Documented APIs with Swagger/OpenAPI and tested endpoints with Postman.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    co: "August Infotech, Surat",
    date: "Jul 2022 – Jan 2024",
    pts: [
      "Developed and maintained responsive interfaces using HTML5, CSS3, JavaScript and React.js.",
      "Turned UI designs and requirements into working pages and reusable components.",
      "Fixed frontend issues and refined layouts for consistent behavior on desktop, tablet and mobile.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    co: "August Infotech, Surat",
    date: "Jan 2022 – Jul 2022",
    pts: [
      "Built responsive web pages and UI components from design specs using HTML, CSS and JavaScript; tested across devices.",
    ],
  },
];

var ROLES = [
  "React.js Developer",
  "MERN Stack Developer",
  "Frontend Developer",
];

/* =====================================================
   RENDER CONTENT
   ===================================================== */
function $(s) {
  return document.querySelector(s);
}
function li(arr) {
  return arr
    .map(function (x) {
      return "<li>" + x + "</li>";
    })
    .join("");
}

$("#skillsGrid").innerHTML = SKILLS.map(function (s) {
  return (
    '<article class="card reveal"><h3><span class="ico">' +
    s.icon.replace("<", "&lt;").replace(">", "&gt;") +
    "</span>" +
    s.name.replace("&", "&amp;") +
    '</h3><ul class="tags">' +
    li(s.items) +
    "</ul></article>"
  );
}).join("");

$("#tl").innerHTML = JOBS.map(function (j) {
  return (
    '<li class="card reveal"><div class="top"><h3>' +
    j.role +
    '</h3><span class="date' +
    (j.now ? " now" : "") +
    '">' +
    j.date +
    '</span></div><p class="co">' +
    j.co +
    "</p><ul>" +
    li(j.pts) +
    "</ul></li>"
  );
}).join("");

$("#projList").innerHTML = PROJECTS.map(function (p, i) {
  var shot = p.img
    ? '<img src="' +
      p.img +
      '" alt="' +
      p.title +
      ' screenshot" loading="lazy">'
    : '<div class="mock" aria-hidden="true"><i>' +
      p.title +
      "</i><s></s><s></s><div><b></b><b></b><b></b></div></div><small>Preview coming soon</small>";
  var links = "";
  if (p.live)
    links +=
      '<a class="btn primary sm" href="' +
      p.live +
      '" target="_blank" rel="noopener">Live Demo ↗</a>';
  if (p.github)
    links +=
      '<a class="btn sm" href="' +
      p.github +
      '" target="_blank" rel="noopener">GitHub</a>';
  return (
    '<article class="proj reveal"><div class="shot">' +
    shot +
    '</div><div class="pbody"><p class="eyebrow">0' +
    (i + 1) +
    " · " +
    p.kind +
    "</p><h3>" +
    p.title +
    '</h3><ul class="pts">' +
    li(p.pts) +
    '</ul><ul class="tags">' +
    li(p.tags) +
    '</ul><div class="plinks">' +
    links +
    "</div></div></article>"
  );
}).join("");

/* =====================================================
   THEME TOGGLE
   ===================================================== */
(function () {
  var root = document.documentElement,
    btn = $("#theme");
  try {
    var s = localStorage.getItem("theme");
    if (s) root.dataset.theme = s;
  } catch (e) {}
  function dark() {
    return root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
  }
  function label() {
    btn.textContent = dark() ? "☀" : "☾";
  }
  btn.onclick = function () {
    root.dataset.theme = dark() ? "light" : "dark";
    try {
      localStorage.setItem("theme", root.dataset.theme);
    } catch (e) {}
    label();
  };
  label();
})();

/* =====================================================
   CERTIFICATE CAROUSEL (GSAP)
   ===================================================== */
(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var host = $("#carousel"),
    idx = 0,
    n = CERTS.length,
    timer;

  host.innerHTML =
    '<div class="car" role="region" aria-roledescription="carousel" aria-label="Certificates">' +
    '<div class="viewport"><div class="track">' +
    CERTS.map(function (c, i) {
      return (
        '<figure class="slide" role="group" aria-label="' +
        (i + 1) +
        " of " +
        n +
        '"><div class="cimg"><div class="ph">' +
        c.title +
        "<small>" +
        c.issuer +
        '</small></div><img src="' +
        c.img +
        '" alt="' +
        c.title +
        " certificate from " +
        c.issuer +
        '" loading="lazy" onerror="this.remove()"></div><figcaption><strong>' +
        c.title +
        "</strong><span>" +
        c.issuer +
        "</span></figcaption></figure>"
      );
    }).join("") +
    '</div></div><div class="ctrl"><button class="icon" data-d="-1" aria-label="Previous certificate">←</button><div class="dots">' +
    CERTS.map(function (c, i) {
      return (
        '<button aria-label="Go to certificate ' +
        (i + 1) +
        '" data-i="' +
        i +
        '"></button>'
      );
    }).join("") +
    '</div><button class="icon" data-d="1" aria-label="Next certificate">→</button></div></div>';

  var car = $(".car"),
    track = $(".track"),
    dots = car.querySelectorAll(".dots button");

  function go(i) {
    idx = (i + n) % n;
    gsap.to(track, {
      xPercent: -100 * idx,
      duration: reduce ? 0 : 0.7,
      ease: "power3.inOut",
    });
    dots.forEach(function (d, k) {
      d.setAttribute("aria-current", k === idx);
    });
  }
  function play() {
    if (!reduce) {
      stop();
      timer = setInterval(function () {
        go(idx + 1);
      }, 5000);
    }
  }
  function stop() {
    clearInterval(timer);
  }

  car.addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    go(b.dataset.d ? idx + +b.dataset.d : +b.dataset.i);
  });
  car.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") go(idx - 1);
    if (e.key === "ArrowRight") go(idx + 1);
  });

  var x0 = null;
  track.addEventListener("pointerdown", function (e) {
    x0 = e.clientX;
  });
  window.addEventListener("pointerup", function (e) {
    if (x0 === null) return;
    var dx = e.clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
  });

  car.addEventListener("mouseenter", stop);
  car.addEventListener("mouseleave", play);
  car.addEventListener("focusin", stop);
  car.addEventListener("focusout", play);

  go(0);
  play();
})();

/* =====================================================
   TYPING EFFECT
   ===================================================== */
(function () {
  var el = $("#typed"),
    r = 0,
    c = ROLES[0].length,
    del = true;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  (function tick() {
    var word = ROLES[r],
      wait = del ? 45 : 90;
    if (del) {
      c--;
      if (c <= 0) {
        del = false;
        r = (r + 1) % ROLES.length;
      }
    } else {
      c++;
      if (c >= ROLES[r].length) {
        del = true;
        wait = 1800;
      }
    }
    el.textContent = ROLES[r].slice(0, Math.max(c, 0)) || "\u200B";
    setTimeout(tick, wait);
  })();
})();

/* =====================================================
   GSAP ANIMATIONS
   ===================================================== */
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  var tl = $("#tl"),
    line = document.createElement("span");
  line.className = "line";
  tl.prepend(line);

  var mm = gsap.matchMedia();

  mm.add("(prefers-reduced-motion: no-preference)", function () {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".hero .eyebrow", { y: 16, opacity: 0, duration: 0.5 })
      .from("#name", { y: 40, opacity: 0, duration: 0.8 }, "-=0.2")
      .from(
        ".typed, .sm-role, .lead",
        { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
        "-=0.4",
      )
      .from(
        ".hero .btns .btn, .loc",
        { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 },
        "-=0.3",
      )
      .from(".hero .arch", { y: 60, opacity: 0, scale: 0.94, duration: 1 }, 0.2)
      .from(
        ".chip",
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(2)",
        },
        "-=0.5",
      );

    gsap.utils.toArray(".chip").forEach(function (c, i) {
      gsap.to(c, {
        y: i % 2 ? 10 : -10,
        duration: 2 + i * 0.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    ScrollTrigger.batch(".reveal", {
      start: "top 88%",
      once: true,
      onEnter: function (els) {
        gsap.from(els, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          overwrite: true,
        });
      },
    });

    gsap.utils.toArray(".eyebrow.num").forEach(function (e) {
      gsap.from(e, {
        x: -24,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: { trigger: e, start: "top 90%", once: true },
      });
    });

    gsap.to(line, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: tl,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    gsap.utils.toArray("#skillsGrid .card").forEach(function (card) {
      gsap.from(card.querySelectorAll(".tags li"), {
        y: 10,
        opacity: 0,
        duration: 0.4,
        stagger: 0.04,
        scrollTrigger: { trigger: card, start: "top 85%", once: true },
      });
    });

    var nums = [
      { el: $(".stats div:nth-child(1) b"), to: 2, suf: "+" },
      { el: $(".stats div:nth-child(3) b"), to: 3, suf: "" },
    ];
    nums.forEach(function (n) {
      var o = { v: 0 };
      gsap.to(o, {
        v: n.to,
        duration: 1.2,
        ease: "power1.out",
        snap: { v: 1 },
        scrollTrigger: { trigger: ".stats", start: "top 88%", once: true },
        onUpdate: function () {
          n.el.textContent = o.v + n.suf;
        },
      });
    });

    gsap.utils.toArray(".proj").forEach(function (card) {
      var shot = card.querySelector(".shot > *");
      card.addEventListener("mouseenter", function () {
        gsap.to(card, {
          y: -6,
          boxShadow: "0 18px 36px rgba(60,35,15,.14)",
          duration: 0.3,
        });
        gsap.to(shot, { scale: 1.04, duration: 0.4 });
      });
      card.addEventListener("mouseleave", function () {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
          duration: 0.3,
        });
        gsap.to(shot, { scale: 1, duration: 0.4 });
      });
    });

    gsap.utils.toArray(".btn").forEach(function (b) {
      b.addEventListener("mouseenter", function () {
        gsap.to(b, { y: -2, duration: 0.2 });
      });
      b.addEventListener("mouseleave", function () {
        gsap.to(b, { y: 0, duration: 0.2 });
      });
    });
  });

  mm.add("(prefers-reduced-motion: reduce)", function () {
    gsap.set(line, { scaleY: 1 });
  });
}
