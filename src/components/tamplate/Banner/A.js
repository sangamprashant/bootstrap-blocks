import React, { useContext } from "react";
import { People, ThumbUp, User } from "../../Icons";
import Cart from "../../Icons/Cart";
import { AppContext } from "../../../context/AppContext";

function BannerDayA() {
  const { isDarkMode } = useContext(AppContext);
  const counterData = [
    {
      icon: <ThumbUp height="80" width="50" stroke="white" fill="none" />,
      count: 2147,
      title: "Happy Customers",
      backgroundColor: "#22678d",
      textColor: "text-white",
    },
    {
      icon: (
        <People
          height="80"
          width="50"
          stroke={isDarkMode ? "white" : "black"}
          fill="none"
        />
      ),
      count: 3275,
      title: "Registered Members",
      backgroundColor: isDarkMode ? "#000000" : "#f6f6f6",
      textColor: isDarkMode ? "text-white" : "text-black",
    },
    {
      icon: (
        <Cart
          height="80"
          width="50"
          stroke={isDarkMode ? "white" : "black"}
          fill="none"
        />
      ),
      count: 289,
      title: "Available Products",
      backgroundColor: isDarkMode ? "#000000" : "#f6f6f6",
      textColor: isDarkMode ? "text-white" : "text-black",
    },
    {
      icon: (
        <User
          height="80"
          width="50"
          stroke={isDarkMode ? "white" : "black"}
          fill="none"
        />
      ),
      count: 1563,
      title: "Saved Trees",
      backgroundColor: isDarkMode ? "#000000" : "#f6f6f6",
      textColor: isDarkMode ? "text-white" : "text-black",
    },
  ];
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {counterData.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div
              className="counter-box d-flex flex-column justify-content-center align-items-center rounded-3 shadow"
              style={{ background: item.backgroundColor }}
            >
              <i>{item.icon}</i>
              <span className={`counter ${item.textColor}`}>{item.count}</span>
              <p className={item.textColor}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerDayA;
