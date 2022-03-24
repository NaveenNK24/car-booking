import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Topic from "../components/Topic";

function Price() {
  let location = useLocation();
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/otp-verify");
  };

  // const { source, destination } = location.state
  return (
    <div>
      <Topic name={"Place your bid (2/4 step)"} />
      
      <div className="container">
        <form  className="bidForm ">
          <div className="form-input">
            <label htmlFor="amount">Enter the amount</label> <br />
            <input type="number" name="amount" id="amount" />
          </div>

          <Button handleClick={handleSubmit} name={"Next"} />
        </form>
      </div>
    </div>
  );
}

export default Price;
