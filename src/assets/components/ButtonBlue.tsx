import React from "react";

interface ButtonPinkProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonBlue = ({onClick, children}: ButtonPinkProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-black flex border-2 border-solid border-turquoise items-center justify-center text-white font-bold  px-12 h-12 rounded-full hover:bg-turquoise"
    >
      {children}
    </button>
  );
};
export default ButtonBlue;
