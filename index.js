document.addEventListener('DOMContentLoaded', function() {
    // Dummy product data with images
    const products = [
        { name: 'Product 1', price: 19.99, image: 'product1.jpg' },
        { name: 'Product 2', price: 29.99, image: 'product2.jpg' },
        { name: 'Product 3', price: 39.99, image: 'product3.jpg' }
    ];

    const productsSection = document.querySelector('.products');

    // Generate product cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsSection.appendChild(card);
    });
});
