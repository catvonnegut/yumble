import React, { Component } from "react";
import bitmapTwo from "../../assets/bitmap_2.png";

import "./RestaurantProfile.css"

class RestaurantProfile extends Component {
  render() {
    return (
      <div className="restaurant-list">
        <img src={bitmapTwo} alt=" " />
        <div cass="flex-column">
          <p>Restaurant Name</p>
          <p> $ </p>
          <p>Est. Delivery</p>
        </div>
        <div>
          <h1>></h1>
        </div>
      </div>
    );
  }
}

export default RestaurantProfile;
