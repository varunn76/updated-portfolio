import React from "react";

const SectionHeaders = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400  text-center text-transparent bg-clip-text">
          {title}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {eyebrow}
      </h2>
      <p className="text-center md:text-lg lg:text-xl mt-4 max-w-md mx-auto text-white/60">
        {description}
      </p>
    </>
  );
};

export default SectionHeaders;
