import React from "react";
import Navlink from "./Navlink";
import GradientButton from "./GradientButton";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  const [show, toggle] = useState(false);
  return (
    <nav className="w-full px-6 py-4 bg-[#121212] bg-opacity-65 shadow-md sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold tracking-wide bg-gradient-to-tr from-[#0080FF] to-[#0022E4] inline-block text-transparent bg-clip-text">
          @Azfasa15
        </div>

        <div className="hidden md:flex gap-8 items-center">
          <Navlink href="#hero">Home</Navlink>
          <Navlink href="#services">Services</Navlink>
          <Navlink href="#about">About Me</Navlink>
          <Navlink href="#projects">Portofolio</Navlink>
          <Navlink href="#contact">Contact Me</Navlink>
        </div>

        <div className="hidden md:block">
          <GradientButton href="https://wa.me/6285156105763">
            Hire Me
          </GradientButton>
        </div>

        <div className="md:hidden">
          <button className="focus:outline-none" onClick={() => toggle(!show)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={"md:hidden mt-4 " + (show ? "" : "hidden")}>
        <div className="flex flex-col gap-4">
          <Navlink href="#hero">Home</Navlink>
          <Navlink href="#services">Services</Navlink>
          <Navlink href="#about">About Me</Navlink>
          <Navlink href="#projects">Portofolio</Navlink>
          <Navlink href="#contact">Contact Me</Navlink>
          <GradientButton href="https://wa.me/6285156105763">
            Hire Me
          </GradientButton>
        </div>
      </div>
    </nav>
  );
}
