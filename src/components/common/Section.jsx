import React from "react";

import { TypingText, TitleText } from "@/components/CustomTexts";

const Section = ({ title, subtitle, children, name }) => {
  return (
    <div>
      <section
        name={name}
        className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center"
      >
        {/* <TypingText
          title={title}
          textStyles="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl uppercase "
        />
        <TitleText
          title={subtitle}
          textStyles="max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base "
        /> */}
        <p className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl uppercase">
          {title}
        </p>
        <p className="max-w-xl font-light text-gray-500 mb-10 text-sm md:text-base">
          {subtitle}
        </p>

        {children}
      </section>
    </div>
  );
};

export default Section;
