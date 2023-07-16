import TypeWriter from "./TypeWriter";
const Home = () => {
  const hatsData = [
    {
      prep: '',
      suffix: 'Solutions'
    },
    {
      prep: '',
      suffix: 'Creativity'
    },
    {
      prep: '',
      suffix: 'Work'
    },
  ];
  return (
    <div
      className="absolute top-[0px] left-[0px] w-[1512px] h-[1048px] text-center text-29xl text-lavender font-quicksand"
      data-scroll-to="homeContainer"
    >
      <div className="absolute top-[1048px] left-[0px] bg-gray-200 w-[1048px] h-[1512px] [transform:_rotate(-90deg)] [transform-origin:0_0]" />
      <div className="absolute top-[129px] left-[21px] rounded-3xl [background:linear-gradient(165.46deg,_#e8abfd,_#9a5ec6)] w-[428px] h-[887.78px]" />
      <div className="absolute top-[129px] left-[1054px] rounded-3xl [background:linear-gradient(194.33deg,_#aafff0,_#46c2a1)] w-[428px] h-[887.78px]" />
      <div className="absolute top-[459px] left-[516px] w-[471px] h-[130.77px]">
        <b className="absolute top-[0px] left-[10px] inline-block w-[461px] h-[123.33px]">{`Experience Efficient `}</b>
        <b className="absolute top-[65px] left-[265px]">in Action</b>
        <div className="absolute top-[61.67px] left-[0px] w-[252px] h-[69.11px] text-gray-100">
          <div className="absolute top-[0px] left-[0px] rounded-4xs bg-lavender w-[252px] h-[69.11px]" />
          <b className="absolute top-[4.33px] left-[6px] inline-block w-[241px] h-[58px]">
          <TypeWriter appendClass="my-custom-class" hats={hatsData} prefix="" />
          </b>
        </div>
      </div>
    </div>
  );
};

export default Home;
