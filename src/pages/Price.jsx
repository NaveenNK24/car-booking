import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Topic from "../components/Topic";

function Price() {

  let location = useLocation();
  let navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [mobile, setMobile] = useState('');
  const [cusName, setCusName] = useState('');
  const [amountVal, setAmountVal] = useState('');
  const [mobileVal, setMobileVal] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    const {name,value} = e.target;
    if (name === 'amount'){
      setAmount(value);
    }else if(name === 'mobile'){
      setMobile(value)
    }else{
      setCusName(value)
    }
    
  };

  const validateAll =() => {
    let isValid = true;
    if (amount <= 0) {
      setAmountVal('Please enter the amount');
      isValid = false;
    }

    return isValid
  }

  const validateOne = (e) => {
    const {name,value} = e.target;
    if (name === 'amount' && value <= 0 ) {
      setAmountVal('Amount is required');
    }
    if(name === 'mobile' && value.length <= 9){
      setMobileVal('Enter 10 digit Mobile Number')
    }
    if(name === 'cusName' && (value.length == 0 || value == '' || value == null )){
      setNameVal('Enter the name')
    }
 
  }
  const handleSubmit = () => {
    const isValid = validateAll();
    if (!isValid) {
      return false;
    }
    setDisabled(false);
  };

  const handleSubmitOTP = () => {
    navigate("/otp-verify",{state: {values:location.state,amount:amount}});
  }

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
                onBlur={validateOne}
              />
            </div>
            <div className="errors">{amountVal}</div>
            <div>
              <input type="checkbox" name="rate" id="rate"/>
              <span>Rate Negiotable</span>
            </div>
          </div>

          {isDisabled && <Button handleClick={handleSubmit} name={"Next"} />}

          {!isDisabled && 
            <div>
              <div className="form-input">
            <label htmlFor="mobile">Mobile Number</label> <br />
            <input
              type="number"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={handleChange}
              onBlur={validateOne}
            />
            <div className="errors">{mobileVal}</div>
          </div>
          <div className="form-input">
            <label htmlFor="cusName">Name</label> <br />
            <input
              type="text"
              name="cusName"
              id="cusName"
              value={cusName}
              onChange={handleChange}
              onBlur={validateOne}
            />
            <div className="errors">{nameVal}</div>
          </div>
              <Button handleClick={handleSubmitOTP} name={"Verify OTP"} />
            </div>}


          
        </form>
      </div>
    </div>
  );
}

export default Price;
