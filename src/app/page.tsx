// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Feature from "./feature";
import GreenFuturesFoundation from "./green-futures-foundation/page";
import Faqs from "./faqs";
import Testimonials from "./testimonials/page";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <GreenFuturesFoundation />
      <Footer />
    </>
  );
}