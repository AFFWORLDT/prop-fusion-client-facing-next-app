import Navbar from "@/components/ui/global/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const blogLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default blogLayout;
