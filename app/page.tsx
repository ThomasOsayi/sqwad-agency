import Background from '@/components/Background';
import CaseStudy from '@/components/CaseStudy';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import Offer from '@/components/Offer';
import Proof from '@/components/Proof';
import ScrollProgress from '@/components/ScrollProgress';
import System from '@/components/System';
import WhoFor from '@/components/WhoFor';

export default function Home() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Proof />
        <Offer />
        <System />
        <CaseStudy />
        <WhoFor />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}