import React, { useContext } from "react";
import { Code, Mug, People, User } from "../../Icons";
import { AppContext } from "../../../context/AppContext";

function BannerDayB() {
  const { isDarkMode } = useContext(AppContext);
  const counterData = [
    {
      icon: (
        <Mug
          height="80"
          width="50"
          stroke={isDarkMode ? "white" : "black"}
          fill="none"
        />
      ),
      count: 2147,
      title: "BEER ORDERED",
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
      title: "HAPPY CLIENTS",
    },
    {
      icon: (
        <Code
          height="80"
          width="50"
          stroke={isDarkMode ? "white" : "black"}
          fill="none"
        />
      ),
      count: 289,
      title: "PROJECTS COMPLETED",
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
      title: "CLIENTS SERVED",
    },
  ];
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {counterData.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div
              className={`counter-box d-flex flex-column justify-content-center align-items-center text-${
                isDarkMode ? "light" : "dark"
              }  bg-${isDarkMode ? "dark" : "white"} rounded-3 shadow`}
            >
              <i>{item.icon}</i>
              <p>{item.title}</p>
              <span className={`mb-3 `}>{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerDayB;
