import React from "react";
import "../../govuk-frontend.min.css";
export interface InputProps {
  label: string;
}

const Input = (props: InputProps) => {
  return <div>
    <label className="govuk-label">{props.label}</label>
    <input className="govuk-input" ></input>;
  </div> 
    
};

export default Input;