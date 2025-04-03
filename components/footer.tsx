"use client"

import type React from "react"

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default for anchor links
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)

      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">MyCompany</h3>
            <p className="text-slate-400 text-sm">We offer innovative solutions to drive your business growth.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "#about-us")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "#services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "#services")}
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "#services")}
                >
                  Mobile Applications
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "#services")}
                >
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-slate-400 hover:text-white transition-colors"
                  onClick={(e) => handleNavClick(e, "#services")}
                >
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-slate-400 space-y-2">
              <p>123 Main Street</p>
              <p>City, Country</p>
              <p>info@mycompany.com</p>
              <p>+1 123 456 7890</p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

