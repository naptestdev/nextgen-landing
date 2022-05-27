import BottomSection from "../components/BottomSection";
import EventInfo from "../components/EventInfo";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Mentor from "../components/Mentor";
import Speakers from "../components/Speakers";

export default function About() {
  return (
    <>
      <HeroSection />
      <EventInfo />
      <Speakers />
      <Mentor />
      <BottomSection />
      <Footer />
    </>
  );
}
