import React, { useState } from "react";
import LitUpBorderButton from "./LitUpBorderButton";

export default function ButtonWithDropDown() {
  const [isHovered, setIsHovered] = useState(false);
  // console.log(isHovered, new Date())
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <LitUpBorderButton />
      {/* show on hover */}
      {isHovered && (
        <div className="grid gap-2 place-items-center  p-2border w-[400px] h-[400px] absolute right-0 bg-white rounded border">
            <button>Original</button>

        </div>
      )}
    </div>
  );
}
