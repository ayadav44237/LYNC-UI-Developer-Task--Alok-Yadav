
import NetworkImage from "../assets/network.png";

const Network = () => {
  return (
    <div className="w-full ">
      <img
        src={NetworkImage}
        alt="Network"
        className="w-full h-auto object-cover" // Ensures full width and auto height adjustment
      />
    </div>
  );
};

export default Network;
