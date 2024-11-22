import React from 'react';

export default function Navlink({ children }) {
    return (
        <a
            className="
                font-semibold 
                text-lg lg:text-xl 
                text-transparent bg-clip-text 
                bg-[#959595] 
                cursor-pointer 
                hover:bg-gradient-to-tr hover:from-[#0080FF] hover:to-[#0022E4] 
                inline-flex 
                duration-500 
                hover:scale-105 
                transition-all ease-in-out
                px-2 sm:px-4 py-1 sm:py-2
            "
        >
            {children}
        </a>
    );
}
