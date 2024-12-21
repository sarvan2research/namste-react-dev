import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantantMenu from "../utils/useRestaurantDetails";
import RestaurtantCategories from "./RestaurtantCategories";

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

  const { cards } =
    restaurantDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const list = cards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      {list.map((list) => (
        <RestaurtantCategories
          data={list?.card?.card}
          key={list?.card?.card.title}
        />
      ))}
    </div>
  );
};

export default RestaurantDetails;
