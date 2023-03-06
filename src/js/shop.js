//Cart Working JS
// if (document.readyState == "loading") {
// 	document.addEventListener("DOMContentLoaded, ready")
// } else {
// 	ready()
// }
ready()
// Making Function
function ready() {
	// Removes Items From Cart
	const removeCartButtons = document.querySelectorAll(".cart-remove")
	removeCartButtons.forEach(button => {
		button.addEventListener("click", removeCartItem)
	})

	// Quantity Changes
	const quantityInputs = document.querySelectorAll(".cart-quantity")
	quantityInputs.forEach(quantityInput => {
		quantityInput.addEventListener("change", quantityChanged)
	})

	// Add To Cart
	const addCarts = document.querySelectorAll(".product-add-cart")
	addCarts.forEach(addCart => addCart.addEventListener("click", addCartClicked))
}

// Removes Items From Cart
function removeCartItem(e) {
	const buttonClicked = e.target
	buttonClicked.parentElement.remove()
	updateTotal()
}

// Quantity Changes
function quantityChanged(e) {
	const input = e.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	updateTotal()
}
// Add To Cart
function addCartClicked(e) {
	const button = e.target
	const shopProduct = button.parentElement
	const title = shopProduct.querySelector(".product-title").innerText
	const price = shopProduct.querySelector(".product-price").innerText
	const productImg = shopProduct.querySelector(".product-img").src
	addProductToCart(title, price, productImg)
	updateTotal()
    showAddedProductAlert()
}

function showAddedProductAlert(){
    const AddProductAlert=document.querySelector('.add-product-alert')
    AddProductAlert.style.right=0
    setTimeout(HideAddedProductAlert,"2000")
}

function HideAddedProductAlert(){
    const AddProductAlert=document.querySelector('.add-product-alert')
    AddProductAlert.style.right="-100%"
}


function addProductToCart(title, price, productImg) {
	const cartShopBox = document.createElement("div")
	cartShopBox.classList.add("cart-box")
	const cartItems = document.querySelector(".cart-content")
	const cartBoxContent = `
                        <img src="${productImg}" alt="" class="cart-img">
						<div class="detail-box">
							<div class="cart-product-title">${title}</div>
							<div class="cart-price">${price}</div>
							<input type="number" value="1" class="cart-quantity">
						</div>
						<!-- Remove Cart -->
						<i class="fa-solid fa-trash cart-remove"></i>`
	cartShopBox.innerHTML = cartBoxContent
	cartItems.append(cartShopBox)
	cartShopBox
		.querySelector(".cart-remove")
		.addEventListener("click", removeCartItem)
	cartShopBox
		.querySelector(".cart-quantity")
		.addEventListener("change", quantityChanged)
}

function updateTotal() {
    let cartContent = document.querySelector(".cart-content")
	let cartBoxes = cartContent.querySelectorAll(".cart-box")
	let total = 0
	for (let i = 0; i < cartBoxes.length; i++) {
		let cartBox = cartBoxes[i]
		let priceElement = cartBox.querySelector(".cart-price")
		let quantityElement = cartBox.querySelector(".cart-quantity")
		let price = parseFloat(priceElement.innerText.replace("$", ""))
		let quantity = quantityElement.value
		total = total + price * quantity
	}
	// If price Contain some Cents Value
	total = Math.round(total * 100) / 100

	document.querySelector(".total-price").innerText = "$" + total
}
