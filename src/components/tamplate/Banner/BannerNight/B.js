import React from "react";
import { Code, Mug, People, User } from "../../../Icons";

const counterData = [
  {
    icon: <Mug height="80" width="50" stroke="white" fill="none" />,
    count: 2147,
    title: "BEER ORDERED",
  },
  {
    icon: <People height="80" width="50" stroke="white" fill="none" />,
    count: 3275,
    title: "HAPPY CLIENTS",
  },
  {
    icon: <Code height="80" width="50" stroke="white" fill="none" />,
    count: 289,
    title: "PROJECTS COMPLETED",
  },
  {
    icon: <User height="80" width="50" stroke="white" fill="none" />,
    count: 1563,
    title: "CLIENTS SERVED",
  },
];

function BannerNightB() {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row">
        {counterData.map((item, index) => (
          <div className="col-md-3" key={index}>
            <div
              className={`counter-box d-flex flex-column justify-content-center align-items-center bg-secondary text-white`}
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

export default BannerNightB;
