import {CDN_URL} from "../utils/constants";

const RestaurentCard = (props) => {
    const {resData} = props;
    // console.log(resData.info.id);
    const {cloudinaryImageId, name,cuisines,avgRating,costForTwo} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    // console.log(props);
    return(
        <div className="m-4 p-4 w-[220px] shadow-lg rounded-md hover:bg-gray-200" >
            <img className="rounded-lg" 
            src={CDN_URL+cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime + " min"}</h4>
        </div>
    );
};
    
//Higher Order Component
export const withOpenLabel = (RestaurentCard) => {
    return () => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-sm" >Open</label>
                <RestaurentCard/>
            </div>
        );
    };
};
export default RestaurentCard;