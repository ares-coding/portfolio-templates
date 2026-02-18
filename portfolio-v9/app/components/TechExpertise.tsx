import SectionWrapper from "./SectionWrapper";

interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  color: string;
}

const cards: ExpertiseCard[] = [
  {
    icon: "◈",
    title: "Machine Learning",
    description:
      "Designed and trained CNN, SVM, and hybrid models with structured feature engineering and evaluation workflows.",
    tags: ["TensorFlow", "Keras", "Scikit-learn", "OpenCV", "NumPy", "Pandas"],
    color: "from-neon/20 to-transparent",
  },
  {
    icon: "◇",
    title: "Full Stack Dev",
    description:
      "Developed responsive interfaces, integrated REST APIs, and built backend logic for deployment-ready applications.",
    tags: ["Python", "Java", "Tailwind CSS", "React", "Flask", "REST API", "Android"],
    color: "from-blue-500/10 to-transparent",
  },
  {
    icon: "⬡",
    title: "Security & NLP",
    description:
      "Built ML-driven security systems for phishing detection, malicious URL classification, and SQL injection analysis.",
    tags: ["TF-IDF", "NLP", "SVM", "Feature Engineering", "Phishing Detection", "URL Analysis", "SQL Injection"],
    color: "from-red-500/10 to-transparent",
  },
];

export default function TechExpertise() {
  return (
    <SectionWrapper id="expertise" label="02 / EXPERTISE">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          TECHNICAL <span className="neon-text">EXPERTISE</span>
        </h2>
        <p className="text-gray-500 mt-4 text-sm tracking-wider">
          Core areas of specialization
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="glass-card rounded-xl p-8 group relative overflow-hidden cursor-default"
          >
            {/* Gradient bg */}
            <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg border border-neon/30 flex items-center justify-center mb-6 group-hover:border-neon group-hover:shadow-neon transition-all duration-300">
                <span className="text-xl neon-text">{card.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-white mb-3 tracking-wider">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2.5 py-1 rounded border border-neon/20 text-neon/70 tracking-wider group-hover:border-neon/40 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
