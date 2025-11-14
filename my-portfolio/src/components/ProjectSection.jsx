import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Data-Driven Gaming Puzzle",
        description:
          "I developed this as my first web development project in 2022 as part of an assignment for a company. It’s an interactive gaming puzzle designed to enhance user engagement through real-time performance-based difficulty adjustments. The project uses Python for backend processing and HTML, CSS, JavaScript, and PHP for the frontend and server-side logic.",
        image: "/Projects/gaming.jpg",
        tags: ["Python", "HTML", "CSS", "JavaScript", "PHP"],
        demoUrl: "#",
        githubUrl: "#",
      },
      {
        id: 2,
        title: "Personal Portfolio Website with Analytics",
        description:
          "A personal portfolio website built using React and Tailwind CSS to showcase academic and technical projects. Integrated a Python-based analytics dashboard to monitor visitor metrics and visualized engagement data using Matplotlib and Seaborn for insights.",
        image: "/Projects/portfolio.png",
        tags: ["React", "TailwindCSS", "Python", "Matplotlib", "Seaborn"],
        demoUrl: "#",
        githubUrl: "#",
      }
      ,
      {
        id: 3,
        title: "Enhanced E-Learning Platform with Data Analytics",
        description:
          "A published full-stack e-learning platform built to improve accessibility and structure of digital learning materials. Includes features such as notes, assignments, and assessments, with integrated data analytics to identify user behavior trends and enhance content usability.",
        image: "/Projects/e-learning.png",
        tags: ["React", "Node.js", "Express.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#",
      }
      ,
    {
      id: 4,
      title: "Movie Recommendation System (Content-Based Filtering)",
      description:
        "A movie recommendation system that suggests similar movies based on genre using content-based filtering. Implemented TF-IDF for feature vectorization and cosine similarity to compute recommendations.",
      image: "/Projects/movies.jpg",
      tags: ["Python", "Pandas", "TF-IDF", "Cosine Similarity", "Machine Learning"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];
  

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/purna5240"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};