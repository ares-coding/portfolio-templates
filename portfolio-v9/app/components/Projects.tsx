import SectionWrapper from "./SectionWrapper";

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

const projects: Project[] = [
  {
    title: "Alcohol Intoxication Detection",
    description:
      "Thesis project applying CNN and hybrid CNN-SVM models to detect alcohol intoxication through image processing. Implements deep learning pipelines with structured feature engineering and real-world evaluation.",
    tags: ["CNN", "SVM", "OpenCV", "TensorFlow", "Python", "Flask"],
    gradient: "from-neon/30 via-green-900/20 to-dark-3",
  },
  {
    title: "PhishGuard AI",
    description:
      "NLP-powered phishing detection system integrated into an Android application via Flask REST API. Uses TF-IDF feature extraction and machine learning classification to identify malicious content.",
    tags: ["NLP", "TF-IDF", "Flask", "Android", "Python", "REST API"],
    gradient: "from-blue-600/20 via-blue-900/10 to-dark-3",
  },
  {
    title: "JWT Authentication System",
    description:
      "Secure full-stack authentication system built with JWT tokens, refresh token rotation, and role-based access control. Follows secure coding principles for production-grade deployment.",
    tags: ["JWT", "Python", "Flask", "SQLAlchemy", "Security", "REST API"],
    gradient: "from-yellow-500/15 via-yellow-900/10 to-dark-3",
  },
  {
    title: "Malicious URL Detection",
    description:
      "Machine learning system that classifies URLs as benign or malicious using feature engineering on URL structure, lexical patterns, and hostname characteristics with an SVM classifier.",
    tags: ["SVM", "Feature Engineering", "Python", "Scikit-learn", "URL Analysis"],
    gradient: "from-red-600/20 via-red-900/10 to-dark-3",
  },
  {
    title: "SQL Injection Detection",
    description:
      "Security-focused ML model trained to detect SQL injection patterns in input queries. Applies NLP preprocessing and classification to identify and flag malicious database queries.",
    tags: ["NLP", "SVM", "Security", "Python", "SQL", "ML"],
    gradient: "from-orange-500/15 via-orange-900/10 to-dark-3",
  },
  {
    title: "Portfolio Websites",
    description:
      "Custom portfolio and landing page websites developed for clients using modern web technologies. Fully responsive, performance-optimized, and deployed on Vercel and Netlify.",
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "Netlify", "TypeScript"],
    gradient: "from-purple-600/15 via-purple-900/10 to-dark-3",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects" label="04 / PROJECTS">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          FEATURED <span className="neon-text">PROJECTS</span>
        </h2>
        <p className="text-gray-500 mt-4 text-sm tracking-wider">
          Selected work across AI, ML, and full-stack development
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glass-card rounded-xl overflow-hidden group flex flex-col"
          >
            {/* Thumbnail */}
            <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-neon/30 group-hover:border-neon group-hover:shadow-neon transition-all duration-500 flex items-center justify-center">
                  <span className="text-neon text-2xl group-hover:scale-110 transition-transform duration-300">◈</span>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-neon/30 group-hover:border-neon transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-neon/30 group-hover:border-neon transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-display text-sm font-bold text-white mb-3 tracking-wider leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-2 py-0.5 rounded border border-neon/15 text-neon/60 tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                
                <button className="flex-1 py-2 text-xs border border-gray-700 text-gray-400 rounded hover:border-gray-500 hover:text-gray-200 font-bold tracking-widest transition-all duration-200">
                  REPO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
