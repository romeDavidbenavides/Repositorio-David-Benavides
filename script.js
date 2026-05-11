const overlay = document.getElementById("overlay");

const dataProyectos = {
  "Plantas IA": {
    titulo: "Detección de Plantas",
    desc: "Identificación de plantas: proyecto enfocado en el reconocimiento de diferentes tipos de plantas y maleza dentro de una gama previamente establecida. Utiliza redes neuronales profundas para la clasificación de imágenes y emplea estrategias como data augmentation, técnicas de limpieza de imágenes, filtros convolucionales y herramientas de evaluación como accuracy, matriz de confusión, test score, entre otras métricas para medir el rendimiento del modelo.",
    link: "#"
  },
  "Placas IA": {
    titulo: "Detección de Placas",
    desc: "Detección de placas vehiculares: proyecto basado en inteligencia artificial que identifica y reconoce placas a partir de imágenes de vehículos. Utiliza técnicas de procesamiento de imágenes y aprendizaje automático para realizar la detección de manera precisa. Tecnologías utilizadas: Python, Computer Vision y Machine Learning.",
    link: "#"
  },
  "Crédito ML": {
    titulo: "Riesgo Crediticio",
    desc: "Sistema crediticio: proyecto académico orientado a determinar el porcentaje de éxito en la aprobación de préstamos mediante el uso de bases de datos reales. Su objetivo es reducir el riesgo crediticio utilizando herramientas de inteligencia artificial para el análisis predictivo. Tecnologías utilizadas: Python, Scikit-learn, Machine Learning, Pandas y NumPy.",
    link: "#"
  },
  "Análisis Médico": {
    titulo: "Análisis Médico",
    desc: "Detección de muestras histológicas de próstata: proyecto académico basado en inteligencia artificial, donde a partir de imágenes de muestras histológicas se analizan sus atributos y características geométricas para determinar, con un alto porcentaje de precisión, la detección de posibles anomalías. Tecnologías utilizadas: Machine Learning y Computer Vision, sk.learn.",
    link: "#"
  },
  "Adidas": {
    titulo: "Campaña Adidas",
    desc: "Landing Page Adidas: página publicitaria que cuenta con animaciones desarrolladas en CSS, HTML y JavaScript, entre otras tecnologías. Posee catálogo de productos y un carrito de reservas, ofreciendo una experiencia dinámica e interactiva para el usuario.",
    link: "#"
  },
  "Cabañas": {
    titulo: "Sistema de Cabañas",
    desc: "Página web interactiva compuesta por cuatro páginas internas, desarrollada únicamente en frontend para la visualización de productos de un motel, como parte de un proyecto freelance. Cuenta con un catálogo minimalista, una interfaz intuitiva y animaciones dinámicas. Tecnologías utilizadas: JavaScript, CSS y HTML.",
    link: "#"
  },
  "E-commerce": {
    titulo: "E-commerce",
    desc: "“E-Commerce”, es una página web con enfoque minimalista que aplica tecnologías como Bootstrap, HTML, CSS y JavaScript. Está compuesta por cinco páginas web integradas, que incluyen carrito de compras, catálogo y exhibición de productos, integración de backend, canal de pagos y destaca por su creatividad..",
    link: "#"
  },
  "Web App": {
    titulo: "Web App",
    desc: "Aplicación completa frontend + backend con consumo de APIs y control de versiones con Git.",
    link: "#"
  }
};

/* CLICK EN TARJETAS */
document.querySelectorAll(".tarjeta").forEach(card => {
  card.addEventListener("click", () => {

    const nombre = card.innerText.trim();

    const data = dataProyectos[nombre];

    if (!data) return;

    /* PAUSAR CARRUSEL */
    document.querySelectorAll(".container3d").forEach(c => {
      c.style.animationPlayState = "paused";
    });

    /* MOSTRAR PANEL */
    overlay.classList.remove("hidden");

    document.getElementById("panel-title").innerText = data.titulo;
    document.getElementById("panel-desc").innerText = data.desc;
    document.getElementById("panel-link").href = data.link;

  });
});

/* CERRAR PANEL */
function cerrarPanel() {
  overlay.classList.add("hidden");

  document.querySelectorAll(".container3d").forEach(c => {
    c.style.animationPlayState = "running";
  });
}