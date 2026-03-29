import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Fractional HR Support",
  description:
    "Fractional HR Support — Expert HR guidance for businesses across North America without the full-time commitment.",
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            HR Expertise, <span className="highlight">Fractionally Yours</span>
          </h1>
          <p>
            Small and mid-sized businesses deserve the same calibre of HR
            leadership as the big players — without the full-time price tag. We
            provide hands-on, strategic human resources support tailored to your
            needs.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Book a Free Consultation
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why Fractional HR?</h2>
          <p className="section-intro">
            You get seasoned HR professionals who integrate with your team on a
            part-time or project basis — so you only pay for what you need.
          </p>
          <div className="card-grid">
            <div className="card">
              <h3>Cost-Effective</h3>
              <p>
                Access senior HR expertise at a fraction of the cost of a
                full-time hire. Scale up or down as your business evolves.
              </p>
            </div>
            <div className="card">
              <h3>Compliance Confidence</h3>
              <p>
                Stay on top of employment standards, AODA, pay equity, and
                workplace legislation so you can focus on running your business.
              </p>
            </div>
            <div className="card">
              <h3>People-First Approach</h3>
              <p>
                We believe great workplaces start with great people practices.
                From onboarding to offboarding, we have you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt text-center">
        <div className="container">
          <h2>Ready to Strengthen Your HR?</h2>
          <p className="section-intro">
            Whether you need a full HR audit, help with a tricky employee
            situation, or ongoing strategic support, we are here to help.
          </p>
          <Link href="/services" className="btn btn-navy">
            View Our Services
          </Link>
          &nbsp;&nbsp;
          <Link href="/contact" className="btn btn-outline">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
