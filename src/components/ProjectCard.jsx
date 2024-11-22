export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      className="transition-all duration-500 flex flex-col items-center w-full"
    >
      <img
        src={project.thumb}
        alt={project.name}
        className="rounded-t-[2rem] w-full object-cover"
      />
      {/* Project Info */}
      <div className="bg-gray-900 text-base md:text-lg w-full flex justify-between items-center py-3 px-4 rounded-b-[2rem]">
        <p className="truncate">{project.name}</p>
        <p className="text-gray-300 truncate">{project.categories}</p>
      </div>
    </a>
  );
}
