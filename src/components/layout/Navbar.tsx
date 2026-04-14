import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Terminal, Github, Mail, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-emerald-500 flex items-center justify-center rounded-none group-hover:rotate-90 transition-transform duration-300">
            <Terminal className="w-5 h-5 text-zinc-950" />
          </div>
          <span className="font-mono font-bold tracking-tighter text-sm hidden sm:inline-block">
            PY_DEV_STUDENT
          </span>
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xs font-mono uppercase tracking-widest transition-colors hover:text-emerald-500",
                location.pathname === item.path ? "text-emerald-500" : "text-zinc-500"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <Link to="/contact" className="text-zinc-500 hover:text-zinc-100 transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
