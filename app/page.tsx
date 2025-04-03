import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background image for the entire page */}
      <div
        className="fixed inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: "url('https://source.unsplash.com/random/1920x1080/?pattern,abstract')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

