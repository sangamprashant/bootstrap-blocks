import React from "react";
import { useState } from "react";
import "./App.css";
import { Laptop, Left, Mobile, Moon, Sun, Tablet, Toggle } from "./components/Icons";

const App = () => {
  const [view, setView] = useState("desktop");
  const [sideNav, setSideNav] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const handelToggle = () => {
    setSideNav(!sideNav);
  };

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className="web_body">
      <div className={`${sideNav ? "nav_body_toggled" : "nav_body_default"}`}>
        <div className="item_container">
          <h2 className="dark_text">Title</h2>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
          </div>
        </div>
        <div className="item_container">
          <h2 className="light_text">Title</h2>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
          </div>
        </div>
        <div className="item_container">
          <h2 className="dark_text">Title</h2>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
          </div>
        </div>
        <div className="item_container">
          <h2 className="dark_text">Title</h2>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
            <img
              src="https://avatars.githubusercontent.com/u/93257774?v=4"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div
        className={`${sideNav ? "right_body_toggled" : "right_body_default"}`}
      >
        <div
          className={`top_nav ${
            sideNav ? "top_nav_toggled" : "top_nav_default"
          }`}
        >
          <div className="nav_items">
            <div className="sub_list">
              {sideNav ? (
                <Toggle onClick={() => handelToggle()} />
              ) : (
                <Left onClick={() => handelToggle()} />
              )}
              <div>APP NAME</div>
            </div>
            <div className="sub_list">
            <button>View code</button>
              <div>Icon</div>
              <div>APP NAME</div>
              <div className="sub_list_devices">
                <Laptop active="active"/><Tablet active=""/><Mobile active=""/>
              </div>
              {!isDarkMode ? (
                <Sun onClick={toggleTheme} />
              ) : (
                <Moon onClick={toggleTheme} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
