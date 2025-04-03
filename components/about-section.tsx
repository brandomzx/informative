import { CheckCircle } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Us</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We are a team of professionals dedicated to providing innovative and high-quality solutions for businesses
            of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-muted-foreground">
              Our mission is to help businesses reach their full potential through customized and strategic solutions
              that drive growth and innovation.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <p>Over 10 years of industry experience</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <p>Team of highly qualified professionals</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <p>Customized solutions for each client</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                <p>Commitment to excellence and innovation</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://source.unsplash.com/random/800x600/?team,people,office"
              alt="Our team"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

