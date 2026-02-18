import SectionWrapper from "./SectionWrapper";

interface StackCategory {
  label: string;
  items: string[];
}

const stack: StackCategory[] = [
  {
    label: "Machine Learning & AI",
    items: [
      "TensorFlow", "Keras", "PyTorch", "OpenCV", "MediaPipe", "OpenAI",
      "Google Colab", "Kaggle", "Scikit-Learn", "NumPy", "Pandas",
      "Matplotlib", "NLP", "Gradio", "Seaborn", "XGBoost", "Streamlit",
      "CNN", "SVM", "YOLO", "Jupyter",
    ],
  },
  {
    label: "Languages & Frameworks",
    items: [
      "Python", "HTML", "CSS", "JavaScript", "Java", "Bootstrap",
      "React", "Node.js", "Tailwind CSS", "PHP", "MySQL", "SQLite",
      "Express", "REST API", "SQLAlchemy", "Flask",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "Git", "GitHub", "Android Studio", "VS Code", "Thunder Client",
      "Docker", "Vercel", "Figma", "PyCharm", "Anaconda", "Netlify", "Photoshop",
    ],
  },
];

export default function TechStackGrid() {
  return (
    <SectionWrapper id="stack" label="03 / TECH STACK">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          FULL <span className="neon-text">TECH STACK</span>
        </h2>
        <p className="text-gray-500 mt-4 text-sm tracking-wider">
          Tools and technologies I work with
        </p>
      </div>

      <div className="space-y-10">
        {stack.map((category) => (
          <div key={category.label} className="glass-card rounded-xl p-8">
            <h3 className="font-display text-sm font-bold text-neon tracking-widest mb-6">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-2 rounded border border-neon/15 text-gray-400 tracking-wider hover:border-neon/50 hover:text-neon hover:shadow-neon hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
