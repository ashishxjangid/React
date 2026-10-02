import RestCard from "./RestCard";
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // State variable
    const [listOfRestaurants, setListOfRestaurants]= useState([]);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData= async () => {
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1680085&lng=75.8516495&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        
        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    //Conditional Rendering
    return (listOfRestaurants.length === 0)? <Shimmer/> : 
    (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredlist= listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.4
                    );
                    setListOfRestaurants(filteredlist);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="rest-container">
                {listOfRestaurants.map((res)=>(
                    <RestCard key={res.info.id} resData= {res} />
                ))}
            </div>
        </div>
    );
};

export default Body;