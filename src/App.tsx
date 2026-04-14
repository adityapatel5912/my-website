/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import { Github, Mail, Globe } from "lucide-react";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-zinc-100 selection:text-zinc-950 flex flex-col">
        {/* Background Grid */}
        <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <Navbar />

        <main className="relative z-10 flex-1 max-w-5xl mx-auto px-6 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="relative z-10 border-t border-zinc-900 pt-12 pb-24 max-w-5xl mx-auto px-6 w-full">
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
      </div>
    </Router>
  );
}
