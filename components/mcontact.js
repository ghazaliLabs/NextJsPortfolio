const MContact = () => {
  return (
    <div className="absolute top-[3806px] left-[17px] w-[362px] h-[597px] text-left text-lg text-black font-quicksand">
      <div className="absolute top-[0px] left-[0px] w-[362px] h-[78px]">
        <img
          className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden"
          alt=""
          src="/meeting.svg"
        />
        <b className="absolute top-[3px] left-[65px] inline-block w-[171px] h-[17px]">
          Schedule a Meeting
        </b>
        <div className="absolute top-[33px] left-[66px] text-base font-poppins inline-block w-[296px] h-[45px]">
          You can schedule a meeting with me at times suitable for both of us.
        </div>
      </div>
      <div className="absolute top-[110px] left-[0px] w-[358px] h-[487px] text-xs text-gray-100 font-poppins">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-lavender w-[358px] h-[487px]" />
        <b className="absolute top-[55px] left-[15.75px] text-5xl inline-block font-quicksand text-gray-200 w-[304.46px] h-[76px]">
          <p className="m-0">Wanna Say Hi?</p>
          <p className="m-0">You are Welcome.</p>
        </b>
        <img
          className="absolute top-[18px] left-[15.75px] w-[17px] h-[17px] overflow-hidden"
          alt=""
          src="/mdihandwave.svg"
        />
<input
  className="bg-[transparent] absolute top-[142px] left-[17.85px] rounded-10xs-5 box-border w-[155.38px] h-[25px] border-[1px] border-solid border-black"
  type="text"
  placeholder="First Name"
  style={{ fontFamily: 'Poppins', fontStyle: 'normal', padding: 10 }}
/>
<input
  className="bg-[transparent] absolute top-[184px] left-[17.85px] rounded-10xs-5 box-border w-[320.21px] h-[25px] border-[1px] border-solid border-black"
  type="email"
  placeholder="Email"
  style={{ fontFamily: 'Poppins', fontStyle: 'normal', padding: 10 }}
/>
<input
  className="bg-[transparent] absolute top-[231px] left-[17.85px] rounded-10xs-5 box-border w-[320.21px] h-[169px] border-[1px] border-solid border-black"
  type="text"
  placeholder="Message..."
  style={{ fontFamily: 'Poppins', fontStyle: 'normal', paddingBottom: 120, paddingLeft: 10 }}
/>
<input
  className="bg-[transparent] absolute top-[142px] left-[182.67px] rounded-10xs-5 box-border w-[155.38px] h-[25px] border-[1px] border-solid border-black"
  type="text"
  placeholder="Last Name"
  style={{ fontFamily: 'Poppins', fontStyle: 'normal', padding: 10}}
/>

        <div className="absolute top-[420px] left-[264px] rounded-10xs-5 bg-gray-300 w-[74px] h-[23px]" />
        <b className="sendform absolute top-[425px] left-[272.56px] text-5xs inline-block text-whitesmoke-200 w-[23.1px] h-3">
          SEND
        </b>
        <img
          className="absolute top-[430px] left-[324.11px] w-2 h-2 overflow-hidden"
          alt=""
          src="/bisendfill.svg"
        />
      </div>
    </div>
  );
};

export default MContact;
