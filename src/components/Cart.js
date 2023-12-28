import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart} from "../utils/cartSlice";

export const Cart = () => {
        const cartItems = useSelector((store) => store.cart.items);
        
        const dispatch = useDispatch();

        const handleClearCart = () => {
            dispatch(clearCart());
        }
        return (
        <div className="text-center m-4 p-4 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            
            <button 
            className="p-2 m-2 bg-black text-white rounded-lg"
            onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems.length === 0 && <h1 className="text-xl font-bold">🍔🍔Hungry 🍕?, Get it Under 30mins🍔🍔</h1>}
            <ItemList items={cartItems}></ItemList>
        </div>
        
        </div>
        );
};

export default Cart;