import React from "react";

function SectionThree() {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="text-center pb-12 md:pb-16">
          <h1 className="text-5xl  text-white font-extrabold leading-tighter tracking-tighter mb-4">
            Cyber Security is for everyone, not just big businesses.
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-white mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              Identity theft is a real concern in our digital world. If cyber
              criminals get ahold of your personal information, they can open
              new accounts, file for taxes, and even take out loans in your
              name. This can ruin your credit score and cause all sorts of
              financial problems.{" "}
            </p>
            <p
              className="text-xl text-white mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Identity theft can ruin your credit and cost you money. It can
              also be a pain to fix. identity thieves can use your personal
              information to open credit cards, get loans, or even commit crimes
              in your name.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
