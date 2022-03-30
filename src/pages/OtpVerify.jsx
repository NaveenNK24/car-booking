import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Topic from "../components/Topic";

function OtpVerify() {
  let location = useLocation();
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/submission");
  };
  const { source, destination, carType, totalMembers } = location.state.values;
  return (
    <div>
      <Topic name={"Place your bid (3/4 step)"} />
      <div className="container">
        <form action="" className="bidForm ">
        <div className="journey">
            <div className="journey-header">
              <span className="title">JOURNEY DETAILS</span>
              {/* <Button name={"edit"} /> */}
            </div>
            <div className="journey-details">
              <span>
                {source} - {destination}
              </span>{" "}
              <br />
              <span>
                {totalMembers} Members,{carType}
              </span>
            </div>
            {location.state.amount}
          </div>
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
