import { useState } from "react";
import Navbar from "./Component/Navbar";
import {Heading ,Heading2}from "./Component/Heading";
import { Icon ,CompanyLogo} from "./Component/Icon";
import { Box1 } from "./Component/Define";
import LYNC from "./Component/LYNC";
import Details from "./Component/Details";
import CardGrid from "./Component/CardGrid";
import CarouselComponent from "./Component/CarouselComponent";
import CarouselTextComponent from "./Component/CarouselTextComponent";
import Network from "./Component/Network";
import LogoGrid from "./Component/LogoGrid";
import Footer from "./Component/Footer";
import Heading3 from "./Component/Heading3";
import Partners from "./Component/Partners";
const AppLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (state) => {
    setIsMenuOpen(state); // Update the state based on menu toggle
  };

  return (
    <>
    <div className="max-w-7xl shadow-3xl mx-auto">

    
      <Navbar  onMenuToggle={handleMenuToggle} />
      <Heading isMenuOpen={isMenuOpen} />
      <Icon/>
      <LYNC/>
      <CompanyLogo/>
      <Heading2/>
      <Box1/>
      <Details/>
      <CardGrid/>
      <LogoGrid/>
      <CarouselComponent/>
      <CarouselTextComponent/>
      <Network/>
      <Partners/>
      <Heading3/>
      <Footer/>
      </div>
    </>
  );
};

export default AppLayout;
