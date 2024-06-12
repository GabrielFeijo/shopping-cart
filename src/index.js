import {
  addItemToCart,
  deleteItemCart,
  removeItens,
} from "./services/cart.service.js";

const cart = {
  items: [],
  total: 0,
};

addItemToCart(15, 3, cart);
addItemToCart(16, 3, cart);
addItemToCart(13, 3, cart);
addItemToCart(11, 3, cart);
deleteItemCart(15, cart);

addItemToCart(19, 5, cart);
removeItens(19, 2, cart);
