import { images } from "../data";
import ReusableHeader from "../header/ReusableHeader";
import CartProduct from "./CartProduct";
import "./cart.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const addedProducts = useSelector((state) => {
    return state.product;
  });

  const finalPrice = useSelector(state => {
    return state.price
  })


  return (
    <section className="cart">
      <ReusableHeader
        heading="#cart"
        description="Add your coupon code and SAVE upto 70%!"
        image={images.about[7].url}
      />
      <section className="cart-table">
        {addedProducts.length < 1 ? null : (
          <ul className="table-heading">
            <li>REMOVE</li>
            <li>IMAGE</li>
            <li>PRODUCT</li>
            <li>PRICE</li>
            <li>QUANTITY</li>
            <li>SUBTOTAL</li>
          </ul>
        )}
        <ul className="table-body">
          {addedProducts.length < 1 ? <Link to="/shop"><button className="empty-shop">Go to Shop</button></Link> : (
            addedProducts.map((item, id) => {
              return (
                <CartProduct
                  key={id}
                  image={item.imageUrl}
                  price={item.price}
                />
              );
            })
          )}
        </ul>
      </section>
      {addedProducts.length < 1 ? null : (
        <section className="checkout">
          <section className="coupon">
            <h1>Apply Coupon</h1>
            <form onChange={null}>
              <input type="text" />
              <button>Apply</button>
            </form>
          </section>
          <section className="total">
            <h1>Cart Totals</h1>
            <p>
              <span>Cart Subtotal</span>
              <span>${finalPrice.totalPrice}</span>
            </p>
            <p>
              <span>Shipping</span>
              <span>Free</span>
            </p>
            <p>
              <span>Total</span>
              <span>${finalPrice.totalPrice}</span>
            </p>
            <button>Proceed to checkout</button>
          </section>
        </section>
      )}
    </section>
  );
}

export default Cart;
