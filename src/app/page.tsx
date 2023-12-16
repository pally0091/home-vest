import Banner from "../components/Banner";
import ProgressBanner from "../components/ProgressBanner";
import MapSection from "../components/MapSection";
import PropertySlide from "../components/PropertySlide";
import InvestSection from "../components/InvestSection";
import InvestmentCalculator from "../components/InvestmentCalculator";
import Faq from "../components/Faq";
import JoinInvestorSection from "../components/JoinInvestorSection";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Banner />
      <ProgressBanner />
      <MapSection />
      <PropertySlide />
      <InvestSection />
      <InvestmentCalculator />
      <Faq />
      <JoinInvestorSection />
      <Footer />
    </>
  );
}
