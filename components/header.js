import { useCallback } from "react";
import App from '../components/chatBot';

const Header = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='homeContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  const onConnectWithMeClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="absolute top-[35.99px] left-[21px] w-[1451.64px] h-[46.03px] text-left text-base text-whitesmoke-200 font-poppins">
      <img
        className="absolute top-[0px] left-[0px] w-[151.01px] h-[46.03px] object-cover"
        alt=""
        src="/logo02-2@2x.png"
      />
      <div className="absolute top-[13.01px] left-[1033px] w-[418.64px] h-7">
        <b
          className="absolute top-[0.4px] left-[0px] inline-block w-[76.46px] h-[27.2px] cursor-pointer"
          onClick={onHomeTextClick}
        >
          Home
        </b>
        <div className="absolute top-[0.4px] left-[122.64px] inline-block w-[115.31px] h-[27.2px]">
          My Projects
        </div>
        <div
          className="absolute top-[0px] left-[284.64px] inline-block w-[134px] h-7 cursor-pointer"
          onClick={onConnectWithMeClick}
        >
          Connect with Me
        </div>
      </div>
      <App />
    </div>
  );
};

export default Header;
