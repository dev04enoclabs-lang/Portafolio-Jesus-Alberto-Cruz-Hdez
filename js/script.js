(function () {
  const container = document.getElementById("threejs-container-ANIMATION_3");
  const devicePixelRatio = window.devicePixelRatio || 1;

  // 1. DATASETS ESTRUCTURADOS

  // Trayectoria y Experiencia Profesional
  const experiencesData = [
    {
      period: "2024 — 2026",
      role: "Jesus — Full Stack Developer",
      company: "Enoc Labs agency",
      description:
        "Desarrollo y soporte continuo para soluciones web y móviles de alto impacto: El Gran Corral, Drill Balance, Check IO, Mi FutX y proyectos complementarios.",
    },
  ];

  // Formación Académica
  const educationData = [
    {
      period: "Formación Técnica",
      degree: "Técnico en Programación",
      institution: "Centro de Bachillerato Tecnológico Agropecuario No.179",
      description:
        "Formación especializada en lógica algorítmica, estructuras de datos, modelado de bases de datos relacionales y desarrollo de aplicaciones.",
    },
  ];

  // Portafolio de Proyectos Destacados
  const projectsData = [
    {
      title: "Ch'Tacos — Plataforma Web de Pedidos y Registro de Ventas",
      category: "Full Stack & Web Application",
      role: "Full Stack Developer",
      description:
        "Desarrolle por mi cuentauna web de gestión de ventas y toma de pedidos. Permite al personal de la taqueria tomar pedidos de los clientes y registro de ventas, como la generación de tickets digitales enviados directamente al correo electrónico del cliente y implementación de seguridad de expiración de tiempo definido.",
      technologies: ["Laravel 12", "PHP", "MVC", "JavaScript", "CSS3", "Blade"],
      link: "https://github.com/dev04enoclabs-lang/Chtacos-web",
      image: "img/chtacos-preview.png",
    },
    // {
    //   title: "Bimbo — Plataforma Management & Control de Ventas",
    //   category: "Full Stack & Enterprise Management",
    //   role: "Full Stack Developer (En desarrollo)",
    //   description:
    //     "Desarrollo Frontend y Backend para plataforma de administración corporativa. Implementación de módulos para el control de dispositivos, gestión de usuarios por departamento y visualización analítica de ventas en tiempo real.",
    //   technologies: [],
    //   link: "https://bimbo.aucome.com.mx/",
    // },
    {
      title: "Menú y Gestión de Cafetería — Hospital San José",
      category: "Full Stack & Web Platform",
      role: "Frontend & API Integration (Enoc Labs)",
      description:
        "En mi tiempo en Enoc Labs y su equipo mi colaboración fue desarrollar el frontend del sitio web completo de la cafetería del Hospital San José, creando una plataforma moderna y funcional. El sitio facilita el acceso al menú diario, los platillos disponibles, eventos privados, ubicación y datos de contacto, ofreciendo una experiencia intuitiva para colaboradores, pacientes y visitantes. Además, permite una administración eficiente del contenido para mantener la información siempre actualizada.",
      technologies: [
        "Laravel 12",
        "PHP",
        "MVC",
        "JavaScript",
        "CSS3",
        "Blade",
        "MySQL",
      ],
      link: "https://www.cafeteria.hospitalessanjose.com/",
      image: "img/chtacos-preview.png",
    },
    {
      title: "Hospital San José — Sistema de Encuestas",
      category: "Web Platform & Management",
      role: "Frontend & API Integration (Enoc Labs)",
      description:
        "Fui el encargado del desarrollo Frontend y de la integración de consumo de APIs para la plataforma de encuestas interactiva del Hospital San José. Diseñé y construí una interfaz fluida e intuitiva enfocada en la experiencia de usuario (UX), conectando las vistas visuales con los endpoints del servidor para la captura y envío en tiempo real de la retroalimentación de pacientes en áreas como Urgencias e Hospitalización. Esta integración garantizó un flujo de datos limpio, optimizando el posterior análisis de métricas de calidad.",
      technologies: [],
      link: "#",
      image: "img/chtacos-preview.png",
    },
    {
      title: "SMKT — Sistema de Gestión Centro de Acopio Municipal",
      category: "Web Platform & Management",
      role: "Frontend Developer (Enoc Labs)",
      description:
        "Desarrollo de la interfaz de usuario para una plataforma de administración municipal. Diseñé e implementé vistas modernas, claras y funcionales que permiten a los usuarios gestionar información clave de manera eficiente, segura e intuitiva.",
      technologies: [],
      link: "#",
      image: "img/chtacos-preview.png",
    },
  ];

  // 2. FUNCIONES DE RENDERIZADO DINÁMICO EN EL DOM

  function renderExperiences() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    container.innerHTML = experiencesData
      .map(
        (exp) => `
    <div class="row-3-col item-row">
      <div class="col-meta">
        <span class="period">${escapeHTML(exp.period)}</span>
      </div>
      <div class="col-title">
        <h3 class="role-title">${escapeHTML(exp.role)}</h3>
        <span class="company-name">${escapeHTML(exp.company)}</span>
      </div>
      <div class="col-desc">
        <p class="item-description">${escapeHTML(exp.description)}</p>
      </div>
    </div>
  `,
      )
      .join("");
  }

  function renderEducation() {
    const container = document.getElementById("education-container");
    if (!container) return;

    container.innerHTML = educationData
      .map(
        (edu) => `
    <div class="row-3-col item-row">
      <div class="col-meta">
        <span class="period">${escapeHTML(edu.period)}</span>
      </div>
      <div class="col-title">
        <h3 class="role-title">${escapeHTML(edu.degree)}</h3>
        <span class="company-name">${escapeHTML(edu.institution)}</span>
      </div>
      <div class="col-desc">
        <p class="item-description">${escapeHTML(edu.description)}</p>
      </div>
    </div>
  `,
      )
      .join("");
  }

  function renderProjects() {
    const container = document.getElementById("projects-grid");
    if (!container) return;

    container.innerHTML = projectsData
      .map(
        (project) => `
    <article class="project-card">
      <div class="project-content-top">
        <div class="project-header">
          <span class="project-tag">${escapeHTML(project.category)}</span>
          <span class="project-icon" aria-hidden="true">&#8599;</span>
        </div>
        <h3 class="project-title">${escapeHTML(project.title)}</h3>
        <p class="project-desc">${escapeHTML(project.description)}</p>
      </div>
      <div class="project-techs">
        ${project.technologies.map((t) => `<span class="project-tech-tag">${escapeHTML(t)}</span>`).join("")}
      </div></br>
      <button onclick="window.open('${project.link}', '_blank')" class="btn-project">
        Ver Proyecto <i class="fas fa-external-link-alt"></i>
      </button>
    </article>
  `,
      )
      .join("");
  }

  function escapeHTML(str) {
    return str.replace(
      /[&<>'"]/g,
      (tag) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[tag] || tag,
    );
  }

  // 3. ANIMACIONES AL SCROLL (IntersectionObserver)

  function initScrollAnimations() {
    const reveals = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("active"));
      return;
    }

    const observerOptions = {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    reveals.forEach((el) => observer.observe(el));
  }

  // 4. INTERACTIVIDAD ADICIONAL

  function initHeaderEffects() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 40) {
          header.style.borderBottomColor = "var(--border-light)";
          header.style.background = "rgba(13, 14, 18, 0.95)";
        } else {
          header.style.borderBottomColor = "var(--border-subtle)";
          header.style.background = "rgba(13, 14, 18, 0.85)";
        }
      },
      { passive: true },
    );
  }

  // 5. INICIALIZACIÓN GENERAL AL CARGAR EL DOM

  document.addEventListener("DOMContentLoaded", () => {
    renderExperiences();
    renderEducation();
    renderProjects();
    initScrollAnimations();
    initHeaderEffects();
  });
})();

function initCarousel() {
  const container = document.getElementById("heroCarousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!container || slides.length === 0) return;

  let currentIndex = 0;
  let autoSlideTimer = null;

  // Cambia a la diapositiva en el índice dado
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Inicia la rotación automática cada 3 segundos
  function startAutoSlide() {
    if (!autoSlideTimer) {
      autoSlideTimer = setInterval(nextSlide, 2000);
    }
  }

  // Detiene el temporizador
  function stopAutoSlide() {
    if (autoSlideTimer) {
      clearInterval(autoSlideTimer);
      autoSlideTimer = null;
    }
  }

  // Eventos de botones
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
    });
  }

  // Pausar al pasar el cursor y reanudar al quitarlo
  container.addEventListener("mouseenter", stopAutoSlide);
  container.addEventListener("mouseleave", startAutoSlide);

  // Iniciar
  startAutoSlide();
}

// Llama a la función cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initCarousel();
});
