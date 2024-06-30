import React from "react";
const renderButton = (text, onClick, icon, isWhatsapp = false) => {
  let buttonClass =
    "bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold py-3 px-6 flex items-center justify-center focus:outline-none focus:shadow-outline";
  if (isWhatsapp) {
    buttonClass =
      "bg-green-400 hover:bg-green-500 rounded-full text-white font-bold py-3 px-6 flex items-center justify-center focus:outline-none focus:shadow-outline";
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon && React.createElement(icon, { className: "mr-2" })}
      {text}
    </button>
  );
};
export default renderButton;
