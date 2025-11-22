import React from "react";
import { hmsServices } from "../../HMSservice";
import Serviceflow from "./Serviceflow";

export const Home = () => {
  return (
    <div className="py-16 bg-gray-50 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          About HMS (Hospital Management System)
        </h1>
        <p className="text-gray-600 mb-4 leading-relaxed">
          The Hospital Management System (HMS) is a comprehensive digital
          solution designed to streamline hospital operations, improve patient
          care, and optimize resource management. HMS helps hospitals manage
          administrative, clinical, and logistical tasks efficiently. With HMS,
          hospitals can ensure accurate patient records, timely medical
          treatments, and smooth communication between staff and patients.
        </p>
        {/* serviceflow */}
        <Serviceflow/>
        <h1 className="text-4xl font-bold text-gray-800 mb-12 mt-10">
          Providing Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hmsServices.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon/Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-center">
                {service.description}
              </p>

              {/* Learn More Button */}
              <div className="text-center">
                <button className="text-blue-600 font-semibold hover:underline cursor-pointer">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
