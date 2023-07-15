const Stats = () => {
  return (
    <div className="absolute top-[1125px] left-[0px] w-[1512px] h-[279px] text-center text-13xl text-gray-100 font-poppins">
      <div className="absolute top-[161px] left-[0px] w-[768px] h-[118px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[768px] h-[118px]" />
        <b className="absolute top-[14.3px] left-[0px] inline-block w-[768px] h-[34.57px]">
          80+
        </b>
        <b className="absolute top-[75.09px] left-[0px] text-base inline-block w-[768px] h-[15.49px]">
          Projects Handled
        </b>
      </div>
      <div className="absolute top-[161px] left-[766px] w-[746px] h-[118px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[746px] h-[118px]" />
        <b className="absolute top-[14.3px] left-[0px] inline-block w-[746px] h-[34.57px]">
          50K+
        </b>
        <b className="absolute top-[75.09px] left-[0px] text-base inline-block w-[746px] h-[15.49px]">
          Impressions
        </b>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[1512px] h-[123px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[1512px] h-[123px]" />
        <img
          className="absolute top-[13px] left-[152px] w-[1207px] h-[98px] object-cover"
          alt=""
          src="/screenshot-20230517-002147-1@2x.png"
        />
      </div>
    </div>
  );
};

export default Stats;
