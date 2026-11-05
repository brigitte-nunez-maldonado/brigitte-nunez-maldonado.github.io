(function () {
  "use strict";
  var D = window.PORTAFOLIO;
  var P = D.perfil;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  function el(tag, attrs, txt) {
    var e = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (txt != null) e.textContent = txt;
    return e;
  }

  /* ---------- Datos de perfil ---------- */
  $$("[data-p]").forEach(function (n) { n.textContent = P[n.getAttribute("data-p")] || ""; });
  $$("[data-p-href]").forEach(function (n) { n.href = P[n.getAttribute("data-p-href")]; });
  $$("[data-p-src]").forEach(function (n) { n.src = P[n.getAttribute("data-p-src")]; });
  $$("[data-p-tel]").forEach(function (n) { n.href = "tel:" + P.telefono.replace(/\s/g, ""); n.textContent = P.telefono; });
  $$("[data-p-mail]").forEach(function (n) { n.href = "mailto:" + P.correo; n.textContent = P.correo; });

  /* ---------- Menú ---------- */
  var btn = $("#menuBtn"), menu = $("#menu");
  btn.addEventListener("click", function () {
    var a = menu.classList.toggle("abierto");
    btn.setAttribute("aria-expanded", a);
    btn.setAttribute("aria-label", a ? "Cerrar menú" : "Abrir menú");
  });
  $$("a", menu).forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false"); });
  });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          $$("a", menu).forEach(function (a) { a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(function (s) { io.observe(s); });
  }

  /* ---------- Visor de fotos ---------- */
  var visor = $("#visor"), visorImg = $("#visorImg"), ultimoFoco = null;
  function abrirVisor(src, alt) {
    ultimoFoco = document.activeElement;
    visorImg.src = src; visorImg.alt = alt || "";
    visor.hidden = false; $("#visorCerrar").focus();
  }
  function cerrarVisor() { visor.hidden = true; visorImg.src = ""; if (ultimoFoco) ultimoFoco.focus(); }
  $("#visorCerrar").addEventListener("click", cerrarVisor);
  visor.addEventListener("click", function (e) { if (e.target === visor) cerrarVisor(); });

  /* ---------- Cartera ---------- */
  var todos = D.proyectos.filter(function (p) { return p.visible !== false; });
  var lista = todos.slice(), idx = 0, fotoIdx = 0;

  var sectores = [];
  todos.forEach(function (p) { if (p.sector && sectores.indexOf(p.sector) < 0) sectores.push(p.sector); });
  var filtros = $("#filtros");
  ["Todos"].concat(sectores).forEach(function (s, i) {
    var b = el("button", { type: "button", "aria-pressed": i === 0 ? "true" : "false" }, s);
    b.addEventListener("click", function () {
      $$("button", filtros).forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
      b.setAttribute("aria-pressed", "true");
      lista = s === "Todos" ? todos.slice() : todos.filter(function (p) { return p.sector === s; });
      idx = 0; pintar();
    });
    filtros.appendChild(b);
  });

  function mostrarFoto(p, i) {
    fotoIdx = i;
    var f = p.fotos[i];
    var img = $("#pFoto"), vid = $("#pVideo");
    if (f.video) {
      img.hidden = true; img.removeAttribute("src");
      vid.hidden = false;
      if (vid.getAttribute("src") !== f.video) { vid.src = f.video; vid.poster = f.poster || ""; }
      vid.setAttribute("aria-label", f.alt || p.nombre);
      var pr = vid.play(); if (pr && pr.catch) pr.catch(function () {});
    } else {
      vid.pause(); vid.hidden = true; vid.removeAttribute("src"); vid.load();
      img.hidden = false; img.src = f.src; img.alt = f.alt || p.nombre;
    }
    $$("button", $("#pMinis")).forEach(function (b, j) { b.setAttribute("aria-current", j === i ? "true" : "false"); });
  }

  function pintar() {
    var p = lista[idx];
    var art = $("#proyecto");
    art.classList.add("cambiando");
    $("#pNombre").textContent = p.nombre;
    $("#pPais").textContent = p.pais + (p.periodo ? " · " + p.periodo : "");
    var cargo = $("#pCargo");
    cargo.textContent = p.cargo ? "Cargo · " + p.cargo : "";
    cargo.hidden = !p.cargo;
    var chips = $("#pChips"); chips.innerHTML = "";
    [p.sector].concat(p.etiquetas || []).filter(Boolean).forEach(function (t) { chips.appendChild(el("span", { "class": "chip" }, t)); });
    $("#pResBloque").hidden = !p.resultados;
    $("#pRes").textContent = p.resultados || "";
    var det = $("#pDet"); det.innerHTML = "";
    (p.detalles || []).forEach(function (t) { det.appendChild(el("li", null, t)); });
    det.hidden = !(p.detalles && p.detalles.length);

    var minis = $("#pMinis"); minis.innerHTML = "";
    if (p.fotos.length > 1) {
      p.fotos.slice(0, 3).forEach(function (f, i) {
        var b = el("button", { type: "button", "aria-label": (f.video ? "Ver vídeo" : "Ver foto " + (i + 1)) + " de " + p.fotos.length });
        var im = el("img", { src: f.video ? (f.poster || "") : f.src, alt: "", loading: "lazy" });
        b.appendChild(im);
        if (f.video) { b.classList.add("es-video"); b.appendChild(el("span", { "class": "play", "aria-hidden": "true" }, "▶")); }
        b.addEventListener("click", function () { mostrarFoto(p, i); });
        minis.appendChild(b);
      });
      minis.appendChild(el("span", null, "Imágenes de esta obra · " + Math.min(p.fotos.length, 3)));
    }
    minis.hidden = p.fotos.length < 2;
    mostrarFoto(p, 0);

    $("#pContador").textContent = "Proyecto " + (idx + 1) + " / " + lista.length;
    var una = lista.length < 2;
    $("#pAnt").disabled = una; $("#pSig").disabled = una;
    setTimeout(function () { art.classList.remove("cambiando"); }, 120);
  }
  function mover(d) { if (lista.length < 2) return; idx = (idx + d + lista.length) % lista.length; pintar(); }
  $("#pAnt").addEventListener("click", function () { mover(-1); });
  $("#pSig").addEventListener("click", function () { mover(1); });
  $(".proyecto__foto").addEventListener("click", function (e) { var i = $("#pFoto"); if (!i.hidden && e.target === i) abrirVisor(i.src, i.alt); });

  document.addEventListener("keydown", function (e) {
    if (!visor.hidden) { if (e.key === "Escape") cerrarVisor(); return; }
    var t = e.target.tagName;
    if (t === "INPUT" || t === "TEXTAREA") return;
    var r = $("#cartera").getBoundingClientRect();
    if (r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.3) {
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    }
  });
  var x0 = null;
  var zona = $(".proyecto__foto");
  zona.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
  zona.addEventListener("touchend", function (e) {
    if (x0 === null) return;
    var dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) mover(dx < 0 ? 1 : -1);
    x0 = null;
  });
  pintar();

  /* ---------- Formación ---------- */
  var cont = $("#listaFormacion");
  D.formacion.forEach(function (f, i) {
    var a = el("article", { "class": "ficha" + (f.estado === "En curso" ? " ficha--actual" : "") });
    var cab = el("div", { "class": "ficha__cab" });
    cab.appendChild(el("img", { "class": "ficha__logo", src: f.logo, alt: "Logotipo de " + f.centro, loading: "lazy" }));
    var tx = el("div");
    tx.appendChild(el("h3", null, f.titulo));
    tx.appendChild(el("p", { "class": "ficha__meta" }, f.centro + " · " + f.periodo));
    cab.appendChild(tx);
    cab.appendChild(el("span", { "class": "estado" }, f.estado));
    a.appendChild(cab);
    if (f.destacado) a.appendChild(el("p", { "class": "ficha__destacado" }, f.destacado));
    if (f.logros && f.logros.length) {
      var ul = el("ul", { "class": "ficha__logros" });
      f.logros.forEach(function (l) { ul.appendChild(el("li", null, l)); });
      a.appendChild(ul);
    }
    if (f.fotos && f.fotos.length) {
      var g = el("div", { "class": "ficha__fotos" });
      f.fotos.forEach(function (ft) {
        var fig = el("figure", ft.etiqueta ? { "class": "unesco" } : null);
        var b = el("button", { type: "button", "aria-label": "Ampliar: " + ft.alt });
        if (ft.etiqueta) b.className = "contener";
        b.appendChild(el("img", { src: ft.src, alt: ft.alt, loading: "lazy" }));
        b.addEventListener("click", function () { abrirVisor(ft.src, ft.alt); });
        fig.appendChild(b);
        if (ft.etiqueta) fig.appendChild(el("figcaption", null, ft.etiqueta));
        g.appendChild(fig);
      });
      a.appendChild(g);
    }
    cont.appendChild(a);
  });

  /* ---------- Competencias ---------- */
  $("#aporte").textContent = D.aporte;
  var lc = $("#listaCompetencias");
  D.competencias.forEach(function (c) {
    var d = el("div", { "class": "comp" });
    var t = el("div");
    t.appendChild(el("h3", null, c.titulo));
    t.appendChild(el("p", null, c.texto));
    d.appendChild(t); lc.appendChild(d);
  });
  var ls = $("#listaSectores");
  D.sectores.forEach(function (s) { ls.appendChild(el("span", { "class": "chip" }, s)); });
  var lcomp = $("#listaComplementaria");
  D.complementaria.forEach(function (s) { lcomp.appendChild(el("li", null, s)); });
  $("#listaPreparacion").textContent = D.enPreparacion.join(" · ");
  $("#listaIA").textContent = D.ia.join(" · ");
  $("#idiomas").textContent = D.idiomas;

  /* ---------- Formulario (abre el correo) ---------- */
  $("#formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, ok = true;
    $$("input,textarea", f).forEach(function (i) {
      var bien = i.value.trim() !== "" && (i.type !== "email" || /\S+@\S+\.\S+/.test(i.value));
      i.setAttribute("aria-invalid", bien ? "false" : "true");
      if (!bien) ok = false;
    });
    var ayuda = $("#formAyuda");
    if (!ok) { ayuda.textContent = "Completa todos los campos con un correo válido."; return; }
    var cuerpo = f.mensaje.value + "\n\n— " + f.nombre.value + " (" + f.correo.value + ")";
    window.location.href = "mailto:" + P.correo + "?subject=" + encodeURIComponent(f.asunto.value) + "&body=" + encodeURIComponent(cuerpo);
    ayuda.textContent = "Se ha abierto tu programa de correo con el mensaje preparado. Si no se abre, escribe directamente a " + P.correo + ".";
  });
})();
