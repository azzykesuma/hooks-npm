import React from "react";
import '../main.css';
const Button = (props) => {
    const { className = 'bg-secondary-dark-act opacity-70', children, type = 'submit', text, height = 'h-[49px]' } = props;
    return (React.createElement("button", { ...props, type: type, className: `${className} w-full ${height}  drop-shadow-form hover:drop-shadow-button-hov text-sm rounded-lg text-primary-light flex flex-row justify-center items-center px-14 backdrop-blur-[30px] hover:bg-primary-darker` }, text || children));
};
export default Button;
//# sourceMappingURL=Button.js.map