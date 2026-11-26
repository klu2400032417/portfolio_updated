import React, { useState, useEffect } from 'react';
import {
  Send,
  Menu,
  X,
  ArrowRight,
  Github,
  Linkedin,
  Copy,
  MapPin,
  GraduationCap,
  Briefcase,
  Layers,
  ExternalLink,
  Mail,
  Phone,
  Code2,
  User,
  CheckCircle2,
} from 'lucide-react';
import profilePhoto from './assets/asha-profile.jpeg';
import './App.css';

const SKILLS = [
  { name: 'Java', category: 'frontend', badge: 'JV', color: 'text-orange-400 bg-orange-500/15 border-orange-500/25' },
  { name: 'Python', category: 'frontend', badge: 'PY', color: 'text-amber-300 bg-amber-500/15 border-amber-500/25' },
  { name: 'JavaScript (ES6+)', category: 'frontend', badge: 'JS', color: 'text-yellow-300 bg-yellow-500/15 border-yellow-500/25' },
  { name: 'React.js', category: 'frontend', badge: '⚛', color: 'text-sky-300 bg-sky-500/15 border-sky-500/25' },
  { name: 'HTML5 & CSS3', category: 'frontend', badge: 'UI', color: 'text-rose-300 bg-rose-500/15 border-rose-500/25' },
  { name: 'Bootstrap', category: 'frontend', badge: 'BS', color: 'text-purple-300 bg-purple-500/15 border-purple-500/25' },
  { name: 'SQL', category: 'frontend', badge: 'SQL', color: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/25' },

  { name: 'Spring Boot', category: 'backend', badge: 'SB', color: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25' },
  { name: 'Spring Cloud', category: 'backend', badge: 'SC', color: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25' },
  { name: 'Spring Security & JWT', category: 'backend', badge: 'JWT', color: 'text-violetx-400 bg-violetx-600/20 border-violetx-500/30' },
  { name: 'Eureka & API Gateway', category: 'backend', badge: 'GW', color: 'text-indigo-300 bg-indigo-500/15 border-indigo-500/25' },
  { name: 'OpenFeign', category: 'backend', badge: 'OF', color: 'text-sky-300 bg-sky-500/15 border-sky-500/25' },
  { name: 'Spring Data JPA', category: 'backend', badge: 'JPA', color: 'text-amber-200 bg-amber-500/15 border-amber-500/25' },
  { name: 'Hibernate & REST APIs', category: 'backend', badge: 'API', color: 'text-violetx-400 bg-violetx-600/20 border-violetx-500/30' },

  { name: 'Docker & Compose', category: 'cloud', badge: 'DCK', color: 'text-sky-300 bg-sky-500/15 border-sky-500/25' },
  { name: 'GitHub Actions CI/CD', category: 'cloud', badge: 'CI', color: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25' },
  { name: 'AWS EC2', category: 'cloud', badge: 'AWS', color: 'text-orange-300 bg-orange-500/15 border-orange-500/25' },
  { name: 'PostgreSQL', category: 'cloud', badge: 'PG', color: 'text-blue-300 bg-blue-500/15 border-blue-500/25' },
  { name: 'MySQL', category: 'cloud', badge: 'SQL', color: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/25' },
  { name: 'JUnit 5 & Testing', category: 'cloud', badge: 'TST', color: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25' },
  { name: 'Git, Postman, Swagger', category: 'cloud', badge: 'DEV', color: 'text-rose-300 bg-rose-500/15 border-rose-500/25' },

  { name: 'NumPy & Pandas', category: 'ml', badge: 'ML', color: 'text-amber-300 bg-amber-500/15 border-amber-500/25' },
  { name: 'Scikit-learn', category: 'ml', badge: 'SKL', color: 'text-orange-300 bg-orange-500/15 border-orange-500/25' },
  { name: 'OOP & DSA', category: 'ml', badge: 'DSA', color: 'text-fuchsia-300 bg-fuchsia-500/15 border-fuchsia-500/25' },
];

const PROJECTS = [
  {
    id: 'ecommerce',
    categoryLabel: 'Microservices',
    categoryColor: 'text-violetx-400',
    statusBadge: 'AWS EC2 · Docker',
    statusStyle: 'bg-emerald-500/15 text-emerald-300',
    headerTitle: 'User · Product · Order Services',
    headerSub: 'Eureka · API Gateway · OpenFeign · JWT',
    gradient: 'from-violet-600/35 via-indigo-600/20 to-slate-900',
    tags: [
      { label: 'Java', style: 'bg-violetx-600/15 border-violetx-500/25 text-violetx-400' },
      { label: 'Spring Cloud', style: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300' },
      { label: 'PostgreSQL', style: 'bg-sky-500/10 border-sky-500/25 text-sky-300' },
    ],
    title: 'Microservices E-Commerce App',
    summary:
      'Distributed backend architecture with Eureka discovery, API Gateway, OpenFeign load balancing, JWT Spring Security, and Docker Compose deployment on AWS EC2.',
    modalBadge: 'Java · Spring Boot · Spring Cloud · PostgreSQL',
    bullets: [
      'Developed a backend microservices architecture consisting of User, Product, and Order services with Eureka Server and API Gateway.',
      'Implemented service-to-service communication using Spring Cloud OpenFeign, Eureka-based service discovery, and load balancing across multiple service instances.',
      'Implemented JWT-based authentication and authorization using Spring Security to secure REST APIs.',
      'Integrated PostgreSQL and containerized microservices using Docker and Docker Compose for deployment on AWS EC2.',
    ],
  },
  {
    id: 'campaign',
    categoryLabel: 'CI/CD Full Stack',
    categoryColor: 'text-fuchsia-300',
    statusBadge: 'GitHub Actions',
    statusStyle: 'bg-sky-500/15 text-sky-300',
    headerTitle: 'Campaign CRUD & Docker Hub',
    headerSub: 'Multi-container Docker Compose',
    gradient: 'from-fuchsia-600/30 via-violet-600/20 to-slate-900',
    tags: [
      { label: 'React.js', style: 'bg-sky-500/10 border-sky-500/25 text-sky-300' },
      { label: 'Spring Boot', style: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300' },
      { label: 'Docker', style: 'bg-violetx-600/15 border-violetx-500/25 text-violetx-400' },
    ],
    title: 'Digital Marketing Campaign Manager',
    summary:
      'Full-stack campaign platform with React, Spring Boot REST APIs, PostgreSQL, multi-container Docker Compose, and automated GitHub Actions CI/CD to Docker Hub.',
    modalBadge: 'React.js · Spring Boot · PostgreSQL · Docker · GitHub Actions',
    githubUrl: 'https://github.com/klu2400032417/soa-docker-githubactions',
    bullets: [
      'Developed a full-stack campaign management application using React.js, Spring Boot, and PostgreSQL with CRUD functionality for managing digital marketing campaigns.',
      'Designed REST APIs using Spring Boot and integrated the React frontend with backend services and PostgreSQL.',
      'Created Dockerfiles to containerize frontend and backend applications and configured multi-container orchestration using Docker Compose.',
      'Implemented GitHub Actions CI/CD workflows to automate Docker image building and publishing to Docker Hub.',
    ],
  },
  {
    id: 'resume-ai',
    categoryLabel: 'AI Recruitment',
    categoryColor: 'text-emerald-300',
    statusBadge: 'Live Deployed',
    statusStyle: 'bg-emerald-500/20 text-emerald-300',
    headerTitle: 'TF-IDF & Cosine Similarity',
    headerSub: 'Automated Skill Extraction & Ranking',
    gradient: 'from-emerald-600/25 via-violet-600/20 to-slate-900',
    tags: [
      { label: 'Java', style: 'bg-violetx-600/15 border-violetx-500/25 text-violetx-400' },
      { label: 'Spring Boot', style: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300' },
      { label: 'React.js', style: 'bg-sky-500/10 border-sky-500/25 text-sky-300' },
    ],
    title: 'AI Resume Screening & Ranking',
    summary:
      'Full-stack recruitment platform automating resume analysis, skill extraction, and candidate ranking against job descriptions using TF-IDF and Cosine Similarity.',
    modalBadge: 'Java · Spring Boot · React.js · MySQL',
    liveUrl: 'https://resumedetector-rouge.vercel.app',
    githubUrl: 'https://github.com/klu2400032417/aibased.git',
    bullets: [
      'Developed a full-stack recruitment platform to automate resume analysis, candidate screening, and ranking based on job descriptions.',
      'Implemented TF-IDF vectorization and Cosine Similarity algorithms to evaluate candidate relevance.',
      'Implemented automated skill extraction and integrated REST APIs with a React frontend and MySQL database.',
    ],
  },
  {
    id: 'need-bridge',
    categoryLabel: 'Social Impact',
    categoryColor: 'text-indigo-300',
    statusBadge: 'REST APIs',
    statusStyle: 'bg-violetx-600/20 text-violetx-400',
    headerTitle: 'Donor & Request Tracking',
    headerSub: 'React.js · Spring Boot · MySQL',
    gradient: 'from-indigo-600/30 via-violet-600/20 to-slate-900',
    tags: [
      { label: 'React.js', style: 'bg-sky-500/10 border-sky-500/25 text-sky-300' },
      { label: 'Spring Boot', style: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-300' },
      { label: 'MySQL', style: 'bg-blue-500/10 border-blue-500/25 text-blue-300' },
    ],
    title: 'Need Bridge — Donation Platform',
    summary:
      'Full-stack donation management platform with responsive donor registration, donation tracking, request workflows, and MySQL persistence.',
    modalBadge: 'React.js · Spring Boot · MySQL',
    bullets: [
      'Developed a full-stack donation management platform using React.js, Spring Boot, and MySQL.',
      'Built responsive and user-friendly frontend interfaces for donor registration, donation tracking, and request management.',
      'Designed and integrated REST APIs to enable communication between frontend and backend components.',
      'Implemented MySQL database integration for managing user information, donation records, and requests.',
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: 'AWS Certified Cloud Practitioner',
    meta: 'Amazon Web Services · 2026–2029',
    highlight: true,
    desc: 'Validated foundational AWS Cloud concepts, security, architecture, and deployment practices.',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    meta: 'Oracle · 2026',
    highlight: false,
    desc: 'Demonstrated core OCI cloud services, networking, compute, and security fundamentals.',
  },
  {
    title: 'Machine Learning – NPTEL',
    meta: 'NPTEL Certification',
    highlight: false,
    desc: 'Supervised & unsupervised learning, model evaluation, and practical ML workflows.',
  },
  {
    title: 'GitHub Copilot Certification',
    meta: 'AI-Assisted Development',
    highlight: false,
    desc: 'AI-powered code completion, developer productivity, and modern engineering workflows.',
  },
  {
    title: 'Linguaskill (Cambridge English) – B2 Grade',
    meta: 'English Proficiency',
    highlight: false,
    desc: 'Professional proficiency across reading, writing, listening, and speaking.',
  },
];

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skillFilter, setSkillFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMsg, setToastMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 2600);
  };

  const copyEmail = () => {
    const email = 'kashmithachowdary@gmail.com';
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(() => showToast(`Email copied: ${email}`));
    } else {
      showToast(`Email: ${email}`);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if (!name || !email || !message || isSubmitting) return;

    setIsSubmitting(true);
    setFormStatus('');
    setFormError('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/kashmithachowdary@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio Contact from ${name}`,
          _replyto: email,
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.success === 'false' || data.success === false) {
        throw new Error(data.message || 'Unable to send message right now.');
      }

      setFormStatus(`Thanks, ${name}! Your message has been sent to my inbox.`);
      showToast('Message sent to Ashmitha!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      const msg = err?.message || 'Could not send automatically.';
      setFormError(msg);
      showToast('Could not send automatically.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredSkills =
    skillFilter === 'all' ? SKILLS : SKILLS.filter((s) => s.category === skillFilter);

  return (
    <div className="min-h-screen bg-night-950 text-slate-200 selection:bg-violetx-600 selection:text-white">
      {/* Sticky Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-night-950/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#home" className="flex items-center gap-2.5 text-white font-bold tracking-tight">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violetx-600/20 text-violetx-400 border border-violetx-500/30 text-sm font-extrabold">
              &lt;/&gt;
            </span>
            <span className="text-base sm:text-lg">Ashmitha Chowdary</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 rounded-full bg-night-800/80 p-1 border border-white/10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  activeSection === item.id
                    ? 'bg-violetx-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="purple-btn hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg transition"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Let&apos;s Talk</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-night-800 p-2 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-night-900 px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="hero-glow relative border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-violetx-500/30 bg-violetx-600/15 px-3 py-1 text-xs font-medium text-violetx-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Aspiring Software Engineering Intern · Expected May 2028</span>
                </div>

                <div>
                  <p className="text-sm sm:text-base font-medium text-slate-300">Hello, I&apos;m</p>
                  <h1 className="mt-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Kommi Ashmitha Chowdary
                  </h1>
                  <p className="mt-2 text-lg sm:text-xl font-bold text-violetx-400">
                    Full Stack, Microservices &amp; Cloud Developer
                  </p>
                </div>

                <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-300">
                  Computer Science student at Koneru Lakshmaiah University building scalable full-stack applications,
                  REST APIs, and microservices with Java, Spring Boot, React.js, PostgreSQL, Docker, and AWS EC2.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="#projects"
                    className="purple-btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="https://github.com/klu2400032417"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-night-800/90 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-violetx-400/60 transition"
                  >
                    <Github className="h-4 w-4 text-violetx-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ashmitha-chowdary-kommi-aa9668343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-night-800/90 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-violetx-400/60 transition"
                  >
                    <Linkedin className="h-4 w-4 text-violetx-400" />
                    <span>LinkedIn</span>
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-night-900/80 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition"
                  >
                    <Copy className="h-3.5 w-3.5 text-violetx-400" />
                    <span>Copy Email</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 max-w-xl">
                  <div>
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">9.74</p>
                    <p className="text-xs text-slate-400 mt-0.5">GPA / 10.00</p>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">4</p>
                    <p className="text-xs text-slate-400 mt-0.5">Projects Built</p>
                  </div>
                  <div className="sm:border-l border-white/10 sm:pl-4">
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">5</p>
                    <p className="text-xs text-slate-400 mt-0.5">Certifications</p>
                  </div>
                  <div className="border-l border-white/10 pl-4">
                    <p className="text-2xl sm:text-3xl font-extrabold text-white">1475</p>
                    <p className="text-xs text-slate-400 mt-0.5">LeetCode Rating</p>
                  </div>
                </div>
              </div>

              {/* Compact Portrait */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[230px]">
                  <div className="glass-card relative rounded-3xl p-3 shadow-2xl">
                    <div className="overflow-hidden rounded-2xl aspect-square bg-night-900">
                      <img
                        src={profilePhoto}
                        alt="Kommi Ashmitha Chowdary"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-2.5 flex items-center justify-center px-1">
                      <span className="text-xs font-semibold text-white">B.S. CS · 2028</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="border-b border-white/10 bg-night-900/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-3">
                <h2 className="text-2xl font-bold text-white">About Me</h2>
                <p className="text-sm leading-relaxed text-slate-300">
                  I&apos;m an aspiring Software Engineering Intern with strong foundations in Java, Python, HTML, CSS,
                  JavaScript, React.js, and Object-Oriented Programming. I build full-stack applications, design REST
                  APIs, and implement microservices architectures.
                </p>
                <p className="text-sm leading-relaxed text-slate-300">
                  I have hands-on experience with Spring Boot, PostgreSQL, Docker, Docker Compose, GitHub Actions, and
                  AWS EC2 deployment—alongside JWT security, service discovery, load balancing, and automated testing.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-3 border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-7">
                <div className="flex items-center gap-3 rounded-xl bg-night-800/70 px-3.5 py-3 border border-white/5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violetx-600/20 text-violetx-400">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-sm font-medium text-white">Vaddeswaram, Vijayawada</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-night-800/70 px-3.5 py-3 border border-white/5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violetx-600/20 text-violetx-400">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Education (Expected May 2028)</p>
                    <p className="text-sm font-medium text-white">B.S. Computer Science · GPA 9.74</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-night-800/70 px-3.5 py-3 border border-white/5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violetx-600/20 text-violetx-400">
                    <Briefcase className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs text-slate-400">Availability</p>
                    <p className="text-sm font-medium text-white">Seeking SWE Internship</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical Skills</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Full-stack, microservices, cloud DevOps, testing, and machine learning stack.
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 rounded-xl bg-night-900 p-1 border border-white/10">
                {[
                  { key: 'all', label: 'All' },
                  { key: 'frontend', label: 'Frontend & Languages' },
                  { key: 'backend', label: 'Backend & Microservices' },
                  { key: 'cloud', label: 'Cloud, DB & Testing' },
                  { key: 'ml', label: 'ML & Core' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setSkillFilter(tab.key)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                      skillFilter === tab.key
                        ? 'bg-violetx-600 text-white'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card rounded-xl p-3 flex flex-col items-center justify-center text-center hover:-translate-y-0.5"
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl border text-[11px] font-extrabold ${skill.color}`}
                  >
                    {skill.badge}
                  </span>
                  <span className="mt-2 text-xs font-semibold text-slate-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="border-b border-white/10 bg-night-900/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
              <p className="mt-1 text-sm text-slate-400">
                Microservices, CI/CD containerized apps, AI systems, and full-stack platforms.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.map((project) => (
                <article
                  key={project.id}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col hover:-translate-y-0.5"
                >
                  <div className={`bg-gradient-to-br ${project.gradient} p-4 border-b border-white/10`}>
                    <div className="rounded-xl bg-night-950/90 border border-white/10 p-3.5">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${project.categoryColor}`}>
                          {project.categoryLabel}
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${project.statusStyle}`}>
                          {project.statusBadge}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-white">{project.headerTitle}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">{project.headerSub}</p>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.label}
                            className={`rounded-md border px-2 py-0.5 text-[11px] font-medium ${tag.style}`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">{project.summary}</p>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-violetx-400 hover:text-white transition"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            <span>Live Demo</span>
                          </a>
                        )}
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-violetx-400 hover:text-white transition"
                        >
                          <Layers className="h-3.5 w-3.5" />
                          <span>Architecture Details</span>
                        </button>
                      </div>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-200 hover:text-violetx-400 transition"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Coding Profiles & Certifications */}
        <section id="credentials" className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Coding Profiles</h2>
              <p className="mt-1 text-sm text-slate-400 mb-6">
                Competitive programming, open-source repositories, and ML notebooks.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">LeetCode</span>
                    <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[11px] font-semibold text-amber-300">
                      1475 Rating
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300">Solved 61+ problems (33 Medium, 1 Hard).</p>
                </div>

                <div className="glass-card rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">Kaggle</span>
                    <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] font-semibold text-sky-300">
                      ML Notebooks
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-slate-300">
                    Created ML notebooks &amp; participated in data analysis competitions.
                  </p>
                </div>

                <a
                  href="https://github.com/klu2400032417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 block hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">GitHub</span>
                    <ExternalLink className="h-4 w-4 text-violetx-400" />
                  </div>
                  <p className="mt-2 text-xs text-slate-300 truncate">github.com/klu2400032417</p>
                </a>

                <a
                  href="https://www.codechef.com/users/klu2400032417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 block hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">CodeChef</span>
                    <ExternalLink className="h-4 w-4 text-violetx-400" />
                  </div>
                  <p className="mt-2 text-xs text-slate-300 truncate">codechef.com/users/klu2400032417</p>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Certifications</h2>
              <p className="mt-1 text-sm text-slate-400 mb-6">
                Cloud, machine learning, AI tooling, and language credentials.
              </p>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.title} className="glass-card rounded-2xl p-4 grid gap-2 md:grid-cols-12 items-center">
                    <div className="md:col-span-6">
                      <h3 className="text-sm sm:text-base font-bold text-white">{cert.title}</h3>
                      <p className={`text-xs mt-0.5 ${cert.highlight ? 'text-violetx-400' : 'text-slate-400'}`}>
                        {cert.meta}
                      </p>
                    </div>
                    <div className="md:col-span-6 md:border-l md:border-white/10 md:pl-5">
                      <p className="text-xs sm:text-sm text-slate-300">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-night-900/50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">Get In Touch</h2>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    Looking for a Software Engineering Intern with full-stack, microservices, and AWS experience? Feel
                    free to reach out!
                  </p>
                </div>

                <div className="space-y-2.5 text-sm">
                  <div className="flex items-center justify-between gap-2 rounded-xl bg-night-800/80 px-4 py-3 border border-white/10">
                    <a
                      href="mailto:kashmithachowdary@gmail.com"
                      className="flex items-center gap-2.5 text-slate-200 hover:text-white truncate"
                    >
                      <Mail className="h-4 w-4 text-violetx-400 shrink-0" />
                      <span className="truncate">kashmithachowdary@gmail.com</span>
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="text-xs font-semibold text-violetx-400 hover:text-white shrink-0"
                    >
                      Copy
                    </button>
                  </div>

                  <a
                    href="tel:+919177276669"
                    className="flex items-center gap-2.5 rounded-xl bg-night-800/80 px-4 py-3 border border-white/10 text-slate-200 hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-violetx-400 shrink-0" />
                    <span>+91 9177276669</span>
                  </a>

                  <div className="flex items-center gap-2.5 rounded-xl bg-night-800/80 px-4 py-3 border border-white/10 text-slate-200">
                    <MapPin className="h-4 w-4 text-violetx-400 shrink-0" />
                    <span>Vaddeswaram, Vijayawada · KL University</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="https://github.com/klu2400032417"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-night-800 text-slate-200 hover:border-violetx-400 hover:text-white transition"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ashmitha-chowdary-kommi-aa9668343"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-night-800 text-slate-200 hover:border-violetx-400 hover:text-white transition"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.codechef.com/users/klu2400032417"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="CodeChef"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-night-800 text-slate-200 hover:border-violetx-400 hover:text-white transition"
                  >
                    <Code2 className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7">
                <form onSubmit={handleFormSubmit} className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="senderName" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="senderName"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full rounded-xl border border-white/10 bg-night-950/90 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-violetx-500 focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="senderEmail" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail className="h-4 w-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          id="senderEmail"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-white/10 bg-night-950/90 pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-violetx-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="senderMessage" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      id="senderMessage"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the internship or project..."
                      className="w-full rounded-xl border border-white/10 bg-night-950/90 px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-violetx-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="purple-btn inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    {formStatus && <span className="text-xs text-emerald-400">{formStatus}</span>}
                    {formError && (
                      <span className="text-xs text-rose-400">
                        {formError}{' '}
                        <a
                          href={`mailto:kashmithachowdary@gmail.com?subject=${encodeURIComponent(
                            `Portfolio Contact from ${formData.name || 'Visitor'}`
                          )}&body=${encodeURIComponent(
                            `From: ${formData.name} (${formData.email})\n\n${formData.message}`
                          )}`}
                          className="underline text-violetx-400 hover:text-white"
                        >
                          Send via Email App
                        </a>
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-night-950 py-6 text-center text-xs text-slate-500">
        <p>© 2026 Kommi Ashmitha Chowdary · Koneru Lakshmaiah University, Vaddeswaram</p>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
        >
          <div className="glass-card w-full max-w-lg rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
              <div>
                <span className="inline-block rounded-full bg-violetx-600/20 px-2.5 py-0.5 text-xs font-semibold text-violetx-400">
                  {selectedProject.modalBadge}
                </span>
                <h3 className="mt-1.5 text-xl font-bold text-white">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-300 list-disc pl-5">
              {selectedProject.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="purple-btn rounded-full px-5 py-2 text-xs font-semibold text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-xl border border-violetx-500/40 bg-night-800 px-4 py-3 text-xs font-medium text-white shadow-xl">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMsg}</span>
        </div>
      )}
    </div>
  );
}
