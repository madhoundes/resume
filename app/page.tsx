import Hero from '@/components/home/hero';
import FeaturedWork from '@/components/home/featured-work';
import Expertise from '@/components/home/expertise';
import Metrics from '@/components/home/metrics';
import CTA from '@/components/home/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Expertise />
      <Metrics />
      <CTA />
    </>
  );
}
