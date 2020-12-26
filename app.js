const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    //Toggle nav
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')

        links.forEach((link, index) => {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            {
            link.style.animation   = `navLinksFade 0.5s ease forwards ${index /5 +0.5}s`
            }
        });

        burger.classList.toggle('toggle')
    });

    //Animate fade
    
};

navSlide();