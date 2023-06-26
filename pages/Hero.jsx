import React from "react";

const Hero = () => {
  return (
    <div className="h-[fit-content] text-white">
      {/* <nav className="flex justify-between items-center mb-[170px]"> */}
      <nav className="grid grid-cols-3 items-center  px-[20px] mb-[170px]">
        <h1 className="text-[32px]">Scala</h1>
        <div className="grid grid-cols-2 ml-[130px]">
          <h2>Twitter</h2>
          <h2>LinkedIn</h2>
        </div>
          <button className="bg-[red] w-[360px]  p-[10px] rounded-[30px]">
            Download Scala
          </button>
      </nav>
      <main className="grid place-items-center text-center">
        <h1 className="font-bold text-[100px] leading-[120px] mx-[20px]">Get unstuck from work, Productivity made easy</h1>
        <p className="font-bold text-[24px] leading-[29px] pt-[65px] px-[200px] ">
          Are you feeling overwhelmed with work and school projects? Try Scala,
          The best productivity tool on the market
        </p>
        <div className="pt-[32px] grid grid-cols-2 gap-[6px]">
          <button className="bg-[red] w-[360px] p-[10px] rounded-[50px]">
            Download Scala
          </button>
          <button className=" p-[10px] w-[360px] rounded-[50px]">
            Contact Sales
          </button>
        </div>
	  <h1 className="font-bold text-[250px] my-[80px] leading-[155px]">Scala</h1>
      </main>
    </div>
  );
};

export default Hero;
