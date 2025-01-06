import Logo1 from "../assets/PartnersLogo/Logo1.png";
import Logo2 from "../assets/PartnersLogo/Logo2.png";
import Logo3 from "../assets/PartnersLogo/Logo3.png";
import Logo4 from "../assets/PartnersLogo/Logo4.png";
import Logo5 from "../assets/PartnersLogo/Logo5.png";
import Logo6 from "../assets/PartnersLogo/Logo6.png";
import Logo7 from "../assets/PartnersLogo/Logo7.png";
import Logo8 from "../assets/PartnersLogo/Logo8.png";

const Partners = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

  return (
    <>
      <div className="text-white font-bold text-2xl text-center">
        Our{" "}
        <span className="bg-gradient-to-r from-[#3F37C9] to-[#4CC9F0] bg-clip-text text-transparent">
          Believers and Partners.
        </span>{" "}
      </div>

      <div className="container mx-auto p-6">
        <div
          className="grid gap-6
            grid-cols-2 sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex shadow-both-2xl justify-center items-center rounded-lg p-4"
              style={{
                backdropFilter: "blur(226.178px)", // Apply blur effect
              }}
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="max-w-[150px] max-h-[100px] object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
