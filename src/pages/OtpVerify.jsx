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
          {/* <div className="form-input">
            <label htmlFor="destination">Destination</label> <br />
            <input type="text" name="destination" id="destination" />
          </div>
          <div className="form-input">
            <label htmlFor="Car Type">Car Type</label> <br />
            <select name="cars" id="cars">
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="total_nos">Total Members</label> <br />
            <input type="number" name="total-nos" id="total-nos" />
          </div> */}
          <Button handleClick={handleSubmit} name={"Verify via OTP"} />
        </form>
      </div>
    </div>
  );
}

export default OtpVerify;
