import React, { useState, useEffect } from "react";
import Solution from "./SolutionMenu";
import Learn from "./Learn";

export default function Header() {
  return (
    <>
      <div className="h-20 w-screen fixed bg-slate-50 border-solid	">
        <div className="w-[70%] mx-[15%] flex justify-around">
          <div className="flex justify-between">
            <div className="header-logo-background-image "></div>
            <div className="font-semibold mt-7 text-xl decoration-slate-900">LM ClickUP</div>
          </div>
          <div>
            <Solution />
          </div>
          <div>
            <Learn />
          </div>
          <div className="flex justify-around w-[15%]">
            <button className="backface-visibility-hidden  flex transform items-center  bg-indigo-500  px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-90 focus:outline-none active:bg-opacity-80 h-12 mt-4 rounded-md">
              SignUp
            </button>
            <button className="backface-visibility-hidden  flex transform items-center  bg-indigo-500  px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-90 focus:outline-none active:bg-opacity-80 h-12 mt-4 rounded-md">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
