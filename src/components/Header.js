import {LOGO_URL} from "../utils/constants";
import {useState, useContext } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
    let btnName = "Login";
    const[btnNameReact, setbtnNameReact] = useState("Login");
    // console.log("I am in Header");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
/* */
    return(
        <div /*className="header"*/ className="flex justify-between shadow-md px-2">
            <div className="logo-container">
                <img /*className="logo"*/ className="w-40" src={LOGO_URL} alt="google logo" />
            </div>
            <h1 id="tagline" className="text-5xl mt-5">GET A FOOD , 😋</h1>
            <div className="flex items-center">
            <ul className="flex p-5 m-5 space-x-4">
            <li> Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="hover:bg-orange-400 rounded-md h-6"><Link to="/">Home</Link></li>
            <li className="hover:bg-orange-400 rounded-md h-6"><Link to="/about">About Us</Link></li>
            <li className="hover:bg-orange-400 rounded-md h-6"><Link to="/contact">Contact Us</Link></li>
            <li className="hover:bg-orange-400 rounded-md h-6"><Link to="/grocery">Grocery</Link></li>
            <li className="hover:bg-orange-400 rounded-md h-6"><Link to="/cart">Cart-({cartItems.length} items)</Link></li>
            <li className="mt-[-5px]">
                <button className="bg-orange-200 hover:bg-orange-400 text-black py-2 px-4 rounded-lg" onClick={() => { 
                btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                }}>
                {btnNameReact}
                </button>
            </li>
            {/* <li className="px-4 font-bold text-sm">loggedInUser</li> */}
            </ul>

            </div>
        </div>
    );
};

export default Header;