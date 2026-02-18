import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Au.dev — AI/ML Engineer & Software Developer",
  description:
    "Portfolio of Au Amores — AI/ML Engineer, Software Developer specializing in machine learning, computer vision, and security-focused applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark text-gray-200 font-mono antialiased">
        {/* Ambient background effects */}
        <div className="particles" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
        <div className="grid-overlay" aria-hidden="true" />
        <div className="scan-line" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
