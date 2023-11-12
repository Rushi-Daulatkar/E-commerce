let cart = [];
let cartTotal = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const name = event.target.getAttribute('data-name');
    const price = parseFloat(event.target.getAttribute('data-price'));

    if (name && !isNaN(price)) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
            existingItem.total = existingItem.quantity * existingItem.price;
        } else {
            cart.push({ name, price, quantity: 1, total: price });
        }

        cartTotal += price;
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const cartTotalElement = document.getElementById('cart-total');

    cartList.innerHTML = '';
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} x ${item.quantity} = $${item.total.toFixed(2)}`;
        cartList.appendChild(listItem);
    });

    cartTotalElement.innerText = cartTotal.toFixed(2);
}