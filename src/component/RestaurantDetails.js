import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const { resID } = useParams();
  useEffect(() => {
    fetchRestaurantData();
  }, []);
  fetchRestaurantData = async () => {
    const data = await fetch(MENU_URL + "restaurantId=" + resID);
    const json = await data.json(data);
    //console.log(json?.data)
    setRestaurantDetails(json?.data);
  };
  if (restaurantDetails === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    restaurantDetails?.cards[2]?.card?.card?.info;
  const { itemCards } =
    restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card;

  return (
    <div className="menu-container">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      <h2>Menu List</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
