import { Orbit } from "lucide-react";
import React from "react";

const SkillsComponent: React.FC = () => {
  return (
    <div className="bg-purple-100 px-8 py-16">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Cleanshet's Revolutionary Hygiene Solutions
            </h1>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="relative p-1 w-7 h-7">
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
                          <img src="/nav-mob-logo.png" />
                        </div>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 ml-2">
                  Innovative Dispensers
                </span>
              </li>
              <li className="flex items-center">
                <div className="relative p-1 w-7 h-7">
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
                          <img src="/nav-mob-logo.png" />
                        </div>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 ml-2">
                  Advanced Seat Covers
                </span>
              </li>
              <li className="flex items-center">
                <div className="relative p-1 w-7 h-7">
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
                          <img src="/nav-mob-logo.png" />
                        </div>
                      </div>
                    </foreignObject>
                  </svg>
                </div>
                <span className="text-lg text-gray-700 ml-2">
                  Flexible Business Models
                </span>
              </li>
            </ul>
          </div>

          <div className="relative p-8">
            <div className="relative w-full h-64">
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
                  clipPath="url(#customClipPath)"
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <div className="relative z-10 p-4">
                      <Orbit className="text-white" size={60} />
                    </div>
                  </div>
                </foreignObject>
              </svg>
            </div>
            <div className="absolute top-4 left-8 bg-[#d63384c0] p-4 rounded-lg animate-bounceUpDown">
              <div className="text-lg text-white">Revolutionary Hygiene</div>
            </div>
            <div className="absolute bottom-4 right-10 bg-[#d63384c0] p-4 rounded-lg animate-bounceUpDown">
              <div className="text-lg text-white">Eco-Friendly Solutions</div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-50">
          <p className="text-lg text-gray-700 text-center">
            Transforming Hygiene, One Seat at a Time
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
