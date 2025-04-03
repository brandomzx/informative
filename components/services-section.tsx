"use client"

import { useState } from "react"
import { ArrowRight, BarChart, Globe, Lightbulb, Smartphone } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Sample images for service cards
const serviceImages = [
  "https://source.unsplash.com/random/600x400/?web,code",
  "https://source.unsplash.com/random/600x400/?mobile,app",
  "https://source.unsplash.com/random/600x400/?marketing,digital",
  "https://source.unsplash.com/random/600x400/?consulting,business",
]

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description: "We create modern, responsive, and SEO-optimized websites that perfectly represent your brand.",
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Applications",
      description: "We develop native and hybrid applications for iOS and Android with exceptional user experiences.",
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Digital Marketing",
      description:
        "Customized digital marketing strategies to increase your online visibility and generate more customers.",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Consulting",
      description: "Strategic advice to optimize your business processes and maximize your performance.",
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of services designed to help you achieve your business goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "transition-all duration-300 hover:shadow-lg overflow-hidden",
                hoveredIndex === index ? "border-primary" : "",
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={serviceImages[index] || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="text-primary mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-primary">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

