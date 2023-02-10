import React, { useState, useEffect } from "react";
import Solution from "./solutionMenu";

export default function Header() {
  return (
    <>
      <div className="h-20 bg-slate-50 border-solid	">
          <Solution />
      </div>
    </>
  );
}
