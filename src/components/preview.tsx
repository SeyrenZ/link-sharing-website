import React from "react";

const Preview = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto pt-[208px] flex items-center justify-center">
      <div className="z-10 relative w-full max-w-[349px] h-[569px] px-14 py-12 bg-white rounded-2xl shadow-xl flex flex-col items-center gap-y-14">
        <div className="w-[104px] h-[104px] rounded-full border-[3px] border-primary-violet bg-placeholderImage bg-cover"></div>
      </div>
    </div>
  );
};

export default Preview;
