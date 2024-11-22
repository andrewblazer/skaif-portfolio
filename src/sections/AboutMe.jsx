import React from "react";
import GradientButton from "../components/GradientButton";
import OutlineButton from "../components/OutlineButton";
import ProfilePhoto from "../assets/Azfa-hero-image.png";

export default function AboutMe() {
  return (
    <section className="my-10 flex flex-col items-center  px-4 md:px-8 lg:px-16">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          About Me
        </h1>
        <h3 className="text-gray-400 text-center">
          Web Developer & Software Engineer
        </h3>
      </div>

      {/* Content Section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-10 max-w-screen-lg">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center">
          <div className="bg-white bg-opacity-5 -mt-10 rounded-full rounded-b-xl flex justify-center items-end aspect-square max-w-xs">
            <img
              src={ProfilePhoto}
              alt="Foto Portrait Muhammad Azfa"
              className="w-3/4 md:w-4/5 scale-x-[-1] transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex-grow w-full md:w-3/5 flex flex-col gap-5 text-gray-400 text-base md:text-lg px-2 md:px-5 text-justify tracking-wide leading-7">
          <p>
            I'm Azfa Salman, a passionate IT enthusiast with a love for
            continuous learning. I primarily love being a backend developer,
            contributing to team projects with a balanced approach, evaluating
            the best solutions within each project's scope and limitations. My
            diverse background brings a well-rounded perspective, combining
            enthusiasm for technology with practical experience.
          </p>
          <p>
            Coding, for me, is both art and science—a creative endeavor where
            each keystroke adds structure, elegance, and purpose. My goal is to
            tackle challenges, simplify complexity, and transform abstract ideas
            into concrete digital solutions. I aim to provide clients with not
            only cutting-edge technology but also a collaborative journey that
            ensures their vision is brought to life seamlessly.
          </p>
        </div>
      </div>
      {/* Skill Percentage */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full justify-around">
        <div className="flex flex-col gap-2 justify-center items-center text-center my-12">
          <svg
            className="w-full"
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
                <stop stop-color="#0080FF" />
                <stop offset="1" stop-color="#0022E4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="font-bold text-transparent text-3xl bg-gradient-to-tr from-[#0080FF] to-[#0022E4] bg-clip-text">
            100%
          </p>
          <p className="text-gray-200 text-xl">HTML</p>
        </div>
        <div className="flex flex-col gap-2 justify-center text-center">
          <svg
            className="w-full"
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
                <stop stop-color="#0080FF" />
                <stop offset="1" stop-color="#0022E4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="font-bold text-transparent text-3xl bg-gradient-to-tr from-[#0080FF] to-[#0022E4] bg-clip-text">
            100%
          </p>
          <p className="text-gray-200 text-xl">HTML</p>
        </div>
        <div className="flex flex-col gap-2 justify-center text-center">
          <svg
            className="w-full"
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
                <stop stop-color="#0080FF" />
                <stop offset="1" stop-color="#0022E4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="font-bold text-transparent text-3xl bg-gradient-to-tr from-[#0080FF] to-[#0022E4] bg-clip-text">
            100%
          </p>
          <p className="text-gray-200 text-xl">HTML</p>
        </div>
        <div className="flex flex-col gap-2 justify-center text-center">
          <svg
            className="w-full"
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
                <stop stop-color="#0080FF" />
                <stop offset="1" stop-color="#0022E4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="font-bold text-transparent text-3xl bg-gradient-to-tr from-[#0080FF] to-[#0022E4] bg-clip-text">
            100%
          </p>
          <p className="text-gray-200 text-xl">HTML</p>
        </div>
        <div className="flex flex-col gap-2 justify-center text-center">
          <svg
            className="w-full"
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
                <stop stop-color="#0080FF" />
                <stop offset="1" stop-color="#0022E4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="font-bold text-transparent text-3xl bg-gradient-to-tr from-[#0080FF] to-[#0022E4] bg-clip-text">
            100%
          </p>
          <p className="text-gray-200 text-xl">HTML</p>
        </div>
      </div>
    </section>
  );
}
