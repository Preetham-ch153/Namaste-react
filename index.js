import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <img className="logo" 
            src="https://dynamic.brandcrowd.com/asset/logo/7f982a19-779d-4dd3-b533-7a9f66474000/logo-search-grid-2x?logoTemplateVersion=2&v=638921911228530000&layout=auto-1-1"/>
             <div className="nav-container">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div> 
        </div>
    )
}
const Restaurantcard = (props) => {
    return (
        <div className="res-card">
            <img className="res-logo"
            src="https://b.zmtcdn.com/data/pictures/chains/1/50691/f7c06b908c4cebf541f234aeb41c0651.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"/>
                <h3>{props.name}</h3>
                <h4>{props.cuisines}</h4>
                <h4>{props.stars}</h4>
                <h4>{props.deliverytime}</h4>
        </div>
    )

}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurant-container">
            <Restaurantcard name="Meghana Foods" cuisines="North indian,Chinese,south indian" stars="4.4 ⭐" deliverytime="30 mins"/>
            <Restaurantcard name="KFC" cuisines="Wings,Legs,lollipops" stars="5.0 ⭐" deliverytime="28 mins"/>
            <Restaurantcard name="Pizza hut" cuisines="Veg pizza,Non veg puzza" stars="4.8 ⭐" deliverytime="20 mins"/>
            <Restaurantcard name="Bawarchi" cuisines="Biryani,Kabab,Mandi" stars="4.9 ⭐" deliverytime="35 mins"/>
            <Restaurantcard name="Parardise" cuisines="Mandi,Dum Biryani" stars="4.5 ⭐" deliverytime="32 mins"/>  
            <Restaurantcard name="Mehfil" cuisines="Shawarma,Dum Biryani,Mandi" stars="4.3⭐" deliverytime="30 mins"/>
            <Restaurantcard name="Royal Restaurant" cuisines="North indian,Chinese,south indian" stars="4.4⭐" deliverytime="30 mins"/>
            <Restaurantcard name="Raghavendra tiffins" cuisines="Tiffins,Meals,Parota,Curries" stars="4.9⭐" deliverytime="20 mins"/>

            </div>
        </div>
    )
}




const AppLayout = () => {
    return (
        <div className="app-Layout">
            <Header />
            <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
