import React from "react";
import '../main.css';
interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    text?: string;
    height?: string;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
