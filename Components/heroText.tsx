"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export default function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Release.",
      className: "dark:text-green-300 text-8xl",
    },
    {
      text: "Reflect.",
      className: "dark:text-green-300 text-8xl",
    },
    {
      text: "Rebalance.",
      className: "text-blue-500 dark:text-blue-500 text-8xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-800 text-2xl pb-10 font-semibold ">
        The road to freedom starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8 pt-10">
        <button className="w-40 h-10 rounded-xl bg-blue-500 border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
    </div>
  );
}
