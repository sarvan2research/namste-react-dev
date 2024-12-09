import RestCards from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const BodyContainer=()=>{
  const [restaurantList,setRestaurant]=useState([]);

  useEffect(()=>{
    setTimeout
    fetchData()
  },[])
  const fetchData=async ()=> {
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8986941&lng=77.576426&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")  
    const json =await data.json();
    setRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  
  return restaurantList.length===0? <Shimmer/>: (<div className="body-container">
    <div className="search-component">
      <button className="filter-btn" onClick={()=>{
        const filteredList=restaurantList.filter(
          (restaurant)=>
            restaurant.info.avgRating>4.5)
        setRestaurant(filteredList);
      }}>
        Search Button
      </button>
      </div>
    <div className="rest-container">
      {restaurantList.map(restaurant=>(
        <RestCards key={restaurant.info.id}restData={restaurant}/>
      )
      )}
      </div>
  </div>
)}

export default BodyContainer;