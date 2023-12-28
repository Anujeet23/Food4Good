import { useEffect,useState } from "react";

const useRestaurentMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);

    useEffect( () => {
        fetchData();
    },[]);


    const fetchData = async () => {
        const data = await fetch(
            //https://kind-puce-bull-tie.cyclic.app/api/proxy/
            "https://busy-plum-bull-veil.cyclic.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0037042&lng=72.8222272&restaurantId=24465"
        )//767730, 9051
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurentMenu;