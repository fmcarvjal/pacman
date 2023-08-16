import React from "react";

const ButtonComponent = ({ color, position, handleClick, imageUrl, buttonText, isVisible,opacidad }) => {
  return (
    true && (
      <button
       /* className={`button ${color === "Verde" ? "button-green" : "button-yellow"}`}*/
      className="button"
        style={{ transform: `translateY(${position}px)`, opacity:opacidad, backgroundColor:color}}
        onClick={handleClick}
      >
        <img className="button-image" src={imageUrl} alt="Button" />
        <span>{buttonText}</span>
      </button>
    )
  );
};



export default ButtonComponent;
