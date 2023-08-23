import Head from "next/head";
import Stats from "../components/stats";
import Testimonials from "../components/testimonials";
import Process from "../components/process";
import Contact from "../components/contact";
import About from "../components/about";
import Expertise from "../components/expertise";
import Footer from "../components/footer";
import Home from "../components/home";
import Header from "../components/header";
import MHome from "../components/mhome";
import MExpertise from "../components/mexpertise";
import MProcess from "../components/mprocess";
import MContact from "../components/mcontact";
import MFooter from "../components/mfooter";
import MTestimonials from "../components/mtestimonials";
import MIntro from "../components/mintro";


const Portfolio = () => {
  ;

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Website " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="switch_view relative bg-whitesmoke-100 w-full h-[7670px] overflow-hidden">
        <Stats />
        <Testimonials />
        <Process />
        <Contact />
        <About />
        <Expertise />
        <Footer />
        <Home />
        <Header /> 
        </div>
        <div className="switch_mview w-screen relative bg-whitesmoke-100  h-[4527px] overflow-hidden">
        <MExpertise />
        <MTestimonials />
        <MProcess />
        <MFooter />
        <MIntro />
        <MContact />
        <MHome />
      </div>
    </>
  );
};

export default Portfolio;
