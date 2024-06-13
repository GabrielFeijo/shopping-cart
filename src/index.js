import {
	addItemToCart,
	deleteItemFromCart,
	removeItems,
} from './services/cart.service.js';

const cart = {
	items: [],
	total: 0,
};

// Add items to cart
addItemToCart(15, 3, cart);
addItemToCart(13, 3, cart);
addItemToCart(16, 3, cart);
addItemToCart(11, 3, cart);

console.log(`Current cart: ${JSON.stringify(cart, null, 2)}`);

// Remove an item from the cart
deleteItemFromCart(15, cart);

console.log(`Cart after delete: ${JSON.stringify(cart, null, 2)}`);

// Remove a specific amount
removeItems(16, 2, cart);

console.log(`Cart after remove: ${JSON.stringify(cart, null, 2)}`);
