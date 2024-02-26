import React from "react";

const Hero = () => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="rotate-180 top-[-340px]  h-[132vh] md:h-screen w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default Hero;
