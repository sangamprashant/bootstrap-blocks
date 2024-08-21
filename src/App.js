import React, { useState } from "react";
import Frame from "react-frame-component";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Options from "./components/controls/options";
import TopNavBar from "./components/controls/TopNavBar";
import getPreview from "./components/Preview";
import getTemplate from "./components/tamplate";
import { AppContext } from "./context/AppContext";

const App = () => {
  const [reference, setReference] = useState(React.createRef());
  const [componentCode, setComponentCode] = useState("");

  const [categorySelected, setCategorySelected] = useState("Hero");
  const [componentSelected, setComponentSelected] = useState("HeroA");
  const [categorySearched, setcategorySearched] = useState("");

  const [viewCode, setViewCode] = useState(false);
  const [view, setView] = useState("desktop");
  const [sideNav, setSideNav] = useState(false);
  const [themePrimary, setThemePrimary] = useState("primary");
  const [themePrimaryR, setThemePrimaryR] = useState(false);
  const [secondaryPrimary, setSecondaryPrimary] = useState("secondary");
  const [secondaryPrimaryR, setSecondaryPrimaryR] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  const handlePrimaryTheme = (s) => {
    setThemePrimary(s);
  };
  const handlePrimaryThemeR = () => {
    setThemePrimaryR(!themePrimaryR);
  };
  const handleSecondaryTheme = (s) => {
    setSecondaryPrimary(s);
  };
  const handleSecondaryThemeR = () => {
    setSecondaryPrimaryR(!secondaryPrimaryR);
  };
  const handelToggle = () => {
    setSideNav(!sideNav);
  };
  const copyToClipboard = () => {
    const code = beautifyHTML(componentCode);
    const input = document.createElement("textarea");
    input.value = code;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    toast.info("code copied.");
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
  const handlView = (s) => {
    setView(s);
  };

  //

  const ListRenderDefault = () => {
    const categories = Object.keys(getPreview({ darkMode: isDarkMode })).sort();
    return categories.map((category, index) => (
      <div className="item_container" key={index}>
        <h5 className={isDarkMode ? "light_text" : "dark_text"}>{category}</h5>
        <div className="container_preview">
          {Object.keys(getPreview({ darkMode: isDarkMode })[category]).map(
            (component, componentIndex) => (
              <div key={componentIndex} className="iframe-container">
                <button
                  className={`tablet-screen ${
                    isDarkMode ? "nav_button_night" : "nav_button_day"
                  } ${
                    categorySelected === category &&
                    componentSelected === component
                      ? "active"
                      : ""
                  }`}
                  onClick={() => handelElementBound(category, component)}
                >
                  {getPreview({ darkMode: isDarkMode })[category][component]}
                </button>
              </div>
            )
          )}
        </div>
      </div>
    ));
  };

  const SelectedListRender = () => {
    if (
      categorySearched &&
      getPreview({ darkMode: isDarkMode })[categorySearched]
    ) {
      return (
        <div className="item_container">
          <h5 className={isDarkMode ? "light_text" : "dark_text"}>
            {categorySearched}
          </h5>
          <div className="container_preview">
            {Object.keys(
              getPreview({ darkMode: isDarkMode })[categorySearched]
            ).map((component, componentIndex) => (
              <div key={componentIndex} className="iframe-container">
                <button
                  className={`tablet-screen ${
                    isDarkMode ? "nav_button_night" : "nav_button_day"
                  } ${
                    categorySelected === categorySearched &&
                    componentSelected === component
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handelElementBound(categorySearched, component)
                  }
                >
                  {
                    getPreview({ darkMode: isDarkMode })[categorySearched][
                      component
                    ]
                  }
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null; // Return nothing when categorySearched is empty or the category doesn't exist
    }
  };

  const handelElementBound = (category, component) => {
    setCategorySelected(category);
    setComponentSelected(component);
    setViewCode(false);
  };

  const beautifyHTML = (codeStr) => {
    let div = document.createElement("div");
    div.innerHTML = codeStr.trim();
    return format(div, 0).innerHTML.trim();
  };

  const format = (node, level) => {
    let indentBefore = new Array(level++ + 1).join("  "),
      indentAfter = new Array(level - 1).join("  "),
      textNode;

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode("\n" + indentBefore);
      node.insertBefore(textNode, node.children[i]);

      format(node.children[i], level);

      if (node.lastElementChild === node.children[i]) {
        textNode = document.createTextNode("\n" + indentAfter);
        node.appendChild(textNode);
      }
    }

    return node;
  };

  const handleContentDidMount = () => {
    const iframe = document.querySelector("iframe");
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;

    // Set the content of the iframe
    iframeDocument.open();
    iframeDocument.write(reference.innerHTML);

    // Add a link to load the complete Bootstrap CSS within the iframe
    const bootstrapLink = iframeDocument.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href = "bootstrap.min.css";
    iframeDocument.head.appendChild(bootstrapLink);

    // Add custom CSS within the iframe
    const styleElement = iframeDocument.createElement("style");
    styleElement.innerHTML = `
      /* Add your custom CSS rules here */
      body {
        background-color: transparent;
      }
      /* Additional styles... */
    `;
    iframeDocument.head.appendChild(styleElement);

    iframeDocument.close();

    setComponentCode(reference.innerHTML.toString());
  };

  const categoryNames = Object.keys(getPreview({ darkMode: isDarkMode }));
  const SearchInput = () => {
    return (
      <div className="">
        <input
          className="form-control"
          placeholder="Search..."
          list="nav-item-list"
          onChange={(e) => setcategorySearched(e.target.value)}
        />
        <datalist id="nav-item-list">
          {categoryNames
            .filter((category) =>
              category.toLowerCase().includes(categorySearched.toLowerCase())
            )
            .map((category, index) => (
              <option key={index} value={category} />
            ))}
        </datalist>
      </div>
    );
  };

  return (
    <>
      <AppContext.Provider
        value={{
          themePrimary,
          themePrimaryR,
          secondaryPrimary,
          secondaryPrimaryR,
          handlePrimaryTheme,
          handleSecondaryTheme,
          handlePrimaryThemeR,
          handleSecondaryThemeR,
          view,
          handlView,
          sideNav,
          handelToggle,
          copyToClipboard,
          viewCode,
          isDarkMode,
          handelToggleViewCode,
          toggleTheme,
        }}
      >
        <div className="web_body">
          <div
            className={`${sideNav ? "nav_body_toggled" : "nav_body_default"} ${
              !isDarkMode ? "nav_body_day" : "nav_body_night"
            }`}
          >
            {SearchInput()}
            {categorySearched
              ? SelectedListRender(categorySearched)
              : ListRenderDefault()}
          </div>
          <div
            className={`${
              sideNav ? "right_body_toggled" : "right_body_default"
            } ${!isDarkMode ? "right_body_day" : "right_body_night"}`}
          >
            <TopNavBar />
            <div className="right_content">
              <div className="markup" ref={setReference}>
                {getTemplate()[categorySelected][componentSelected]}
              </div>
              {!viewCode ? (
                <div
                  className={`preview_container ${
                    !sideNav ? "prview_default" : "prview_toggled"
                  }`}
                >
                  <div
                    className={`main_section ${
                      !sideNav ? "main_section_default" : "main_section_toggled"
                    } ${
                      view === "desktop"
                        ? "desktop"
                        : view === "tablet"
                        ? "tablet"
                        : view === "mobile"
                        ? "mobile"
                        : ""
                    }`}
                  >
                    <Frame
                      contentDidMount={handleContentDidMount}
                      head={
                        <>
                          <link rel="stylesheet" href="bootstrap.min.css" />
                          <style
                            dangerouslySetInnerHTML={{
                              __html: `
                            img {
                              filter: ${
                                isDarkMode
                                  ? "invert(1) opacity(.5); mix-blend-mode: luminosity;"
                                  : "sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7);"
                              }
                            }
                          `,
                            }}
                          />
                        </>
                      }
                    >
                      {getTemplate()[categorySelected][componentSelected]}
                    </Frame>
                  </div>
                </div>
              ) : (
                <div>
                  <SyntaxHighlighter
                    language="html"
                    style={isDarkMode ? vs2015 : docco}
                    showLineNumbers
                    customStyle={{ background: "transparent", margin: "0" }}
                  >
                    {beautifyHTML(componentCode)}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          </div>
          <Options />
          <ToastContainer theme="colored" />
        </div>
      </AppContext.Provider>
    </>
  );
};

export default App;
