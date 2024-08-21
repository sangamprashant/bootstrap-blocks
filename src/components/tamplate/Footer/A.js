import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import { AppName } from "../../../strings";

function FooterDayA() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div>
      <footer className={`${isDarkMode?"bg-dark text-light":"bg-light text-dark"} text-center py-3`}>
        <div className="container">
          <p>&copy; 2023 {AppName}</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterDayA;
