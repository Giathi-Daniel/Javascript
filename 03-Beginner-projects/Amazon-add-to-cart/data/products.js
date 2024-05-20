const products = [
    {
        image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
        name: 'Black and Gray Athletic Cotton Socks',
        rating: {
            stars: 4.5,
            count: 87
        },
        priceCents: 1090
    },
    {
        image: 'images/products/intermediate-composite-basketball.jpg',
        name: 'Intermediate Size Basketball',
        rating: {
            stars: 4,
            count: 127
        },
        priceCents: 2095
    },
    {
        image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
        name: 'Adults Plain Cotton T-shirt - 2 Pack',
        rating: {
            stars: 4.5,
            count: 56
        },
        priceCents: 799
    },
    {
        image: 'images/products/black-2-slot-toaster',
        name: '2 Slot Toaster Black',
        rating: {
            stars: 5,
            count: 2197
        },
        priceCents: 1899
    },
    {
        image: 'images/products/black-2-slot-toaster',
        name: '2 Slot Toaster Black',
        rating: {
            stars: 5,
            count: 2197
        },
        priceCents: 1899
    }
]

let productsHTML = '';

products.forEach(product, () => {
    productsHTML += `<div class="${product.name}"</div>`;
});

document.querySelector('.products-grid').innerHTML = productsHTML;