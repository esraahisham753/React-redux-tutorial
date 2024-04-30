import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import Modal from "./components/Modal";

function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const {isOpen} = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
