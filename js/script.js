/* --- Configuração do Particles.js (Fundo Animado) --- */
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#00e1ff" }, /* IMPORTANTE: Mude essa cor se mudou no CSS */
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00e1ff", /* IMPORTANTE: Mude essa cor se mudou no CSS */
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "repulse": { "distance": 100, "duration": 0.4 }
        }
    },
    "retina_detect": true
});

/* --- Configuração do ScrollReveal (Animação ao rolar) --- */
const sr = ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay: 200,
    reset: true // Coloque 'false' se quiser que a animação aconteça apenas uma vez
});

sr.reveal('.reveal-top', { origin: 'top' });
sr.reveal('.reveal-bottom', { origin: 'bottom' });
sr.reveal('.reveal-left', { origin: 'left' });
sr.reveal('.reveal-right', { origin: 'right' });

// Efeito cascata nos cards de projeto
sr.reveal('.project-card', { interval: 200 });