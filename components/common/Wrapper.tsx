import React from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div className={`w-full max-w-[1280px] mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Wrapper;
