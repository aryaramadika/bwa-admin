
import AOS from 'aos';
import React, { useEffect } from 'react';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedTherapist from '../components/organisms/FeaturedTherapist';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';

export default function Home () {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
   <Navbar />
   <MainBanner />
   <TransactionStep />
   <FeaturedTherapist />
   <Reached />
   <Story />
   <Footer />




</>
  )
}


