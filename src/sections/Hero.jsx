import React from "react";
import GradientButton from "../components/GradientButton";
import OutlineButton from "../components/OutlineButton";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse flex-grow lg:flex-row justify-between items-center lg:items-start p-5 lg:p-10"
    >
      <div
        id="left"
        className="w-full lg:w-1/2 flex flex-col gap-3 text-center lg:text-left"
      >
        <div id="top" className="flex flex-col gap-1">
          <h3 className="text-[18px] lg:text-[24px]">Hi! I Am</h3>
          <h2 className="text-[20px] lg:text-[28px]">Muhammad Azfa</h2>
          <h1 className="text-[40px] lg:text-[70px] bg-gradient-to-tr from-[#0080FF] to-[#0022E4] inline-block text-transparent bg-clip-text font-bold">
            Software Engineer
          </h1>
          <p className="text-gray-200 text-lg tracking-wider py-2 leading-7">
          And a lifelong learner blending technical expertise with a balanced, solution-driven mindset.
          </p>
          <div className="flex gap-2 justify-center lg:justify-start">
            <a
              href="https://www.instagram.com/rodeobazaar124"
              target="_blank"
              className="bg-white bg-opacity-5 border-[#575757] border-[0.7px] rounded-full flex items-center justify-center w-12 h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M7.8 2.5H16.2C19.4 2.5 22 5.1 22 8.3V16.7C22 18.2383 21.3889 19.7135 20.3012 20.8012C19.2135 21.8889 17.7383 22.5 16.2 22.5H7.8C4.6 22.5 2 19.9 2 16.7V8.3C2 6.76174 2.61107 5.28649 3.69878 4.19878C4.78649 3.11107 6.26174 2.5 7.8 2.5ZM7.6 4.5C6.64522 4.5 5.72955 4.87928 5.05442 5.55442C4.37928 6.22955 4 7.14522 4 8.1V16.9C4 18.89 5.61 20.5 7.6 20.5H16.4C17.3548 20.5 18.2705 20.1207 18.9456 19.4456C19.6207 18.7705 20 17.8548 20 16.9V8.1C20 6.11 18.39 4.5 16.4 4.5H7.6ZM17.25 6C17.5815 6 17.8995 6.1317 18.1339 6.36612C18.3683 6.60054 18.5 6.91848 18.5 7.25C18.5 7.58152 18.3683 7.89946 18.1339 8.13388C17.8995 8.3683 17.5815 8.5 17.25 8.5C16.9185 8.5 16.6005 8.3683 16.3661 8.13388C16.1317 7.89946 16 7.58152 16 7.25C16 6.91848 16.1317 6.60054 16.3661 6.36612C16.6005 6.1317 16.9185 6 17.25 6ZM12 7.5C13.3261 7.5 14.5979 8.02678 15.5355 8.96447C16.4732 9.90215 17 11.1739 17 12.5C17 13.8261 16.4732 15.0979 15.5355 16.0355C14.5979 16.9732 13.3261 17.5 12 17.5C10.6739 17.5 9.40215 16.9732 8.46447 16.0355C7.52678 15.0979 7 13.8261 7 12.5C7 11.1739 7.52678 9.90215 8.46447 8.96447C9.40215 8.02678 10.6739 7.5 12 7.5ZM12 9.5C11.2044 9.5 10.4413 9.81607 9.87868 10.3787C9.31607 10.9413 9 11.7044 9 12.5C9 13.2956 9.31607 14.0587 9.87868 14.6213C10.4413 15.1839 11.2044 15.5 12 15.5C12.7956 15.5 13.5587 15.1839 14.1213 14.6213C14.6839 14.0587 15 13.2956 15 12.5C15 11.7044 14.6839 10.9413 14.1213 10.3787C13.5587 9.81607 12.7956 9.5 12 9.5Z"
                  fill="#BABABA"
                />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/rodeobazaar124"
              target="_blank"
              className="bg-white bg-opacity-5 border-[#575757] border-[0.7px] rounded-full flex items-center justify-center w-12 h-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <g clipPath="url(#clip0_1_71)">
                  <path
                    d="M18 3.5C18.7956 3.5 19.5587 3.81607 20.1213 4.37868C20.6839 4.94129 21 5.70435 21 6.5V18.5C21 19.2956 20.6839 20.0587 20.1213 20.6213C19.5587 21.1839 18.7956 21.5 18 21.5H6C5.20435 21.5 4.44129 21.1839 3.87868 20.6213C3.31607 20.0587 3 19.2956 3 18.5V6.5C3 5.70435 3.31607 4.94129 3.87868 4.37868C4.44129 3.81607 5.20435 3.5 6 3.5H18ZM18 5.5H6C5.73478 5.5 5.48043 5.60536 5.29289 5.79289C5.10536 5.98043 5 6.23478 5 6.5V18.5C5 18.7652 5.10536 19.0196 5.29289 19.2071C5.48043 19.3946 5.73478 19.5 6 19.5H18C18.2652 19.5 18.5196 19.3946 18.7071 19.2071C18.8946 19.0196 19 18.7652 19 18.5V6.5C19 6.23478 18.8946 5.98043 18.7071 5.79289C18.5196 5.60536 18.2652 5.5 18 5.5ZM8 10.5C8.24493 10.5 8.48134 10.59 8.66437 10.7527C8.84741 10.9155 8.96434 11.1397 8.993 11.383L9 11.5V16.5C8.99972 16.7549 8.90212 17 8.72715 17.1854C8.55218 17.3707 8.31305 17.4822 8.05861 17.4972C7.80416 17.5121 7.55362 17.4293 7.35817 17.2657C7.16271 17.1021 7.0371 16.8701 7.007 16.617L7 16.5V11.5C7 11.2348 7.10536 10.9804 7.29289 10.7929C7.48043 10.6054 7.73478 10.5 8 10.5ZM11 9.5C11.2342 9.49996 11.461 9.58213 11.6408 9.73216C11.8206 9.8822 11.9421 10.0906 11.984 10.321C12.1852 10.2043 12.3933 10.0998 12.607 10.008C13.274 9.723 14.273 9.566 15.175 9.849C15.648 9.999 16.123 10.279 16.475 10.756C16.79 11.181 16.96 11.698 16.994 12.279L17 12.5V16.5C16.9997 16.7549 16.9021 17 16.7272 17.1854C16.5522 17.3707 16.313 17.4822 16.0586 17.4972C15.8042 17.5121 15.5536 17.4293 15.3582 17.2657C15.1627 17.1021 15.0371 16.8701 15.007 16.617L15 16.5V12.5C15 12.17 14.92 12.016 14.868 11.945C14.7934 11.8522 14.6905 11.7862 14.575 11.757C14.227 11.647 13.726 11.705 13.393 11.847C12.893 12.061 12.435 12.397 12.123 12.708L12 12.84V16.5C11.9997 16.7549 11.9021 17 11.7272 17.1854C11.5522 17.3707 11.313 17.4822 11.0586 17.4972C10.8042 17.5121 10.5536 17.4293 10.3582 17.2657C10.1627 17.1021 10.0371 16.8701 10.007 16.617L10 16.5V10.5C10 10.2348 10.1054 9.98043 10.2929 9.79289C10.4804 9.60536 10.7348 9.5 11 9.5ZM8 7.5C8.26522 7.5 8.51957 7.60536 8.70711 7.79289C8.89464 7.98043 9 8.23478 9 8.5C9 8.76522 8.89464 9.01957 8.70711 9.20711C8.51957 9.39464 8.26522 9.5 8 9.5C7.73478 9.5 7.48043 9.39464 7.29289 9.20711C7.10536 9.01957 7 8.76522 7 8.5C7 8.23478 7.10536 7.98043 7.29289 7.79289C7.48043 7.60536 7.73478 7.5 8 7.5Z"
                    fill="#BABABA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_71">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
        <div id="center" className="flex flex-col lg:flex-row gap-5 mt-10">
          <GradientButton href="https://wa.me/6285156105763">
            Hire Me
          </GradientButton>
          <OutlineButton
            href="/src/assets/CV Muhammad Azfa.pdf"
            download="Azfa.pdf"
          >
            Download CV
          </OutlineButton>
        </div>
        <div id="bottom" className="mt-5">
          <div className="bg-white bg-opacity-5 grid grid-cols-3 w-fit mx-auto lg:mx-0 p-4 rounded-md">
            <div className="border-r-2 px-4 flex flex-col items-center justify-center border-[#959595]">
              <p className="text-[#0080FF] text-xl lg:text-2xl font-bold tracking-wide">
                5+
              </p>
              <p className="text-sm lg:text-base">Experiences</p>
            </div>
            <div className="border-r-2 px-4 flex flex-col items-center justify-center border-[#959595]">
              <p className="text-[#0080FF] text-xl lg:text-2xl font-bold tracking-wide">
                10+
              </p>
              <p className="text-sm lg:text-base">Projects</p>
            </div>
            <div className="px-4 flex flex-col items-center justify-center">
              <p className="text-[#0080FF] text-xl lg:text-2xl font-bold tracking-wide">
                4+
              </p>
              <p className="text-sm lg:text-base">Clients</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="right"
        className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0"
      >
        <div className="bg-white bg-opacity-5 rounded-full flex justify-center items-center">
          <div className="bg-hero bg-no-repeat aspect-square min-w-full bg-cover h-[75vh]">
            &nbsp;
          </div>
          {/* bg-hero is my formal photo    theme: {
    extend: {
      backgroundImage: {
        "hero": "url(/src/assets/Azfa-hero-image.png)"
      }
    },
  }, */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
