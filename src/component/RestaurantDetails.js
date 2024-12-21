import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantantMenu from "../utils/useRestaurantDetails";
import RestaurtantCategories from "./RestaurtantCategories";
import { useState } from "react";

const RestaurantDetails = () => {
  const { resID } = useParams();
  const restaurantDetails = useRestaurantantMenu(resID);
  const [isSelectedIndex, setSelectedIndex] = useState(null);

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
  //filter only item category to show on item list
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
      {console.log("component rendered " + isSelectedIndex)}
      {list.map((list, index) => (
        <RestaurtantCategories
          data={list?.card?.card}
          key={list?.card?.card.title}
          isShowIndex={isSelectedIndex === index ? true : false}
          setSelectedIndex={() => setSelectedIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantDetails;
