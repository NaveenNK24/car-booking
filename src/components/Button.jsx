import React from "react";

function Button(props) {
  return (
    <div className="form-input">
      <button type="button" onClick={props.handleClick}>
        {props.name}
      </button>
    </div>
  );
}

export default Button;
