import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantantMenu = (resID) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchRestaurantData();
  }, []);
  fetchRestaurantData = async () => {
    const data = await fetch(MENU_URL + "restaurantId=" + resID);
    const json = await data.json(data);
    setRestaurantMenu(json?.data);
  };
  return restaurantMenu;
};

export default useRestaurantantMenu;
