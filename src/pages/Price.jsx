import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Topic from "../components/Topic";

function Price() {
  const [amount, setAmount] = useState(0);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  let location = useLocation();
  let navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/otp-verify");
  };

  const { source, destination, carType, totalMembers } = location.state;
  return (
    <div>
      <Topic name={"Place your bid (2/4 step)"} />

      <div className="container">
        <form className="bidForm ">
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
          </div>
          <div className="priceFlex">
            <div className="pricing">
              <span>Rs</span>
              <input
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={handleChange}
              />
            </div>
            <div>
              <input type="checkbox" name="rate" id="rate"/>
              <span>Rate Negiotable</span>
            </div>
          </div>

          <Button handleClick={handleSubmit} name={"Next"} />
        </form>
      </div>
    </div>
  );
}

export default Price;
