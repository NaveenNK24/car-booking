import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Topic from "../components/Topic";

function OtpVerify() {
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/submission");
  };
  return (
    <div>
      <Topic name={"Place your bid (3/4 step)"} />
      <div className="container">
        <form action="" className="bidForm ">
          <div className="form-input">
            <label htmlFor="otp">Verify OTP</label> <br />
            <input type="number" name="otp" id="otp" />
          </div>
          <Button handleClick={handleSubmit} name={"Verify via OTP"} />
        </form>
      </div>
    </div>
  );
}

export default OtpVerify;
