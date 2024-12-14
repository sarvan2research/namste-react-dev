import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantantMenu from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { resID } = useParams();
  const restaurantDetails = useRestaurantantMenu(resID);

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
