import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | Fractional HR Support",
  description: "Frequently asked questions about fractional HR services.",
};

export const faqs = [
  {
    question: "What is fractional HR?",
    answer:
      "Fractional HR means you get an experienced HR professional working with your organization on a part-time or project basis — not a full-time employee. You get the expertise you need, exactly when you need it, without the overhead of a full-time hire.",
  },
  {
    question: "Does 'fractional' mean I only get a tiny fraction of a suit?",
    answer:
      "Ha — no suits required. 'Fractional' refers to the engagement model: you get a fraction of our time (say, 10 hours a month) but 100% of our expertise. Think of it as a senior HR professional on your team, just not full-time.",
  },
  {
    question: "How much does fractional HR cost?",
    answer:
      "Pricing depends on the scope and frequency of support. We offer project-based engagements and ongoing retainer arrangements. Reach out for a free consultation and we will put together a proposal that fits your budget.",
  },
  {
    question: "Can you work alongside our existing HR team?",
    answer:
      "Absolutely. Many of our clients have an internal HR coordinator or generalist and bring us in for senior-level strategy, complex employee relations matters, or specialized projects like pay equity or AODA compliance.",
  },
  {
    question: "Do you handle workplace investigations?",
    answer:
      "Yes. We conduct impartial workplace investigations into harassment, discrimination, and misconduct complaints. We follow a structured, fair process and provide a written report with findings and recommendations.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We have experience across professional services, healthcare, non-profit, construction and trades, retail, technology, manufacturing, education, and the public sector. If your business has employees, we can help.",
  },
  {
    question: "Do you only work with Ontario businesses?",
    answer:
      "We are based in Eastern Ontario but work with clients across Canada and the United States. Many of our engagements are conducted virtually, which makes geography a non-issue.",
  },
  {
    question: "Can you help us with AODA and pay equity?",
    answer:
      "Yes — both are areas we specialize in. We can help you understand your obligations, develop the required policies and plans, and implement the necessary changes to bring your organization into compliance.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Usually quickly. After our initial consultation we can typically begin within a week or two, depending on the nature of the work. For urgent matters — like an active workplace investigation — we prioritize accordingly.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            Frequently Asked <span className="highlight">Questions</span>
          </h1>
          <p>
            Everything you need to know about working with Fractional HR
            Support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      <section className="section section-alt text-center">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p className="section-intro">
            We are happy to chat. Reach out and we will get back to you within
            one business day.
          </p>
          <Link href="/contact" className="btn btn-gold">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
