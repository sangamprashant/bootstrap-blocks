import React, { useContext } from 'react';
import { FaceBook, Google } from '../../Icons';
import PrimaryButton from '../../Reuse/PrimaryButton';
import { AppContext } from '../../../context/AppContext';

const centerText = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
};

const noUnderlineLink = {
  textDecoration: 'none',
};

function LogDayB() {
  const { isDarkMode } = useContext(AppContext);
  return (
    <div className="login_form_wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className={`col-md-8 card shadow ${isDarkMode?"bg-dark text-light":""}`}>
            <div className="login_wrapper p-4">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                  <a href="#" style={noUnderlineLink} className="btn btn-primary btn-block d-flex align-items-center justify-content-center">
                    <FaceBook height="30" width="30" stroke="white" fill="white" />
                    <span className="m-2">Login with Facebook</span>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6">
                  <a href="#" style={noUnderlineLink} className="btn btn-danger btn-block d-flex align-items-center justify-content-center">
                    <Google height="30" width="30" stroke="white" fill="white"/>
                    <span className="m-2">Login with Google</span>
                  </a>
                </div>
              </div>
              <div style={centerText}>
                <h2>or</h2>
              </div>
              <div className="formsix-pos my-2">
                <div className="form-group i-email">
                  <input type="email" className="form-control p-3" required="" id="email2" placeholder="Email Address *" />
                </div>
              </div>
              <div className="formsix-e my-2">
                <div className="form-group i-password">
                  <input type="password" className="form-control p-3" required="" id="password2" placeholder="Password *" />
                </div>
              </div>
              <div className="my-2 d-flex justify-content-between">
                <label className="control d-flex align-items-center">
                  Remember me
                  <input type="checkbox" />
                </label>
                <a href="#" className="forget_password" style={noUnderlineLink}>
                  Forgot Password
                </a>
              </div>
              <PrimaryButton  label="Sign up" c="w-100"/>
              <div className="login_message">
                <p>Don't have an account? <a href="#" style={noUnderlineLink}>Sign up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogDayB;
