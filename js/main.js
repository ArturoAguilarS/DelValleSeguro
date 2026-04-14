/* ============================================================
   HEADER: scroll effect + mobile menu + active nav
   ============================================================ */
(function () {
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  // Scroll effect
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Mobile menu toggle
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      if (menuIconOpen) menuIconOpen.style.display = isOpen ? 'none' : 'block';
      if (menuIconClose) menuIconClose.style.display = isOpen ? 'block' : 'none';
    });
  }

  // Active nav link
  const currentPath = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  const navLinks = document.querySelectorAll('[data-nav]');
  navLinks.forEach(function (link) {
    const page = link.getAttribute('data-nav');
    if (
      (page === 'index' && (currentPath === 'index' || currentPath === '')) ||
      (page !== 'index' && currentPath === page)
    ) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   FLOATING BUTTONS
   ============================================================ */
(function () {
  const toggleBtn = document.getElementById('float-toggle');
  const floatOptions = document.getElementById('float-options');

  if (toggleBtn && floatOptions) {
    toggleBtn.addEventListener('click', function () {
      floatOptions.classList.toggle('open');
    });
  }
})();

/* ============================================================
   CONTACT FORM
   ============================================================ */
(function () {
  const form = document.getElementById('contact-form');
  const formContent = document.getElementById('form-content');
  const formSuccess = document.getElementById('form-success');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = form.elements['nombre'].value;
    const telefono = form.elements['telefono'].value;
    const seguro = form.elements['seguro'].value;
    const mensaje = form.elements['mensaje'].value;

    const msg = `Hola, me gustaría información sobre seguros.\nNombre: ${nombre}\nTeléfono: ${telefono}\nSeguro de interés: ${seguro}\nMensaje: ${mensaje}`;
    const url = `https://wa.me/522227059574?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    if (formContent && formSuccess) {
      formContent.style.display = 'none';
      formSuccess.classList.add('visible');
      setTimeout(function () {
        formSuccess.classList.remove('visible');
        formContent.style.display = 'flex';
        form.reset();
      }, 4000);
    }
  });
})();
