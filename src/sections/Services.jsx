import React from "react";
import ServiceCard from "../components/ServiceCard";
import Headings from "../components/Headings";

import frontend from "../assets/Web.png";
import backend from "../assets/Backend.png";
import mobile from "../assets/Mobile.png";
import devops from "../assets/Devops.png";
import ui from "../assets/UI.png";
import re from "../assets/RE.png";

export default function Services() {
  return (
    <section className="flex flex-col items-center px-4 md:px-6 lg:px-8">
      {/* Headings */}
      <Headings
        title="Services"
        description="Provide best service at the best time possible."
      />

      {/* Services Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 max-w-screen-lg w-full">
        <image />
        <ServiceCard
          title="Frontend Development"
          description="Beginner Javascript Framework like React & Vue. Implemented something."
          logo={frontend}
        />
        <ServiceCard
          title="Backend Development"
          description="Build scalable APIs and services using modern backend technologies."
          logo={backend}
        />
        <ServiceCard
          title="Mobile Development"
          description="Create responsive and high-performing mobile apps with React Native or Flutter."
          logo={mobile}
        />
        <ServiceCard
          title="DevOps"
          description="Streamline your workflows with CI/CD pipelines and infrastructure as code."
          logo={devops}
        />
        <ServiceCard
          title="UI Design"
          description="Design user-friendly and visually appealing interfaces using Figma."
          logo={ui}
        />
        <ServiceCard
          title="Reverse Engineering"
          description="Analyze and reconstruct software systems for understanding or improvement."
          logo={re}
        />
      </div>
    </section>
  );
}
