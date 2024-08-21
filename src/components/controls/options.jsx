import React, { useContext, useState } from "react";
import { GitHub } from "../Icons";
import { AppContext } from "../../context/AppContext";
import TuneIcon from "@mui/icons-material/Tune";
import PrimaryButton from "../Reuse/PrimaryButton";
import SecondaryButton from "../Reuse/SecondaryButton";

const themeColors = [
  { name: "Primary", value: "primary" },
  { name: "Secondary", value: "secondary" },
  { name: "Success", value: "success" },
  { name: "Danger", value: "danger" },
  { name: "Warning", value: "warning" },
  { name: "Info", value: "info" },
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
];

const Options = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const {
    themePrimary,
    themePrimaryR,
    secondaryPrimaryR,
    secondaryPrimary,
    handlePrimaryTheme,
    handleSecondaryTheme,
    handlePrimaryThemeR,
    handleSecondaryThemeR,
  } = useContext(AppContext);

  return (
    <>
      <div className="github">
        <div className="form d-flex align-items-center gap-2">
          <div className="d-flex gap-2 p-1 px-1 collorbtn">
            <a onClick={handleShow}>
              <TuneIcon
                style={{
                  fontSize: "35px",
                  color: "white",
                }}
              />
            </a>
          </div>
          <div className="d-flex gap-2 p-1 collorbtn">
            <a
              href="https://github.com/sangamprashant/bootstrap-blocks"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              <GitHub height="40" width="40" fill="white" />
            </a>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div
        className={`modal fade ${show ? "show d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog  modal-dialog-centered" role="document">
          <div className="modal-content shadow border-0">
            <div className="modal-header">
              <h5 className="modal-title">Theme Colors</h5>
              <SecondaryButton c="btn-sm" label="X" onClick={handleClose} />
            </div>
            <div className="modal-body">
              <p className="text-muted mt-2">
                Click on any of the above color options to set the{" "}
                <b>Primary / Secondary</b> theme. If the "Outlined" option is
                selected, the theme will have an outlined style.
              </p>
              <div id="primaryControl">
                <div className="d-flex justify-content-between">
                  <h5 className="m-0">Primary</h5>
                  <label htmlFor="primary-r">
                    Outlined
                    <input
                      type="radio"
                      name="primary-r"
                      id="primary-r"
                      checked={themePrimaryR}
                      onClick={handlePrimaryThemeR}
                    />
                  </label>
                </div>
                <div className="d-flex gap-2 p-3 flex-column bg-body-secondary rounded-1">
                  <div className="d-flex gap-2 justify-content-around">
                    {themeColors.map((colorOption, index) => (
                      <button
                        key={index}
                        onClick={() => handlePrimaryTheme(colorOption.value)}
                        className={`shadow btn btn-${
                          colorOption.value
                        } rounded-circle ${
                          themePrimary === colorOption.value
                            ? "options-active-theme"
                            : "options-not-active-theme"
                        }`}
                        style={{ height: "30px", width: "30px" }}
                        aria-label={`Select ${colorOption.name} primary theme`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Secondary Theme Control */}
              <div id="secondaryControl" className="mt-3">
                <div className="d-flex justify-content-between">
                  <h5 className="m-0">Secondary</h5>
                  <label htmlFor="secondaryR">
                    Outlined
                    <input
                      type="radio"
                      name="secondaryR"
                      id="secondaryR"
                      checked={secondaryPrimaryR}
                      onClick={handleSecondaryThemeR}
                    />
                  </label>
                </div>
                <div className="d-flex gap-2 p-3 flex-column bg-body-secondary rounded-1">
                  <div className="d-flex gap-2 justify-content-around">
                    {themeColors.map((colorOption, index) => (
                      <button
                        key={index}
                        onClick={() => handleSecondaryTheme(colorOption.value)}
                        className={`shadow btn btn-${
                          colorOption.value
                        } rounded-circle ${
                          secondaryPrimary === colorOption.value
                            ? "options-active-theme"
                            : "options-not-active-theme"
                        }`}
                        style={{ height: "30px", width: "30px" }}
                        aria-label={`Select ${colorOption.name} secondary theme`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <PrimaryButton label="OK" c="btn-sm" onClick={handleClose} />
            </div>
          </div>
        </div>
      </div>
      {show && (
        <div className="modal-backdrop fade show" onClick={handleClose}></div>
      )}
    </>
  );
};

export default Options;
