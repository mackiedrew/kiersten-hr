import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Fractional HR Support",
  description:
    "HR services offered by Fractional HR Support — audits, compliance, investigations, AODA, pay equity, and more.",
};

const services = [
  {
    icon: "📋",
    title: "HR Audits",
    description:
      "Comprehensive reviews of your HR policies, practices, and documentation to identify gaps and opportunities.",
  },
  {
    icon: "📖",
    title: "Employee Handbooks & Policy Development",
    description:
      "Custom employee handbooks and workplace policies that reflect your culture and meet legal requirements.",
  },
  {
    icon: "🤝",
    title: "Onboarding Programs",
    description:
      "Structured onboarding processes that set new employees up for success from day one.",
  },
  {
    icon: "⚖️",
    title: "Compliance & Employment Standards",
    description:
      "Ensure your organization stays current with provincial and federal employment legislation.",
  },
  {
    icon: "♿",
    title: "AODA Compliance",
    description:
      "Accessibility for Ontarians with Disabilities Act compliance support, from policy development to training.",
  },
  {
    icon: "💰",
    title: "Pay Equity",
    description:
      "Pay equity reviews and implementation support to meet your legal obligations and build equitable compensation practices.",
  },
  {
    icon: "🔍",
    title: "Workplace Investigations",
    description:
      "Impartial, thorough investigations into harassment, discrimination, and workplace misconduct complaints.",
  },
  {
    icon: "📈",
    title: "Performance Management",
    description:
      "Performance frameworks, review processes, and coaching support to drive employee growth and accountability.",
  },
  {
    icon: "🎓",
    title: "Training & Development",
    description:
      "Customized HR training for managers and employees on topics ranging from respectful workplace to employment standards.",
  },
  {
    icon: "🌍",
    title: "DEI Initiatives",
    description:
      "Diversity, equity, and inclusion strategy and implementation support tailored to your organization.",
  },
  {
    icon: "📝",
    title: "Termination Support",
    description:
      "Guidance on termination processes, severance, and documentation to protect your organization and treat employees with dignity.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            Our <span className="highlight">Services</span>
          </h1>
          <p>
            Practical, strategic HR support across the full employee lifecycle.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What We Offer</h2>
          <p className="section-intro">
            From foundational policy work to complex employee relations, we
            bring the HR expertise your business needs.
          </p>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {services.map((service) => (
              <div key={service.title} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy text-center">
        <div className="container">
          <h2>Not Sure What You Need?</h2>
          <p style={{ color: "#c8cdd8", maxWidth: 600, margin: "0 auto 1.5em" }}>
            That is okay — most of our clients start with a conversation. Let us
            figure out the best approach together.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
