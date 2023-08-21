import App from "./chatBot";

const MHome = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[390px] h-[983px] text-center text-17xl text-lavender font-quicksand">
      <div className="absolute top-[0px] left-[0px] bg-gray-300 w-[390px] h-[578px]" />
      <div className="absolute top-[122px] left-[19px] w-[352px] h-[123px]">
        <div className="absolute top-[0px] left-[0px] w-[352px] h-[123px]">
          <div className="absolute top-[42px] left-[22px] rounded-4xs bg-lavender w-[160px] h-10" />
          <b className="absolute top-[0px] left-[0px] inline-block w-[352px] h-[123px]">
            <span className="hsfont">{`Experience Efficient `}</span>
            <span className="hsfont text-gray-200">Solutions</span>
            <span className="hsfont"> in Action</span>
          </b>
        </div>
      </div>
      <div className="absolute top-[299px] left-[42px] rounded-3xs [background:linear-gradient(144.05deg,_#e6a9fc,_#9b5fc6)] w-[305px] h-[480px]" />
      <img
        className="absolute top-[467px] left-[15px] w-[7px] h-4"
        alt=""
        src="/vector-5.svg"
      />
      <img
        className="absolute top-[466px] left-[364px] w-[7px] h-[17px]"
        alt=""
        src="/vector-6.svg"
      />
      <img
        className="absolute top-[23px] left-[19px] w-[94px] h-7 object-cover"
        alt=""
        src="/logo02-2@2x.png"
      />
      <img
        className="absolute top-[25px] left-[347px] w-6 h-6 overflow-hidden"
        alt=""
        src="/mdihamburgermenu.svg"
      />
      <div className="absolute top-[907px] left-[0px] w-[390px] h-[76px] text-5xl text-gray-200 font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-white w-[390px] h-[76px]" />
        <div className="absolute top-[0px] left-[21px] w-[152px] h-[57.06px]">
          <div className="absolute top-[-14.3px] left-[0px] bg-white w-[768px] h-[118px] hidden" />
          <b className="absolute top-[0px] left-[0px] inline-block w-[152px] h-[34.57px]">
            80+
          </b>
          <b className="absolute top-[41.57px] left-[0px] text-base inline-block w-[152px] h-[15.49px]">
            Projects Handled
          </b>
        </div>
        <div className="absolute top-[0px] left-[239px] w-[116px] h-[58.06px]">
          <b className="absolute top-[0px] left-[0px] inline-block w-[116px] h-[34.57px]">
            50K+
          </b>
          <b className="absolute top-[42.57px] left-[0px] text-base inline-block w-[116px] h-[15.49px]">
            Impressions
          </b>
        </div>
      </div>
      <div className="absolute top-[831px] left-[0px] bg-white w-[390px] h-[76px]" />
      <img
        className="absolute top-[836px] left-[170px] w-[116px] h-[66px] object-cover"
        alt=""
        src="/screenshot-20230517-002147-1@2x.png"
      />
      <App/>
    </div>
  );
};

export default MHome;
