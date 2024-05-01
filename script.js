document.addEventListener('DOMContentLoaded', function () {
    // Sample food items
    const foodItems = [
        { name: 'Pizza', price: 10.99 },
        { name: 'Burger', price: 5.99 },
        { name: 'Salad', price: 4.99 },
    ];

    const foodList = document.getElementById('food-list');
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Display food items in the menu
    foodItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>`;
        foodList.appendChild(li);
    });

    // Add item to the shopping cart
    window.addToCart = function (itemName, itemPrice) {
        const li = document.createElement('li');
        li.innerHTML = `${itemName} - $${itemPrice.toFixed(2)}`;
        cartItems.appendChild(li);

        // Update total
        const currentTotal = parseFloat(totalElement.innerText);
        totalElement.innerText = (currentTotal + itemPrice).toFixed(2);
    };

    // Checkout button event
    checkoutBtn.addEventListener('click', function () {
        alert('Thank you for your order!');
        // You can implement further processing here (e.g., sending order to server)
    });
});
