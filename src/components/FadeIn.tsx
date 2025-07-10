import React from "react";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

type FadeInHeroProps = {
  title?: string;
  buttonText?: string;
  backgroundImage?: string;
};

export default function FadeInHero({
  title = "Heading",
  buttonText = "Get Started",
  backgroundImage = ""
}: FadeInHeroProps) {
  const bgStyle = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  } : {};

  return (
    <LazyMotion features={domAnimation}>
      <section 
        className="hero min-h-screen flex items-center justify-center text-white px-4 py-16"
        style={bgStyle}
      >
        <div className="max-w-4xl text-center">
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            {title}
          </m.h1>
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Let's Get It.
          </m.p>
          <m.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors duration-300"
          >
            {buttonText}
          </m.button>
        </div>
      </section>
    </LazyMotion>
  );
}
