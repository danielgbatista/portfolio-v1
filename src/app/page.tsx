import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects"; 
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
