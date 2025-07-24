import WhoWeAre from "../components/service/WhoWeAre";
import WhyAarvasa from "../components/service/WhyAarvasa";
import AllServices from "../components/service/AllServices";
import ContactUs from "../components/service/ContactUs";

import Page from "../../components/listing/Page";
import Slider from "../../components/About/Slider";
import { useRef } from "react";

const Services = () => {
    const contactRef = useRef(null);
    const serviceRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollService = () => {
        serviceRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <section className="bg-[#000000] pb-[80px] pt-[100px]">

                <Page></Page>
                <WhoWeAre scrollService={scrollService} scrollToContact={scrollToContact}/>
                <WhyAarvasa />
                <AllServices ref={serviceRef} />
                <Slider></Slider>
                <ContactUs ref={contactRef} />
            </section>
        </>

    );
};

export default Services;