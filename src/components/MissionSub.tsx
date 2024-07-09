import {
  Droplets,
  Leaf,
  Recycle,
  ShieldCheck,
  Users,
  WashingMachine,
} from "lucide-react";
import React from "react";

const MissionSub = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28 mx-auto p-1 sm:p-6 overflow-hidden mb-[-12rem] mt-16">
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
              <p className="text-2xl text-white">Natural Materials</p>
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
                Our mission is to offer eco-friendly seat covers crafted from
                sustainable, all-natural materials.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-16 h-16">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="miniClipPath">
                <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
              </clipPath>
            </defs>
            <rect
              width="100"
              height="100"
              clipPath="url(#miniClipPath)"
              fill="#533164"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Leaf size={30} />
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
              <p className="text-2xl text-white">Water resistant</p>
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
                Our water-resistant seat covers ensure you stay dry and clean,
                protecting against spills and splashes.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-16 h-16">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="miniClipPath">
                <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
              </clipPath>
            </defs>
            <rect
              width="100"
              height="100"
              clipPath="url(#miniClipPath)"
              fill="#533164"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Droplets size={30} />
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
              <p className="text-2xl text-white">Sustainable</p>
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
                We aim to provide a cleaner, safer bathroom experience with our
                flushable and sustainable seat covers.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-16 h-16">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="miniClipPath">
                <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
              </clipPath>
            </defs>
            <rect
              width="100"
              height="100"
              clipPath="url(#miniClipPath)"
              fill="#533164"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Recycle size={30} />
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
              <p className="text-2xl text-white">Protective 3 Layers</p>
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
                Our seat covers offer enhanced comfort and protection with three
                durable layers.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-16 h-16">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="miniClipPath">
                <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
              </clipPath>
            </defs>
            <rect
              width="100"
              height="100"
              clipPath="url(#miniClipPath)"
              fill="#533164"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <ShieldCheck size={30} />
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
              <p className="text-2xl text-white">Flushable & Disposable</p>
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
                For quick and convenient disposal, our seat covers are flushable
                and disposable, aligning with our eco-friendly mission.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-16 h-16">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="miniClipPath">
                <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
              </clipPath>
            </defs>
            <rect
              width="100"
              height="100"
              clipPath="url(#miniClipPath)"
              fill="#533164"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <WashingMachine size={30} />
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
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4">
              <p className="text-2xl text-white">Flexible Usage Anywhere</p>
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
                Designed for flexible usage, our hygienic seat covers are your
                reliable companion wherever you go.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-2 right-2 w-16 h-16">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="miniClipPath">
                <path d="M 10 10 C 20 0, 80 0, 90 10 C 100 20, 100 80, 90 90 C 80 100, 20 100, 10 90 C 0 80, 0 20, 10 10" />
              </clipPath>
            </defs>
            <rect
              width="100"
              height="100"
              clipPath="url(#miniClipPath)"
              fill="#533164"
            />
          </svg>
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Users size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionSub;
