import React from "react";
import { useState } from "react";
import ReactDOMServer from "react-dom/server";

import "./App.css";
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
} from "./components/Icons";
import getTemplate from "./components/tamplate";
console.log(getTemplate);

const App = () => {
  const [view, setView] = useState("desktop");
  const [sideNav, setSideNav] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [viewCode, setViewCode] = useState(false);

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
  const ListRender = () => {
    return Object.keys(getTemplate({ darkMode: isDarkMode })).map(
      (category, index) => (
        <div className="item_container" key={index}>
          <h5 className={isDarkMode ? "light_text" : "dark_text"}>
            {category}
          </h5>
          <div className="container_preview">
            {Object.keys(getTemplate({ darkMode: isDarkMode })[category]).map(
              (component, componentIndex) => (
                <div
                  key={componentIndex}
                  className="iframe-container"
                >
                  <iframe
                    title={component}
                    className="tablet-screen"
                    srcDoc={ReactDOMServer.renderToStaticMarkup(
                      getTemplate({ darkMode: isDarkMode })[category][component]
                    )}
                  ></iframe>
                </div>
              )
            )}
          </div>
        </div>
      )
    );
  };
  

  return (
    <div className="web_body">
      <div
        className={`${sideNav ? "nav_body_toggled" : "nav_body_default"} ${
          !isDarkMode ? "nav_body_day" : "nav_body_night"
        }`}
      >
        {/* {Object.keys(getTemplate({ darkMode: isDarkMode })).map(
          (category, index) => (
            <div className="item_container" key={index}>
              <h5 className={isDarkMode ? "light_text" : "dark_text"}>
                {category}
              </h5>
              <div className="container_preview">
                {Object.keys(
                  getTemplate({ darkMode: isDarkMode })[category]
                ).map((component, componentIndex) => (
                  <iframe
                    key={componentIndex}
                    width="100%"
                    height="100"
                    title={component}
                    className="tablet-screen"
                    srcDoc={ReactDOMServer.renderToStaticMarkup(
                      getTemplate({ darkMode: isDarkMode })[category][component]
                    )}
                  ></iframe>
                ))}
              </div>
            </div>
          )
        )} */}
        {ListRender()}
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
            <div className="sub_list logo">
              {sideNav ? (
                <Toggle onClick={() => handelToggle()} />
              ) : (
                <Left onClick={() => handelToggle()} />
              )}
              <h3>APP NAME</h3>
            </div>
            <div className="sub_list">
              <div className="sub_list_button">
                {viewCode && (
                  <button className="code_button">
                    <Copy /> copy to clipboard
                  </button>
                )}
                {viewCode && (
                  <button
                    className="code_button"
                    onClick={handelToggleViewCode}
                  >
                    <Eye /> preview
                  </button>
                )}
                {!viewCode && (
                  <button
                    className="code_button"
                    onClick={handelToggleViewCode}
                  >
                    <Code /> View code
                  </button>
                )}
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
        <div
          className={`main_section ${
            !isDarkMode ? "main_section_default" : "main_section_toggled"
          }`}
        >
          {Object.keys(getTemplate({ darkMode: isDarkMode })).map((category) =>
            Object.keys(getTemplate({ darkMode: isDarkMode })[category]).map(
              (component) =>
                getTemplate({ darkMode: isDarkMode })[category][component]
            )
          )}
        </div>
      </div>

      <a className="github" href="/" target="_blank">
        sdg
      </a>
    </div>
  );
};

export default App;
