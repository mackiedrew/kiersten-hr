import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Fractional HR Support",
  description:
    "Learn about Fractional HR Support — our philosophy, credentials, and the industries we serve.",
};

const industries = [
  "Professional Services",
  "Healthcare",
  "Non-Profit",
  "Construction & Trades",
  "Retail & Hospitality",
  "Technology",
  "Manufacturing",
  "Education",
  "Government & Public Sector",
];

export default function AboutPage() {
  return (
    <>
      <section className="hero" style={{ padding: "50px 20px" }}>
        <div className="container">
          <h1>
            About <span className="highlight">Fractional HR Support</span>
          </h1>
          <p>Expert HR leadership, tailored to your business.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our Philosophy</h2>
          <div className="about-philosophy">
            <p>
              Every business — no matter its size — deserves access to
              experienced, strategic human resources guidance. We believe that
              strong HR practices are the foundation of a thriving workplace:
              they protect your organization, empower your people, and set you
              up for sustainable growth.
            </p>
            <p>
              Our approach is grounded in three core principles:{" "}
              <strong>Fairness</strong>, <strong>Compliance</strong>, and{" "}
              <strong>Practicality</strong>. We do not believe in one-size-fits-all
              solutions. We take the time to understand your business, your
              culture, and your goals — then deliver HR support that actually
              fits.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Credentials &amp; Background</h2>
          <div className="about-philosophy">
            <p>
              Our team brings years of hands-on HR experience across a wide
              range of industries and organization sizes. We have supported
              businesses through complex employee relations matters, built HR
              functions from the ground up, and helped organizations navigate
              ever-changing employment legislation.
            </p>
            <p>
              <em>
                Placeholder: Add specific designations here (e.g., CHRP, CHRL,
                or other certifications).
              </em>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Industries We Serve</h2>
          <p className="section-intro">
            We work with businesses across a broad range of sectors throughout
            North America.
          </p>
          <div className="industries-grid">
            {industries.map((industry) => (
              <span key={industry} className="industry-tag">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy text-center">
        <div className="container">
          <h2>Let&apos;s Talk About Your HR Needs</h2>
          <p style={{ color: "#c8cdd8", maxWidth: 600, margin: "0 auto 1.5em" }}>
            Ready to bring strategic HR expertise to your organization? We would
            love to connect.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
