import Navbar from "@/components/core/Navbar/Navbar";
import Footer from "@/components/core/Footer/Footer";
import Carousel from "@/components/core/Carousel/Carousel";
import HeroCard from "@/components/core/HeroCard/HeroCard";
import Heading from "@/components/core/Heading/Heading";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Carousel />
      <Heading />
      <HeroCard />
      <Footer />
    </main>
  );
}
