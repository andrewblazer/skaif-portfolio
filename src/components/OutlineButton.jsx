import React from "react";

const OutlineButton = ({
  children,
  type = "button", // Defaults to "button" if not specified
  className = "",
  ...attributes // Capture additional props like id, style, etc.
}) => {
  const baseClassName =
    "ease-in-out  duration-300 px-[40px] py-[12px] hover:shadow-lg hover:outline-none bg-transparent hover:bg-gradient-to-bl hover:from-gray-500 hover:to-gray-700 outline-[#959595] outline outline-2 rounded-md  text-white h-fit";

  const combinedClassName = `${baseClassName} ${className}`;
  const isURL = "href" in attributes;

  if (isURL) {
    return (
      <a {...attributes} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button {...attributes} className={combinedClassName}>
      {children}
    </button>
  );
};

export default OutlineButton;
