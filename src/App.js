import React from "react";
import ReactDOM from "react-dom/client";

const Header= () => (
    <div className="header">
        <div className="logo-container">
            <img
                className="logo" 
                src="https://t3.ftcdn.net/jpg/02/39/63/78/360_F_239637872_2yKmXCR9GY9yWxztxSc5AAI4bBWwbQlT.jpg" 
            />
        </div>

        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const RestCard= (props) => {
    const {resData} = props; 
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla} = resData.info;

    return (
        <div className="rest-card">
            <img className="res-logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

const resList = [
    {
    "info": {
        "id": "76270",
        "name": "Jodhpur Sweets",
        "cloudinaryImageId": "uoldf8kdfg46qzlxq4ih",
        "locality": "Kotri Road",
        "areaName": "Chawani",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Sweets",
        "South Indian",
        "Snacks"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "111286",
        "avgRatingString": "4.5",
        "totalRatingsString": "12K+",
        "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 21:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
            },
            {
            "imageId": "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
            "description": "Top-rated for Indian Sweets, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "bolt!",
                    "imageId": "android/static-assets/icons/big_rx.png"
                }
                },
                {
                "attributes": {
                    "description": "Top-rated for Indian Sweets, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹549",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/jodhpur-sweets-kotri-road-chawani-rest76270",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "104922",
        "name": "Anand Shekhawati Dhaba (Transport Nagar)",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/22/0c5690f0-d353-44e1-96bd-e175f63b33ff_104922 (1).jpg",
        "locality": "Jahalawar Road",
        "areaName": "Indraprastha Industrial Area",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "North Indian",
        "Thali",
        "Rajasthani",
        "Chinese",
        "Beverages",
        "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "32821",
        "avgRatingString": "4.3",
        "totalRatingsString": "215K+",
        "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 23:59:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
            "description": "Top-rated for North Indian, based on user votes."
            },
            {
            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            "description": "Top-rated for Bolt, based on user votes."
            },
            {
            "imageId": "brand_cards/Badges%202026/80_Best%20in%20Thali2026.png",
            "description": "Top-rated for Thali, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Top-rated for North Indian, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/26_Best%20in%20North%20Indian2026.png",
                    "theme": ""
                }
                },
                {
                "attributes": {
                    "description": "Top-rated for Bolt, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                    "theme": ""
                }
                },
                {
                "attributes": {
                    "description": "Top-rated for Thali, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/80_Best%20in%20Thali2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/anand-shekhawati-dhaba-transport-nagar-jahalawar-road-indraprastha-industrial-area-rest104922",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "74739",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/9f68f2a5-0318-4a5a-bc83-b8a0bcaddedc_74739.JPG",
        "locality": "Indraprastha Industrial Area",
        "areaName": "Indraprastha Industrial Area",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "15K+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 03:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            "description": "Top-rated for Pizza, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Top-rated for Pizza, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "1.5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/pizza-hut-indraprastha-industrial-area-rest74739",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "419708",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/e9cec7cd-3ebe-4f27-a206-a5da068ade5a_419708.JPG",
        "locality": "Jhalawar Road",
        "areaName": "Indraprastha Industrial Area",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
        ],
        "avgRating": 4.1,
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "12K+",
        "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 02:00:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/kfc-jhalawar-road-indraprastha-industrial-area-rest419708",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "609356",
        "name": "Rominus Pizza And Burger",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/11/6c6311d1-c6a7-468a-abe0-97f3a1372e5b_609356.jpg",
        "locality": "Jawahar Nagar\n",
        "areaName": "Talwandi",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Pizzas",
        "Italian-American",
        "American",
        "Barbecue",
        "Snacks",
        "Grill",
        "Italian",
        "Pastas",
        "Sweets",
        "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "8387",
        "avgRatingString": "4.3",
        "totalRatingsString": "17K+",
        "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 04:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            "description": "Top-rated for Pizza, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Top-rated for Pizza, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "70% OFF",
        "subHeader": "UPTO ₹150",
        "discountTag": "SAVE BIG",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/rominus-pizza-and-burger-jawahar-nagar-talwandi-rest609356",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "76960",
        "name": "Maheshwari Chaska Restaurant",
        "cloudinaryImageId": "yd3ynllwx9jvwi1aqc6n",
        "locality": "Baga",
        "areaName": "Talwandi",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Thalis",
        "Chinese",
        "Tandoor",
        "Desserts",
        "South Indian",
        "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "130235",
        "avgRatingString": "4.3",
        "totalRatingsString": "29K+",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 23:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "Serves only 100% vegetarian food, with no non-veg items."
            }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/maheshwari-chaska-restaurant-baga-talwandi-rest76960",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "101665",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/6203f6bb-fa07-4c4d-a20c-3293353d5468_101665.jpg",
        "locality": "Dcm Road",
        "areaName": "Dhanmandi",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
        "totalRatingsString": "27K+",
        "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
            },
            {
            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            "description": "Top-rated for Burger, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "bolt!",
                    "imageId": "android/static-assets/icons/big_rx.png"
                }
                },
                {
                "attributes": {
                    "description": "Top-rated for Burger, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹48",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/burger-king-dcm-road-dhanmandi-rest101665",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "253992",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/99722ba0-d701-49b3-a1f2-dc80f5452e68_253992.JPG",
        "locality": "City Mall",
        "areaName": "Indraprastha Industrial Area",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "American",
        "Fast Food",
        "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "630",
        "avgRatingString": "4.3",
        "totalRatingsString": "18K+",
        "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 00:45:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            "description": "Top-rated for Burger, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Top-rated for Burger, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹51",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/mcdonalds-city-mall-indraprastha-industrial-area-rest253992",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "76951",
        "name": "Burger Garage Talwandi",
        "cloudinaryImageId": "8d8e8b772b50d94c7648b44e3e3b31a6",
        "locality": "Jawahar Nagar",
        "areaName": "Talwandi",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Burgers",
        "Italian",
        "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "261979",
        "avgRatingString": "4.4",
        "totalRatingsString": "30K+",
        "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 03:00:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "70% OFF",
        "subHeader": "UPTO ₹130",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/burger-garage-talwandi-jawahar-nagar-talwandi-rest76951",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "586427",
        "name": "Burger Garage",
        "cloudinaryImageId": "8d8e8b772b50d94c7648b44e3e3b31a6",
        "locality": "Kotri Road",
        "areaName": "Gumanpura",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Burgers",
        "Italian",
        "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "51309",
        "avgRatingString": "4.4",
        "totalRatingsString": "4.9K+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "bolt!",
                    "imageId": "android/static-assets/icons/big_rx.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "70% OFF",
        "subHeader": "UPTO ₹130",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/burger-garage-kotri-road-gumanpura-rest586427",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "713906",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/e8ddbb9b-b042-451d-a8b7-0ff18fc6b0b5_713906.jpg",
        "locality": "RIICO",
        "areaName": "City Mall Kota",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "sandwich",
        "Salads",
        "wrap",
        "Healthy Food"
        ],
        "avgRating": 4.2,
        "parentId": "2",
        "avgRatingString": "4.2",
        "totalRatingsString": "3.0K+",
        "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 02:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
            "description": "Meals with high protein, low calorie and no added sugar"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Meals with high protein, low calorie and no added sugar",
                    "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/subway-riico-city-mall-kota-rest713906",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "466586",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "fmzsqv51jlp45upgfpb0",
        "locality": "Jawahar Nagar",
        "areaName": "Talwandi",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "4961",
        "avgRatingString": "4.2",
        "totalRatingsString": "14K+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 23:00:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹79",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/la-pinoz-pizza-jawahar-nagar-talwandi-rest466586",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "78726",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/3/8e884971-ff35-43d9-8b77-ffa2ee6867a3_78726.JPG",
        "locality": "Udyog Road",
        "areaName": "Dhanmandi",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "2456",
        "avgRatingString": "4.4",
        "totalRatingsString": "6.9K+",
        "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 02:55:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            "description": "Top-rated for Bolt, based on user votes."
            },
            {
            "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            "description": "Top-rated for Pizza, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Top-rated for Bolt, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                    "theme": ""
                }
                },
                {
                "attributes": {
                    "description": "Top-rated for Pizza, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹39",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/dominos-pizza-udyog-road-dhanmandi-rest78726",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "354760",
        "name": "Thapa Ji Ke Momos",
        "cloudinaryImageId": "wn9evf69wyxnzdevla88",
        "locality": "Sector C",
        "areaName": "Talwandi",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Chinese",
        "North Indian",
        "Momos",
        "Italian",
        "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "204415",
        "avgRatingString": "4.1",
        "totalRatingsString": "13K+",
        "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            "description": "Top-rated for Bolt, based on user votes."
            },
            {
            "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
            "description": "Top-rated for Chinese, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Top-rated for Bolt, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                    "theme": ""
                }
                },
                {
                "attributes": {
                    "description": "Top-rated for Chinese, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/thapa-ji-ke-momos-sector-c-talwandi-rest354760",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "76264",
        "name": "SS Dairy",
        "cloudinaryImageId": "lkyeu9nh0buf1uoiamvs",
        "locality": "Station Main Road",
        "areaName": "Bhimganj Mandi",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Sweets"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "195079",
        "avgRatingString": "4.7",
        "totalRatingsString": "35K+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 6.6,
        "serviceability": "SERVICEABLE",
        "slaString": "25-35 mins",
        "lastMileTravelString": "6.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 21:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
            "description": "Top-rated for Indian Sweets, based on user votes."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Top-rated for Indian Sweets, based on user votes.",
                    "imageId": "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹75 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/ss-dairy-station-main-road-bhimganj-mandi-rest76264",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "624044",
        "name": "Champaran Meat House",
        "cloudinaryImageId": "4e46a0f6b68af4ae8d4afe55b6b0dbb9",
        "locality": "Ladpura",
        "areaName": "Housing Board Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Snacks",
        "Indian"
        ],
        "avgRating": 4.2,
        "parentId": "57619",
        "avgRatingString": "4.2",
        "totalRatingsString": "1.9K+",
        "sla": {
        "deliveryTime": 40,
        "lastMileTravel": 7.3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "7.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 00:00:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "379"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/champaran-meat-house-ladpura-housing-board-colony-rest624044",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "776963",
        "name": "JBT- Jaipur Burger Truck",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/23/217543b1-58f6-4795-8f7c-d52a0d67543d_776963.JPG",
        "locality": "Kota",
        "areaName": "Talwandi",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Burgers",
        "Pizzas",
        "Snacks",
        "Beverages"
        ],
        "avgRating": 4.4,
        "parentId": "13739",
        "avgRatingString": "4.4",
        "totalRatingsString": "4.0K+",
        "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 03:00:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/jbt-jaipur-burger-truck-talwandi-rest776963",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "134839",
        "name": "Kebabs & Curries Company",
        "cloudinaryImageId": "jukw7ribptvi7ibrsyk9",
        "locality": "Rajeev Gandhi Nagar",
        "areaName": "Indraprastha Industrial Area",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "North Indian",
        "Thalis",
        "Chinese",
        "Mughlai",
        "Chaat",
        "Punjabi",
        "Desserts",
        "Snacks",
        "Rajasthani",
        "Tandoor"
        ],
        "avgRating": 4.3,
        "parentId": "116253",
        "avgRatingString": "4.3",
        "totalRatingsString": "8.8K+",
        "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-40 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 04:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "newg.png",
            "description": "Premium gourmet restaurant offering an elevated, high-quality food experience."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                    "imageId": "newg.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/kebabs-and-curries-company-rajeev-gandhi-nagar-indraprastha-industrial-area-rest134839",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "629385",
        "name": "Dum Safar Biryani",
        "cloudinaryImageId": "arly3bbd95yxu8aw2tgg",
        "locality": "Dcm Road",
        "areaName": "Dhanmandi",
        "costForTwo": "₹500 for two",
        "cuisines": [
        "Biryani",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "barbeque"
        ],
        "avgRating": 4.1,
        "parentId": "351013",
        "avgRatingString": "4.1",
        "totalRatingsString": "3.0K+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-17 23:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "android/static-assets/icons/big_rx.png",
            "description": "bolt!"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "bolt!",
                    "imageId": "android/static-assets/icons/big_rx.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹149",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/dum-safar-biryani-dcm-road-dhanmandi-rest629385",
        "type": "WEBLINK"
    }
    },
    {
    "info": {
        "id": "359785",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/17/53a6fbf4-fbf3-46b2-b36f-afc2730161fb_359785.JPG",
        "locality": "Sector 4",
        "areaName": "Talwandi",
        "costForTwo": "₹120 for two",
        "cuisines": [
        "Ice Cream",
        "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.6",
        "totalRatingsString": "2.3K+",
        "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2026-09-18 00:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "Serves only 100% vegetarian food, with no non-veg items."
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "Serves only 100% vegetarian food, with no non-veg items.",
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "theme": ""
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59",
        "logoCtx": {
            "text": "BENEFITS"
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        "priceComparisonComms": {
        
        }
    },
    "analytics": {
        "context": "seo-data-3ce6afa9-d86a-423f-9b5b-dfa1749f7da3"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/kota/grameen-kulfi-sector-4-talwandi-rest359785",
        "type": "WEBLINK"
    }
    }
];

const Body = () => (
    <div className="body">
        <div className="search">Search</div>
        <div className="rest-container">
            {resList.map((res)=>(
                <RestCard key={res.info.id} resData= {res} />
            ))}
        </div>
    </div>
)

const AppLayout= () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root= ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppLayout />);
