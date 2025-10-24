import React from "react";

// GEMT Construction - Single-file React component (TailwindCSS)
// Default export: GEMTWebsite
// Usage: drop into a React app (Vite / Create React App / Next.js). Tailwind must be configured.

const services = [
  {
    id: 1,
    title: "Civil & Structural Works",
    desc: "Foundations, reinforced concrete, multistorey buildings and structural rehabilitation.",
  },
  {
    id: 2,
    title: "Roads & Drainage",
    desc: "Urban and rural roads, stormwater drainage and culverts with sustainable designs.",
  },
  {
    id: 3,
    title: "Mechanical & Electrical",
    desc: "Power distribution, plumbing, HVAC and site utilities integration.",
  },
  {
    id: 4,
    title: "Project Management",
    desc: "End-to-end project planning, procurement and quality assurance.",
  },
];

const projects = [
  {
    id: 1,
    title: "Musanze Drainage Upgrade",
    location: "Musanze, Rwanda",
    img: "/images/projects/musanze.jpg",
    summary: "Comprehensive drainage improvement for flood mitigation.",
  },
  {
    id: 2,
    title: "Kimihurura Residential Complex",
    location: "Gasabo, Kigali",
    img: "/images/projects/kimihurura.jpg",
    summary: "Multi-storey residential building with modern finishes.",
  },
  {
    id: 3,
    title: "Kigali Interchange",
    location: "Kigali",
    img: "/images/projects/interchange.jpg",
    summary: "High-capacity interchange with pedestrian facilities.",
  },
];

export default function GEMTWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-indigo-600 to-green-500 flex items-center justify-center">
              <span className="font-bold text-white">G</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold">GEMT Construction</h1>
              <p className="text-xs text-gray-500">
                Building Rwanda's future — Quality, Safety, Sustainability
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-indigo-600">
              Home
            </a>
            <a href="#services" className="hover:text-indigo-600">
              Services
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm shadow"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button - simple placeholder (no JS) */}
          <div className="md:hidden">
            <button aria-label="open menu" className="p-2">
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              GEMT Construction — Trusted Engineering & Building Partner in
              Rwanda
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              We deliver sustainable civil engineering, roads, drainage, and
              turnkey building solutions across Rwanda. Safety, quality, and
              local impact guide every project.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-3 bg-white border border-gray-200 px-5 py-3 rounded-md shadow-sm"
              >
                Our Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-md shadow"
              >
                Request a Quote
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <strong className="block text-xl text-indigo-600">15+</strong>
                <span>Years experience</span>
              </div>
              <div>
                <strong className="block text-xl text-indigo-600">50+</strong>
                <span>Completed projects</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            {/* Placeholder image card */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-100 to-white">
              <img
                src="/images/hero-construction.jpg"
                alt="construction site"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold">What we do</h3>
        <p className="mt-2 text-gray-600">
          Comprehensive services tailored for public and private sector projects
          across Rwanda.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="bg-white rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <div className="w-12 h-12 rounded-md bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">
                {s.title.split(" ")[0].slice(0, 2)}
              </div>
              <h4 className="mt-4 font-semibold">{s.title}</h4>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold">Featured Projects</h3>
              <p className="text-gray-600 mt-1">
                Selected works demonstrating our technical capability and local
                impact.
              </p>
            </div>
            <a
              href="#projects"
              className="text-sm text-indigo-600 hover:underline"
            >
              View all projects
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="rounded-lg overflow-hidden shadow">
                <div className="h-48 bg-gray-200">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{p.location}</p>
                  <p className="mt-2 text-gray-700 text-sm">{p.summary}</p>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="text-indigo-600 text-sm hover:underline"
                    >
                      Read case study
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">About GEMT</h3>
            <p className="mt-4 text-gray-700">
              GEMT (Gemt Company Ltd) is a locally rooted engineering and
              construction firm serving Rwanda. We combine technical excellence
              with responsible site practices and community engagement —
              delivering projects on time and within budget.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>
                <strong>Vision:</strong> To be Rwanda's most trusted partner in
                infrastructure development.
              </li>
              <li>
                <strong>Mission:</strong> Deliver safe, sustainable and
                value-driven construction solutions.
              </li>
              <li>
                <strong>Certifications:</strong> Local contractor registration,
                project completion certificates (placeholders).
              </li>
            </ul>
          </div>

          <div>
            <div className="rounded-lg bg-gradient-to-br from-indigo-600 to-green-400 p-6 text-white shadow-lg">
              <h4 className="text-xl font-semibold">Safety & Sustainability</h4>
              <p className="mt-3 text-sm">
                We embed safety practices and environmental safeguards into
                every project: waste management, erosion control, and community
                consultation.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-xs">HSE Score</div>
                  <div className="text-lg font-bold">92%</div>
                </div>
                <div className="bg-white/10 p-4 rounded">
                  <div className="text-xs">Local Hires</div>
                  <div className="text-lg font-bold">78%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-indigo-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-lg shadow-lg p-8 grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-gray-600">
                For quotations, partnerships or careers, reach out and we'll
                respond within 2 business days.
              </p>

              <div className="mt-6 space-y-4 text-sm text-gray-700">
                <div>
                  <strong>Office:</strong>
                  <div>Kigali, Rwanda (placeholder address)</div>
                </div>
                <div>
                  <strong>Email:</strong>
                  <div>info@gemt.rw</div>
                </div>
                <div>
                  <strong>Phone:</strong>
                  <div>+250 78X XXX XXX</div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a href="#" className="text-sm">
                  LinkedIn
                </a>
                <a href="#" className="text-sm">
                  Facebook
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  placeholder="you@domain.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
                  rows={4}
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} GEMT Construction. All rights reserved.
          </div>
          <div className="text-sm text-gray-600">
            Building your vision, on a foundation of excellence and concrete
            results.
          </div>
        </div>
      </footer>
    </div>
  );
}
