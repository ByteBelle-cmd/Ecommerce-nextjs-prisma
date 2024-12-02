
import AboutUs from '@/components/AboutUs';
import Benefits from '@/components/benefits';
import BlackFriday from '@/components/BlackFriday';
import FeaturedProducts from '@/components/FeaturesProducts';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';

import { currentUser, auth } from '@clerk/nextjs/server';



export default async function Home() {
  const user = await currentUser();
  console.log(user?.id);

  const { userId } = await auth();
  console.log(userId, "userId");

  return (

    <>
      <Hero />
      <FeaturedProducts />
      <BlackFriday />
      <AboutUs />
      <HowItWorks />
      <Testimonials />
      <Benefits />
      <Footer />
    </>

  );
}

