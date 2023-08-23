import { useEffect } from "react";

const MProcess = () => {
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
    <div className="  h-[980px]">
    <div className="w-[490px] h-[1143px] absolute left-[-0.5px] top-[2630.5px] bg-[#1b2131]" />
    <div className="w-[347.84px] h-[762.59px]">
      <svg
        width={4}
        height={763}
        viewBox="0 0 4 763"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[193.89px] top-[2886.5px]"
        preserveAspectRatio="none"
      >
        <path d="M2.38953 0L2.38949 762.587" stroke="#D3DEFB" stroke-width={3} />
      </svg>
      <div className="w-[186.2px] h-[118.64px]">
        <p className="pf w-11 h-[15px] absolute left-32 top-[2924px] text-[8px] font-black text-right text-[#d3defb]">
          STEP 1
        </p>
        <p className="pf w-[150.83px] h-[10.6px] absolute left-[21.01px] top-[2941.65px] text-[8px] font-bold text-right text-[#d3defb]">
          Project Structure Plan
        </p>
        <p className="pf w-[127.24px] h-[73.2px] absolute left-[44.59px] top-[2962.86px] text-[8px] text-right text-[#d3defb]">
          In this step, I and the client mutually plan the project structure, we collectively create a
          UML diagram (Unified Modeling Language) of the project plan the milestones of this project.
        </p>
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[183.13px] top-[2916.92px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="12.4198" cy="12.5343" rx="11.791" ry="12.1166" fill="#D3DEFB" />
        </svg>
        <p className="pf w-[23.58px] h-[14.64px] absolute left-[183.63px] top-[2912px] text-[10px] font-bold text-center text-black">
          1
        </p>
      </div>
      <div className="w-[185.22px] h-[154.99px]">
        <p className="pf w-[51px] h-[11px] absolute left-[218px] top-[3053px] text-[8px] font-black text-left text-[#d3defb]">
          STEP 2
        </p>
        <p className="pf w-[150.83px] h-[10.6px] absolute left-[218.02px] top-[3072.02px] text-[8px] font-bold text-left text-[#d3defb]">
          UI/UX Development
        </p>
        <p className="pf w-[127.24px] h-[109.55px] absolute left-[218.02px] top-[3093.23px] text-[8px] text-left text-[#d3defb]">
          In this step, me and my client create an interface in the form of a high-fidelity prototype
          of the app or chatbot so that we can have a preview of what the application will end up
          looking like and so that we can plan better regarding the functionality.
        </p>
        <svg
          width={25}
          height={26}
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[183.13px] top-[3047.29px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="12.4198" cy="12.9069" rx="11.791" ry="12.1166" fill="#D3DEFB" />
        </svg>
        <p className="pf w-[23.58px] h-[14.64px] absolute left-[183.63px] top-[3043px] text-[10px] font-bold text-center text-black">
          2
        </p>
      </div>
      <div className="w-[186.2px] h-[118.64px]">
        <p className="pf w-11 h-3.5 absolute left-32 top-[3192px] text-[8px] font-black text-right text-[#d3defb]">
          STEP 3
        </p>
        <p className="pf w-[150.83px] h-[10.6px] absolute left-[21.01px] top-[3211.31px] text-[8px] font-bold text-right text-[#d3defb]">
          Database Development
        </p>
        <p className="pf w-[127.24px] h-[73.2px] absolute left-[44.59px] top-[3232.51px] text-[8px] text-right text-[#d3defb]">
          In this step, we create the database for the app or chatbot that will serve as the backbone
          as it is the section that stores all the user and app data.{" "}
        </p>
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[183.13px] top-[3186.58px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="12.4198" cy="12.194" rx="11.791" ry="12.1166" fill="#D3DEFB" />
        </svg>
        <p className="pf w-[23.58px] h-[14.64px] absolute left-[183.63px] top-[3182px] text-[10px] font-bold text-center text-black">
          3
        </p>
      </div>
      <div className="w-[185.22px] h-[132.49px]">
        <p className="pf w-[43px] h-3 absolute left-[218px] top-[3327px] text-[8px] font-black text-left text-[#d3defb]">
          STEP 4
        </p>
        <p className="pf w-[150.83px] h-[10.6px] absolute left-[218.02px] top-[3346.17px] text-[8px] font-bold text-left text-[#d3defb]">
          Backend Development
        </p>
        <p className="pf w-[127.22px] h-[88.1px] absolute left-[217.98px] top-[3367.34px] text-[8px] text-left text-[#d3defb]">
          This is the step that is the final step of the “development” of this app and chatbot, where
          we create the backend functionality aka, business logic while linking it finely with the
          interface, database, third-party APIs, CRMs, etc. as planned.
        </p>
        <svg
          width={25}
          height={26}
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[183.13px] top-[3322.45px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="12.4198" cy="13.0631" rx="11.791" ry="12.1166" fill="#D3DEFB" />
        </svg>
        <p className="pf w-[23.58px] h-[14.64px] absolute left-[183.63px] top-[3318px] text-[10px] font-bold text-center text-black">
          4
        </p>
      </div>
      <div className="w-[186.2px] h-[159.15px]">
        <p className="pf w-[62px] h-3.5 absolute left-[110px] top-[3480px] text-[8px] font-black text-right text-[#d3defb]">
          STEP 5
        </p>
        <p className="pf w-[150.83px] h-[10.6px] absolute left-[21.01px] top-[3497.39px] text-[8px] font-bold text-right text-[#d3defb]">
          Quality Assurance
        </p>
        <p className="pf w-[127.22px] h-[111.78px] absolute left-[44.67px] top-[3518.44px] text-[8px] text-right text-[#d3defb]">
          This is the step that makes the product production ready and passes it through a vigorous
          Quality Assurance (QA) criteria that contains parameters regarding security, performance,
          and code maintainability and readability. This is the step after which your amazing product
          is ready to face the world.
        </p>
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-[183.13px] top-[3470.57px]"
          preserveAspectRatio="xMidYMid meet"
        >
          <ellipse cx="12.4198" cy="12.1879" rx="11.791" ry="12.1166" fill="#D3DEFB" />
        </svg>
        <p className="pf w-[23.58px] h-[14.64px] absolute left-[183.63px] top-[3466px] text-[10px] font-bold text-center text-black">
          5
        </p>
      </div>
    </div>
    <p className="hpf w-[220px] h-[50px] absolute left-[23px] top-[2760px] text-4xl font-bold text-left text-[#f2f2f2]">
      My Process
    </p>
    <svg
      width={83}
      height={86}
      viewBox="0 0 83 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[83px] h-[85.29px] absolute left-[23px] top-[2646px]"
      preserveAspectRatio="none"
    >
      <g clip-path="url(#clip0_103_93)">
        <path
          d="M62.4792 28.9942V47.4844H60.2917V29.4384V27.9384H58.7917H46.6875H45.1875V29.4384V42.321C45.1875 44.2315 43.6912 45.7075 41.9323 45.7075H29.3959H27.8959V47.2075V60.0901C27.8959 62.0007 26.3995 63.4766 24.6406 63.4766H12.1042H10.6042V64.9766V77.415V78.915H12.1042H29.625V81.2458H11.6719C9.91094 81.2458 8.41669 79.7677 8.41669 77.8592V64.5324C8.41669 62.6219 9.913 61.1459 11.6719 61.1459H24.2084H25.7084V59.6459V46.7633C25.7084 44.8528 27.2047 43.3768 28.9636 43.3768H41.5H43V41.8768V28.9942C43 27.0836 44.4963 25.6077 46.2552 25.6077H59.224C60.9849 25.6077 62.4792 27.0858 62.4792 28.9942ZM51.875 71.8074H53.375V70.3074V57.4248C53.375 55.5142 54.8713 54.0383 56.6302 54.0383H69.599C71.3599 54.0383 72.8542 55.5163 72.8542 57.4248V81.8573C72.8542 84.5357 71.8184 87.0964 69.9872 88.9782C68.1573 90.8586 65.6843 91.9072 63.1146 91.9072H39.3386C37.5776 91.9072 36.0834 90.4291 36.0834 88.5207V75.1939C36.0834 73.2833 37.5797 71.8074 39.3386 71.8074H51.875Z"
          fill="#D3DEFB"
          stroke="#F2F2F2"
          stroke-width={3}
        />
      </g>
      <defs>
        <clippath id="clip0_103_93">
          <rect width={83} height="85.2918" fill="white" />
        </clippath>
      </defs>
    </svg>
    <p className="pf w-[317px] h-6 absolute left-6 top-[2828px] text-[8px] text-left text-white">
      I follow an intuitive, and client-friendly process throughout my projects, that includes
      planning, and execution.
    </p>
  </div>
  );
};

export default MProcess;
