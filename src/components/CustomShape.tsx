import React from "react";

type Props = {
  children: React.ReactNode;
  width: number;
  height: number;
};

const CustomShape = ({ children, height, width }: Props) => {
  return (
    <div className={`relative p-8 w-${width} h-${height}`}>
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="customClipPath">
            <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
          </clipPath>
        </defs>
        <rect
          width="100"
          height="100"
          clipPath="url(#customClipPath)"
          fill="#d63384"
        />
      </svg>
      <div className="relative z-10 p-4">{children}</div>
    </div>
  );
};

export default CustomShape;
