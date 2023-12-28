import {ITEM_API} from "../utils/constants";
import {useDispatch} from "react-redux";
import { addItem} from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    // console.log(items);
    return(
        <div>
            {items.map(item => (
        <div key={item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left">
        <div className="flex items-center justify-between">
            <div className="flex flex-col">
            <span className="font-bold text-lg">{item.card.info.name}</span>
            <span className="text-gray-700"> - ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
            <p className="p-2 text-sm text-gray-600">{item.card.info.description}</p>
            </div>
            
            <div class="relative">
            <div class="w-40 h-32 overflow-hidden rounded-md shadow-lg">
                <img
                    class="w-full h-full object-cover"
                    src={`${ITEM_API}${item.card.info.imageId || '514eccaf7c5925f5fc4a17332978149e'}`}
                    alt={item.card.info.name}
                />
            </div>
            <button onClick={() => handleAddItem(item)} class="absolute bottom-0 right-0 bg-gray-700 text-slate-200 p-2 rounded-full">
                Add+
            </button>
            </div>

            
            {/* <div className="p-4 relative">
            <img
                className="w-32 h-32 object-cover rounded-md shadow-lg"
                src={`${ITEM_API}${item.card.info.imageId || '514eccaf7c5925f5fc4a17332978149e'}`}
                alt={item.card.info.name}
            />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <button className="p-2 bg-white shadow-lg">Add+</button>
            </div>
            </div> */}






        </div>
    </div>
    
        
            ))}
        </div>
    );
};

export default ItemList;