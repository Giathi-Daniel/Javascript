export const cart = [];

// function for addtocart
export function addToCart(productId) {
    let matchingItem;
  
          cart.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                  matchingItem = cartItem
              }
          });
  
          if(matchingItem) {
              matchingItem.quantity += 1
          } 
  
          cart.push({
              productId: productId,
              quantity: 1
          }); 
  }