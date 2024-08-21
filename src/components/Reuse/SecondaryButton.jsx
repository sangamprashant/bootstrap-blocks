import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const SecondaryButton = ({ label, c, onClick }) => {
  const { secondaryPrimary, secondaryPrimaryR } = useContext(AppContext);
  return (
    <button
      type="button"
      className={`btn btn-${
        secondaryPrimaryR ? "outline-" : ""
      }${secondaryPrimary} btn-lg px-4 ${c}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
