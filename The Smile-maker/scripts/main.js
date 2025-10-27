document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  if(toggle) toggle.addEventListener('click', () => nav.classList.toggle('open'));

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', e => {
      // Remove preventDefault to allow form submission
      alert('Mensaje enviado. Gracias.');
      form.reset();
    });
    const clearBtn = document.getElementById('clearForm');
    if(clearBtn) clearBtn.addEventListener('click', ()=> form.reset());
  }

  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    const logo = document.querySelector('.logo img');
    if (window.scrollY > 50) {
      header.style.background = 'rgba(255, 255, 255, 0.9)';
      logo.style.opacity = '0.7';
    } else {
      header.style.background = 'var(--white)';
      logo.style.opacity = '1';
    }
  });

  // Button click effect
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      this.style.background = 'var(--turquoise)';
      this.style.color = 'var(--white)';
      setTimeout(() => {
        this.style.background = '';
        this.style.color = '';
      }, 300);
    });
  });

  // Banner button click effect
  document.getElementById('bannerBtn').addEventListener('click', function() {
    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    this.style.background = 'var(--turquoise)';
    this.style.color = 'var(--white)';
    setTimeout(() => {
      this.style.background = 'var(--white)';
      this.style.color = 'var(--turquoise)';
    }, 300);
  });

  // Language toggle
  let currentLang = 'es';
  const translations = {
    es: {
      bannerLink: 'Deseo Agendar una Cita AQUÍ →',
      heroH1: 'Sonríe Con Confianza',
      heroP: 'En Smile Maker, combinamos ortodoncia estética y tecnología avanzada para lograr una sonrisa funcional y hermosa.',
      heroBtn1: 'Agenda tu consulta',
      heroBtn2: 'Ver servicios',
      aboutH2: 'Conoce a la Dra. Tamara Calderón L.',
      aboutP1: 'Especialista en ortodoncia con más de 10 años de experiencia. La Dra. Tamara se dedica a crear sonrisas hermosas y saludables utilizando las técnicas más avanzadas y tratamientos personalizados.',
      aboutP2: 'Graduada de la Universidad de Costa Rica, con especialización en ortodoncia estética e invisible.',
      servicesH2: 'Nuestros Servicios',
      service1: 'Ortodoncia estética',
      service1Desc: 'Tratamientos discretos y estéticos.',
      service2: 'Ortodoncia invisible',
      service2Desc: 'Alineadores transparentes y cómodos.',
      service3: 'Blanqueamiento',
      service3Desc: 'Resultados seguros y controlados.',
      service4: 'Diseño de sonrisa',
      service4Desc: 'Plan digital personalizado.',
      beforeAfterH2: 'Resultados que transforman sonrisas',
      testimonialsH2: 'Testimonios',
      clinicH2: 'Nuestra Clínica',
      clinicP: 'Ambiente cálido y tecnología moderna.',
      contactH2: 'Contacto',
      contactMuted: 'Escríbenos o agenda tu cita.',
      namePlaceholder: 'Nombre completo',
      emailPlaceholder: 'Correo electrónico',
      phonePlaceholder: 'Teléfono',
      serviceOptions: '<option value="">Servicio de interés</option><option>Ortodoncia estética</option><option>Ortodoncia invisible</option><option>Cirugía ortognática</option><option>Bichectomía</option><option>Limpieza dental</option><option>Valoración</option><option>Blanqueamiento</option>',
      messagePlaceholder: 'Mensaje',
      submitBtn: 'Enviar mensaje',
      clearBtn: 'Limpiar',
      visitUs: 'Visítanos',
      address: 'Pinares, Curridabat, San José, Costa Rica',
      footerText: '© 2025 Smile Maker | Todos los derechos reservados',
      navInicio: 'Inicio',
      navDra: 'Dra. Tamara',
      navServicios: 'Servicios',
      navAntes: 'Antes y Después',
      navTestimonios: 'Testimonios',
      navClinica: 'Nuestra Clínica',
      navContacto: 'Contacto',
      beforeCaption: 'Antes',
      afterCaption: 'Después',
      shareText: 'Comparte esta página:'
    },
    en: {
      bannerLink: 'I Want to Schedule an Appointment HERE →',
      heroH1: 'Smile With Confidence',
      heroP: 'At Smile Maker, we combine aesthetic orthodontics and advanced technology to achieve a functional and beautiful smile.',
      heroBtn1: 'Schedule your consultation',
      heroBtn2: 'View services',
      aboutH2: 'Meet Dr. Tamara Calderón L.',
      aboutP1: 'Orthodontics specialist with over 10 years of experience. Dr. Tamara is dedicated to creating beautiful and healthy smiles using the most advanced techniques and personalized treatments.',
      aboutP2: 'Graduated from the University of Costa Rica, with specialization in aesthetic and invisible orthodontics.',
      servicesH2: 'Our Services',
      service1: 'Aesthetic orthodontics',
      service1Desc: 'Discreet and aesthetic treatments.',
      service2: 'Invisible orthodontics',
      service2Desc: 'Transparent and comfortable aligners.',
      service3: 'Whitening',
      service3Desc: 'Safe and controlled results.',
      service4: 'Smile design',
      service4Desc: 'Personalized digital plan.',
      beforeAfterH2: 'Results that transform smiles',
      testimonialsH2: 'Testimonials',
      clinicH2: 'Our Clinic',
      clinicP: 'Warm environment and modern technology.',
      contactH2: 'Contact',
      contactMuted: 'Write to us or schedule your appointment.',
      namePlaceholder: 'Full name',
      emailPlaceholder: 'Email address',
      phonePlaceholder: 'Phone',
      serviceOptions: '<option value="">Service of interest</option><option>Aesthetic orthodontics</option><option>Invisible orthodontics</option><option>Orthognathic surgery</option><option>Bichectomy</option><option>Dental cleaning</option><option>Assessment</option><option>Whitening</option>',
      messagePlaceholder: 'Message',
      submitBtn: 'Send message',
      clearBtn: 'Clear',
      visitUs: 'Visit us',
      address: 'Pinares, Curridabat, San José, Costa Rica',
      footerText: '© 2025 Smile Maker | All rights reserved',
      navInicio: 'Home',
      navDra: 'Dr. Tamara',
      navServicios: 'Services',
      navAntes: 'Before and After',
      navTestimonios: 'Testimonials',
      navClinica: 'Our Clinic',
      navContacto: 'Contact',
      beforeCaption: 'Before',
      afterCaption: 'After',
      shareText: 'Share this page:'
    }
  };

  function updateLanguage() {
    const lang = translations[currentLang];
    document.getElementById('bannerBtn').textContent = lang.bannerLink;
    document.querySelector('.hero h1').textContent = lang.heroH1;
    document.querySelector('.hero p').textContent = lang.heroP;
    document.querySelectorAll('.hero-cta a')[0].textContent = lang.heroBtn1;
    document.querySelectorAll('.hero-cta a')[1].textContent = lang.heroBtn2;
    document.querySelector('#dra-tamara h2').textContent = lang.aboutH2;
    const aboutPs = document.querySelectorAll('#dra-tamara p');
    aboutPs[0].textContent = lang.aboutP1;
    aboutPs[1].textContent = lang.aboutP2;
    document.querySelector('#servicios h2').textContent = lang.servicesH2;
    const services = document.querySelectorAll('.service-card h3');
    services[0].textContent = lang.service1;
    services[1].textContent = lang.service2;
    services[2].textContent = lang.service3;
    services[3].textContent = lang.service4;
    const serviceDescs = document.querySelectorAll('.service-card p');
    serviceDescs[0].textContent = lang.service1Desc;
    serviceDescs[1].textContent = lang.service2Desc;
    serviceDescs[2].textContent = lang.service3Desc;
    serviceDescs[3].textContent = lang.service4Desc;
    document.querySelector('#antes-despues h2').textContent = lang.beforeAfterH2;
    document.querySelector('#testimonios h2').textContent = lang.testimonialsH2;
    document.querySelector('#clinica h2').textContent = lang.clinicH2;
    document.querySelector('#clinica p').textContent = lang.clinicP;
    document.querySelector('#contacto h2').textContent = lang.contactH2;
    document.querySelector('#contacto .muted').textContent = lang.contactMuted;
    document.querySelector('#contactForm input[name="name"]').placeholder = lang.namePlaceholder;
    document.querySelector('#contactForm input[name="email"]').placeholder = lang.emailPlaceholder;
    document.querySelector('#contactForm input[name="phone"]').placeholder = lang.phonePlaceholder;
    document.querySelector('#contactForm select').innerHTML = lang.serviceOptions;
    document.querySelector('#contactForm textarea').placeholder = lang.messagePlaceholder;
    document.querySelector('#contactForm button[type="submit"]').textContent = lang.submitBtn;
    document.getElementById('clearForm').textContent = lang.clearBtn;
    document.querySelector('.info-card h3').textContent = lang.visitUs;
    document.querySelector('.info-card p').textContent = lang.address;
    document.querySelector('.footer-inner p').textContent = lang.footerText;

    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks[0].textContent = lang.navInicio;
    navLinks[1].textContent = lang.navDra;
    navLinks[2].textContent = lang.navServicios;
    navLinks[3].textContent = lang.navAntes;
    navLinks[4].textContent = lang.navTestimonios;
    navLinks[5].textContent = lang.navClinica;
    navLinks[6].textContent = lang.navContacto;

    const captions = document.querySelectorAll('.ba-item figcaption');
    for (let i = 0; i < captions.length; i++) {
      captions[i].textContent = i % 2 === 0 ? lang.beforeCaption : lang.afterCaption;
    }

    document.querySelector('.share-links p').textContent = lang.shareText;

    // Set share links
    const shareUrl = encodeURIComponent(window.location.href);
    document.getElementById('shareFB').href = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
    document.getElementById('shareTW').href = `https://twitter.com/intent/tweet?url=${shareUrl}&text=Check out Smile Maker!`;
    document.getElementById('shareWA').href = `https://wa.me/?text=${shareUrl}`;

    document.getElementById('langToggle').textContent = currentLang === 'en' ? 'SPA' : 'ENG';
  }

  document.getElementById('langToggle').addEventListener('click', function() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    updateLanguage();
  });
});