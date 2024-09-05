
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
// Selecciona el checkbox
const toggleSwitch = document.querySelector('.checkbox');

// Agrega el evento 'change' para escuchar cuando se activa/desactiva
toggleSwitch.addEventListener('change', function() {
  if (toggleSwitch.checked) {
    // Acción cuando el toggle está activado
    console.log('El interruptor está activado');
    // Puedes agregar aquí cualquier acción, como cambiar el tema
    document.body.classList.add('dark-theme');  // Ejemplo de cambio de tema
  } else {
    // Acción cuando el toggle está desactivado
    console.log('El interruptor está desactivado');
    document.body.classList.remove('dark-theme');  // Vuelve al tema normal
  }
});

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