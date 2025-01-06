

const Footer = () => {
  return (
    <footer className="bg-gray-900 shadow-outer-3xl    rounded-md dark:shadow-lg dark:shadow-gray-800 text-white py-10 px-6">
      {/* Main container */}
      <div
        className="container mx-auto flex flex-col gap-6 
                   md:grid md:grid-cols-2 
                   lg:flex lg:flex-row lg:justify-between"
      >
        {/* Div 1: Logo and tagline */}
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-2xl font-bold">LYNC</h1>
          <p className="text-sm">A GameFi Infrastructure</p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-white rounded-full text-black">
              {/* LinkedIn icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="p-2 bg-white rounded-full text-black">
              {/* Discord icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                alt="Discord"
                className="w-6 h-6 "
              />
            </a>
          </div>
        </div>

        {/* Div 2: Links */}
        <div
          className="grid grid-cols-2 gap-6 
                     md:grid-cols-3 
                     lg:flex lg:justify-between lg:gap-10"
        >
          <div>
            <h3 className="font-bold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">SDK's</a></li>
              <li><a href="#">Transfer API's</a></li>
              <li><a href="#">Token API's</a></li>
              <li><a href="#">NFT API's</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">About us</a></li>
              <li><a href="#">Press Kit</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#">Email</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>

        {/* Div 3: Newsletter */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="font-bold text-lg">Supercharge your inbox</h3>
          <p className="text-sm">Sign up for our newsletter</p>
          <div className="flex w-full items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" shadow-both-3xl flex-1 p-2 rounded-l-md bg-gray-800 text-white border border-gray-700"
            />
            <button className="px-4 py-2 shadow-both-3xl rounded-r-md bg-blue-600 hover:bg-blue-700 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          © 2024 LYNC World • <a href="#" className="underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
