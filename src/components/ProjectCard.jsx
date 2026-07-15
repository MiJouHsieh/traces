import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ProjectCard({
  id,
  title,
  summary,
  image,
  tags,
  demo,
  github,
}) {
  return (
    <Card className="overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-1 text-sm">
          {summary}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 p-4 pt-0">
        <Button asChild size="sm">
          <a href={demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </Button>
        <Button
          asChild
          size="sm"
          variant="ghost"
          className="ml-auto"
        >
          <Link to={`/projects/${id}`}>詳情 →</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
