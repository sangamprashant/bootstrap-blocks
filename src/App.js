import React from "react";
import { useState } from "react";
import "./App.css";
import {  Code,  Copy,  Eye,  Laptop,  Left,  Mobile,  Moon,  Sun,  Tablet,  Toggle,} from "./components/Icons";
import { Link } from "react-router-dom";

const App = () => {
  const [view, setView] = useState("desktop");
  const [sideNav, setSideNav] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [viewCode,setViewCode] = useState(false)

  const handelToggle = () => {
    setSideNav(!sideNav);
  };
  const handelToggleViewCode = () => {
    setViewCode(!viewCode);
  };
  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.style.backgroundColor = "black";
    } else {
      document.body.style.backgroundColor = "";
    }
  };
  const handelDesktopView = () => {
    setView("desktop");
  };
  const handelTabletView = () => {
    setView("tablet");
  };
  const handelMobileView = () => {
    setView("mobile");
  };

  return (
    <div className="web_body">
      <div className={`${sideNav ? "nav_body_toggled" : "nav_body_default"} ${!isDarkMode?"nav_body_day":"nav_body_night"}`}>
        <div className="item_container">
          <h5 className={`${isDarkMode?"light_text":"dark_text"}`}>Title</h5>
          <div className="container_preview">
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
        <div className={`top_nav ${
            sideNav ? "top_nav_toggled" : "top_nav_default"
          }`}
        >
          <div className="nav_items">
            <div className="sub_list logo">
              {sideNav ? (
                <Toggle onClick={() => handelToggle()} />
              ) : (
                <Left onClick={() => handelToggle()} />
              )}
              <h3 >APP NAME</h3>
            </div>
            <div className="sub_list">
              <div className="sub_list_button">
                {viewCode&&<button className="code_button"><Copy /> copy to clipboard</button>}
                {viewCode&&<button className="code_button" onClick={handelToggleViewCode}><Eye /> preview</button>}
                {!viewCode&&<button className="code_button" onClick={handelToggleViewCode}><Code /> View code</button>}
              </div>
              <div className="sub_list_devices">
                <Laptop
                  active={view === "desktop"}
                  onClick={handelDesktopView}
                />
                <Tablet active={view === "tablet"} onClick={handelTabletView} />
                <Mobile active={view === "mobile"} onClick={handelMobileView} />
                {isDarkMode ? (
                  <Sun active="active" onClick={toggleTheme} />
                ) : (
                  <Moon active="active" onClick={toggleTheme} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={`main_section ${!isDarkMode?"main_section_default":"main_section_toggled"}`}>
        <h1>bj</h1>

        </div>
      </div>
    

      <a className="github" href="/" target="_blank">sdg</a>
      
    </div>
  );
};

export default App;
