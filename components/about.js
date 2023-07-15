import { useCallback } from "react";

const About = () => {
  const onSEEMYPROCESSClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='processContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute top-[1478px] left-[-199px] w-[1743px] h-[801px] text-center text-base text-whitesmoke-200 font-poppins">
      <div className="absolute top-[0px] left-[176px] bg-gray-200 w-[1567px] h-[801px]" />
      <img
        className="absolute top-[0px] left-[199px] rounded-tl-66xl-5 rounded-tr-none rounded-b-66xl-5 w-[732px] h-[771px] object-cover"
        alt=""
        src="/pfp01compressed-1@2x.png"
      />
      <b className="absolute top-[297px] left-[684px] text-29xl inline-block font-quicksand w-[551px] h-[49px]">
        I am...
      </b>
      <div className="absolute top-[396px] left-[673px] leading-[32px] inline-block w-[572px] h-[159px]">{`ISannan, a self-taught full-stack & NLP developer with 5+ years of experience. I have handled 80+ projects efficiently. I believe that I can plan a fullstack project and execute it efficiently in a more than surprising timeframe while assuring quality in performance, security, and maintainability.`}</div>
      <a
        className="[text-decoration:none] absolute top-[599px] left-[843px] w-[233px] h-10 cursor-pointer text-left text-lavender"
        onClick={onSEEMYPROCESSClick}
      >
        <div className="absolute top-[0px] left-[0px] w-[233px] h-7">
          <b className="absolute top-[0px] left-[0px] tracking-[0.3em] leading-[32px] inline-block w-[202px] h-7">
            SEE MY PROCESS
          </b>
          <img
            className="absolute top-[4px] left-[209px] w-6 h-6 overflow-hidden"
            alt=""
            src="/materialsymbolsarrowrightalt.svg"
          />
        </div>
        <img
          className="absolute top-[39.5px] left-[0px] w-[229px] h-px"
          alt=""
          src="/vector-3.svg"
        />
      </a>
      <img
        className="absolute h-[10.66%] w-[4.81%] top-[20.35%] right-[42.52%] bottom-[68.99%] left-[52.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group.svg"
      />
    </div>
  );
};

export default About;
