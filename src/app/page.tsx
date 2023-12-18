import Banner from "../components/Banner";
import ProgressBanner from "../components/ProgressBanner";
import MapSection from "../components/MapSection";
import PropertySlide from "../components/PropertySlide";
import InvestSection from "../components/InvestSection";
import InvestmentCalculator from "../components/InvestmentCalculator";
import Faq from "../components/Faq";
import JoinInvestorSection from "../components/JoinInvestorSection";
import MobileAppView from "@/components/MobileAppView";
import TestProject from "@/components/TestProject";
import InvestmentCalculation from "@/components/InvestmentCalculation";
import GreenBanner from "@/components/GreenBanner";

export default function Home() {
  return (
    <>
      <Banner />
      <ProgressBanner />
      <MapSection />
      <GreenBanner />
      <PropertySlide />
      <MobileAppView />
      <InvestSection />
      <InvestmentCalculation />
      {/* <InvestmentCalculator /> */}
      <Faq />
      <JoinInvestorSection />
      {/* <TestProject /> */}
    </>
  );
}
