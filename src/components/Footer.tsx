/* eslint-disable @next/next/no-img-element */
import React from "react";

import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="mt-20 bg-black text-white px-10 py-28">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className="grid grid-cols-2">
            <div className="flex flex-col gap-[36px] text-justify">
              <p className="uppercase font-semibold">Company</p>
              <a href="#">About</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="flex flex-col gap-[36px] text-justify">
              <p className="uppercase font-semibold">Invest</p>
              <a href="#">Dashboard</a>
              <a href="#">Browse Property</a>
              <a href="#">FAQs</a>
            </div>
          </div>
          <div className="flex flex-col gap-[36px] text-justify justify-center items-center my-10">
            <div className="">
              <img src="/images/logo-Footer.png" alt="" />
            </div>
            <div className="flex gap-2">
              <a href="#">
                <button className="border border-white rounded-full p-1">
                  <FaFacebookF />
                </button>
              </a>
              <a href="#">
                <button className="border border-white rounded-full p-1">
                  <FaXTwitter />
                </button>
              </a>
              <a href="#">
                <button className="border border-white rounded-full p-1">
                  <FaInstagram />
                </button>
              </a>
              <a href="#">
                <button className="border border-white rounded-full p-1">
                  <FaLinkedinIn />
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-[36px] text-justify">
            <p className="uppercase font-semibold">Contact Us</p>
            <p className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M4 20.1553C3.45 20.1553 2.979 19.9593 2.587 19.5673C2.195 19.1753 1.99934 18.7046 2 18.1553V6.15528C2 5.60528 2.196 5.13427 2.588 4.74227C2.98 4.35028 3.45067 4.15461 4 4.15528H20C20.55 4.15528 21.021 4.35127 21.413 4.74327C21.805 5.13527 22.0007 5.60594 22 6.15528V18.1553C22 18.7053 21.804 19.1763 21.412 19.5683C21.02 19.9603 20.5493 20.1559 20 20.1553H4ZM12 13.1553L20 8.15528V6.15528L12 11.1553L4 6.15528V8.15528L12 13.1553Z"
                  fill="#527853"
                />
              </svg>
              contact@Homevest.com
            </p>
            <p className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M19.95 21.1553C17.8667 21.1553 15.8083 20.7009 13.775 19.7923C11.7417 18.8836 9.89167 17.5963 8.225 15.9303C6.55833 14.2636 5.271 12.4136 4.363 10.3803C3.455 8.34694 3.00067 6.28861 3 4.20527C3 3.90527 3.1 3.65527 3.3 3.45527C3.5 3.25527 3.75 3.15527 4.05 3.15527H8.1C8.33333 3.15527 8.54167 3.23461 8.725 3.39327C8.90833 3.55194 9.01667 3.73927 9.05 3.95527L9.7 7.45527C9.73333 7.72194 9.725 7.94694 9.675 8.13027C9.625 8.31361 9.53333 8.47194 9.4 8.60527L6.975 11.0553C7.30833 11.6719 7.704 12.2676 8.162 12.8423C8.62 13.4169 9.12433 13.9713 9.675 14.5053C10.1917 15.0219 10.7333 15.5013 11.3 15.9433C11.8667 16.3853 12.4667 16.7893 13.1 17.1553L15.45 14.8053C15.6 14.6553 15.796 14.5426 16.038 14.4673C16.28 14.3919 16.5173 14.3713 16.75 14.4053L20.2 15.1053C20.4333 15.1719 20.625 15.2929 20.775 15.4683C20.925 15.6436 21 15.8393 21 16.0553V20.1053C21 20.4053 20.9 20.6553 20.7 20.8553C20.5 21.0553 20.25 21.1553 19.95 21.1553Z"
                  fill="#527853"
                />
              </svg>
              (414) 807 - 7478
            </p>
            <p className="flex gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M1.50001 12.1553C1.50001 6.35627 6.20101 1.65527 12 1.65527C17.799 1.65527 22.5 6.35627 22.5 12.1553C22.5 17.9543 17.799 22.6553 12 22.6553C10.224 22.6553 8.54851 22.2135 7.08001 21.4335L2.93401 22.6125C2.74132 22.6671 2.53754 22.6693 2.34372 22.6189C2.1499 22.5684 1.97307 22.4671 1.83149 22.3254C1.68991 22.1838 1.58871 22.0069 1.53834 21.8131C1.48798 21.6192 1.49028 21.4154 1.54501 21.2228L2.72401 17.0775C1.91825 15.5621 1.49788 13.8716 1.50001 12.1553ZM7.50001 9.90527C7.50001 10.1042 7.57903 10.295 7.71968 10.4356C7.86033 10.5763 8.0511 10.6553 8.25001 10.6553H15.75C15.9489 10.6553 16.1397 10.5763 16.2803 10.4356C16.421 10.295 16.5 10.1042 16.5 9.90527C16.5 9.70636 16.421 9.5156 16.2803 9.37494C16.1397 9.23429 15.9489 9.15527 15.75 9.15527H8.25001C8.0511 9.15527 7.86033 9.23429 7.71968 9.37494C7.57903 9.5156 7.50001 9.70636 7.50001 9.90527ZM8.25001 13.6553C8.0511 13.6553 7.86033 13.7343 7.71968 13.8749C7.57903 14.0156 7.50001 14.2064 7.50001 14.4053C7.50001 14.6042 7.57903 14.795 7.71968 14.9356C7.86033 15.0763 8.0511 15.1553 8.25001 15.1553H12.75C12.9489 15.1553 13.1397 15.0763 13.2803 14.9356C13.421 14.795 13.5 14.6042 13.5 14.4053C13.5 14.2064 13.421 14.0156 13.2803 13.8749C13.1397 13.7343 12.9489 13.6553 12.75 13.6553H8.25001Z"
                  fill="#527853"
                />
              </svg>
              Open live chat
            </p>
          </div>
        </div>
        <p className="mt-10">&copy; 2023 HomeVest. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
