import React from "react";
import { getContrastYIQ } from "../helper";

function Copied({ color }) {
  return (
    <div
      className="copied"
      style={{
        "--bgColor": `#${color}`,
        "--textColor": `${getContrastYIQ(color)}`,
      }}
    >
      Copied #{color} to Clipboard
    </div>
  );
}

export default Copied;
