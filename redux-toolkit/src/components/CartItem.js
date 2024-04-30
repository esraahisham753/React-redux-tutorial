import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import { removeItem, changeAmount } from "../features/cart/cartSlice";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <p className="item-price">${price}</p>
        <button className="btn remove-btn" onClick={() => dispatch(removeItem(id))}>
          Remove
        </button>
      </div>
      <div className="amount">
        <button className="amount-btn" onClick={() => dispatch(changeAmount({id, changeType: 'increase'}))}>
          <ChevronUp />
        </button>
        <p>{amount}</p>
        <button className="amount-btn" onClick={() => {
          if (amount === 1) {
            dispatch(removeItem(id));
            return;
          }
          dispatch(changeAmount({id, changeType: 'decrease'}));
        }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
