import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
   <section>
     <Hero></Hero>
     <ProductHighlights></ProductHighlights>
    <About></About>
    <Testimonials></Testimonials>
    <CTA></CTA>
   </section>
  );
}
