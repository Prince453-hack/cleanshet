import React from "react";

const ProblemSub: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-auto p-1 sm:p-6 overflow-hidden mb-7">
      <div className="flip-container relative text-white font-bold text-center p-2 mx-auto w-[400px] h-[400px]">
        <div className="flipper">
          <div className="front">
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
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
              <p className="text-6xl md:text-8xl text-white">90%</p>
            </div>
          </div>
          <div className="back">
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
            <div className="relative z-10 flex items-center justify-center w-full h-full p-12">
              <p>
                Students refrain from going to the washroom because the
                facilities are outright disgusting.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-container relative text-white font-bold text-center p-2 mx-auto w-[400px] h-[400px]">
        <div className="flipper">
          <div className="front">
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
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
              <p className="text-6xl md:text-8xl text-white">91%</p>
            </div>
          </div>
          <div className="back">
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
            <div className="relative z-10 flex items-center justify-center w-full h-full p-12">
              <p>
                People avoid using public washrooms in high traffic areas
                (clubs, bars, restaurants).
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flip-container relative text-white font-bold text-center p-2 mx-auto w-[400px] h-[400px]">
        <div className="flipper">
          <div className="front">
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
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
              <p className="text-6xl md:text-8xl text-white">20%</p>
            </div>
          </div>
          <div className="back">
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
            <div className="relative z-10 flex items-center justify-center w-full h-full p-12">
              <p>Employees shun workplace washrooms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSub;
