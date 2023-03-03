const hamburger = document.querySelector(".hamburger")
const navList = document.querySelector(".navbar__list")
const navLinks = document.querySelectorAll(".navbar__item a")
const scrollSpySection = document.querySelectorAll(".scrollspy")
const lastSection = document.querySelector(".nav-last a")

const footerYear = document.querySelector(".footer_year")
const headerTextAnimation = document.querySelector(".header__text h1")
const sliderBox = document.querySelector(".best-products__slider")
const carouselProducts = document.querySelectorAll(
	".best-products__slider-product"
)
const sliderBtnLeft = document.querySelector(".btn-left")
const sliderBtnRight = document.querySelector(".btn-right")
const cookieAlert = document.querySelector(".cookie-alert")
const cookieAlertBtn = document.querySelector(".cookie-btn")

const counterItems = document.querySelectorAll(".counter")
const counterBox = document.querySelector(".counter__box")

const carouselWidth = 400
const carouselSpeed = 3000

const options = {
	rootMargin: "-250px",
}

//counter
const startCounter = entry => {
	if (entry[0].isIntersecting) {
		counterItems.forEach(counter => {
			const updateCounter = () => {
				const finalNumber = counter.getAttribute("data-number")
				const value = parseInt(counter.textContent)

				//const speed =50
				const speed = finalNumber / 50

				if (value < finalNumber) {
					counter.textContent = `${Math.floor(value + speed)}`
					setTimeout(updateCounter, 1)
				} else {
					counter.textContent = finalNumber
				}
			}
			updateCounter()
		})
	}
}

const observer = new IntersectionObserver(startCounter, options)
observer.observe(counterBox)

let indexSlider = 0

let textAnimation = headerTextAnimation.innerHTML
let timeout
let index = 1
let speed = 150

//carousel
//let startCarousel = setInterval(handleCarusel, carouselSpeed)

const handleCarusel = () => {
	indexSlider++
	changeProduct()
}

const handleCaruselRightBtn = () => {
	indexSlider++
	resetInterval()
}
const handleCaruselLeftBtn = () => {
	indexSlider--
	resetInterval()
}

const resetInterval = () => {
	changeProduct()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarusel, carouselSpeed)
}

const changeProduct = () => {
	if (indexSlider > carouselProducts.length - 5) {
		indexSlider = 0
	} else if (indexSlider < 0) {
		indexSlider = carouselProducts.length - 5
	}
	sliderBox.style.transform = `translateX(${-indexSlider * carouselWidth}px)`
}

//writing animations
const writingAnimation = () => {
	headerTextAnimation.innerHTML = textAnimation.slice(0, index)
	index++
	if (index > textAnimation.length) return
	timeout = setTimeout(writingAnimation, speed)
}

//scrollSpy
const handleScrollSpy = () => {
	if (document.body.classList.contains("main-page")) {
		const sections = []

		scrollSpySection.forEach(section => {
			//window.scrollY - wartość jak daleko przesuneliśmy przeglądrkę - wartość scrolla
			//section.offsetTop - odległość dalej sekcji od górnej krawędzi przeglądarki
			//section.offsetHeight - wysokość każdej z sekcji
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 80) {
				sections.push(section)


				const activeSection = document.querySelector(
					`[href*="${sections[0].id}"]`
				)

				navLinks.forEach(item => item.classList.remove("active"))
				activeSection.classList.add("active")
			}

			if (window.innerHeight + window.scrollY >=document.body.offsetHeight-100) {
				navLinks.forEach(item => item.classList.remove("active"))
				lastSection.classList.add("active")
			}
		})
	}
}

const handleHamburger = () => {
	hamburger.classList.toggle("is-active")
	navList.classList.toggle("show-menu")
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie")
	if (cookieEaten) {
		cookieAlert.classList.add("hide")
	}
}
const handleCookieAlert = () => {
	localStorage.setItem("cookie", true)
	cookieAlert.classList.add("hide")
}

hamburger.addEventListener("click", handleHamburger)

sliderBtnRight.addEventListener("click", handleCaruselRightBtn)
sliderBtnLeft.addEventListener("click", handleCaruselLeftBtn)

cookieAlertBtn.addEventListener("click", handleCookieAlert)

window.addEventListener("scroll", handleScrollSpy)

handleCurrentYear()
writingAnimation()
showCookie()
