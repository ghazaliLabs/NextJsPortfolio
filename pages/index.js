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

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio Website " />
      </Head>
      <div className="relative bg-whitesmoke-100 w-full h-[8647px] overflow-hidden">
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
    </>
  );
};

export default Portfolio;
