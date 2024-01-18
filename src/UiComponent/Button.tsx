import React from "react";
import '../main.css';

interface ButtonProps {
    className?: string,
    children?: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    text?: string,
    height?: string,
}

const Button = (props:ButtonProps) => {

const {
    className = 'bg-secondary-dark-act opacity-70', 
    children, 
    type = 'submit', 
    text,
    height = 'h-[49px]'
} = props;

    return ( 
        <button {...props} type={type} className ={`${className} w-full ${height}  drop-shadow-form hover:drop-shadow-button-hov text-sm rounded-lg text-primary-light flex flex-row justify-center items-center px-14 backdrop-blur-[30px] hover:bg-primary-darker`}>
            {text || children}
        </button>
    )
}


export default Button;