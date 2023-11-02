import React from "react";
import { People, ThumbUp, User } from "../../../Icons";
import Cart from "../../../Icons/Cart";

const counterData = [
  {
    icon: <ThumbUp height="80" width="50" stroke="white" fill="none" />,
    count: 2147,
    title: "Happy Customers",
    backgroundColor: "#3acf87",
    textColor: "text-white",
  },
  {
    icon: <People height="80" width="50" stroke="black" fill="none" />,
    count: 3275,
    title: "Registered Members",
    backgroundColor: "#f6f6f6",
    textColor: "",
  },
  {
    icon: <Cart height="80" width="50" stroke="black" fill="none" />,
    count: 289,
    title: "Available Products",
    backgroundColor: "#f6f6f6",
    textColor: "",
  },
  {
    icon: <User height="80" width="50" stroke="black" fill="none" />,
    count: 1563,
    title: "Saved Trees",
    backgroundColor: "#f6f6f6",
    textColor: "",
  },
];

function BannerDayA() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {counterData.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div
              className={`counter-box d-flex flex-column justify-content-center align-items-center`}
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
