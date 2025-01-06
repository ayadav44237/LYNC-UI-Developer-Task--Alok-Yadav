import Product from "../assets/Product.png"; // Update the path if needed.

const LyncWalletSDKCard = () => {
  return (
    <div className="bg-gradient-to-b from-[#1E1E2A] to-[#121223] p-4 rounded-2xl shadow-lg flex flex-col 
                    md:h-80 sm:h-auto"> {/* Adjust card height based on screen size */}
      {/* Image Section - Only visible on medium and larger screens */}
      <div className="hidden md:block flex-1 overflow-hidden">
        <img
          src={Product}
          alt="Product"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

     
      <div className="flex-1 text-left mt-4">
        <h2 className="text-white font-bold text-xl">LYNC Wallet SDK</h2>
        <p className="text-[#A3A3B3] text-sm mt-2">
          Empowering developers to integrate account abstraction in their game,
          dapp, metaverse, and more in minutes.
        </p>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 
                      sm:grid-cols-1 
                      md:grid-cols-2 
                      lg:grid-cols-3">
        {/* Render 6 cards */}
        {Array.from({ length: 6 }).map((_, index) => (
          <LyncWalletSDKCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
