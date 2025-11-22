import React from 'react'
import {hmsServices} from '../../HMSservice'
const Serviceflow = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-200 py-20 mt-4">
          <div className="max-w-7xl mx-auto px-6">
            {/* Top Badge */}
            <div className="flex justify-center mb-12">
              <span
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 
          rounded-full shadow-xl text-sm font-semibold tracking-wide animate-pulse"
              >
                Healthcare • Secure • Cloud
              </span>
            </div>

            {/* Flow Container */}
            <div className="relative flex items-center justify-between">
              {/* Blue Gradient Wavy Line */}
              <svg
                className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full"
                height="150"
              >
                <defs>
                  <linearGradient
                    id="gradLine"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="50%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                </defs>

                <path
                  d="M20 80 
              C 150 10, 250 150, 400 80 
              S 650 10, 800 80 
              S 1050 150, 1200 80"
                  fill="none"
                  stroke="url(#gradLine)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  className="drop-shadow-lg"
                />
              </svg>

              {/* Service Circles */}
              <div className="flex justify-between w-full relative">
                {hmsServices.map((service) => (
                  <div key={service.id} className="text-center w-full px-4">
                    {/* Circle */}
                    <div
                      className="w-24 h-24 mx-auto rounded-full bg-white shadow-2xl border-4 
                border-blue-400 flex items-center justify-center z-10 relative 
                hover:scale-110 hover:border-blue-500 transition-all duration-300 
                hover:shadow-[0_0_20px_5px_rgba(0,150,255,0.5)]"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-14 h-14 transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-4 font-bold text-gray-800 tracking-wide text-lg">
                      {service.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stethoscope */}
              {/* <div className="absolute right-0 -mr-24 top-1/2 transform -translate-y-1/2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2965/2965567.png"
              className="w-48 opacity-95 hover:scale-105 transition-all duration-300 drop-shadow-xl"
              alt="stethoscope"
            />
          </div> */}
            </div>
          </div>
        </div>
  )
}

export default Serviceflow
