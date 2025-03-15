
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Obtém o alvo da âncora
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Verifica se o elemento existe
        if (targetElement) {
            // Calcula a posição para centralizar o elemento
            const elementTop = targetElement.offsetTop;
            const elementHeight = targetElement.offsetHeight;
            const windowHeight = window.innerHeight;

            // Ajusta a rolagem para centralizar o elemento na tela
            const scrollPosition = elementTop - (windowHeight / 2) + (elementHeight / 2);

            // Faz a rolagem suave até a posição desejada
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});



let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider img');
    const totalSlides = slides.length;

    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;  // Vai para o último slide se estiver no primeiro
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;  // Vai para o primeiro slide se estiver no último
    }

    const slider = document.querySelector('.slider');
    // Mover o slider de acordo com a quantidade de slides
    slider.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
}