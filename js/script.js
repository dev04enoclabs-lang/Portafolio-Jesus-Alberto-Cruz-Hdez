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
        "Desarrolle una web de gestión de ventas que toma pedidos. Permite a los colaboradores tomar pedidos con mejor optimización y una mejor atención al clientes, como tambien regitra las ventas hechas por colaborador y la acomulación de ventas hechas por día, semana y mes, se implemento como el envio digital consumido por el cliente por vía correo electrónico, y como medida de seguridad se implemento una expiración de un tiempo de 8 hrs y implementación de autenticación basada en tokens y validación de sesión única por usuario .",
      technologies: [
        "Laravel 12",
        "PHP",
        "Arquitectura MVC",
        "JavaScript",
        "CSS3",
        "Blade",
      ],
      link: "https://github.com/dev04enoclabs-lang/Chtacos-web",
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
        "En mi tiempo en Enoc Labs mi rol fue desarrollar el frontend del sitio web de la cafetería del Hospital San José, creando una plataforma moderna y funcional solicitado. El sitio facilita el acceso al menú diario que ofrece el Hospital San José, como platillos, eventos privados, ubicación y datos de contacto, ofreciendo una experiencia intuitiva para colaboradores, pacientes y visitantes. Además, permite una administración eficiente del contenido para mantener la información siempre actualizada.",
      technologies: ["HTML5", "JavaScript", "CSS3"],
      link: "https://www.cafeteria.hospitalessanjose.com/",
      image: "img/cafeteria.png",
    },
    {
      title: "Hospital San José — Sistema de Encuestas",
      category: "Web Platform & Management",
      role: "Frontend & API Integration (Enoc Labs)",
      description:
        "En mi tiempo en Enoclabs mi rol fue el desarrollo del Frontend y el consumo de APIs para la plataforma de encuestas para el Hospital San José. Se diseño y contruyo una interfaz fluida e intuitiva enfocada en la experiencia de usuario (UX) para dispositivos apple, conectando las vistas visuales con los endpoints del servidor y la plataforma de administración, para la captura y envío en tiempo real de información de pacientes en áreas como Urgencias e Hospitalización entre otros. Esta integración garantiza un flujo de datos optimizanda y la mejora de las áreas y atención a los pacientes.",
      technologies: ["JavaScript", "Html", "Css"],
      link: "#",
      image: "img/Survey-HSJ.png",
    },
    {
      title: "SMKT — Sistema de Gestión Centro de Acopio Municipal",
      category: "Web Platform & Management",
      role: "Frontend Developer (Enoc Labs)",
      description:
        "En mi tiempo en Enoclabs, mi rol fue el desarrollo del Frontend y el consumo de APIs, para una plataforma de administración municipal. Diseñé e implementé vistas modernas y claras que permitan a los administradores gestionar la información de los participantes y el manejo de puntos recolectados por estos mismos y poder canjearlo por un premio, el porposito de la plataforma es insitar a las partisipantes recolectar residuos reciclables y sean premiados por su aportamiento auna buena causa.",
      technologies: ["Laravel 12", "PHP", "JavaScript", "CSS3", "Blade"],
      link: "https://admin.smktmexico.com/8u5zih5toxzdgbfo",
      image: "img/smkt.png",
    },
        {
      title: "HSJ-Adminitración — Sistema de Gestión Hospitalaria y Personal",
      category: "Web Platform & Management",
      role: "Frontend Developer (Enoc Labs)",
      description:
        "Actualización y expansión de plataforma, Participé en la modernización y desarrollo de la plataforma institucional de gestión para el Hospital San José (enfocada en optimizar la administración de medicos, pacientes, restaurante y áreas médicas). Fui responsable del desarrollo Frontend y colaboré en la actualización de la lógica del sistema, implementando nuevas interfaces de usuario para funciones solicitadas por el hospital. Asimismo, contribuí en la integración de flujos de seguridad críticos, incluyendo códigos de verificación y validación de correos corporativos, elevando la robustez y optimización general de la plataforma.",
      technologies: ["HTML", "PHP", "PHPMailer", "Composer", "MySQL", "JavaScript", "CSS3",],
      link: "https://admin.smktmexico.com/8u5zih5toxzdgbfo",
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
// Esta parte de este codigo, se encarga de mostrar en la Linea 170 las tegnologias con las que se trabajo en cada proyecto
      // <div class="project-techs">
      //   ${project.technologies.map((t) => `<span class="project-tech-tag">${escapeHTML(t)}</span>`).join("")}
      // </div></br></br>