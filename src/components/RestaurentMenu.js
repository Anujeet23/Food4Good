import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import {useState} from "react";

const RestaurentMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    // console.log(resId);
    
    //Built a custom Hook for fetching data
    const resInfo = useRestaurentMenu(resId);
    
    const [showIndex, setShowIndex] = useState(null);
    //Jugad .categories[2]?
    const menu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards[0]?.card?.info?.name;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        
    
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"]  === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );

    console.log(categories);

    return resInfo === null ? (
            <Shimmer />
        ) : (
            <div className="menu max-w-xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
            <h1 className="text-3xl font-bold mb-4">{resInfo?.cards[0]?.card?.card?.info.name}</h1>
            <h3 className="text-gray-600">{resInfo?.cards[0]?.card?.card?.info.cuisines.join(", ")}</h3>
            <h3 className="text-gray-600">{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</h3>
            {/* <h2 className="text-xl font-bold mt-6 mb-3">Menu</h2> */}
            
            {/*Categories accordian*/}
            {categories.map((category, index) => (
                //Controlled Component
            <RestaurentCategory 
            key={category?.card?.card.title} 
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            />
            ))}

            {/* {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.categories.map((category) => (
                <div key={category.title} className="mb-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <ul>
                    {category.itemCards.map((item) => (
                    <li key={item.card.info.id} className="flex justify-between items-center">
                        <span className="text-gray-800">{item.card.info.name}</span>
                        <span className="text-gray-600">Rs. {item.card.info.price / 100 || item.card.info.defaultPrice/100}</span>
                    </li>
                    ))}
                </ul>
                </div>
            ))} */}
            </div>
        );
};

export default RestaurentMenu;