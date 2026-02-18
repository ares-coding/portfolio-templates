import SectionWrapper from "./SectionWrapper";

const highlights = [
  {
    icon: "⚙",
    title: "Debugging",
    desc: "Sharp analytical skills to identify and resolve complex system issues efficiently.",
  },
  {
    icon: "◈",
    title: "System Analysis",
    desc: "Comprehensive evaluation of architectures to design optimized, scalable solutions.",
  },
  {
    icon: "◇",
    title: "Problem Solving",
    desc: "Methodical, structured approach to breaking down and solving technical challenges.",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about" label="01 / ABOUT">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            WHO IS <span className="neon-text">AU?</span>
          </h2>
          <div className="space-y-4 text-gray-400 text-sm leading-7">
            <p>
              Au Amores is a Computer Science graduate and an aspiring AI/ML
              Engineer and Software Developer with hands-on experience in
              building machine learning systems, computer vision models, and
              security-focused applications. His work centers on developing
              intelligent solutions that bridge artificial intelligence and
              real-world software deployment.
            </p>
            <p>
              He has developed projects involving CNN-based image processing,
              hybrid CNN-SVM classification models, phishing detection using
              NLP, malicious URL detection, SQL injection detection, and Android
              applications integrated with machine learning APIs. His thesis,
              "Detecting Alcohol Intoxication Using Image Processing," applies
              deep learning and classical machine learning techniques for
              real-world classification tasks.
            </p>
            <p>
              With a strong foundation in Python, Flask, JavaScript, and modern
              web technologies, he is experienced in the full development
              lifecycle — from data preparation and model training to backend
              API development and system integration. He also applies secure
              coding practices and focuses on building scalable, structured, and
              production-ready systems.
            </p>
            <p>
              Coming from a technical support background, he brings strong
              debugging, system analysis, and problem-solving skills into his
              development workflow. He is continuously expanding his expertise
              in model deployment, AI-driven security systems, and full-stack
              development.
            </p>
            <p>
              He is actively seeking opportunities in Software Development,
              Artificial Intelligence, and Machine Learning where he can
              contribute to building intelligent, secure, and impactful systems.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-4">
          <h3 className="font-display text-lg text-gray-500 tracking-widest mb-6">
            CORE STRENGTHS
          </h3>
          {highlights.map((h) => (
            <div
              key={h.title}
              className="glass-card rounded-lg p-6 group cursor-default"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl neon-text group-hover:scale-110 transition-transform duration-300 leading-none mt-0.5">
                  {h.icon}
                </span>
                <div>
                  <h4 className="font-display text-sm font-bold text-white mb-2 tracking-wider">
                    {h.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { val: "20+", label: "Projects" },
              { val: "3+", label: "Years Dev" },
              { val: "200+", label: "Transactions" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-lg p-4 text-center"
              >
                <div className="font-display text-2xl font-bold neon-text">
                  {stat.val}
                </div>
                <div className="text-xs text-gray-500 mt-1 tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
