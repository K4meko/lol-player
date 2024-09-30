import React from "react";

interface ButtonPinkProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const ButtonPink = ({onClick, children}: ButtonPinkProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-hotPink flex items-center justify-center text-white font-bold px-12 h-12 rounded-full  text-base leading-normal"
    >
      {children}
    </button>
  );
};
export default ButtonPink;
