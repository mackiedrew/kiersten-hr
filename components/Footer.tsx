import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Fractional HR Support</h4>
          <p>Expert HR guidance without the full-time commitment.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/resources">Resources</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <ul>
            <li><Link href="/contact">Contact Form</Link></li>
            <li>Eastern Ontario, Canada</li>
            <li>Serving all of North America</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Fractional HR Support. All rights reserved.</p>
      </div>
    </footer>
  );
}
