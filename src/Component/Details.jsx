
import Joystick from "../assets/joystick.png";
import Controls from "../assets/controls.png";

const SectionTwo = () => {
  return (
    <div className="text-white py-20   md:px-12 ">
      <div className="  max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="bg-white shadow-both-3xl text-black rounded-lg p-8 relative  flex lg:justify-between" style={{ background: 'linear-gradient(94.68deg, #FF0276 2.51%, #7209B7 56.42%)' }}>
          {/* Text Area */}
          <div className="w-3/5 flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-bold leading-snug">
              Elevate Your Gameplay with Essential Insights!
            </h2>
            <p className="mt-4 text-gray-700 text-lg">
              Unleash Your Potential - Explore the Knowledge Hub Today!
            </p>
            <button className="mt-6 px-8 py-3 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition">
              View Docs
            </button>
          </div>

          {/* Image Area */}
          <div className="w-2/5 flex justify-center items-center">
            <img
              src={Joystick}
              alt="Joystick"
              className="w-full h-auto object-contain max-w-xs"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* First Card */}
          <div className="bg-black shadow-both-3xl bg-opacity-50 p-8 rounded-lg  flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-white">200+</h3>
            <p className="mt-3 text-gray-300">
              Projects have downloaded & integrated LYNC SDKs
            </p>
          </div>

  
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-both-3xl flex flex-col justify-between h-full relative">
            <h3 className="text-2xl font-bold text-white">50,000+</h3>
            <p className="mt-3 text-gray-300">User ops created in 10 hours</p>
            <img
              src={Controls}
              alt="Controls Icon"
              className="absolute bottom-4 right-4 w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-both-3xl flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-white">10+</h3>
            <p className="mt-3 text-gray-300">
              Projects have downloaded & integrated LYNC SDKs
            </p>
          </div>

         
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-both-3xl flex flex-col justify-between h-full">
            <h3 className="text-2xl font-bold text-white">8,000+</h3>
            <p className="mt-3 text-gray-300">
              Contracts have been deployed via LYNC
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;


