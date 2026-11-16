(() => {
  const D = PORTFOLIO;
  const $ = (s) => document.querySelector(s);

  const ICONS = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.5V9h3.6v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>',
    folder: '<svg class="folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  };
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Populate content ---------- */
  document.title = `${D.name} — ${D.role}`;
  $("#logo-name").textContent = D.name;
  $("#hero-name").textContent = D.name + ".";
  $("#hero-intro").textContent = D.intro;
  $("#footer-name").textContent = D.name;
  $("#year").textContent = new Date().getFullYear();
  $("#contact-btn").href = `mailto:${D.email}`;
  $("#resume-btn").href = D.resumeUrl;
  if (!D.resumeUrl || D.resumeUrl === "#") $("#resume-btn").style.display = "none";
  if (!D.availableForWork) $("#availability").style.display = "none";

  const socialsHTML = D.socials
    .map((s) => `<a class="icon-link" href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}">${ICONS[s.icon] || esc(s.label[0])}</a>`)
    .join("");
  $("#hero-socials").innerHTML = socialsHTML;
  $("#footer-socials").innerHTML = socialsHTML;

  $("#about-text").innerHTML = D.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#stats").innerHTML = D.stats.map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("");

  const allSkills = D.skills.flatMap((c) => c.items.map((i) => i.name));
  $("#code-block").innerHTML =
    `<span class="c-key">const</span> <span class="c-prop">me</span> <span class="c-pun">=</span> <span class="c-pun">{</span>\n` +
    `  <span class="c-prop">name</span>: <span class="c-str">"${esc(D.name)}"</span>,\n` +
    `  <span class="c-prop">role</span>: <span class="c-str">"${esc(D.role)}"</span>,\n` +
    `  <span class="c-prop">location</span>: <span class="c-str">"${esc(D.location)}"</span>,\n` +
    `  <span class="c-prop">stack</span>: <span class="c-pun">[</span>${allSkills.slice(0, 4).map((s) => `<span class="c-str">"${esc(s)}"</span>`).join(", ")}${allSkills.length > 4 ? ", ..." : ""}<span class="c-pun">]</span>,\n` +
    `  <span class="c-prop">openToWork</span>: <span class="c-bool">${D.availableForWork}</span>,\n` +
    `<span class="c-pun">};</span>`;

  $("#skills-grid").innerHTML = D.skills
    .map(
      (cat) => `
      <div class="skill-cat reveal">
        <h3>${esc(cat.category)}</h3>
        <div class="skill-grid">
          ${cat.items
            .map(
              (s) => `<div class="skill">${
                s.icon ? `<i class="devicon-${esc(s.icon)}-plain colored devicon-${esc(s.icon)}-original"></i>` : `<div class="fallback">${esc(s.name.slice(0, 2))}</div>`
              }<span>${esc(s.name)}</span></div>`
            )
            .join("")}
        </div>
      </div>`
    )
    .join("");

  $("#projects-grid").innerHTML = D.projects
    .map(
      (p) => `
      <article class="project reveal ${p.featured ? "featured" : ""}">
        <div class="project-top">
          ${ICONS.folder}
          <div class="project-links">
            ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener" aria-label="GitHub">${ICONS.github}</a>` : ""}
            ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener" aria-label="Live site">${ICONS.external}</a>` : ""}
          </div>
        </div>
        ${p.featured ? `<p class="feat-label">Featured project</p>` : ""}
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.description)}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </article>`
    )
    .join("");

  $("#timeline").innerHTML = D.experience
    .map(
      (e) => `
      <div class="tl-item reveal">
        <span class="tl-period">${esc(e.period)}</span>
        <h3>${esc(e.title)}</h3>
        <p class="tl-org">${esc(e.org)}</p>
        <ul>${e.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  /* ---------- Typing effect ---------- */
  const typed = $("#typed");
  let w = 0, ch = 0, del = false;
  (function type() {
    const word = D.taglines[w];
    typed.textContent = word.slice(0, ch);
    if (!del && ch === word.length) { del = true; return setTimeout(type, 1800); }
    if (del && ch === 0) { del = false; w = (w + 1) % D.taglines.length; }
    ch += del ? -1 : 1;
    setTimeout(type, del ? 45 : 90);
  })();

  /* ---------- Nav ---------- */
  const nav = $("#nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30));
  const toggle = $("#menu-toggle"), links = $("#nav-links");
  toggle.addEventListener("click", () => { toggle.classList.toggle("open"); links.classList.toggle("open"); });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { toggle.classList.remove("open"); links.classList.remove("open"); }));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el, i) => {
    if (el.closest(".hero")) el.style.transitionDelay = `${i * 0.1}s`;
    io.observe(el);
  });

  /* ---------- Skill card spotlight ---------- */
  document.querySelectorAll(".skill").forEach((card) =>
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    })
  );

  /* ---------- Particle network background ---------- */
  const cv = $("#bg-canvas"), ctx = cv.getContext("2d");
  let pts = [], mouse = { x: -999, y: -999 };
  function resize() {
    cv.width = innerWidth; cv.height = innerHeight;
    const n = Math.min(90, Math.floor((innerWidth * innerHeight) / 16000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * cv.width, y: Math.random() * cv.height, vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 }));
  }
  addEventListener("resize", resize);
  addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
  resize();
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    (function draw() {
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > cv.width) p.vx *= -1;
        if (p.y < 0 || p.y > cv.height) p.vy *= -1;
        ctx.fillStyle = "rgba(160,150,255,.6)";
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.3, 0, Math.PI * 2); ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(124,92,255,${0.15 * (1 - d / 130)})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        const dm = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
        if (dm < 180) { ctx.strokeStyle = `rgba(0,212,255,${0.3 * (1 - dm / 180)})`; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
      }
      requestAnimationFrame(draw);
    })();
  }
})();
