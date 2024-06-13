import { items } from '../utils/items.js';
import calculateSubTotal from './item.service.js';

// Function to update the cart total
const updateCartTotal = (cart) => {
	cart.total = cart.items
		.reduce((acc, item) => acc + Number(item.subtotal), 0)
		.toFixed(2);
};

const addItemToCart = (id, quantity, cart) => {
	const item = items.find((item) => item.id === id);

	if (!item) {
		throw new Error('Product not found!');
	}

	const existingCartItemIndex = cart.items.findIndex(
		(cartItem) => cartItem.id === id
	);

	if (existingCartItemIndex !== -1) {
		const existingCartItem = cart.items[existingCartItemIndex];
		const updatedQuantity = existingCartItem.quantity + quantity;
		cart.items[existingCartItemIndex] = calculateSubTotal({
			...existingCartItem,
			quantity: updatedQuantity,
		});
	} else {
		const itemWithSubTotal = calculateSubTotal({ ...item, quantity });
		cart.items.push(itemWithSubTotal);
	}

	updateCartTotal(cart);

	return 'Product added to cart';
};

const deleteItemFromCart = (id, cart) => {
	const itemIndex = cart.items.findIndex((item) => item.id === id);

	if (itemIndex === -1) {
		throw new Error('Product not found!');
	}

	const removedItem = cart.items.splice(itemIndex, 1)[0];
	updateCartTotal(cart);

	return `Product removed from cart: ${removedItem.name}`;
};

const removeItems = (id, quantity, cart) => {
	const itemIndex = cart.items.findIndex((item) => item.id === id);

	if (itemIndex === -1) {
		throw new Error('Product not found!');
	}

	const item = cart.items[itemIndex];

	if (quantity > item.quantity) {
		throw new Error('Invalid quantity');
	}

	const newItem = { ...item, quantity: item.quantity - quantity };
	cart.items.splice(itemIndex, 1);

	if (newItem.quantity > 0) {
		const updatedItemWithSubTotal = calculateSubTotal(newItem);
		cart.items.push(updatedItemWithSubTotal);
	}

	updateCartTotal(cart);
	return `Quantity updated for item: ${newItem.name}`;
};

export { addItemToCart, deleteItemFromCart, removeItems };
