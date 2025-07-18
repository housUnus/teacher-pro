import { AxeIcon, Facebook, Pinterset, Instagram, Twitter } from "lucide-react";

export default function Footer({}) {
  return (
    <footer className="mt-10 py-8" id="footer">
      <hr className="w-full" />
      <section className="container py-10 px-4 mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full md:col-span-4">
          <h4 className="text-lg mt-0 mb-2 font-semibold">
            <a href="/" className="font-bold tex-xl flex">
              <AxeIcon />
              TEST UI
            </a>
          </h4>
          <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="social-icons mt-6 lg:mb-0 mb-6">
            <ul className="flex gap-4 text-xl">
              <li className="border-2 rounded-full p-2">
                <Facebook size={24} strokeWidth={2} />
              </li>
              <li className="border-2 rounded-full p-2">
                <Instagram size={24} strokeWidth={2} />
              </li>
              <li className="border-2 rounded-full p-2">
                <Instagram size={24} strokeWidth={2} />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h5 className="uppercase font-semibold mb-2 block">About Us</h5>
          <ul className="text-secondary flex flex-col gap-2">
            <li className="text-gray-600 hover:text-blue-800">
              <a href="#">About Us</a>
            </li>
            <li className="text-gray-600 hover:text-blue-800">
              <a href="#">About Us</a>
            </li>
            <li className="text-gray-600 hover:text-blue-800">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h5 className="uppercase font-semibold mb-2 block">Community</h5>
          <ul className="text-secondary flex flex-col gap-2">
            <li className="text-gray-600 hover:text-blue-800">
              <a href="#">About Us</a>
            </li>
            <li className="text-gray-600 hover:text-blue-800">
              <a href="#">About Us</a>
            </li>
            <li className="text-gray-600 hover:text-blue-800">
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="container text-center">
        <h3>
          &copy; 2024 All rights reserved to {" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/leopoldo-miranda/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Test UI
          </a>
        </h3>
      </section>
    </footer>
  );
}
