import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../store/slices/addToCartSlice";
import { addItemPrice } from "../store/slices/priceSlice";

function FeaturedLi({ imageUrl, price }) {
  const dispatch = useDispatch();
  const addToCart = ({imageUrl, price}) => {
    dispatch(addProductToCart({imageUrl, price}));
    dispatch(addItemPrice(price));
  };
  return (
    <li>
      <Link to="/productDetails">
        <img src={imageUrl} alt="" />
        <p>addidas</p>
        <h4>Cartoon Astronaut T-Shirts</h4>
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
        <FaStar className="star-icon" />
        <h3>${price}</h3>
      </Link>
      <button onClick={() => addToCart({imageUrl, price})}>
        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
      </button>
    </li>
  );
}

export default FeaturedLi;
