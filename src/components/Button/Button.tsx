import React from "react";
import "../../govuk-frontend.min.css";
export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button type="submit" className="govuk-button" data-module="govuk-button">
    Save and continue THIS IS GDS BUTTON{props.label}
</button>
};

export default Button;