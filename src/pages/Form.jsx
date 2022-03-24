import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Topic from "../components/Topic";
import "./Form.css";

function Form() {
  const [values, setValues] = useState({
    source: "",
    destination: "",
    carType: "Hatchback",
    totalMembers: 0,
  });

  const [validations, setValidations] = useState({
    source: "",
    destination: "",
    totalMembers: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  let navigate = useNavigate();

  const validateAll = () => {
    const { source, destination, totalMembers } = values;
    const validations = { source: "", destination: "", totalMembers: "" };
    let isValid = true;

    if (!source) {
      validations.source = "source is required";
      isValid = false;
    }

    if (!destination) {
      validations.destination = "destination is required";
      isValid = false;
    }

    if (!totalMembers) {
      validations.totalMembers = "totalMembers is required";
      isValid = false;
    }
    if (totalMembers && (totalMembers >=0 && totalMembers <= 6)) {
      validations.totalMembers = "total members between 0 to 6";
      isValid = false
    }

    if (!isValid) {
      setValidations(validations);
    }

    return isValid;
  };

  const validateOne = (e) => {
    const { name } = e.target;
    const value = values[name];
    let message = "";

    if (!value) {
      message = `${name} is required`;
    }

    if (value && name === 'totalMembers' && (value >=1 && value <= 6)) {
      message = 'total members between 0 to 6'
    }

    setValidations({ ...validations, [name]: message });
  };

  const handleSubmit = () => {
    const isValid = validateAll();

    if (!isValid) {
      return false;
    }
    console.log(values);
    navigate("/pricing");
  };
  //
  const { source, destination, totalMembers } = values;

  const {
    source: sourceVal,
    destination: destinationVal,
    totalMembers: totalMembersVal,
  } = validations;

  return (
    <div className="">
      <Topic name={"Place your bid (1/4 step)"} />
      <div className="container">
        <form action="" className="bidForm ">
          <div className="form-input">
            <label htmlFor="source">Source</label> <br />
            <input
              type="text"
              name="source"
              id="source"
              value={source}
              onChange={handleChange}
              onBlur={validateOne}
            />
            <div className="errors">{sourceVal}</div>
          </div>
          <div className="form-input">
            <label htmlFor="destination">Destination</label> <br />
            <input
              type="text"
              name="destination"
              id="destination"
              value={destination}
              onChange={handleChange}
              onBlur={validateOne}
            />
            <div className="errors">{destinationVal}</div>
          </div>
          <div className="form-input">
            <label htmlFor="Car Type">Car Type</label> <br />
            <select
              name="carType"
              id="cars"
              onChange={handleChange}
              onBlur={validateOne}
            >
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="total_nos">Total Members</label> <br />
            <input
              type="number"
              name="totalMembers"
              id="totalMembers"
              value={totalMembers}
              onChange={handleChange}
              onBlur={validateOne}
            />
            <div className="errors">{totalMembersVal}</div>
          </div>
          <Button handleClick={handleSubmit} name={"Enter Bid Details"} />
        </form>
      </div>
    </div>
  );
}

export default Form;
