const accordion = document.querySelector(".accordion")
const accordionBtns = document.querySelectorAll(".accordion__btn")
const productImg = document.querySelector("img")
const btnBuy=document.querySelector('.product__btnBuy')


let countBuy=0
let itemsToBuy=[]

const zoomImg = e => {
	const x = e.clientX
	const y = e.clientY
	//wskazuje pozycję kursora

	const imgX = productImg.offsetLeft
	const imgY = productImg.offsetTop
	//pozycja obrazka

	const newX = (imgX - x) * -1
	const newY = (imgY - y) * -1


    productImg.style.transformOrigin=`${newX}px ${newY}px`

	productImg.classList.add("zoom-img")
}

const resetImg = () => {
	productImg.classList.remove("zoom-img")
}

function openAccordionItems() {
	if (this.nextElementSibling.classList.contains("active")) {
		this.nextElementSibling.classList.remove("active")
	} else {
		closeAccordionItems()
		this.nextElementSibling.classList.toggle("active")
	}
}

const closeAccordionItems = () => {
	const allActiveItems = document.querySelectorAll(".accordion__info")
	allActiveItems.forEach(item => item.classList.remove("active"))
}

const clickOutsideAccordion = e => {
	if (
		e.target.classList.contains("accordion__btn") ||
		e.target.classList.contains("accordion__info") ||
		e.target.classList.contains("accordion__info-text")
	)
		return
	closeAccordionItems()
}

const addToCart=e=>{
	countBuy++
	let newDiv=document.createElement('div')

}

accordionBtns.forEach(btn => btn.addEventListener("click", openAccordionItems))
window.addEventListener("click", clickOutsideAccordion)

//productImg.addEventListener("mousemove", zoomImg)
//productImg.addEventListener("mouseout", resetImg)

btnBuy.addEventListener('click', addToCart)
