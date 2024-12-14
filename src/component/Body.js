import RestCards from "./RestaurantCard";
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
      <div className="search-component">
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="filter-btn"
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
          className="top-btn"
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
      <div className="rest-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant.info?.id}
          >
            <RestCards restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyContainer;
