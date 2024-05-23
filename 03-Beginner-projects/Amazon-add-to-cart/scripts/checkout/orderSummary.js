import {cart, removeFromCart, updateDeliveryOption} from '../../data/cart.js';
import {products} from '../../data/products.js'
import {formatCurrency} from '../utils/money.js' //{formatCurrency} -> named export
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'; //date -> default export
import {deliveryOptions} from '../../data/deliveryOptions.js'


// gat dayjs() and calculate the number of days
const today = dayjs()
const deliveryDate = today.add(7, 'days')

// display date in easy to-read method
console.log(deliveryDate.format('dddd, MMMM D'))

// regenerate the function because to update date
export function renderOrderSummary() {
  let cartHTML;

  //loop to get cartItems
  cart.forEach((cartItem) => {
      const productId = cartItem.productId;

      let matchingProduct;

      products.forEach((product) => {
          if(product.id === productId) {
              matchingProduct = product
          }
      });

      // calculate delivery date
      const deliveryOptionId = cartItem.deliveryOptionId;

      let deliveryOption;

      deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
          deliveryOption = option;
        }
      });

      const today = dayjs() //to calculate todays date
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
      const dateString = deliveryDate.format('dddd, MMMM D') //calculate date

      cartHTML += `
      <div class="cart-item-container js-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
              ${deliveryOptionsHTML(matchingProduct, cartItem)}
          </div>
        </div>
      </div>
    </div>
      `
  });

  // function for delivering date
  function deliveryOptionsHTML(matchingProduct, cartItem) {

    let html = ''; //store the html

    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs() //to calculate todays date
      const deliveryDate = today.add(deliveryOption.deliveryDays, 'days')
      const dateString = deliveryDate.format('dddd, MMMM D') //calculate date

      // calculate price of each date
      const priceString = deliveryOption.priceCents === 0 ? 'FREE': `$${formatCurrency(deliveryOption.priceCents)} -`;

      // which deliveryoptions to be checked
      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html += `
        <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
          <input type="radio" ${isChecked ? 'checked': ''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
          >
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
        </div>
      `
    });

    return html;
  }

  // console.log(cartHTML)

  document.querySelector('.order-summary').innerHTML = cartHTML

  document.querySelectorAll('.js-delete-link').forEach((button) => {
      button.addEventListener('click', () => {
          const productId = button.dataset.productId
          removeFromCart(productId);

          const container = document.querySelector(`.js-item-container-${productId}`)
          container.remove()
      })
  })

  document.querySelectorAll('.js-delivery-option').forEach((element) => {
    element.addEventListener('click', () => {
      // const productId = element.dataset.productId;
      // const deliveryOptionId = element.dataset.deliveryOptionId;

      // shorthand
      const {productId, deliveryOptionId} = element.dataset
      updateDeliveryOption(productId, deliveryOptionId)
      renderOrderSummary();
    })
  })
}

