function solve() {
   let textStatus = document.querySelector('textarea');
     //document.getElementsByClassName('product-title')[0].textContent;
   let checkout = document.getElementsByClassName('checkout')[0];
   let allProducts = document.getElementsByClassName('shopping-cart')[0];
   let shoppingCart = {
      products: new Set(),
       totalPrice: 0
   };
       allProducts.addEventListener('click', onClick);
       checkout.addEventListener('click', onCheckout);
       function onClick(e){
         if(e.target.tagName == 'BUTTON'){
            let name = e.target.parentElement.parentElement.children[1].children[0].textContent;
            let price = e.target.parentElement.parentElement.children[3].textContent;

            shoppingCart.products.add(name);
            shoppingCart.totalPrice += Number(price);
            textStatus.value += `Added ${name} for ${price} to the cart.\n`

            
         }
       }

       function onCheckout(){
         textStatus.value +=
         `You bought ${[...shoppingCart.products].join(', ')} for ${shoppingCart.totalPrice.toFixed(2)}.`
         allProducts.removeEventListener('click', onClick)
         checkout.removeEventListener('click', onCheckout)
       }
 }
