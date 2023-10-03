// JavaScript básico
document.addEventListener("DOMContentLoaded", function () {
    // Executa quando a página é totalmente carregada
    console.log("A página está carregada!");

    // Exemplo de interação com um elemento da página
    const button = document.querySelector("button");
    button.addEventListener("click", function () {
        alert("Você clicou no botão!");
    });
});



// Função para alternar entre os modos de estilo
function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');

    if (body.classList.contains('light')) {
        // Se estiver no modo light, mude para o modo dark (ícone da lua)
        body.classList.remove('light');
        body.classList.add('dark');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        // Salve a preferência do usuário em um cookie
        document.cookie = "mode=dark; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    } else {
        // Se estiver no modo dark, mude para o modo light (ícone do sol)
        body.classList.remove('dark');
        body.classList.add('light');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        // Salve a preferência do usuário em um cookie
        document.cookie = "mode=light; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
    }
}

// Verifique o cookie para definir o modo inicial
function checkInitialMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    const modeCookie = document.cookie.replace(/(?:(?:^|.*;\s*)mode\s*=\s*([^;]*).*$)|^.*$/, "$1");

    if (modeCookie === "dark") {
        // Se o cookie estiver definido como "dark", defina o modo dark (ícone da lua)
        body.classList.remove('light');
        body.classList.add('dark');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    } else {
        // Caso contrário, use o modo light (ícone do sol)
        body.classList.remove('dark');
        body.classList.add('light');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    }
}

// Adicione um ouvinte de eventos para o botão de alternância
document.getElementById('mode-toggle').addEventListener('click', toggleMode);

// Verifique o modo inicial ao carregar a página
window.addEventListener('load', checkInitialMode);






const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const prevSlideButton = document.getElementById('prev-slide');
const nextSlideButton = document.getElementById('next-slide');

let currentIndex = 0;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = 1;
            slide.style.transform = 'translateX(0)';
        } else {
            slide.style.opacity = 0;
            slide.style.transform = 'translateX(100%)';
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
    showSlide(currentIndex);
}

nextSlideButton.addEventListener('click', nextSlide);
prevSlideButton.addEventListener('click', prevSlide);

showSlide(currentIndex);






