"use client";

import MicSVG from "./micSVG";
import SendIcon from "./sendIcon";

const InputBox = () => {
  return (
    <div className="relative w-1/2 ">
      <form action="">
        <input
          type="text"
          name="question"
          placeholder="Learn about ThunderLabs"
          className="w-full rounded-2xl border-2 border-[#FF0000] px-4 py-2 text-black"
        />
        <button
          className="absolute right-10 top-1/2 h-[30px] w-[30px] -translate-y-1/2 transform"
          type="submit"
        >
          <MicSVG />
        </button>
        <button
          className="absolute right-2 top-1/2 h-[30px] w-[30px] -translate-y-1/2 transform"
          type="submit"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};
export default InputBox;
