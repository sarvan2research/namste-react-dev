import RestCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyContainer=()=>{
  const [restaurantList,setRestaurant]=useState([]);
  const [filteredRestaurantList,setfilteredRestaurantList]=useState([]);
  const [searchText,setSearchText]=useState("");
  useEffect(()=>{
    setTimeout
    fetchData()
  },[])
  const fetchData=async ()=> {
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8986941&lng=77.576426&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")  
  // Withour cors plugin how to hit from local
  // const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8986941&lng=77.576426&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")  
    const json =await data.json();
    setRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestaurantList(json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  return restaurantList.length===0? <Shimmer/>: (<div className="body-container">
    <div className="search-component">
      <input type="text" className="search-input" 
      value={searchText}
      onChange={(e)=>{
          setSearchText(e.target.value)
      }}/>
      <button className="filter-btn" onClick={()=>{
        const filteredList=restaurantList.filter(
          (restaurant)=>
            restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
          setfilteredRestaurantList(filteredList);
      }}>
        Search Button
      </button>
      <button className="top-btn" onClick={()=>{
        const filteredList=restaurantList.filter(
          (restaurant)=>
            restaurant?.info?.avgRatingString>4.5)
          setfilteredRestaurantList(filteredList);
      }}>Top Restaurants</button>
      </div>
    <div className="rest-container">
      {filteredRestaurantList.map(restaurant=>(
        <RestCards key={restaurant.info?.id}restData={restaurant}/>
      )
      )}
      </div>
  </div>
)}

export default BodyContainer;