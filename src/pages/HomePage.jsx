import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

export function HomePage() {
  return (
    <main>
      <header className="flex flex-col justify-center">
        <h1 className="mobile-home-title md:tablet-home-title 1440:text-start">
          TRACES
        </h1>
        <p className="text-center">Mi's Frontend Portfolio</p>
      </header>

      <div className="1440:mt-[76px] mx-auto my-12 h-full w-full">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 md:w-[670px] md:grid-cols-2 md:gap-x-6 xl:w-[1110px]">
          {projectsData.projectsInfo.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                id={project.id}
                title={project.title}
                summary={project.summary}
                image={project.image}
                tags={project.tags}
                demo={project.demo}
                github={project.github}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
