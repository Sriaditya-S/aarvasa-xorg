import React from 'react'
import Navbar from '@/dark/components/Navbar'
import Info from '../components/About/Info'
import Team from '../components/About/Team'
import Milestones from '../components/About/Milestones'
import { Geographic } from "../components/Home/Geographic"
import ContactUs from '../components/About/ContactUs'
import CoPartners from '../components/About/CoPartners'
import Map from '../components/Home/Map'
import Slider from '../components/About/Slider'
import Page from '../components/listing/Page'
import NavbarRaw from '../components/NavbarRaw'
import Footer from '../components/Footer'
import { useRef } from 'react'
const About = () => {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>

      <div className='bg-[#000000] overfl pt-[80px] pb-[100px]'>
        <Page></Page>
        <Info scrollToContact={scrollToContact} />
        <Milestones />
        <Team />
        <Slider />
        <Map />
        <CoPartners />
        <div ref={contactRef}>
          <ContactUs />
        </div>
      </div>

    </>

  )
}

export default About