
// Animação de carregamento
let percent = 0;
const loadingText = document.getElementById('loading-text');
const preloader = document.getElementById('preloader');

if (loadingText && preloader) {
  let interval = setInterval(() => {
    percent += 1;
    loadingText.textContent = `Carregando... ${percent}%`;
    if (percent >= 100) {
      clearInterval(interval);
      preloader.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  }, 20);
}

// Partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// Mensagem após envio do formulário
const formContato = document.getElementById('formulario-contato');
if (formContato) {
  formContato.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch(formContato.action, {
      method: formContato.method,
      body: new FormData(formContato),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        formContato.reset();
        document.getElementById('mensagem-sucesso').textContent = 'Mensagem enviada com sucesso! Retornaremos em breve.';
        document.getElementById('mensagem-sucesso').style.display = 'block';
      } else {
        alert('Erro ao enviar sua mensagem. Por favor, tente novamente.');
      }
    }).catch(error => {
      alert('Erro de conexão: ' + error.message);
    });
  });
}
