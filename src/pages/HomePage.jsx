import { ProjectCard } from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";


export function HomePage() {
  return (
    <main>
      <h1 className="mobile-home-title md:tablet-home-title 1440:text-start">TRACES — Frontend Portfolio</h1>
      <div className="1440:mt-[76px] mx-auto mt-14 mb-8 h-full w-full">
        <div className="1440:gap-y-6 1440:flex-col 1440:w-[1110px] mx-auto flex w-full flex-wrap justify-center gap-10 md:w-[670px] md:justify-start md:gap-x-4">
          {projectsData.projectsInfo.map((project) => {
            return (
              <ProjectCard
                key={project.title}
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
