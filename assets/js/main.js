
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const whatsappMessage = document.createElement('div');
whatsappMessage.classList.add('whatsapp-message');
whatsappMessage.innerText = '¿Cómo podemos ayudarte?';

document.body.appendChild(whatsappMessage);

window.addEventListener('load', () => {
  whatsappMessage.classList.add('show');
});

document.addEventListener('click', (event) => {
  if (!whatsappMessage.contains(event.target)) {
    whatsappMessage.classList.remove('show');
  }
});


// Selecciona el interruptor
const toggleSwitch = document.querySelector('.toggle-switch .checkbox');

// Función para actualizar el tema
function updateTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    toggleSwitch.checked = true;
  } else {
    document.body.classList.remove('dark-theme');
    toggleSwitch.checked = false;
  }
}

// Evento para el cambio de estado del interruptor
toggleSwitch.addEventListener('change', function() {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

// Inicializa el tema al cargar la página
updateTheme();

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarNav')
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {toggle: false})
navLinks.forEach((l) => {
    if (menuToggle.classList.contains('show')) {  // only fire on mobile
        l.addEventListener('click', () => { 
            bsCollapse.toggle() 
        })
    }
})

$(function() {

	var owl = $('.owl-1');
    owl.owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        dots: true,
        items: 1,
        smartSpeed: 1000,
        autoplay: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
    });

    // Inicialización del carrusel de menú
    var menuOwl = $('.owl-menu');
    menuOwl.owlCarousel({
        loop: false,         // No es necesario que sea infinito
        margin: 10,
        nav: false,          // Puedes habilitar navegación si lo prefieres
        dots: false,         // No se necesitan puntos en el menú
        responsive: {
            0: {
                items: 2     // Muestra 2 ítems en móviles
            },
            600: {
                items: 3     // Muestra 3 ítems en pantallas medianas
            },
            1000: {
                items: 4     // Muestra 4 ítems en pantallas grandes
            }
        }
    });

    // Sincronización del menú con el carrusel principal
    var carousel_nav_a = $('.carousel-nav a');

    carousel_nav_a.each(function(slide_index) {
        var $this = $(this);
        $this.attr('data-num', slide_index);
        $this.click(function(e) {
            owl.trigger('to.owl.carousel', [slide_index, 1500]);  // Cambia el slide del carrusel principal
            e.preventDefault();
        });
    });

    owl.on('changed.owl.carousel', function(event) {
        carousel_nav_a.removeClass('active');
        $(".carousel-nav a[data-num=" + event.item.index + "]").addClass('active');  // Cambia la clase activa
    });

    // Sincronización del carrusel de menú con los clics
    $('.owl-menu a').click(function(e) {
        e.preventDefault();
        var index = $(this).index();
        
        // Cambiar el carrusel principal al ítem correspondiente
        owl.trigger('to.owl.carousel', [index, 300]);
        
        // Cambiar la clase activa en el menú
        $('.owl-menu a').removeClass('active');
        $(this).addClass('active');
    });

	
})

