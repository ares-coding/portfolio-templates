"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    alert("Message sent! (Frontend demo)");
  };

  const inputClass =
    "w-full bg-dark-3 border border-neon/15 rounded px-4 py-3 text-sm text-gray-300 placeholder-gray-600 neon-input transition-all duration-200 font-mono";

  return (
    <SectionWrapper id="contact" label="06 / CONTACT">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          GET IN <span className="neon-text">TOUCH</span>
        </h2>
        <p className="text-gray-500 mt-4 text-sm tracking-wider">
          Open to opportunities, collaborations, and conversations
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Info */}
        <div>
          <h3 className="font-display text-xl font-bold text-white mb-6">
            Let&apos;s build something{" "}
            <span className="neon-text">intelligent</span> together.
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Whether you have a project idea, an opportunity in AI/ML or software
            development, or just want to connect — I&apos;d love to hear from
            you.
          </p>

          <div className="space-y-4">
            {[
              { icon: "@", label: "Email", value: "auamores3@gmail.com" },
              {
                icon: "GH",
                label: "GitHub",
                value: "https://github.com/ares-coding",
              },
              {
                icon: "LI",
                label: "LinkedIn",
                value: "https://www.linkedin.com/in/au-amores/",
              },
            ].map((contact) => (
              <div
                key={contact.label}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded border border-neon/20 flex items-center justify-center text-xs text-neon group-hover:border-neon group-hover:shadow-neon transition-all duration-300">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-600 tracking-wider">
                    {contact.label}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-neon transition-colors duration-300">
                    {contact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="mt-10 flex items-center gap-3 glass-card rounded-lg px-5 py-3 inline-flex">
            <span className="w-2 h-2 rounded-full bg-neon animate-pulse shadow-neon" />
            <span className="text-xs text-gray-400 tracking-wider">
              Available for new projects —{" "}
              <span className="text-neon">Let&apos;s connect</span>
            </span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-500 tracking-wider mb-2">
                NAME
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 tracking-wider mb-2">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@email.com"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-500 tracking-wider mb-2">
              SUBJECT
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project Inquiry / Opportunity / Collaboration"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-xs text-gray-500 tracking-wider mb-2">
              MESSAGE
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or opportunity..."
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-neon text-dark font-display font-bold text-sm tracking-widest hover:shadow-neon-lg transition-all duration-300 hover:scale-[1.01] rounded"
          >
            SEND MESSAGE →
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
