let products = {
	data: [
		{
			productName: "Sukulent Green",
			category: "Sukulents",
			price: "30",
			image: "dist/img/sukulent.jpg",
		},
		{
			productName: "Palm Chamedora",
			category: "Green",
			price: "49",
			image: "dist/img/chamedora.png",
		},
		{
			productName: "Monstera",
			category: "Green",
			price: "99",
			image: "dist/img/monstera-ok.png",
		},
		{
			productName: "Palm Chamedora",
			category: "Green",
			price: "49",
			image: "dist/img/chamedora.png",
		},
		{
			productName: "Monstera",
			category: "Green",
			price: "99",
			image: "dist/img/monstera-ok.png",
		},
		{
			productName: "Palm Chamedora",
			category: "Green",
			price: "49",
			image: "dist/img/chamedora.png",
		},
		{
			productName: "Monstera",
			category: "Green",
			price: "99",
			image: "dist/img/monstera-ok.png",
		},
		{
			productName: "Sukulent Green",
			category: "Sukulents",
			price: "30",
			image: "dist/img/sukulent.jpg",
		},
	],
}
for (let i of products.data) {
	// Create box
	let productBox = document.createElement("div")
	productBox.classList.add("product-box", i.category, "hide")
	// a tag
	let a = document.createElement("a")
	a.setAttribute("href", "product.html")
	// Image tag
	let image = document.createElement("img")
	image.classList.add("product-img")
	image.setAttribute("src", i.image)

	a.appendChild(image)
	productBox.appendChild(a)

	// product name
	let nameProduct = document.createElement("h2")
	nameProduct.classList.add("product-title")
	nameProduct.innerText = i.productName.toUpperCase()
	productBox.appendChild(nameProduct)

	//price
	let price = document.createElement("span")
	price.innerText = "$" + i.price
	price.classList.add("product-price")
	productBox.appendChild(price)
	
	//Buy icon
	let buyIcon=document.createElement("i")
	buyIcon.classList.add("product-add-cart","fa-solid","fa-cart-shopping")
	productBox.appendChild(buyIcon)

	//append 
	document.querySelector(".shop-content").appendChild(productBox)
}

// parameter passed from button (Parametre same as category)
function filterProduct(value) {
	//Button class node
	let buttons = document.querySelectorAll(".button-value")
	buttons.forEach(button => {
		//check if value equals innerText
		if (value.toUpperCase() == button.innerText.toUpperCase()) {
			button.classList.add("active")
		} else {
			button.classList.remove("active")
		}
	})

	//sselect all cards
	let elements = document.querySelectorAll(".product-box")
	//loop through all cards
	elements.forEach(element => {
		//display all cards on 'all' button click
		if (value == "all") {
			element.classList.remove("hide")
		} else {
			//Check if element contains category class
			if (element.classList.contains(value)) {
				//display element based on category
				element.classList.remove("hide")
			} else {
				//hide other elements
				element.classList.add("hide")
			}
		}
	})
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
	//initialiazations
	let searchInput = document.getElementById("search-input").value
	let elements = document.querySelectorAll(".product-title")
	let productBox = document.querySelectorAll(".product-box")

	//loop through all products
	elements.forEach((element, index) => {
		//check if text includes the search value
		if (element.innerText.includes(searchInput.toUpperCase())) {
			//display matching card
			productBox[index].classList.remove("hide")
		} else {
			//hide others
			productBox[index].classList.add("hide")
		}
	})
})

// Initially display all products
window.onload=()=>{
	filterProduct('all')
}

