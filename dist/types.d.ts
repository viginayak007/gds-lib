import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

interface InputProps {
    label: string;
}
declare const Input: (props: InputProps) => React.JSX.Element;

export { Button, Input };
