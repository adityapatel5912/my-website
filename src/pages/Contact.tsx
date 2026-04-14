import { motion } from "motion/react";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  MapPin, 
  Terminal,
  MessageSquare,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  return (
    <div className="pt-24 pb-24">
      <section className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tighter mb-6"
        >
          Get in <span className="text-zinc-500 italic font-serif">Touch</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-zinc-400 max-w-2xl leading-relaxed"
        >
          Whether you have a project in mind, a question about my work, or just want to say hi, I'm always open to new connections.
        </motion.p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">Contact Details</h3>
              <div className="space-y-6">
                <a href="mailto:hello@example.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-mono">Email</div>
                    <div className="text-lg font-medium">hello@example.com</div>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-zinc-800 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-zinc-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 font-mono">Location</div>
                    <div className="text-lg font-medium">San Francisco, CA</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-6">Social Profiles</h3>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, label: "GitHub", href: "#" },
                  { icon: <Linkedin />, label: "LinkedIn", href: "#" },
                  { icon: <Twitter />, label: "Twitter", href: "#" },
                  { icon: <Globe />, label: "Website", href: "#" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 border border-zinc-800 flex items-center justify-center hover:border-zinc-100 hover:bg-zinc-900 transition-all"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-6 border border-zinc-800 bg-zinc-900/30 rounded-none">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-emerald-500" />
                <span className="font-mono text-sm text-zinc-300">availability.py</span>
              </div>
              <p className="text-sm text-zinc-500 font-mono leading-relaxed">
                current_status = "Looking for Internships" <br />
                response_time = "Within 24 hours" <br />
                preferred_stack = ["Python", "Django", "FastAPI"]
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="rounded-none border-zinc-800 bg-zinc-900/30 p-8">
            <CardHeader className="px-0 pt-0 mb-8">
              <CardTitle className="text-2xl flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-emerald-500" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors rounded-none text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors rounded-none text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors rounded-none text-sm"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-zinc-500">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors rounded-none text-sm resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button className="w-full rounded-none bg-emerald-500 text-zinc-950 hover:bg-emerald-400 font-bold h-12">
                <Send className="mr-2 w-4 h-4" /> Send Message
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
