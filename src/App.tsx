/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Terminal, 
  Database, 
  Code2, 
  Cpu, 
  Globe, 
  Mail, 
  ExternalLink, 
  Layers, 
  ChevronRight,
  Braces
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PROJECTS = [
  {
    title: "Neural Network from Scratch",
    description: "A pure Python implementation of a multi-layer perceptron with backpropagation, using only NumPy.",
    tech: ["Python", "NumPy", "Mathematics"],
    github: "https://github.com",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    title: "Django E-commerce API",
    description: "Robust RESTful API for a modern e-commerce platform with JWT authentication and Stripe integration.",
    tech: ["Django", "DRF", "PostgreSQL", "Redis"],
    github: "https://github.com",
    icon: <Database className="w-5 h-5" />
  },
  {
    title: "Automated Web Scraper",
    description: "Distributed web crawler built with Scrapy and Selenium to monitor price changes across 50+ sites.",
    tech: ["Python", "Scrapy", "Selenium", "MongoDB"],
    github: "https://github.com",
    icon: <Globe className="w-5 h-5" />
  },
  {
    title: "CLI Task Manager",
    description: "A sophisticated command-line tool for productivity, featuring SQLite persistence and rich terminal UI.",
    tech: ["Python", "Rich", "SQLite", "Typer"],
    github: "https://github.com",
    icon: <Terminal className="w-5 h-5" />
  }
];

const SKILLS = {
  backend: ["Python (Core)", "Django", "FastAPI", "Flask", "PostgreSQL", "Redis", "Celery"],
  data: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "TensorFlow"],
  tools: ["Git", "Docker", "Linux", "AWS", "Nginx", "Postman"]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-100 selection:text-zinc-950">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Hero Section */}
        <section className="mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-mono text-zinc-400 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Internships
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Python Developer <br />
            <span className="text-zinc-500 italic font-serif">& Student</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed"
          >
            Building robust backend systems and exploring the depths of data science. 
            Passionate about clean code, automation, and solving complex problems with Python.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="rounded-none bg-zinc-100 text-zinc-950 hover:bg-zinc-200">
              <Github className="mr-2 w-4 h-4" /> View GitHub
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-zinc-800 hover:bg-zinc-900">
              <Mail className="mr-2 w-4 h-4" /> Contact Me
            </Button>
          </motion.div>
        </section>

        {/* Terminal Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
                <div className="w-3 h-3 rounded-full bg-zinc-800" />
              </div>
              <div className="flex-1 text-center text-xs font-mono text-zinc-500">bash — portfolio.py</div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
              <div className="flex gap-4 mb-2">
                <span className="text-emerald-500">➜</span>
                <span className="text-zinc-300">python3 portfolio.py --stats</span>
              </div>
              <div className="text-zinc-500 mb-4">
                [INFO] Initializing developer profile... <br />
                [INFO] Loading skills and experience...
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-zinc-300">
                <div>
                  <div className="text-emerald-500 mb-2 font-bold underline"># Core Competencies</div>
                  <ul className="space-y-1">
                    <li>• Backend Architecture</li>
                    <li>• RESTful API Design</li>
                    <li>• Data Analysis & Viz</li>
                    <li>• Scripting & Automation</li>
                  </ul>
                </div>
                <div>
                  <div className="text-emerald-500 mb-2 font-bold underline"># Academic Status</div>
                  <ul className="space-y-1">
                    <li>• B.S. Computer Science</li>
                    <li>• Expected Graduation: 2026</li>
                    <li>• GPA: 3.9/4.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Technical Stack</h2>
            <Separator className="flex-1 bg-zinc-800" />
          </div>

          <Tabs defaultValue="backend" className="w-full">
            <TabsList className="bg-zinc-900 border border-zinc-800 p-1 rounded-none mb-8">
              <TabsTrigger value="backend" className="rounded-none data-[state=active]:bg-zinc-800">Backend</TabsTrigger>
              <TabsTrigger value="data" className="rounded-none data-[state=active]:bg-zinc-800">Data Science</TabsTrigger>
              <TabsTrigger value="tools" className="rounded-none data-[state=active]:bg-zinc-800">Tools & Devops</TabsTrigger>
            </TabsList>
            
            {Object.entries(SKILLS).map(([key, skills]) => (
              <TabsContent key={key} value={key}>
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {skills.map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge variant="secondary" className="px-4 py-2 rounded-none bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-100 transition-colors">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Projects Section */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Selected Works</h2>
            <Separator className="flex-1 bg-zinc-800" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="rounded-none border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-all group cursor-default h-full flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-zinc-800 rounded-none text-emerald-500 group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <a href={project.github} className="text-zinc-500 hover:text-zinc-100 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                    <CardTitle className="text-xl group-hover:text-emerald-500 transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-zinc-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GitHub Contribution Graph Mockup */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">GitHub Activity</h2>
            <Separator className="flex-1 bg-zinc-800" />
          </div>

          <Card className="rounded-none border-zinc-800 bg-zinc-900/30 p-6 overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold">@python_dev_student</div>
                  <div className="text-xs text-zinc-500 font-mono">1,240 contributions in the last year</div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-none border-zinc-800">
                Follow on GitHub
              </Button>
            </div>

            <div className="grid grid-cols-7 md:grid-cols-12 lg:grid-cols-24 gap-1.5">
              {Array.from({ length: 168 }).map((_, i) => {
                const intensity = Math.random();
                let color = "bg-zinc-900";
                if (intensity > 0.8) color = "bg-emerald-500";
                else if (intensity > 0.6) color = "bg-emerald-600/70";
                else if (intensity > 0.4) color = "bg-emerald-700/40";
                else if (intensity > 0.2) color = "bg-emerald-900/20";
                
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.002 }}
                    className={`aspect-square rounded-sm ${color}`} 
                  />
                );
              })}
            </div>
            <div className="flex justify-end items-center gap-2 mt-4 text-[10px] text-zinc-500 font-mono">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-sm bg-zinc-900" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-900/20" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-700/40" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600/70" />
                <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
              </div>
              <span>More</span>
            </div>
          </Card>
        </section>

        {/* Footer / Contact */}
        <footer className="border-t border-zinc-900 pt-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 italic font-serif">Let's collaborate.</h3>
              <p className="text-zinc-500 mb-8 max-w-sm">
                Open for internship opportunities, freelance projects, or just a technical chat about Python.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors"><Github className="w-6 h-6" /></a>
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors"><Mail className="w-6 h-6" /></a>
                <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors"><Globe className="w-6 h-6" /></a>
              </div>
            </div>
            <div className="flex flex-col justify-end md:items-end">
              <div className="text-xs font-mono text-zinc-600 mb-2 uppercase tracking-widest">Built with</div>
              <div className="flex gap-4 text-zinc-400 font-mono text-sm">
                <span>Python</span>
                <span>React</span>
                <span>Tailwind</span>
                <span>Motion</span>
              </div>
              <div className="mt-8 text-[10px] text-zinc-700 font-mono">
                &copy; 2026 PYTHON_DEV_STUDENT. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
