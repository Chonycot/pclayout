
const navbar = document.querySelector('.header__nav');
const links = navbar.querySelectorAll('a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault() //отменяет действия, заложенные системой

        const section = document.querySelector(link.getAttribute('href'))

        if (section) {
            /* section.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            }) */
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})