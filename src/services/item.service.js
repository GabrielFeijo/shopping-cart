const calculateSubTotal = (item) => {
	const subtotal = item.quantity * item.price;
	return { ...item, subtotal: subtotal.toFixed(2) };
};

export default calculateSubTotal;
