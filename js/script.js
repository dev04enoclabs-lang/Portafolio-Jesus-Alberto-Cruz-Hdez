document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("privateProjectModal");
  const modalTitle = document.getElementById("modalProjectTitle");
  const modalMessage = document.getElementById("modalProjectMessage");
  const closeBtn = document.getElementById("closeProjectModal");
  const acceptBtn = document.getElementById("modalAcceptBtn");
  const contactBtn = document.getElementById("modalContactBtn");

  const defaultMessage = "Este sistema forma parte de una plataforma privada o en entorno local. Por políticas de seguridad, privacidad de datos y confidencialidad, la URL pública no está disponible.";

  function openPrivateModal(title, customMessage) {
    if (!modal) return;

    if (modalTitle) modalTitle.textContent = title || "Proyecto Privado";
    if (modalMessage) modalMessage.textContent = customMessage || defaultMessage;
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }

  function closePrivateModal() {
    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element)) return;

    const projectButton = e.target.closest(".project-card .btn-project");
    const projectLink = e.target.closest(".project-card a, .project-link");
    const projectAction = projectButton || projectLink;
    if (!projectAction) return;

    const projectUrl = projectButton
      ? projectButton.dataset.projectUrl
      : projectLink.getAttribute("href");
    const normalizedUrl = projectUrl ? projectUrl.trim() : "";

    let validUrl = false;
    if (normalizedUrl && !normalizedUrl.startsWith("#")) {
      try {
        const parsedUrl = new URL(normalizedUrl, document.baseURI);
        validUrl = parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
      } catch {
        validUrl = false;
      }
    }

    if (!validUrl) {
      e.preventDefault();

      const card = projectAction.closest(".project-card");
      const title = card
        ? card.querySelector(".project-title")?.textContent
        : "Proyecto Privado";
      const customMessage =
        projectButton?.dataset.projectMessage ||
        projectLink?.dataset.message ||
        "";

      openPrivateModal(title, customMessage);
      return;
    }

    if (projectButton) {
      e.preventDefault();
      window.open(normalizedUrl, "_blank", "noopener,noreferrer");
    }
  });

  // Eventos para cerrar el modal
  if (closeBtn) closeBtn.addEventListener("click", closePrivateModal);
  if (acceptBtn) acceptBtn.addEventListener("click", closePrivateModal);
  if (contactBtn) contactBtn.addEventListener("click", closePrivateModal);

  // Cerrar al hacer clic fuera de la caja del modal
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closePrivateModal();
      }
    });
  }

  // Cerrar con la tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closePrivateModal();
    }
  });
});


