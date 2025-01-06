import Lodash from "../assets/logash.png";
import Clogo1 from "../assets/Clogo1.png"
import Clogo2 from "../assets/Clogo2.png"

export const Icon = () => {
  return (
    <>
   
      <div className="  bg-transparent">
        <div
          className="flex flex-col items-center"
       
        >
          <h1 className="font-bold mt-10 text-white">Backed by</h1>
          <div className="w-[60%] shadow-outer-3xl flex justify-center items-center border-2 border-gray-800 h-20 bg-gray-900 rounded-full mt-12">
            <ul className="flex justify-around items-center space-x-6 p-2 w-full">
              <li className="m-2  text-white flex items-center justify-center w-full">
                <img
                  src={Lodash} // Use relative path from the component file
                  alt="Longhash Logo"
                  className="shadow-2xl h-auto max-w-full mr-2" // Adjust width dynamically and maintain aspect ratio
                />
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <hr className="shadow-both-3xl mt-8 w-[65%] mx-auto border-t-2  border-white  mb-12" />

    </>
  );
};



//     return (
//       <>
//         <div>
//           <div className="flex flex-col items-center">
//             <h1 className="font-bold mt-10 text-white">Backed by</h1>
//             <div className="w-[60%] flex justify-center items-center mt-12">
//               <ul className="flex flex-wrap justify-center items-center space-x-6 p-2 w-full">
//                 <li className="m-2 text-white flex items-center justify-center w-full sm:w-auto">
//                   <img
//                     src={Clogo1} // Use relative path from the component file
//                     alt="Clogo1"
//                     className="h-auto max-w-full mr-2" // Adjust width dynamically and maintain aspect ratio
//                   />
//                 </li>
//                 <li className="m-2 text-white flex items-center justify-center w-full sm:w-auto">
//                   <img
//                     src={Clogo2} // Use relative path from the component file
//                     alt="Clogo2"
//                     className="h-auto max-w-full mr-2" // Adjust width dynamically and maintain aspect ratio
//                   />
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <hr className="mt-4 w-[65%] mx-auto border-t-2 border-black shadow-lg mb-12" />
//       </>
//     );
//   };
  
export const CompanyLogo = () => {
    return (
      <>
        <div>
          <div className="flex  flex-col items-center">
          <div className="text-white font-bold text-2xl text-center">
          Making blockchain gaming 
          accessible to 
        <span className="bg-gradient-to-r from-[#3F37C9] to-[#4CC9F0] bg-clip-text text-transparent">
        everyone.
        </span>{" "}
       
      </div>
            <div className="w-[60%]  shadow-both-2xl  rounded-full  flex justify-center items-center mt-12">
              <ul className="flex flex-col sm:flex-row justify-center items-center space-x-6 p-2 w-full">
                <li className="m-2 text-white flex items-center justify-center w-full sm:w-auto">
                  <img
                    src={Clogo1} // Use relative path from the component file
                    alt="Clogo1"
                    className="h-auto max-w-full mr-2" // Adjust width dynamically and maintain aspect ratio
                  />
                </li>
                <li className="m-2 text-white flex items-center justify-center w-full sm:w-auto">
                  <img
                    src={Clogo2} // Use relative path from the component file
                    alt="Clogo2"
                    className="h-auto max-w-full mr-2" // Adjust width dynamically and maintain aspect ratio
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="shadow-both-3xl mt-12 w-[65%] mx-auto border-t-2  border-white  mb-12" />
      </>
    );
  };
  