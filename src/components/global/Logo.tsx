import { Building } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-1 font-medium cursor-pointer">
      <span>
        <Building className="items-center text-rose-800" />
      </span>
      {/* <span className="text-sm flex text-rose-800">Prop Funsion</span> */}
    </div>
  );
}

export default Logo;
