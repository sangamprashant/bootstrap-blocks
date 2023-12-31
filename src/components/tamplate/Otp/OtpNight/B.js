import React from 'react'

function OtpNightB() {
  return (
<div class="d-flex justify-content-center align-items-center container col-md-6 col-sm-6 col-lg-6">
      <div class="border text-white py-5 px-3">
        <h5 class="m-0">Mobile phone verification</h5>
        <span class="mobile-text">
          Enter the code we just send on your mobile phone{" "}
          <b class="text-danger">+91 8661231236</b>
        </span>
        <div class="d-flex flex-row mt-5 gap-2">
          <input type="text" class="form-control" autofocus="" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
          <input type="text" class="form-control" />
        </div>
        <div class="text-center mt-5">
          <span class="d-block mobile-text">Don't receive the code?</span>
          <span class="font-weight-bold text-danger cursor">Resend</span>
        </div>
      </div>
    </div>
  )
}

export default OtpNightB
