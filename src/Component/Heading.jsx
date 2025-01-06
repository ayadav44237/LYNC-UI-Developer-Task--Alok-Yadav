import PropTypes from "prop-types";
export const  Heading = ({ isMenuOpen }) => {
  return (
    <div
      className={`relative p-10 max-w-5xl min-w-full mx-auto ${
        isMenuOpen ? "mt-72" : "" // Add margin-top when the menu is open
      }`}
    >
      <div className="text-white font-bold text-6xl text-center">
        Launch Your Game{" "}
        <span className="bg-gradient-to-r from-[#FF0276] to-[#7209B7] bg-clip-text text-transparent">
          Web 3.0
        </span>{" "}
        in Minutes
      </div>
      <div className="text-center mt-10 text-gray-100 text-2xl">
        We help game developers to launch their game on Web 3.0, by keeping
        blockchain complexities aside with WebWorld SDKs!
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6 items-center justify-center sm:w-full w-auto">
        {/* Get Started Button */}
        <button className="bg-gradient-to-r from-[#3F37C9] to-[#4CC9F0] text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-80 transition duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
          <span>Get started</span>
          {/* Always show text on all screens */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6l6 6-6 6"
            />
          </svg>
        </button>

        {/* View Docs Button */}
        <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-opacity-80 transition duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
          <span>View Docs</span>
          {/* Always show text on all screens */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6l6 6-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
Heading.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired, // Expecting isMenuOpen to be a boolean
};

export const Heading2=()=>{
    return(
        <>
         <div className="text-white font-bold text-3xl text-center">
         Power Up Your Web3 Game Development ,With {" "}  
        <span className="bg-gradient-to-r from-[#FF0276] to-[#7209B7] bg-clip-text text-transparent">
        LYNC SDKs
        </span>{" "}
      
      </div>
      <div className="text-center mt-4 text-gray-100 text-2xl">
      LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few click
      </div>
        </>
    )
}
