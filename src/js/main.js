const footerYear = document.querySelector(".footer_year")

const cookieAlert = document.querySelector(".cookie-alert")
const cookieAlertBtn = document.querySelector(".cookie-btn")

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


cookieAlertBtn.addEventListener("click", handleCookieAlert)
showCookie()
handleCurrentYear()