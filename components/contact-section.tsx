"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logic to send the form would go here
    console.log(formData)
    alert("Message sent successfully!")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contact</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Do you have any questions or are you interested in our services? Don't hesitate to contact us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-muted-foreground">123 Main Street, City, Country</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">info@mycompany.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+1 123 456 7890</p>
              </div>
            </div>

            <div className="pt-4">
              <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <img
                  src="https://source.unsplash.com/random/800x400/?map,city"
                  alt="Location map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input placeholder="Full name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

