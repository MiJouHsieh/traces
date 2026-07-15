import { useParams, Link } from "react-router-dom";
import projectsData from "@/data/projects.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData.projectsInfo.find(
    (p) => p.id === id)
  
  if (!project) {
    return (<div>找不到這個專案</div>)
  }

  const problems = project.notes?.problems ?? []
  const isAccordionLayout = problems.length > 2;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      {/* Hero */}
      <section className="mb-10">
        <p className="text-muted-foreground text-sm">
          {project.category}
        </p>
        <h1 className="mt-1 text-3xl font-bold">
          {project.title}
        </h1>
        <p className="text-muted-foreground mt-3 leading-relaxed">
          {project.summary}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <Button asChild size="sm">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Highlights */}
      {project.highlights?.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">
            Highlights
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.highlights.map((point, i) => (
              <Card key={i}>
                <CardContent className="text-muted-foreground p-4 text-sm leading-relaxed">
                  {point}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Problem & Solution */}
      {problems.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-1 text-xl font-semibold">
            Problems and solutions
          </h2>
          <p className="text-muted-foreground mb-4 text-sm">
            {problems.length} 個開發過程中遇到的問題
          </p>

          {isAccordionLayout ? (
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {problems.map((p, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{p.title}</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm leading-relaxed">
                    <p>
                      <span className="text-destructive mr-4 font-medium">
                        問題
                      </span>
                      {p.problem}
                    </p>
                    <p>
                      <span className="mr-4 font-medium text-green-700">
                        解法
                      </span>
                      {p.solution}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="space-y-3">
              {problems.map((p, i) => (
                <Card key={i}>
                  <CardContent className="space-y-2 p-4 text-sm leading-relaxed">
                    <h3 className="font-medium">{p.title}</h3>
                    <p>
                      <span className="text-destructive mr-4 font-medium">
                        問題
                      </span>
                      {p.problem}
                    </p>
                    <p>
                      <span className="mr-4 font-medium text-green-700">
                        解法
                      </span>
                      {p.solution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      )}

      <Link
        to="/"
        className="text-muted-foreground text-sm hover:underline"
      >
        ← 回首頁
      </Link>
    </main>
  );
}
