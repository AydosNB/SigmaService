const btnMenu = document.querySelector("#btn-menu")
const navContent = document.querySelector("#header-nav_content")
const swiperWrapper = document.querySelector("#swiper-wrapper")


function renderMainPage() {
    const homeData = [
        {
            id: 1,
            excerpt: "// Ремонт автомобилей //",
            title: "Ремонт автомобиля в рассрочку",
            image: "./assets/images/carousel-3.png"
        },
        {
            id: 2,
            excerpt: "// Ремонт автомобилей //",
            title: "Автозапчасти лучшего качества",
            image: "./assets/images/carousel-2.png"
        },
        {
            id: 3,
            excerpt: "// Ремонт автомобилей //",
            title: "Помощь на дороге",
            image: "./assets/images/carousel-1.png"
        },

    ]
    swiperWrapper.innerHTML = ""
    homeData.map(item => {
        swiperWrapper.innerHTML += `
    <div class="swiper-slide slide-${item.id}">
         <div class="backdrop">           
            <div class="swiper-content container">
                <div class="main-title">
                    <p class="home-text-animate" style="transition-delay: 100ms;">${item.excerpt}</p>
                    <h1 class="home-text-animate" style="transition-delay: 300ms;">
                        ${item.title}
                    </h1>
                    <button class="btn btn-primary home-text-animate" style="transition-delay: 500ms;">
                        <span>Узнать больше</span>
                        <i class='bx bx-right-arrow-alt'></i>
                    </button>
                </div>
            <div class="main-image">
                <img class="home-image-animate" src=${item.image} alt="">
            </div>
            </div>            
        </div>
    </div>
    `
    })
}

renderMainPage()

btnMenu.addEventListener("click", () => {
    navContent.classList.toggle("active")
    if (navContent.classList.contains("active")) {
        btnMenu.querySelector(".bx").classList.replace("bx-menu", "bx-x")
    } else {
        btnMenu.querySelector(".bx").classList.replace("bx-x", "bx-menu")
    }
})

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 500, // Animatsiya davomiyligi (millisekundlarda)
        easing: 'ease-in-out', // Animatsiya turi
        once : false
    })

    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 5000,
        },
        loop: true,
        speed: 1000,
        simulateTouch: false,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})



