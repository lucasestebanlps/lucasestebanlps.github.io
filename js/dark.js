const btnSwitch = document.querySelector('#switch');
const carrousel = document.querySelector('#sectionCarousel')

btnSwitch.addEventListener('click', () => {
    btnSwitch.classList.toggle('active');
    carrousel.classList.toggle('carousel-dark')
    document.body.classList.toggle('dark');
})

