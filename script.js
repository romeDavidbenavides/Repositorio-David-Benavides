const overlay = document.getElementById("overlay");

const dataProyectos = {
  /* ===== IA ===== */
  plantas: {
    titulo: "Detección de Plantas",
    tag: "Análisis de Datos & IA",
    img: "imagenes/imagen3.png",
    desc: "Reconocimiento de diferentes tipos de plantas y maleza dentro de una gama previamente establecida. Utiliza redes neuronales profundas para la clasificación de imágenes con data augmentation, limpieza de imágenes y filtros convolucionales, evaluado con accuracy, matriz de confusión y test score.",
    tech: "Python · Deep Learning · Computer Vision",
    link: "https://colab.research.google.com/drive/1pOooj5gxHnlByZPCnzNbbQ1_GvIcJd8u?usp=sharing"
  },
  placas: {
    titulo: "Detección de Placas",
    tag: "Análisis de Datos & IA",
    img: "imagenes/imagen4.png",
    desc: "Identificación y reconocimiento de placas vehiculares a partir de imágenes, usando procesamiento de imágenes y aprendizaje automático.",
    tech: "Python · Computer Vision · Machine Learning",
    link: "https://colab.research.google.com/drive/1datRJOmd4OW-cZESeTmiZCtxjDNRH_Yr?usp=sharing"
  },
  credito: {
    titulo: "Riesgo Crediticio",
    tag: "Análisis de Datos & IA",
    img: "imagenes/imagen5.png",
    desc: "Sistema de evaluación crediticia con Machine Learning y Deep Learning sobre bases de datos reales, para estimar la probabilidad de aprobación de préstamos y reducir el riesgo financiero.",
    tech: "Python · Scikit-learn · Pandas · NumPy",
    link: "#"
  },
  medico: {
    titulo: "Análisis Médico",
    tag: "Análisis de Datos & IA",
    img: "imagenes/imagen2.png",
    desc: "Detección de anomalías en muestras histológicas de próstata a partir del análisis de atributos y características geométricas de las imágenes.",
    tech: "Machine Learning · Computer Vision · Scikit-learn",
    link: "https://colab.research.google.com/drive/1574ugnAzStSVBFgye2cuwioh-MkMCr1z?usp=sharing"
  },

  /* ===== FULL STACK ===== */
  adidas: {
    titulo: "Landing Page Adidas",
    tag: "Full Stack",
    img: "imagenes/imagen8.webp",
    desc: "Página publicitaria con animaciones, catálogo de productos y carrito de reservas.",
    tech: "HTML · CSS · JavaScript",
    link: "https://romedavidbenavides.github.io/LandAdidas/"
  },
  ecommerce: {
    titulo: "E-commerce",
    tag: "Full Stack",
    img: "imagenes/imagen1.png",
    desc: "Tienda de cinco páginas con carrito de compras, catálogo de productos, integración con backend y pasarela de pagos.",
    tech: "Bootstrap · HTML · CSS · JavaScript · Spring Boot · SQL",
    link: "https://romedavidbenavides.github.io/e-commerce-postres/"
  },
  webapp: {
    titulo: "Web App",
    tag: "Full Stack",
    img: "imagenes/imagen6.png",
    desc: "Aplicación frontend + backend con consumo de APIs REST y control de versiones con Git.",
    tech: "JavaScript · APIs REST · Git",
    link: "#"
  }
};

/* CLICK EN TARJETAS */
document.querySelectorAll(".tarjeta").forEach(card => {
  card.addEventListener("click", () => {
    const data = dataProyectos[card.dataset.id];
    if (!data) return;

    /* PAUSAR CARRUSEL */
    document.querySelectorAll(".container3d").forEach(c => {
      c.style.animationPlayState = "paused";
    });

    /* LLENAR PANEL */
    const img = document.getElementById("panel-img");
    img.onerror = () => { img.onerror = null; img.src = card.querySelector("img").src; };
    img.src = data.img;
    img.alt = data.titulo;

    document.getElementById("panel-tag").innerText = data.tag;
    document.getElementById("panel-title").innerText = data.titulo;
    document.getElementById("panel-desc").innerText = data.desc;
    document.getElementById("panel-tech").innerText = data.tech || "";

    const lista = document.getElementById("panel-logros");
    lista.innerHTML = "";
    (data.logros || []).forEach(l => {
      const li = document.createElement("li");
      li.innerText = l;
      lista.appendChild(li);
    });

    /* IMAGEN EXTRA (ej. reporte de vehículo) - solo si existe */
    const extra = document.getElementById("panel-extra");
    const extraImg = document.getElementById("panel-extra-img");
    extra.classList.add("hidden");
    if (data.extra) {
      extraImg.onload = () => extra.classList.remove("hidden");
      extraImg.onerror = () => extra.classList.add("hidden");
      extraImg.src = data.extra.img;
      document.getElementById("panel-extra-cap").innerText = data.extra.cap;
    }

    const link = document.getElementById("panel-link");
    link.href = data.link;
    link.classList.toggle("hidden", !data.link || data.link === "#");

    /* MOSTRAR PANEL */
    overlay.classList.remove("hidden");
  });
});

/* CERRAR PANEL */
function cerrarPanel() {
  overlay.classList.add("hidden");

  document.querySelectorAll(".container3d").forEach(c => {
    c.style.animationPlayState = "running";
  });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") cerrarPanel();
});

/* CERRAR MENÚ MÓVIL AL NAVEGAR */
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.body.classList.remove("menu-open"));
});

/* APARICIÓN AL HACER SCROLL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

/* CAMBIO AUTOMÁTICO DE PANTALLAS (CabanApp) */
document.querySelectorAll(".slides").forEach(slides => {
  const imgs = slides.querySelectorAll("img");
  let actual = 0;
  setInterval(() => {
    imgs[actual].classList.remove("active");
    actual = (actual + 1) % imgs.length;
    imgs[actual].classList.add("active");
  }, 3500);
});

/* INCLINACIÓN 3D DE LOS MOCKUPS */
if (!matchMedia("(prefers-reduced-motion: reduce)").matches && matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".tilt").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

/* LUZ DE FONDO QUE SIGUE AL MOUSE */
document.addEventListener("mousemove", e => {
  document.body.style.setProperty("--mx", e.clientX + "px");
  document.body.style.setProperty("--my", e.clientY + "px");
});
