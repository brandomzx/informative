"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about-us" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only prevent default for anchor links
    if (href.startsWith("#")) {
      e.preventDefault()
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)

      if (element) {
        // Close mobile menu if open
        setIsMenuOpen(false)

        // Scroll to the element with smooth behavior
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://source.unsplash.com/random/100x100/?logo,icon"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-xl font-semibold">MyCompany</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
            <Button>Contact Us</Button>
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="mt-4">
                <Button className="w-full">Contact Us</Button>
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

