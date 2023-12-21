import { useState } from "react";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { removeProductFromCart } from "../store/slices/addToCartSlice";
import { removeItemPrice, updateTotalPrice } from "../store/slices/priceSlice";

function CartProduct({ image, price }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const removeItem = () => {
    dispatch(removeProductFromCart(image, price));
    dispatch(removeItemPrice(price));
  };

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateTotalPriceInStore(price * (quantity + 1)); 
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      updateTotalPriceInStore(price * (quantity - 1));
    }
  };

  const updateTotalPriceInStore = (newTotalPrice) => {
    dispatch(updateTotalPrice(newTotalPrice));
  };

  const totalPrice = price * quantity;

  return (
    <li>
      <ul>
        <li>
          <button onClick={removeItem} className="remove-item">
            <GiCancel className="cancel-icon" />
          </button>
        </li>
        <li>
          <img src={image} alt="" />
        </li>
        <li>
          <p>Cartoon Astronaut T-Shirt</p>
        </li>
        <li>
          <p>${price}</p>
        </li>
        <li>
          <button className="decrement" onClick={decrement}>
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <button className="increment" onClick={increment}>
            +
          </button>
        </li>
        <li>
          <p>${totalPrice}</p>
        </li>
      </ul>
    </li>
  );
}

export default CartProduct;
