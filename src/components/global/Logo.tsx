import { Building } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center gap-1 font-medium cursor-pointer">
      <span>
        <Building className="items-center" />
      </span>
      <span className="text-sm flex">Prop Funsion</span>
    </div>
  );
}

export default Logo;
