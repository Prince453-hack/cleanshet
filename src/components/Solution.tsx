import { Activity, Droplets, Leaf } from "lucide-react";
import React from "react";

const Solution: React.FC = () => {
  return (
    <div className="px-16 py-24 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#d633848b,rgba(255,255,255,0))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14">
        <div className="text-center">
          <p className="mt-2 mb-16 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Revolutionizing Restroom Hygiene
          </p>
        </div>
        <div className="relative mt-10">
          <div className="absolute inset-0 flex justify-center items-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 200 100 Q 300 0 400 100 T 600 100 T 800 100"
                stroke="#E5E7EB"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="200" cy="100" r="4" fill="#E5E7EB" />
              <circle cx="400" cy="100" r="4" fill="#E5E7EB" />
              <circle cx="600" cy="100" r="4" fill="#E5E7EB" />
              <circle cx="800" cy="100" r="4" fill="#E5E7EB" />
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="flex flex-col items-center">
              <div className="relative p-8 w-16 h-16">
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
                    fill="#533164"
                  />
                  <foreignObject
                    width="100"
                    height="100"
                    clip-path="url(#customClipPath)"
                  >
                    <div className="flex justify-center items-center w-full h-full">
                      <div className="relative z-10 p-4">
                        <Leaf className="text-white animate-pulse" size={40} />
                      </div>
                    </div>
                  </foreignObject>
                </svg>
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Eco-Friendly Covers
              </h3>
              <p className="mt-2 text-base text-gray-950 text-center">
                Cleanshet crafts flushable, disposable, water-resistant seat
                covers from premium eco-friendly materials, promoting a
                zero-waste future.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative p-8 w-16 h-16">
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
                    fill="#533164"
                  />
                  <foreignObject
                    width="100"
                    height="100"
                    clip-path="url(#customClipPath)"
                  >
                    <div className="flex justify-center items-center w-full h-full">
                      <div className="relative z-10 p-4">
                        <Droplets
                          className="text-white animate-pulse"
                          size={40}
                        />
                      </div>
                    </div>
                  </foreignObject>
                </svg>
              </div>

              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Hygiene Innovation
              </h3>
              <p className="mt-2 text-base text-black text-center">
                Anti-slip seat covers release cleaning agents with each flush,
                ensuring a pristine, germ-free experience and maximum comfort.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative p-8 w-16 h-16">
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
                    fill="#533164"
                  />
                  <foreignObject
                    width="100"
                    height="100"
                    clip-path="url(#customClipPath)"
                  >
                    <div className="flex justify-center items-center w-full h-full">
                      <div className="relative z-10 p-4">
                        <Activity
                          className="text-white animate-pulse"
                          size={40}
                        />
                      </div>
                    </div>
                  </foreignObject>
                </svg>
              </div>
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                Social Responsibility
              </h3>
              <p className="mt-2 text-base text-gray-950 text-center">
                Cleanshet&apos;s dispensers promote hygiene and corporate
                responsibility, with flexible models for easy adoption in public
                restrooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
