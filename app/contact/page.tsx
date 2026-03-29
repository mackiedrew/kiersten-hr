import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Fractional HR Support",
  description:
    "Get in touch with Fractional HR Support for a free consultation.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            Get in <span className="highlight">Touch</span>
          </h1>
          <p>
            We typically respond within one business day. We would love to hear
            about your business and how we can help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-form text-center">
            <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "2em" }}>
              Ready to talk HR? Send us an email and we will get back to you
              within one business day.
            </p>
            <a
              href="mailto:ksanchez.fractionalhr@gmail.com"
              className="btn btn-gold"
              style={{ fontSize: "1.1rem" }}
            >
              Send Us an Email
            </a>

            <div style={{ marginTop: "3em", color: "#666" }}>
              <p style={{ marginBottom: "0.5em" }}>
                <strong>Location:</strong> Eastern Ontario, Canada
              </p>
              <p>
                <strong>Serving:</strong> All of North America
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
