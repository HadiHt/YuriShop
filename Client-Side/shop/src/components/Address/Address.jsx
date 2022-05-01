import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div className="AddressContainer">
      <div className="BottomAddressContainer">
        <span className="AddressDetails">
          <p>Country: Lebanon</p>
          <p>State: Mount Lebanon</p>
          <p>City: Beirut</p>
          <p>Area: Ghobeiry</p>
          <p>Street: Berjawi</p>
          <p>Building: Farhat</p>
          <p>More Details: ....</p>
        </span>
        <button className="EditAddressButton">Edit Address Details</button>
      </div>
    </div>
  );
};

export default Address;
