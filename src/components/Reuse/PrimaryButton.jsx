import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const PrimaryButton = ({ label, c, onClick }) => {
  const { themePrimary, themePrimaryR } = useContext(AppContext);
  return (
    <button
      type="button"
      className={`btn btn-${
        themePrimaryR ? "outline-" : ""
      }${themePrimary} btn-lg px-4 ${c}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
