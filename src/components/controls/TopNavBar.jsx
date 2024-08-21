import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {
  Code,
  Copy,
  Eye,
  Laptop,
  Left,
  Mobile,
  Moon,
  Sun,
  Tablet,
  Toggle,
} from "../Icons";
import { AppName } from "../../strings";

const TopNavBar = () => {
  const {
    view,
    sideNav,
    handelToggle,
    copyToClipboard,
    viewCode,
    isDarkMode,
    handelToggleViewCode,
    handlView,
    toggleTheme,
  } = useContext(AppContext);
  return (
    <div
      className={`top_nav ${sideNav ? "top_nav_toggled" : "top_nav_default"}`}
    >
      <div className="nav_items">
        <div className="sub_list logo">
          {sideNav ? (
            <Toggle onClick={() => handelToggle()} />
          ) : (
            <Left onClick={() => handelToggle()} />
          )}
          <img height="50" src="logo.png" /> <h3>{AppName}</h3>
        </div>
        <div className="sub_list">
          <div className="sub_list_button">
            {viewCode && (
              <button className="code_button" onClick={() => copyToClipboard()}>
                <Copy /> copy to clipboard
              </button>
            )}
            {viewCode && (
              <button className="code_button" onClick={handelToggleViewCode}>
                <Eye /> preview
              </button>
            )}
            {!viewCode && (
              <button className="code_button" onClick={handelToggleViewCode}>
                <Code /> View code
              </button>
            )}
          </div>
          <div className="sub_list_devices">
            <Laptop
              active={view === "desktop"}
              onClick={() => handlView("desktop")}
            />
            <Tablet
              active={view === "tablet"}
              onClick={() => handlView("tablet")}
            />
            <Mobile
              active={view === "mobile"}
              onClick={() => handlView("mobile")}
            />
            {isDarkMode ? (
              <Sun active="active" onClick={toggleTheme} />
            ) : (
              <Moon active="active" onClick={toggleTheme} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
