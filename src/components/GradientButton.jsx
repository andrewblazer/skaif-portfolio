
const GradientButton = ({
    children,
    type = "button", // Defaults to "button" if not specified
    className = "",
    ...attributes // Capture additional props like id, style, etc.
}) => {
    const baseClassName = "px-10 py-3 bg-gradient-to-tr from-[#0080FF] to-[#0022E4] rounded-md text-white h-fit transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:from-[#0070e0] hover:to-[#001bb3]";

    const combinedClassName = `${baseClassName} ${className}`;
    const isURL = "href" in attributes;


    if (isURL) {
        return (
            <a {...attributes} className={combinedClassName} >
                {children}
            </a>
        );
    }

    return (
        <button
            {...attributes}
            className={combinedClassName}
        >
            {children}
        </button>
    );
};

export default GradientButton;
