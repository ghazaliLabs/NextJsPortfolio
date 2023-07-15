import React, { useState } from 'react';
import Testimonials1 from '../layouts/testimonials1';

const Testimonials = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const numCases = 3; // Update this value based on the number of testimonial screens

  const navigateToNextScreen = () => {
    setCurrentScreen((prevScreen) => prevScreen + 1);
  };

  const navigateToPreviousScreen = () => {
    setCurrentScreen((prevScreen) => prevScreen - 1);
  };

  const renderTestimonialScreen = () => {
    switch (currentScreen) {
      case 1:
        //places first three testimonal cards right => left
        return (
          <>
          <>
          <div style={{display: 'flex', margin: 0, gap: '20px'}}>
      <Testimonials1
        name="Alex Pachan"
        position="Co-Founder, Landocs Private Equity"
        testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
        imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
        />
      <Testimonials1
        name="Alex Pachan"
        position="Co-Founder, Landocs Private Equity"
        testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
        imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
      />
      <Testimonials1
        name="Alex Pachan"
        position="Co-Founder, Landocs Private Equity"
        testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
        imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
      />
        </div>
        </>
        <div style={{display: 'flex', margin: 0, gap: '20px'}}>
    <Testimonials1
      name="Alex Pachan"
      position="Co-Founder, Landocs Private Equity"
      testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
      imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
      />
    <Testimonials1
      name="Alex Pachan"
      position="Co-Founder, Landocs Private Equity"
      testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
      imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
    />
    <Testimonials1
      name="Alex Pachan"
      position="Co-Founder, Landocs Private Equity"
      testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
      imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
    />
      </div>
      <div style={{display: 'flex', margin: 0, gap: '20px'}}>
    <Testimonials1
      name="Alex Pachan"
      position="Co-Founder, Landocs Private Equity"
      testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
      imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
      />
    <Testimonials1
      name="Alex Pachan"
      position="Co-Founder, Landocs Private Equity"
      testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
      imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
    />
    <Testimonials1
      name="Alex Pachan"
      position="Co-Founder, Landocs Private Equity"
      testimony="Sannan is amazing, he carefully reviews his work, he makes sure all is working as expected and he's a great guy to work with, will definitely order again"
      imageSrc="/2ef89f7ab6484378adf180ba1fe18a42-1@2x.png"
    />
      </div>
      </>

        );
      case 2:
        return (
          <>
        <Testimonials1
        name="Hadi Khan"
        position="CEO"
        testimony={"loren ipsum"}
        />
          </>
        );
      case 3:
        return (
          <>
          <Testimonials1
          name="Alex"
          position={"Vice Chairman"}
          testimony={"casus belli"}
          />
          </>
        );
        case 4:
          return (
            <>

            </>
          )
      default:
        return null;
    }
  };

  const showLeftIcon = currentScreen > 1;
  const showRightIcon = currentScreen < numCases;

  return (
    <div className="absolute top-[3142px] left-[147px] w-[1225px] h-[830px] text-left text-29xl text-gray-100 font-quicksand">
      <b className="absolute top-[125px] left-[0px] inline-block w-[671px] h-[49px]">
        What My Clients Have to Say
      </b>
      <img
        className="absolute top-[0px] left-[0px] w-[74px] h-[74px] overflow-hidden"
        alt=""
        src="/solaruserspeakboldduotone.svg"
      />
      <div className="absolute top-[250px] left-[0px] w-[1225px] h-[580px] text-sm text-black font-poppins">
        {renderTestimonialScreen()}
      </div>
      {showLeftIcon && (
        <div
          className="absolute top-[500px] left-[-3rem] cursor-pointer flex items-center"
          onClick={navigateToPreviousScreen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      )}
      {showRightIcon && (
        <div
          className="absolute top-[500px] right-[-3rem] cursor-pointer flex items-center"
          onClick={navigateToNextScreen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
