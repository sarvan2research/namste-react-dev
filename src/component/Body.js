import RestCards, { withPromotionCards } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { HOME_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyContainer = () => {
  const [restaurantList, setRestaurant] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const RestCardWithPromotion = withPromotionCards(RestCards);
  const fetchData = async () => {
    const data = await fetch(HOME_URL);
    // Without cors plugin how to hit from local
    // const data=await fetch(HOME_URL_IGNORE_CORS)
    const json = await data.json();
    setRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurantList(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const isOnlineStatus = useOnlineStatus();
  console.log("Use online status: " + isOnlineStatus);
  if (isOnlineStatus === false) {
    return <h1>You looks offline , plz check your internet connection</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="px-2 py-2 items-center">
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 m-4 bg-green-100 rounded-lg"
          onClick={() => {
            const filteredList = restaurantList.filter((restaurant) =>
              restaurant?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setfilteredRestaurantList(filteredList);
          }}
        >
          Search Button
        </button>
        <button
          className="px-4 py-2 m-4 bg-red-200 rounded-lg"
          onClick={() => {
            const filteredList = restaurantList.filter(
              (restaurant) => restaurant?.info?.avgRatingString > 4.5
            );
            setfilteredRestaurantList(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant.info?.id}
          >
            {restaurant?.info?.avgRatingString > 4.4 ? (
              <RestCardWithPromotion restData={restaurant} />
            ) : (
              <RestCards restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
