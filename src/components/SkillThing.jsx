import React from "react";

export default function SkillThing({ count, children }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center my-12">
      <div className="relative w-[131px] h-[130px] flex justify-center items-center">
        <div className="absolute text-white font-bold text-sm">{children}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="131"
          height="130"
          viewBox="0 0 131 130"
          fill="none"
        >
          <path
            d="M130.25 65C130.25 100.899 101.149 130 65.25 130C29.3515 130 0.25 100.899 0.25 65C0.25 29.1015 29.3515 0 65.25 0C101.149 0 130.25 29.1015 130.25 65ZM13.25 65C13.25 93.7188 36.5312 117 65.25 117C93.9688 117 117.25 93.7188 117.25 65C117.25 36.2812 93.9688 13 65.25 13C36.5312 13 13.25 36.2812 13.25 65Z"
            fill="url(#paint0_linear_1_183)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_183"
              x1="3.65116"
              y1="12.2641"
              x2="130.856"
              y2="21.9712"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0080FF" />
              <stop offset="1" stopColor="#0022E4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="text-gray-200 text-xl">{count} Projects</p>
    </div>
  );
}
