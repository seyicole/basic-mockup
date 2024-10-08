document.addEventListener('DOMContentLoaded', function() {
    const items = [
        { name: "Classic Oxford", price: 89.99, image: "https://via.placeholder.com/250x250" },
        { name: "Comfort Loafer", price: 79.99, image: "https://via.placeholder.com/250x250" },
        { name: "Casual Sneaker", price: 69.99, image: "https://via.placeholder.com/250x250" },
        { name: "Dress Boot", price: 129.99, image: "https://via.placeholder.com/250x250" }
    ];

    const source = document.getElementById('item-template').innerHTML;
    const template = Handlebars.compile(source);
    const context = { items: items };
    const html = template(context);

    document.getElementById('items-container').innerHTML = html;

    // Add to cart functionality (for demonstration purposes)
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Item added to cart!');
        });
    });
});