"use client";
import React from "react";
import Typewriter from "typewriter-effect";
type Props = {};
const TypeWriterTitle = (props: Props) => {
  return (
    <div className='text-center inline-block'>
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Productivity")
            .pause()
            .deleteAll()
            .typeString("Creativity")
            .pause()
            .deleteAll()
            .typeString("Efficiency")
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriterTitle;
