
import RestaurentCard, {withOpenLabel} from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
  // Local State Variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  // const RestaurentCardOpen = withOpenLabel(RestaurentCard); 

  console.log(listOfRestaurants);

  // Use Effect Hook
  useEffect(() => {
    if (listOfRestaurants.length === 0) {
      fetchData();
    }
    // console.log("2nd Render");
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(
        //When You will get unblocked from corsproxy append https://corsproxy.io/? before link 
        // https://kind-puce-bull-tie.cyclic.app/api/proxy/
        "https://busy-plum-bull-veil.cyclic.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=19.0037042&lng=72.8222272&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  
      if (!data.ok) {
        throw new Error(`Failed to fetch data. Status: ${data.status}`);
      }
  
      const json = await data.json();
      console.log(json);
  
      const fetchedRestaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
      setListOfRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error, maybe show an error message to the user
    }
  };
  
  // const fetchData = async () => {
  //   // try {
  //     const data = await fetch(
  //       //When You will get unblocked from corsproxy append https://corsproxy.io/? before link 
  //       // https://kind-puce-bull-tie.cyclic.app/api/proxy/
  //       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.145923&lng=79.08762999999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //     );

  //     const json = await data.json();
  //     console.log(json);

  //     const fetchedRestaurants =
  //       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  //     setListOfRestaurants(fetchedRestaurants);
  //     setFilteredRestaurants(fetchedRestaurants);
  //   // } catch (error) {
  //   //   console.error("Error fetching data:", error);
  //   //   // Handle error, maybe show an error message to the user
  //   // }
  // };

  const handleSearch = () => {
    const filteredRestaurants = listOfRestaurants.filter(
      (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredRestaurants);
  };

  const handleTopRatedFilter = () => {
    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
    setFilteredRestaurants(filteredList);
  };
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return (
      <>
    <h1>Looks Like You are Offline!! please Check your Connection</h1>
      </>
    )
  }

  return (filteredRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className=" m-4 px-[220px]">
          <input
            type="text"
            className="border border-solid border-black rounded-md p-1 bg-orange-100"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-green-100 hover:bg-green-300 m-4 rounded-lg" onClick={handleSearch}>Search</button>
        </div>

      <div className=" m-4 p-4 flex items-center ">
      <button className="px-4 py-2 bg-orange-200 rounded-lg shadow-md hover:bg-orange-400" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
      </div>
        
      </div>
      <div className="flex flex-wrap px-[100px]">
        {filteredRestaurants.map((restaurant) => (
          <Link className="link-to-menu" 
          to={"/restaurents/:resId"}
          >
            
              {/* restaurant.info.isOpen ? <RestaurentCardOpen key={restaurant.info.id} resData={restaurant}/> : */}
            <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
            
        </Link>
        ))}
      </div>
    </div>
  ));
};

export default Body;
