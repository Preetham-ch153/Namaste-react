import RestaurantCard from "./RestaurantCard";
import resList from "./utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer  from "./Shimmer";

const Body = () => {
  const [listOfRestaurant,setlistOfRestaurant] = useState([]);
  const [filteredList,setFilteredList] =useState([]);
  const [searchText,setSearchText] =useState("");

  console.log("Body Rendered");
  useEffect(()=>{
    fetchedData();
  },[]);
  
    const fetchedData = async () => {
      const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(listOfRestaurant.length === 0){
      return <Shimmer />;
    }
    
    return (
        <div className="body">
          <div className="filter">
            <div className="search">
              <input type="text" className="search-box" value={searchText} 
               onChange={(e) => {
                setSearchText(e.target.value);
               }}
              />
              <button className="search-btn" onClick={() =>{
                const filteredList=listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredList(filteredList);
              }}>Search</button>
            </div>
          <button className="filter-btn" onClick={() => { 
            const filteredResList=listOfRestaurant.filter((res)=>res.info.avgRating > 4
            );
            setlistOfRestaurant(filteredResList);
          }}>Top Rated Restaurants
          </button>
          </div>
            <div className="restaurant-container">
              {filteredList.map((restaurants) => (
                <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
              ))}
            </div>
        </div>
    )
}

export default Body;