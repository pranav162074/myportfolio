"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LeetCode, Codeforces, CodeChef } from "../components/icons";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Trophy,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Cpu,
  Terminal,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-blue-600 selection:text-white">
      {/* Background Accent Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-sky-900/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-950/30 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 border-b border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
            Sai Pranav Reddy
          </span>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-blue-400 transition-colors">Achievements</a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        {/* HERO / ABOUT SECTION */}
        <motion.section
          id="about"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-10"
        >
          {/* Left Text Column */}
          <div className="space-y-6 flex-1">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-blue-500">Sai Pranav Reddy</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
              Passionate software engineering undergraduate focused on Full-Stack Web Development, Data Structures & Algorithms, and AI-driven optimization logic.
            </p>

            {/* Contact & Social Links */}
            <div className="flex flex-wrap gap-3 text-sm pt-2">
              <a
                href="mailto:saipranavreddygade5@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-blue-400" /> saipranavreddygade5@gmail.com
              </a>
              <a
                href="tel:+916281382551"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-blue-400" /> +91-6281382551
              </a>
              <span className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-zinc-400">
                <MapPin className="w-4 h-4 text-blue-400" /> Visakhapatnam, IN
              </span>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/sai-pranav-reddy-gade-60b94233a/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-950/50"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/pranav162074"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-950/50"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://leetcode.com/u/sai_pranavit/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-950/50"
              >
                <Image
                    src="/icons8-leetcode-24.png"
                    alt="LeetCode Icon"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                />
                <span>LeetCode</span>
              </a>
              <a
                href="https://codeforces.com/profile/pranav_reddy2005"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-950/50"
              >
                <Codeforces className="w-4 h-4" /> Codeforces
              </a>
              <a
                href="https://www.codechef.com/users/pranavv205"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-950/50"
              >
                <Image
                    src="/Codechef--Streamline-Simple-Icons.svg"
                    alt="CodeChef Icon"
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                />
                <span>CodeChef</span>
              </a>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-blue-500/50 bg-zinc-900">
              <Image
                src="/pranav_pic.jpeg"
                alt="Sai Pranav Reddy"
                fill
                className="object-cover object-center transform group-hover:scale-105 transition duration-500"
                priority
              />
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section
          id="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-blue-500/30 transition-all space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="text-xl font-semibold text-zinc-100">Research Intern</h3>
                <p className="text-blue-400 font-medium">National Institute of Technology Raipur</p>
              </div>
              <span className="text-sm text-zinc-400 font-mono">May 2026 - Present</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm leading-relaxed">
              <li>Built a hierarchical graph-based reinforcement learning framework for cooperative UAV/UGV task allocation and path planning in dynamic, constraint-heavy environments.</li>
              <li>Designed adaptive graph-update algorithms using obstacle, terrain, communication, and battery-state feedback to improve routing quality and system resilience.</li>
              <li>Developed a benchmarking pipeline with dynamic obstacles, mission priorities, communication events, and battery constraints for reproducible performance evaluation.</li>
              <li>Improved multi-objective mission performance by 7.2% and reduced collision risk by 58.1% across 9 benchmark scenarios.</li>
              <li>Implemented simulation systems, graph algorithms, path-planning logic, data analysis scripts, and performance evaluation tooling in Python.</li>
            </ul>
          </div>
        </motion.section>

        {/* PROJECTS SECTION */}
        <motion.section
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Project 1 */}
            <motion.div
              variants={fadeIn}
              className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-blue-500/40 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-zinc-100">OptiRake DSS - AI-Based Rake Planning Optimizer</h3>
                <a
                  href="https://optirake.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  Live Deployment <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-300 text-sm leading-relaxed">
                <li>Built a decision-support system for SAIL Bokaro Steel Plant to optimize rail-rake formation logistics across 100+ customer orders and operational constraints.</li>
                <li>Designed optimization logic to process 6 CSV inputs covering orders, rakes, stockyards, product-wagon compatibility, loading points, and route costs.</li>
                <li>Achieved 80–90% wagon utilization, reduced rake requirement by 33%, improved throughput by 130%, and reduced cost per order by 20%.</li>
                <li>Reduced manual planning time from 2–3 hours to nearly 2 seconds through automated assignment, explainable KPI cards, and rake-level reasoning.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {["React 18", "TypeScript", "Tailwind CSS", "Express.js", "REST APIs", "CSV Parsing"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={fadeIn}
              className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-blue-500/40 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-zinc-100">CodeStruct – Comprehensive DSA Learning Platform</h3>
                <a
                  href="https://github.com/pranav162074/mycodestruct"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  GitHub Repo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-300 text-sm leading-relaxed">
                <li>Developed a full-stack DSA platform integrating live competitive-programming performance from LeetCode, Codeforces, and CodeChef into a unified dashboard.</li>
                <li>Engineered structured DSA pattern roadmaps and language-specific learning paths covering C++, Java, and Python for systematic skill progression.</li>
                <li>Built interactive learning workflows, data persistence, and performance tracking across 100+ Git commits.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={fadeIn}
              className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-blue-500/40 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl font-semibold text-zinc-100">Adaptive Feedback Driven HGRL for UAV/UGV Missions</h3>
                <a
                  href="https://github.com/pranav162074/adaptive-feedback-hgrl-uav-ugv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300"
                >
                  GitHub Repo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-zinc-300 text-sm leading-relaxed">
                <li>Developed a feedback-driven hierarchical graph reinforcement learning research framework for cooperative task allocation and adaptive path planning.</li>
                <li>Reduced mean objective score from 79.26 to 73.54 and mean collision risk from 0.0609 to 0.0255 across 9 benchmark scenarios.</li>
                <li>Generated metrics CSVs, aggregate summaries, objective/risk graphs, and adaptive path visualizations.</li>
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "Reinforcement Learning", "Graph Algorithms", "Data Visualization"].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 text-xs rounded-md bg-blue-950/40 border border-blue-800/40 text-blue-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section
          id="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Cpu className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Skills & Competencies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Languages</h3>
              <p className="text-zinc-300 text-sm">C++, Python, JavaScript, C, HTML, CSS</p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Frameworks & Libraries</h3>
              <p className="text-zinc-300 text-sm">React.js, Next.js, Express.js, Node.js, Tailwind CSS</p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Computer Science Core</h3>
              <p className="text-zinc-300 text-sm">Data Structures, Algorithms, OOP, Operating Systems, DBMS, Computer Networks</p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Databases & Tools</h3>
              <p className="text-zinc-300 text-sm">MongoDB Atlas, Supabase, Git, GitHub, VS Code, REST APIs, CSV Processing</p>
            </div>
          </div>
        </motion.section>

        {/* ACHIEVEMENTS SECTION */}
        <motion.section
          id="achievements"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Achievements & Honors</h2>
          </div>

          <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
            <ul className="space-y-3 text-zinc-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong className="text-zinc-100">Smart India Hackathon Finalist:</strong> Selected among top 1,300 teams from 50,000+ teams nationwide.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong className="text-zinc-100">Competitive Programming:</strong> LeetCode Knight (1871) | Codeforces Pupil (1219) | CodeChef 2* (1492).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong className="text-zinc-100">LeetCode Weekly Contest 511:</strong> Secured 1208th Rank among 40,000+ participants.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong className="text-zinc-100">AlgoRhythm LeetCode League:</strong> Secured 2nd place college-wide through consistent POTD participation, contest performance, and technical interview round.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">•</span>
                <span><strong className="text-zinc-100">Pixel Perfect Challenge 2024:</strong> Secured 3rd place for building a prototype website during a 1-hour frontend challenge.</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* EDUCATION SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
              <span className="text-xs font-mono text-blue-400">2024 – 2028</span>
              <h3 className="font-semibold text-zinc-100">Gayatri Vidya Parishad College of Engineering</h3>
              <p className="text-sm text-zinc-400">B.Tech in Information Technology</p>
              <p className="text-xs text-blue-300 pt-1">GPA: 8.51 / 10</p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1">
              <span className="text-xs font-mono text-blue-400">2021 – 2023</span>
              <h3 className="font-semibold text-zinc-100">Achievers Junior College</h3>
              <p className="text-sm text-zinc-400">Intermediate in MPC</p>
              <p className="text-xs text-blue-300 pt-1">Percentage: 80.6%</p>
            </div>
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800/60 py-8 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Sai Pranav Reddy. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}