import React from "react";

function AuxzonX() {
  return (
    <div className="min-h-screen custom-gradient p-5">
      <header className="flex justify-between items-center py-4">
        <div className="text-2xl font-bold">AuxzonX</div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-700">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Enterprise
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="text-gray-700 mr-4">Log In</button>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-5">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-10">
          <h1 className="text-4xl font-bold text-black mb-4">
            Amazon intelligence, unlocked
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            9 out of 10 top Amazon sellers use Jungle Scout to increase
            profitability, uncover growth opportunities, and stay ahead of
            competitors.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md font-semibold">
            Get started
          </button>
          <p className="mt-2 text-sm text-gray-500">
            7-day money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">
                Search volume
              </p>
              <p className="text-lg text-gray-500">July 17-23</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Units sold</p>
              <p className="text-lg text-gray-500">35% 90-day</p>
            </div>
            <div className="mb-4">
              <p className="text-xl font-semibold text-gray-800">Avg. price</p>
              <p className="text-lg text-gray-500">19,876</p>
            </div>
            <div className="border-t-2 pt-4">
              <p className="text-lg font-semibold text-gray-800">
                Earbuds for runners
              </p>
              <p className="text-lg text-gray-500">Units sold: 3,203</p>
              <p className="text-lg text-gray-500">Price: $24.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuxzonX;
