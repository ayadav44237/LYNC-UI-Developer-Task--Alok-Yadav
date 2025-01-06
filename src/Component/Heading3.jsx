

const Heading3 = () => {
  return (
    <section className="relative shadow-both-3xl mt-4 bg-gray-900 text-white py-20 flex items-center justify-center text-center">
      {/* Background Text */}
      <div
        className="absolute inset-0 flex items-center justify-center text-gray-600 opacity-30 font-bold -z-10"
        style={{
          lineHeight: "1",
          fontSize: "20vw", // Large text size based on viewport width
          whiteSpace: "nowrap", // Prevent text from wrapping
          transform: "rotate(-15deg)", // Optional: add rotation for effect
        }}
      >
        LYNC
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Heading */}
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
          Got a game idea?
        </h1>
        {/* Subheading */}
        <p className="text-xl md:text-2xl lg:text-3xl mt-4">
          Let's make it big together!!!
        </p>
        {/* Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 shadow-both-3xl hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm md:text-lg lg:text-xl flex items-center justify-center gap-2">
            Get started{" "}
            <span className="ml-2 ">
              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Heading3;
