import React, { useEffect, useState } from 'react';
import { projects } from '../data/project';
import ProjectCard from '../components/ProjectCard';
import CategoryBtn from '../components/CategoryBtn';
import Headings from '../components/Headings';

const categories = ['All', ...new Set(projects.map((item) => item.categories))];

export default function Projects() {
    const [viewedProject, setviewedProject] = useState(projects);
    const [activeTabs, setactiveTabs] = useState('All');

    useEffect(() => {
        const filterProjects = (categories) => {
            if (categories === 'All') {
                setviewedProject(projects);
            } else {
                setviewedProject(
                    projects.filter(
                        (item) =>
                            item.categories.toLowerCase() === categories.toLowerCase()
                    )
                );
            }
        };
        filterProjects(activeTabs);
    }, [activeTabs]);

    return (
        <section className="my-20 md:my-40 px-4 md:px-8 lg:px-16 flex flex-col items-center">
            {/* Headings */}
            <div className="flex flex-col items-center gap-4 mb-10">
                <Headings title="Portfolio" />
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((item, index) => (
                        <CategoryBtn
                            key={index}
                            activeTabs={activeTabs}
                            callback={() => setactiveTabs(item)}
                            item={item}
                        />
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl">
                {viewedProject.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))}
            </div>
        </section>
    );
}
