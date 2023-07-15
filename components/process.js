import { useEffect } from "react";

const Process = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="absolute top-[4153px] left-[-23px] w-[1567px] h-[2233px] text-left text-base text-lavender font-poppins"
      data-scroll-to="processContainer"
    >
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1567px] h-[2233px]" />
      <b className="absolute top-[211.69px] left-[176px] text-29xl inline-block font-quicksand text-whitesmoke-200 w-[551px] h-[50.35px]">
        My Process
      </b>
      <img
        className="absolute top-[75.02px] left-[176px] w-[83px] h-[85.29px] overflow-hidden"
        alt=""
        src="/fluentsteps24filled.svg"
      />
      <div className="absolute top-[318.56px] left-[177px] text-white inline-block w-[691px] h-[41.1px]">
        I follow an intuitive, and client-friendly process throughout my
        projects, that includes planning, and execution.
      </div>
      <img
        className="absolute top-[339.07px] left-[713.5px] w-[3px] h-[1600.45px]"
        alt=""
        src="/vector-4.svg"
      />
      <div
        className="absolute top-[1714.06px] left-[336.68px] w-[403.97px] h-[345.28px] [&.animate]:animate-[1s_ease_1s_1_normal_forwards_fade-in] opacity-[0] text-right"
        data-animate-on-scroll
      >
        <b className="absolute top-[57.1px] left-[0px] inline-block w-[327.22px] h-[23px]">
          Quality Assurance
        </b>
        <div className="absolute top-[102.76px] left-[51.32px] inline-block w-[276px] h-[242.52px]">
          This is the step that makes the product production ready and passes it
          through a vigorous Quality Assurance (QA) criteria that contains
          parameters regarding security, performance, and code maintainability
          and readability. This is the step after which your amazing product is
          ready to face the world.
        </div>
        <div className="absolute top-[14.39px] left-[244.08px] tracking-[0.3em] font-black inline-block w-[83.14px] h-[31.76px]">
          STEP 5
        </div>
        <div className="absolute top-[0px] left-[352.8px] rounded-[50%] bg-lavender w-[51.16px] h-[52.57px]" />
        <b className="absolute top-[9.86px] left-[352.8px] text-xl inline-block text-black text-center w-[51.16px] h-[31.76px]">
          5
        </b>
      </div>
      <div
        className="absolute top-[1392.7px] left-[689.48px] w-[401.83px] h-[287.45px] [&.animate]:animate-[1s_ease_0.75s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="absolute top-[9.86px] left-[74.61px] tracking-[0.3em] font-black inline-block w-[83.14px] h-[24.1px]">
          STEP 4
        </div>
        <b className="absolute top-[50.38px] left-[74.61px] inline-block w-[327.22px] h-[23px]">
          Backend Development
        </b>
        <div className="absolute top-[96.31px] left-[74.52px] inline-block w-[276px] h-[191.14px]">
          This is the step that is the final step of the “development” of this
          app and chatbot, where we create the backend functionality aka,
          business logic while linking it finely with the interface, database,
          third-party APIs, CRMs, etc. as planned.
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lavender w-[51.16px] h-[52.57px]" />
        <b className="absolute top-[9.86px] left-[0px] text-xl inline-block text-black text-center w-[51.16px] h-[31.76px]">
          4
        </b>
      </div>
      <div
        className="absolute top-[1097.92px] left-[336.68px] w-[403.97px] h-[257.4px] [&.animate]:animate-[1s_ease_0.5s_1_normal_forwards_fade-in] opacity-[0] text-right"
        data-animate-on-scroll
      >
        <div className="absolute top-[9.86px] left-[244.08px] tracking-[0.3em] font-black inline-block w-[83.14px] h-[31.76px]">
          STEP 3
        </div>
        <b className="absolute top-[52.57px] left-[0px] inline-block w-[327.22px] h-[23px]">
          Database Development
        </b>
        <div className="absolute top-[98.58px] left-[51.16px] inline-block w-[276.06px] h-[158.82px]">{`In this step, we create the database for the app or chatbot that will serve as the backbone as it is the section that stores all the user and app data. `}</div>
        <div className="absolute top-[0px] left-[352.8px] rounded-[50%] bg-lavender w-[51.16px] h-[52.57px]" />
        <b className="absolute top-[9.86px] left-[352.8px] text-xl inline-block text-black text-center w-[51.16px] h-[31.76px]">
          3
        </b>
      </div>
      <div
        className="absolute top-[795.74px] left-[689.48px] w-[401.83px] h-[336.26px] [&.animate]:animate-[1s_ease_0.25s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="absolute top-[12.05px] left-[74.61px] tracking-[0.3em] font-black inline-block w-[83.14px] h-[24.1px]">
          STEP 2
        </div>
        <b className="absolute top-[52.57px] left-[74.61px] inline-block w-[327.22px] h-[23px]">
          UI/UX and Interface Development
        </b>
        <div className="absolute top-[98.58px] left-[74.61px] inline-block w-[276.06px] h-[237.68px]">
          In this step, me and my client create an interface in the form of a
          high-fidelity prototype of the app or chatbot so that we can have a
          preview of what the application will end up looking like and so that
          we can plan better regarding the functionality.
        </div>
        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-lavender w-[51.16px] h-[52.57px]" />
        <b className="absolute top-[9.86px] left-[0px] text-xl inline-block text-black text-center w-[51.16px] h-[31.76px]">
          2
        </b>
      </div>
      <div
        className="absolute top-[512.89px] left-[336.68px] w-[403.97px] h-[257.4px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-right"
        data-animate-on-scroll
      >
        <div className="absolute top-[9.86px] left-[244.08px] tracking-[0.3em] font-black inline-block w-[83.14px] h-[31.76px]">
          STEP 1
        </div>
        <b className="absolute top-[52.58px] left-[0px] inline-block w-[327.22px] h-[23px]">
          Project Structure Plan
        </b>
        <div className="absolute top-[98.58px] left-[51.16px] inline-block w-[276.06px] h-[158.82px]">
          In this step, I and the client mutually plan the project structure, we
          collectively create a UML diagram (Unified Modeling Language) of the
          project plan the milestones of this project.
        </div>
        <div className="absolute top-[0px] left-[352.8px] rounded-[50%] bg-lavender w-[51.16px] h-[52.57px]" />
        <b className="absolute top-[9.86px] left-[352.8px] text-xl inline-block text-black text-center w-[51.16px] h-[31.76px]">
          1
        </b>
      </div>
    </div>
  );
};

export default Process;
