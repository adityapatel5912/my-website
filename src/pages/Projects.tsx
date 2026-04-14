import { motion } from "motion/react";
import { 
  Github, 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  ExternalLink, 
  Code2,
  Search,
  Zap,
  Shield
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const ALL_PROJECTS = [
  {
    title: "Neural Network from Scratch",
    description: "A pure Python implementation of a multi-layer perceptron with backpropagation, using only NumPy. Includes custom optimizers like Adam and RMSprop.",
    tech: ["Python", "NumPy", "Mathematics", "Linear Algebra"],
    github: "https://github.com",
    demo: "#",
    icon: <Cpu className="w-5 h-5" />,
    category: "AI / ML"
  },
  {
    title: "Django E-commerce API",
    description: "Robust RESTful API for a modern e-commerce platform with JWT authentication, Stripe integration, and automated email notifications.",
    tech: ["Django", "DRF", "PostgreSQL", "Redis", "Celery"],
    github: "https://github.com",
    demo: "#",
    icon: <Database className="w-5 h-5" />,
    category: "Backend"
  },
  {
    title: "Automated Web Scraper",
    description: "Distributed web crawler built with Scrapy and Selenium to monitor price changes across 50+ sites with proxy rotation and anti-bot bypass.",
    tech: ["Python", "Scrapy", "Selenium", "MongoDB", "Docker"],
    github: "https://github.com",
    demo: "#",
    icon: <Globe className="w-5 h-5" />,
    category: "Automation"
  },
  {
    title: "CLI Task Manager",
    description: "A sophisticated command-line tool for productivity, featuring SQLite persistence, rich terminal UI, and cloud sync capabilities.",
    tech: ["Python", "Rich", "SQLite", "Typer", "Click"],
    github: "https://github.com",
    demo: "#",
    icon: <Terminal className="w-5 h-5" />,
    category: "Tools"
  },
  {
    title: "Real-time Log Analyzer",
    description: "High-performance log processing engine that identifies patterns and anomalies in server logs using regex and statistical analysis.",
    tech: ["Python", "Asyncio", "Elasticsearch", "Logstash"],
    github: "https://github.com",
    demo: "#",
    icon: <Search className="w-5 h-5" />,
    category: "Infrastructure"
  },
  {
    title: "FastAPI Microservice Template",
    description: "A production-ready template for building scalable microservices with FastAPI, featuring auto-generated docs and health checks.",
    tech: ["FastAPI", "Pydantic", "Pytest", "Docker"],
    github: "https://github.com",
    demo: "#",
    icon: <Zap className="w-5 h-5" />,
    category: "Backend"
  }
];

export default function Projects() {
  return (
    <div className="pt-24 pb-24">
      <section className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tighter mb-6"
        >
          Project <span className="text-zinc-500 italic font-serif">Archive</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
        >
          A collection of my technical explorations, from deep learning experiments to production-grade backend architectures.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ALL_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
          >
            <Card className="rounded-none border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all group h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-zinc-800 rounded-none text-emerald-500 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <Badge variant="outline" className="rounded-none border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-500">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.github} className="text-zinc-500 hover:text-zinc-100 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.demo} className="text-zinc-500 hover:text-zinc-100 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-2xl group-hover:text-emerald-500 transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-zinc-400 leading-relaxed text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-900/50 px-2 py-0.5 border border-zinc-800/50">
                      {t}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 p-12 border border-zinc-800 bg-zinc-900/20 text-center"
      >
        <Code2 className="w-12 h-12 text-zinc-700 mx-auto mb-6" />
        <h3 className="text-2xl font-bold mb-4">More on GitHub</h3>
        <p className="text-zinc-500 max-w-md mx-auto mb-8">
          I'm constantly experimenting with new libraries and patterns. Check out my repositories for more scripts, snippets, and ongoing projects.
        </p>
        <Button size="lg" className="rounded-none bg-zinc-100 text-zinc-950 hover:bg-zinc-200" asChild>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github className="mr-2 w-4 h-4" /> Explore Repositories
          </a>
        </Button>
      </motion.section>
    </div>
  );
}
