import React, { useState, useEffect } from "react";

export default function Home() {
  return (
    <>
      <div className="h-200 overflow-auto ">
        <div className="h-screen mt-40 overscroll-auto">
          <div className="h-3/6 w-[70%] mx-[15%] flex justify-around ">
            <div className="h-full w-[45%] ">
              <div className="font-mono text-5xl font-bold text-gray-800">
                Life management
              </div>
              <div className="h-3"></div>
              <div className="font-mono text-3xl font-bold text-gray-800">
                for all members in OUR TEAM
              </div>
              <div className="h-3"></div>
              <div className="font-mono text-2xl text-gray-800">
                - Fund management
              </div>
              <div className="h-3"></div>
              <div className="font-mono text-2xl text-gray-800">
                - Schedule management
              </div>
              <div className="h-3"></div>
              <div className="font-mono text-2xl text-gray-800">
                - Meeting management
              </div>
              <div className="h-3"></div>
              <div className="font-mono text-2xl text-gray-800">
                - Health care
              </div>
              <div className="h-10"></div>
              <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
                Your email
              </label>
              <input
                type="text"
                id="success"
                className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                placeholder="...@gmail.com"
              />
              <div className="h-3"></div>
              <button className="backface-visibility-hidden  flex transform items-center  bg-indigo-500  px-3 py-2 text-sm font-medium text-white transition hover:scale-105 hover:bg-opacity-90 focus:outline-none active:bg-opacity-80 h-12 mt-4 rounded-md">
                Get Started
              </button>
            </div>
            <div className="h-full w-[45%] bg-gray-400 home1-screen-background"></div>
          </div>
        </div>
      </div>
    </>
  );
}
