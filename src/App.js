import React from "react";
import { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Frame from 'react-frame-component';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import {Code,Copy,Eye,GitHub,Laptop,Left,Mobile,Moon,Sun,Tablet,Toggle,} from "./components/Icons";
import getTemplate from "./components/tamplate";
import getPreview from "./components/Preview";

const App = () => {
  const [reference,setReference] = useState(React.createRef())
  const [componentCode,setComponentCode] = useState("")
  const [view, setView] = useState("desktop");
  const [sideNav, setSideNav] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [viewCode, setViewCode] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Hero");
  const [componentSelected, setComponentSelected] = useState("HeroA");

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
    const categories = Object.keys(getPreview({ darkMode: isDarkMode })).sort();
    categories.reverse();
  
    return categories.map((category, index) => (
      <div className="item_container" key={index}>
        <h5 className={isDarkMode ? "light_text" : "dark_text"}>{category}</h5>
        <div className="container_preview">
          {Object.keys(getPreview({ darkMode: isDarkMode })[category]).map((component, componentIndex) => (
            <div key={componentIndex} className="iframe-container">
              <button className={`tablet-screen ${isDarkMode ? "nav_button_night" : ""} ${(categorySelected === category && componentSelected === component) ? "active" : ""}`} onClick={() => handelElementBound(category, component)}>
                {getPreview({ darkMode: isDarkMode })[category][component]}
              </button>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  const TopNavOption = () =>{
    return (
      <div className="sub_list">
        <div className="sub_list_button">
          {viewCode && (
            <button className="code_button"onClick={()=>copyToClipboard()} >
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
          <Laptop active={view === "desktop"} onClick={handelDesktopView} />
          <Tablet active={view === "tablet"} onClick={handelTabletView} />
          <Mobile active={view === "mobile"} onClick={handelMobileView} />
          {isDarkMode ? <Sun active="active" onClick={toggleTheme} /> : <Moon active="active" onClick={toggleTheme} />}
        </div>
      </div>
    )
  }

  const handelElementBound = (category, component) => {
    setCategorySelected(category);
    setComponentSelected(component);
    setViewCode(false)
  };

  const beautifyHTML = (codeStr) => {
    let div = document.createElement('div');
    div.innerHTML = codeStr.trim();
    return format(div, 0).innerHTML.trim();
  };

  const format = (node, level) => {
    let indentBefore = new Array(level++ + 1).join('  '),
      indentAfter = new Array(level - 1).join('  '),
      textNode;

    for (let i = 0; i < node.children.length; i++) {
      textNode = document.createTextNode('\n' + indentBefore);
      node.insertBefore(textNode, node.children[i]);

      format(node.children[i], level);

      if (node.lastElementChild === node.children[i]) {
        textNode = document.createTextNode('\n' + indentAfter);
        node.appendChild(textNode);
      }
    }

    return node;
  };

  const handleContentDidMount = () => {
    const iframe = document.querySelector("iframe");
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  
    // Set the content of the iframe
    iframeDocument.open();
    iframeDocument.write(reference.innerHTML);
  
    // Add a link to load the complete Bootstrap CSS within the iframe
    const bootstrapLink = iframeDocument.createElement("link");
    bootstrapLink.rel = "stylesheet";
    bootstrapLink.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
    iframeDocument.head.appendChild(bootstrapLink);

    // Add custom CSS within the iframe
    const styleElement = iframeDocument.createElement("style");
    styleElement.innerHTML = `
      /* Add your custom CSS rules here */
      body {
        background-color: transparent;
        padding:0 20px;
      }
      /* Additional styles... */
    `;
    iframeDocument.head.appendChild(styleElement);
  
    iframeDocument.close();
  
    setComponentCode(reference.innerHTML.toString());
  };

  const copyToClipboard =()=> {
    const code = beautifyHTML(componentCode);
    
    // Create a textarea element and set its value to the code
    const input = document.createElement('textarea');
    input.value = code;
    document.body.appendChild(input);
    
    // Select the textarea and execute the copy command
    input.select();
    document.execCommand('copy');
    
    // Remove the textarea element
    document.body.removeChild(input);
    toast.info("code copied.")
}

  return (
    <div className="web_body">
      <div className={`${sideNav ? "nav_body_toggled" : "nav_body_default"} ${!isDarkMode ? "nav_body_day" : "nav_body_night"}`}>
        {ListRender()}
      </div>
      <div className={`${sideNav ? "right_body_toggled" : "right_body_default"} ${!isDarkMode?"right_body_day":"right_body_night"}`}>
        <div className={`top_nav ${sideNav ? "top_nav_toggled" : "top_nav_default"}`}>
          <div className="nav_items">
            <div className="sub_list logo">
              {sideNav ? <Toggle onClick={() => handelToggle()} /> : <Left onClick={() => handelToggle()} />}
              <img height="50" src={`${window.location.origin}/navblue.png`}/>
              <h3>BOOTSTRAPFINDS </h3>
            </div>
            {TopNavOption()}
          </div>
          </div>
          <div className="right_content">
            <div className="markup" ref={setReference}>{getTemplate({ darkMode: isDarkMode })[categorySelected][componentSelected]}</div>
            {!viewCode?
              <div className={`preview_container ${!sideNav?"prview_default":"prview_toggled"}`}>
                <div className={`main_section ${!sideNav ? "main_section_default" : "main_section_toggled"} ${view==="desktop"?"desktop":view==="tablet"?"tablet":view==="mobile"?"mobile":""}`}>
                  <Frame
                    contentDidMount={handleContentDidMount}
                    head={
                    <>
                      <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
                      />
                      <style dangerouslySetInnerHTML={{
                        __html: `
                          img {
                            filter: ${isDarkMode
                              ? 'invert(1) opacity(.5); mix-blend-mode: luminosity;'
                              : 'sepia(1) hue-rotate(190deg) opacity(.46) grayscale(.7);'
                            }
                          }
                        `,
                      }}
                      />
                    </>
                    }       
                    >
                  {getTemplate({ darkMode: isDarkMode })[categorySelected][componentSelected]}
                  </Frame>
                </div>
              </div>
              :
              <div>
                <h2 className={`px-4 ${isDarkMode?"text-white":"text-black"}`}>Code:</h2>
                <SyntaxHighlighter language="html" style={isDarkMode ? vs2015 : docco} showLineNumbers customStyle={{ background: 'transparent', margin:"0" }}>
                  {beautifyHTML(componentCode)}
                </SyntaxHighlighter>
              </div>
            }
          </div>
        </div>
      <a className="github" href="https://github.com/sangamprashant/bootstrap-blocks" target="_blank" rel="noreferrer">
        <GitHub/>GitHub
      </a>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default App;
