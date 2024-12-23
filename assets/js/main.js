const header = document.querySelector("#header")
const btnMenu = document.querySelector("#btn-menu")
const navContent = document.querySelector("#header-nav_content")
const swiperWrapper = document.querySelector("#swiper-wrapper")
const servicesCards = document.querySelector("#services-cards")
const counterElements = document.querySelectorAll("#counter")
const infoContent = document.querySelector("#info-content")
const btnArrow = document.querySelector("#btn-arrow")
const navigateBtns = navContent.querySelectorAll("a")
const servicesLeft = document.querySelector("#services-left")
const servicesRight = document.querySelector("#services-right")

function activeNavigate() {
    navContent.classList.toggle("active")
    if (navContent.classList.contains("active")) {
        btnMenu.querySelector(".bx").classList.replace("bx-menu", "bx-x")
    } else {
        btnMenu.querySelector(".bx").classList.replace("bx-x", "bx-menu")
    }
}

navigateBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        activeNavigate()
    })
})


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

function renderServicesPage() {
    const servicesCardsData = [
        {
            id: 1,
            image: "./assets/images/icons/svg-9.svg",
            title: "Авто-Электрик"
        },
        {
            id: 2,
            image: "./assets/images/icons/svg-8.svg",
            title: "Авто-Механик"
        },
        {
            id: 3,
            image: "./assets/images/icons/svg-7.svg",
            title: "Ремонт Авто на Выезд"
        },
        {
            id: 4,
            image: "./assets/images/icons/svg-8.svg",
            title: "Авто-Вулканизация"
        },
        {
            id: 5,
            image: "./assets/images/icons/svg-6.svg",
            title: "Вскрытия Автомобиля"
        },
        {
            id: 6,
            image: "./assets/images/icons/svg-5.svg",
            title: "Выезд Автомастер Круглосуточный"
        },
        {
            id: 7,
            image: "./assets/images/icons/svg-9.svg",
            title: "Выезд Автоэлектрик Круглосуточный"
        },
        {
            id: 8,
            image: "./assets/images/icons/svg-4.svg",
            title: "Замена Масла"
        },
        {
            id: 9,
            image: "./assets/images/icons/svg-3.svg",
            title: "Замена Шин"
        },
        {
            id: 10,
            image: "./assets/images/icons/svg.svg",
            title: "Обслуживание Двигателя"
        },
        {
            id: 11,
            image: "./assets/images/icons/svg-1.svg",
            title: "Диагностика"
        },
        {
            id: 12,
            image: "./assets/images/icons/svg-8.svg",
            title: "Сварочная работа"
        },
        {
            id: 13,
            image: "./assets/images/icons/vector.svg",
            title: "Токарная услуга"
        },
        {
            id: 14,
            image: "./assets/images/icons/svg-2.svg",
            title: "Тонировка"
        },
        {
            id: 15,
            image: "./assets/images/icons/svg.svg",
            title: "Моторист"
        },
        {
            id: 16,
            image: "./assets/images/icons/svg-3.svg",
            title: "Кастаправ"
        }
    ]
    const gridTemplateCount = window.getComputedStyle(servicesCards).gridTemplateColumns.split(" ").length
    servicesCards.innerHTML = ""
    let i = 0
    servicesCardsData.map(item => {
        i++
        servicesCards.innerHTML += `
                <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="${i <= gridTemplateCount ? i * 100 : i = 1}" class="service-card">
                    <img src=${item.image} alt="">
                    <span>${item.title}</span>
                </div>
        `
    })
}

function renderCounter(element, maxCount) {
    let count = 0
    const countInterval = setInterval(() => {
        if (maxCount > 500) {
            count += 51
        } else if (maxCount > 100) {
            count += 21
        } else if (maxCount > 0) {
            count++
        }
        element.innerHTML = count
        if (count >= maxCount) {
            clearInterval(countInterval)
            element.innerHTML = maxCount
        }
    }, 70)
}

