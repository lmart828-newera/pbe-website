"use client";

import Link from "next/link";
import styles from "./NavLinks.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  {
    href: "/gen-b",
    label: "GEN-B",
    children: [
      { href: "/gen-b", label: "GEN-B Overview" },
      { href: "/gen-b/sweep", label: "SWEEP Engineering Note" },
      {
        href: "/gen-b/algorithmic-tone-generation",
        label: "Algorithmic Tone Engineering Note",
      },
      {
        href: "/gen-b/ebu-color-bars-75-100",
        label: "EBU Color Bars Engineering Note",
      },
      {
        href: "/gen-b/standards-mathematics-television",
        label: "Standards & Mathematics Engineering Note",
      },
      { href: "/gen-b/wireless-output", label: "Wireless Output" },
    ],
  },
  {
    href: "/pixelscope",
    label: "PixelScope",
    children: [
      { href: "/pixelscope", label: "PixelScope Overview & Support" },
      {
        href: "/pixelscope/from-patterns-to-evidence",
        label: "PixelScope Engineering Note",
      },
    ],
  },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname, href) {
  if (pathname.startsWith("/legal")) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [suppressedDropdownHref, setSuppressedDropdownHref] = useState(null);

  return (
    <>
      <button
        className={`nav-menu-toggle${isOpen ? " open" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => {
          setSuppressedDropdownHref(null);
          setIsOpen((open) => !open);
        }}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`${styles.links} nav-links${isOpen ? " nav-links-open" : ""}`}
      >
        {navItems.map((item) => {
          const isActive = isActivePath(pathname, item.href);

          if (item.children?.length) {
            return (
              <div
                className={`nav-item-with-dropdown${
                  !isOpen && suppressedDropdownHref === item.href
                    ? " nav-dropdown-suppressed"
                    : ""
                }`}
                key={item.href}
              >
                <Link
                  href={item.href}
                  className={`nav-parent-link${isActive ? " active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onMouseEnter={() => setSuppressedDropdownHref(null)}
                  onClick={() => {
                    setSuppressedDropdownHref(null);
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </Link>

                <div className="nav-dropdown" aria-label={`${item.label} links`}>
                  {item.children.map((child) => {
                    const childIsActive = isActivePath(pathname, child.href);

                    return (
                      <Link
                        href={child.href}
                        className={childIsActive ? "active" : undefined}
                        aria-current={childIsActive ? "page" : undefined}
                        key={child.href}
                        onClick={() => {
                          setSuppressedDropdownHref(item.href);
                          setIsOpen(false);
                        }}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          return (
            <Link
              href={item.href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
              key={item.href}
              onClick={() => {
                setSuppressedDropdownHref(null);
                setIsOpen(false);
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
