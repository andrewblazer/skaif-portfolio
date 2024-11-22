import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="scroll-m-24 my-10 flex flex-col items-center  px-4 md:px-8 lg:px-16">
      {/* Title Section */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          About Me
        </h1>
        <h3 className="text-gray-400 text-center">
          Web Developer & Software Engineer
        </h3>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-10 max-w-screen-lg">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center">
          <div className="bg-white bg-opacity-5 -mt-10 rounded-full rounded-b-xl flex justify-center items-end aspect-square max-w-xs">
            <div className="bg-cover bg-hero h-[65vh] w-[100vw] scale-x-[-1]"></div>
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
    </section>
  );
}
