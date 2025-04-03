import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 -z-10" />
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Innovative solutions for your business
            </h1>
            <p className="text-muted-foreground md:text-xl">
              We offer high-quality services designed to drive your company's growth and maximize your potential in the
              market.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg">Learn More</Button>
              <Button size="lg" variant="outline">
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative h-[350px] w-full rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 z-10 rounded-lg" />
            <img
              src="https://source.unsplash.com/random/1200x600/?business,office"
              alt="Hero Image"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

