import SectionWrapper from "./SectionWrapper";

interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  type: string;
  description: string;
  stats?: { val: string; label: string }[];
}

const experiences: ExperienceEntry[] = [
  {
    period: "2026 – Present",
    role: "AI/ML Engineering Experience",
    org: "Independent · Project-Based",
    type: "Computer Vision & ML-Driven Security",
    description:
      "Developing end-to-end machine learning systems, training CNN, SVM, and NLP models, performing feature engineering and evaluation, and deploying Flask APIs integrated into Android applications such as phishing detection tools.",
  },
  {
    period: "2023 – 2025",
    role: "Freelance Full Stack Software Developer",
    org: "Freelance · Remote",
    type: "Project-Based",
    description:
      "Working as a remote freelance software developer, focusing on websites and mobile applications. Experienced in system assistance, automation, and technical support. Collaborates with clients on custom solutions, portfolio websites, and prototype-level applications.",
  },
  {
    period: "2024 – 2025",
    role: "Recruitment Officer",
    org: "Honor Deployment",
    type: "On-site",
    description:
      "Recruitment Officer / Processing Support / Data Entry. Assisted applicants with documentation, data encoding, and record verification while ensuring accuracy and compliance throughout the recruitment and deployment process.",
  },
  {
    period: "2021 – Present",
    role: "Online Administrative Assistant",
    org: "Freelance · Remote",
    type: "Government Services",
    description:
      "Managed government service appointments and documentation efficiently. Handled email correspondence, scheduling, and record management with exceptional accuracy and efficiency.",
    stats: [
      { val: "200+", label: "Transactions" },
      { val: "98%", label: "Accuracy" },
      { val: "-90%", label: "Wait Time" },
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" label="05 / EXPERIENCE">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          WORK <span className="neon-text">EXPERIENCE</span>
        </h2>
        <p className="text-gray-500 mt-4 text-sm tracking-wider">
          Professional journey and milestones
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line (desktop) / Left line (mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon to-transparent shadow-[0_0_8px_#39ff14] -translate-x-1/2" />
        <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon to-transparent shadow-[0_0_8px_#39ff14]" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-8 ${
                i % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } flex-col md:flex-row`}
            >
              {/* Desktop: Half spacer */}
              <div className="hidden md:block flex-1" />

              {/* Node */}
              <div className="absolute md:left-1/2 left-5 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-neon shadow-neon border-2 border-dark flex-shrink-0" />

              {/* Card */}
              <div className="flex-1 ml-12 md:ml-0">
                <div className="glass-card rounded-xl p-6 group">
                  {/* Period */}
                  <span className="text-xs text-neon tracking-widest font-mono mb-3 block">
                    {exp.period}
                  </span>

                  {/* Role */}
                  <h3 className="font-display text-base font-bold text-white mb-1 tracking-wide">
                    {exp.role}
                  </h3>

                  {/* Org + Type */}
                  <p className="text-xs text-gray-500 mb-4 tracking-wider">
                    {exp.org}{" "}
                    <span className="text-neon/40">·</span>{" "}
                    {exp.type}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Stats */}
                  {exp.stats && (
                    <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-neon/10">
                      {exp.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="font-display text-lg font-bold neon-text">
                            {stat.val}
                          </div>
                          <div className="text-[10px] text-gray-500 tracking-wider mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
