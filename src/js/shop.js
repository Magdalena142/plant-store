// Add To Cart
const addCarts=document.querySelectorAll('.product-add-cart')
let cartShopBox
addCarts.forEach(addCart=>addCart.addEventListener('click', addCartClicked))

function addCartClicked(e){
    const button=e.target
    const shopProduct=button.parentElement
    const title=shopProduct.querySelector('.product-title').innerText
    const price=shopProduct.querySelector('.product-price').innerText
    const productImg=shopProduct.querySelector('.product-img').src
    addProductToCart(title,price,productImg)
    
}

function addProductToCart(title,price,productImg){
    cartShopBox=document.createElement('div')
    cartShopBox.classList.add('cart-box')
    const cartBoxContent=`
                        <img src="${productImg}" alt="" class="cart-img">
						<div class="detail-box">
							<div class="cart-product-title">${title}</div>
							<div class="cart-price">${price}</div>
							<input type="number" value="1" class="cart-quantity">
						</div>
						<!-- Remove Cart -->
						<i class='bx bxs-trash-alt cart-remove'></i>`
    cartShopBox.innerHTML=cartBoxContent
}



