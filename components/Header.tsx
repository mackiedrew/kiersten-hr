"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-wrapper">
        <Link href="/" className="site-logo">
          <Image
            src="/img/logo-placeholder.svg"
            alt="Fractional HR Support"
            width={40}
            height={40}
            priority
          />
          Fractional <span>HR Support</span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="Open navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links${open ? " open" : ""}`}>
          {navItems.map(({ label, href }) => {
            const isActive =
              href === "/"
                ? pathname === "/" || pathname === ""
                : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={isActive ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
