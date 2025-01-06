
import Diamond from "../assets/Daimond.png";

export const Box1 = () => {
  return (
    <div className="flex shadow-2xl flex-col md:flex-row justify-between items-center bg-black bg-opacity-30 backdrop-blur-[300px] max-w-6xl mx-auto mt-10 rounded-lg p-6 border border-gray-700">
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left text-white">
        <h2 className="text-2xl font-bold">
          Don't Worry about the{" "}
          <span className="bg-gradient-to-r from-[#FF0276] to-[#7209B7] bg-clip-text text-transparent">
            Web3
          </span>{" "}
          Complexities
        </h2>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-[#FF0276] to-[#7209B7] rounded-full mr-4"></span>
            <span>Save 9-12 months of development time</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-[#FF0276] to-[#7209B7] rounded-full mr-4"></span>
            <span>Focus completely on Game Dev and Mechanics</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-[#FF0276] to-[#7209B7] rounded-full mr-4"></span>
            <span>Save Up to $500K+ on Salaries & Smart Contract Auditing</span>
          </li>
          <li className="flex items-center">
            <span className="w-3 h-3 bg-gradient-to-r from-[#FF0276] to-[#7209B7] rounded-full mr-4"></span>
            <span>Go Cross-Chain in a few clicks</span>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex-1  mt-6 md:mt-0 hidden md:flex justify-center">
        <img
          src={Diamond}
          alt="Diamond"
          className="w-[300px] h-[300px] md:w-[300px] md:h-[300px] object-contain"
        />
      </div>
    </div>
  );
};
