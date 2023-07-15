import { useCallback } from "react";

const Footer = () => {
  const onSyedsannancomTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='homeContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute top-[7417px] left-[-126px] w-[1764px] h-[261px] text-left text-base text-white font-poppins">
      <div className="absolute top-[11px] left-[126px] bg-gray-200 w-[1512px] h-[250px]" />
      <div className="absolute top-[142px] left-[126px] bg-gray-300 w-[1512px] h-[119px]" />
      <img
        className="absolute top-[53px] left-[811px] w-[142px] h-[47px] object-cover"
        alt=""
        src="/logo02-1@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(89.99deg,_#a9c1ff,_#72c2ef_48.44%,_#4370e8)] w-[1764px] h-[11px]" />
      <div
        className="absolute top-[190.86px] left-[170px] inline-block w-[202px] h-[22px] cursor-pointer"
        onClick={onSyedsannancomTextClick}
      >
        © 2023 syedsannan.com
      </div>
      <div className="absolute top-[178px] left-[1343px] w-[251px] h-[47.73px]">
        <div className="absolute top-[5.3px] left-[5.3px] rounded-8xs bg-lavender w-[43.31px] h-[42.42px]" />
        <div className="absolute top-[5.3px] left-[72.47px] rounded-8xs bg-lavender w-[43.31px] h-[42.42px]" />
        <div className="absolute top-[5.3px] left-[140.52px] rounded-8xs bg-lavender w-[43.31px] h-[42.42px]" />
        <div className="absolute top-[5.3px] left-[207.69px] rounded-8xs bg-lavender w-[43.31px] h-[42.42px]" />
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-gray-200 box-border w-[43.31px] h-[42.42px] border-[1px] border-solid border-lavender" />
        <div className="absolute top-[0px] left-[67.17px] rounded-8xs bg-gray-200 box-border w-[43.31px] h-[42.42px] border-[1px] border-solid border-lavender" />
        <div className="absolute top-[0px] left-[135.22px] rounded-8xs bg-gray-200 box-border w-[43.31px] h-[42.42px] border-[1px] border-solid border-lavender" />
        <div className="absolute top-[0px] left-[202.39px] rounded-8xs bg-gray-200 box-border w-[43.31px] h-[42.42px] border-[1px] border-solid border-lavender" />
        <a
          className="[text-decoration:none] absolute top-[1.77px] left-[1.77px] w-[38.89px] h-[38.89px] overflow-hidden"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <img
            className="absolute h-3/4 w-9/12 top-[12.5%] right-[12.5%] bottom-[12.5%] left-[12.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector5.svg"
          />
        </a>
        <a
          className="[text-decoration:none] absolute top-[6.19px] left-[74.24px] w-[30.05px] h-[30.05px] overflow-hidden"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img
            className="absolute h-[100.01%] w-[100.01%] top-[0%] right-[-0.01%] bottom-[-0.01%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector6.svg"
          />
        </a>
        <a
          className="[text-decoration:none] absolute top-[5.3px] left-[140.52px] w-[31.82px] h-[31.82px] overflow-hidden"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <img
            className="absolute h-[83.33%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[8.33%] left-[8.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector7.svg"
          />
        </a>
        <a
          className="[text-decoration:none] absolute top-[5.3px] left-[208.58px] w-[31.82px] h-[31.82px] overflow-hidden"
          href="https://www.github.com/"
          target="_blank"
        >
          <img
            className="absolute h-[81.31%] w-[83.33%] top-[8.33%] right-[8.33%] bottom-[10.35%] left-[8.33%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector8.svg"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
