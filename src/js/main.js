const footerYear = document.querySelector(".footer_year")

const cookieAlert = document.querySelector(".cookie-alert")
const cookieAlertBtn = document.querySelector(".cookie-btn")

//cart
const cartBox=document.querySelector('.cart')
const cartIcon=document.querySelector('#cart-icon')
const cartCloseBtn=document.querySelector('#close-cart')

// Footer
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = year
}

// Cookie
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

// Open cart
const showCartBox=()=>{
	cartBox.classList.add('cart-active')
}
// Close Cart
const hideCartBox=()=>{
	cartBox.classList.remove('cart-active')
}
cartIcon.addEventListener('click', showCartBox)
cartCloseBtn.addEventListener('click', hideCartBox)

cookieAlertBtn.addEventListener("click", handleCookieAlert)
showCookie()
handleCurrentYear()