(function () {
  const container = document.getElementById("threejs-container-ANIMATION_3");
  const devicePixelRatio = window.devicePixelRatio || 1;

  // 1. DATASETS ESTRUCTURADOS

  // Trayectoria y Experiencia Profesional
  const experiencesData = [
    {
      period: "2024 — 2026",
      role: "Jesus — Full Stack Developer",
      company: "Enoc Labs",
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
      title:
        "Ch'Tacos — Plataforma Web de toma de Pedidos y Registro de Ventas",
      category: "Full Stack & Web Application",
      role: "Full Stack Developer",
      description:
        "Desarrollo de plataforma web Full Stack para gestión de pedidos y control de ventas. Optimiza la eficiencia operativa en campo y el registro analítico por colaborador (diario, semanal y mensual). Integra un módulo de envío automatizado de comprobantes digitales vía correo electrónico y mecanismos avanzados de seguridad: control de sesión única, autenticación basada en tokens y expiración automática de sesión a las 8 horas.",
      technologies: [
        "Laravel 12",
        "PHP",
        "Arquitectura MVC",
        "JavaScript",
        "CSS3",
        "Blade",
      ],
      link: "#",
      image: "img/Chtacos.png",
    },
    // {
    //   title: "Bimbo Go — Plataforma Web de Pedidos y Registro de Ventas",
    //   category: "Full Stack & Web Application",
    //   role: "Full Stack Developer",
    //   description:
    //     "Desarrolle por mi cuentauna web de gestión de ventas y toma de pedidos. Permite al personal de la taqueria tomar pedidos de los clientes y registro de ventas, como la generación de tickets digitales enviados directamente al correo electrónico del client y implementación de seguridad de expiración de tiempo definido.",
    //   technologies: ["Laravel 12", "PHP", "Arquitectura MVC", "JavaScript", "CSS3", "Blade"],
    //   link: "https://github.com/dev04enoclabs-lang/Chtacos-web",
    //   image: "img/bimbo.png",
    // },
    {
      title: "Menú y Gestión de Cafetería — Hospital San José",
      category: "Full Stack & Web Platform",
      role: "Frontend (Enoc Labs)",
      description:
        "Desarrollo Frontend para la plataforma web institucional del Hospital San José. Implementación de una interfaz moderna e intuitiva para la consulta optimizada del menú diario, servicios, eventos privados y canales de contacto, orientada a colaboradores, pacientes y visitantes. Integración de un módulo de administración de contenidos para la actualización dinámica y eficiente de la información.",
      technologies: ["HTML5", "JavaScript", "CSS3"],
      link: "https://www.cafeteria.hospitalessanjose.com/",
      image: "img/cafeteria.png",
    },
    {
      title: "Hospital San José – Sistema de Encuestas",
      category: "Web Platform & Management",
      role: "Frontend & API Integration (Enoc Labs)",
      description:
        "Desarrollo Frontend y consumo de APIs REST para la plataforma de encuestas del Hospital San José. Construcción de interfaces responsivas y fluidas con enfoque UX, optimizadas para dispositivos Apple. Integración de vistas con endpoints del servidor para la captura y sincronización en tiempo real de datos de pacientes en áreas críticas como Urgencias e Hospitalización, garantizando flujos de datos optimizados y mejorando la calidad de la atención médica.",
      technologies: ["JavaScript", "Html", "Css"],
      link: "#",
      privateMessage: "Plataforma interna de evaluación hospitalaria protegida por confidencialidad (NDA). Puedo compartir detalles técnicos de su arquitectura durante una entrevista.",
      image: "img/Survey-HSJ.png",
    },
    {
      title: "SMKT — Sistema de Gestión Centro de Acopio Municipal",
      category: "Web Platform & Management",
      role: "Frontend Developer (Enoc Labs)",
      description:
        "Desarrollo Frontend y consumo de APIs REST para una plataforma de gestión municipal orientada a incentivos de reciclaje. Implementación de vistas administrativas dinámicas para el control de participantes, registro de acumulación de puntos y gestión automatizada de canjes por recompensas, optimizando la trazabilidad de datos y la operación ciudadana.",
      technologies: ["Laravel 12", "PHP", "JavaScript", "CSS3", "Blade"],
      link: "https://admin.smktmexico.com/8u5zih5toxzdgbfo",
      image: "img/smkt.png",
    },
    {
      title: "HSJ-Adminitración — Sistema de Gestión Hospitalaria y Personal",
      category: "Web Platform & Management",
      role: "Frontend Developer (Enoc Labs)",
      description:
        "Modernización y escalamiento de la plataforma institucional de gestión integral para el Hospital San José (administración de médicos, pacientes, servicios de comedor y áreas clínicas). Desarrollo Frontend e integración de nueva lógica de negocio mediante interfaces modulares, incorporando flujos críticos de seguridad como verificación en dos pasos mediante códigos OTP y validación de correos corporativos.",
      technologies: ["HTML", "PHP", "PHPMailer", "Composer", "MySQL", "JavaScript", "CSS3",],
      link: "https://www.admin.hospitalessanjose.com/",
      image: "img/HSJ-Admin.png",
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
        <div class="project-image-container">
          <img class="project-image" src="${escapeHTML(project.image)}" alt="Vista previa del proyecto ${escapeHTML(project.title)}" loading="lazy">
        </div>
        <h3 class="project-title">${escapeHTML(project.title)}</h3>
        <p class="project-desc">${escapeHTML(project.description)}</p>
      </div>

      <button
        type="button"
        data-project-url="${escapeHTML(project.link || "")}"
        data-project-message="${escapeHTML(project.privateMessage || "")}"
        class="btn-project"
      >
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
// Esta parte de este codigo, se encarga de mostrar en la Linea 170 las tegnologias con las que se trabajo en cada proyecto
// <div class="project-techs">
//   ${project.technologies.map((t) => `<span class="project-tech-tag">${escapeHTML(t)}</span>`).join("")}
// </div></br></br>