function renderServicesTab() {
    const servicesButtonsData = [
        {
            id: 1,
            image: "./assets/images/icons/svg-1.svg",
            title: "Диагностика"
        },
        {
            id: 2,
            image: "./assets/images/icons/svg-7.svg",
            title: "Обслуживание Двигателя"
        },
        {
            id: 3,
            image: "./assets/images/icons/svg-3.svg",
            title: "Замена Шин"
        },
        {
            id: 4,
            image: "./assets/images/icons/svg-4.svg",
            title: "Замена Масла"
        }
    ]

    const servicesContentData = [
        {
            id: 1,
            image: "./assets/images/service-1.jpg",
            title: "15 Лет Опытa в Автосервисе",
            description: "Мы предоставляем высококачественные услуги по диагностике вашего автомобиля, используя самые современные технологии и оборудование"
        },
        {
            id: 2,
            image: "./assets/images/service-2.jpg",
            title: "15 Лет Опытa в Автосервисе",
            description: "Наши специалисты готовы предложить вам комплексное обслуживание двигателя, чтобы ваш автомобиль всегда работал на максимальной производительности."
        },
        {
            id: 3,
            image: "./assets/images/service-3.jpg",
            title: "15 Лет Опытa в Автосервисе",
            description: "Мы предлагаем профессиональную замену шин, чтобы ваш автомобиль был безопасен на дороге при любых погодных условиях."
        },
        {
            id: 4,
            image: "./assets/images/service-4.jpg",
            title: "15 Лет Опытa в Автосервисе",
            description: "Мы предлагаем быструю и качественную замену масла, чтобы ваш двигатель работал плавно и эффективно"
        }
    ]
    servicesLeft.innerHTML = ""
    servicesRight.innerHTML = ""
    servicesButtonsData.forEach(item => {
        servicesLeft.innerHTML += `
                    <button class="btn btn-services ${item.id == 1 ? "serv-btn-active" : ""}" data-id="${item.id}">
                        <img src=${item.image} alt="">
                        <span>${item.title}</span>
                    </button>        
        `
    })
    function slideServices(count) {
        servicesContentData.forEach(item => {
            if (item.id == count) {
                servicesRight.innerHTML = `
                        <div class="services-right" data-aos="fade-up" data-aos-delay="100">
                            <div class="services-right-image">
                                <img src=${item.image} alt="">
                            </div>
                            <div class="services-right-title">
                                <h3>${item.title}</h3>
                                <p>
                                    ${item.description}
                                </p>
                                <div class="services-check">
                                    <i class='bx bx-check'></i>
                                    <span>Качественное Обслуживание</span>
                                </div>
                                <div class="services-check">
                                    <i class='bx bx-check'></i>
                                    <span>Качественное Обслуживание</span>
                                </div>
                                <div class="services-check">
                                    <i class='bx bx-check'></i>
                                    <span>Качественное Обслуживание</span>
                                </div>
                                <div class="services-btn">
                                    <a href="tel:+998977171118" class="btn btn-primary">
                                        <span>Позвонить</span>
                                        <i class='bx bx-right-arrow-alt'></i>
                                    </a>
                                </div>
                            </div>
                        </div>        
            `
            }
        })
    }
    slideServices(1)
    const servButtons = servicesLeft.querySelectorAll("button")

    servButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            servButtons.forEach(item => {
                if (item.dataset.id == btn.dataset.id) {
                    item.classList.add("serv-btn-active")
                    slideServices(item.dataset.id)
                } else {
                    item.classList.remove("serv-btn-active")
                }
            })
        })
    })
}



renderMainPage()
renderServicesPage()
renderServicesTab()


const observerCount = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            counterElements.forEach(element => {
                renderCounter(element, +element.dataset.count)
                observerCount.unobserve(entry.target);
            })
        }
    });
}, {
    threshold: 0.1
});

observerCount.observe(infoContent)

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArrow.classList.add("active-btn");
    } else {
        btnArrow.classList.remove("active-btn");
    }
});

btnMenu.addEventListener("click", () => {
    activeNavigate()
})

document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 700, // Animatsiya davomiyligi (millisekundlarda)
        easing: 'ease', // Animatsiya turi
        once: true
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




