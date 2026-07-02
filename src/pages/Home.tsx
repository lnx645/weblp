import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
    </div>
  );
}
