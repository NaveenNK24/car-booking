import React from "react";
import Button from "../components/Button";
import Topic from "../components/Topic";

function Submit() {
  const handleSubmit = () => {};
  return (
    <div>
      <Topic name={"Place your bid (4/4 step)"} />

      <div className="container">
        <form action="" className="bidForm ">
          <div className="form-input">
            <label htmlFor="source">Bid Details</label> <br />
            {/* <input type="text" name="source" id="source" /> */}
            <h1>Data</h1>
          </div>
          <Button handleClick={handleSubmit} name={"Submit Bidding"} />
        </form>
      </div>
    </div>
  );
}

export default Submit;
