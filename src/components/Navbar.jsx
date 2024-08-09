import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="flex justify-center items-center  pl-10 pr-5  font-semibold nav">
        <div className="  sm:absolute sm:left-5 logo w-20 h-12">
          <img src="CIO_LOGO.jpg" alt="" />
        </div>
        <div className=" sm:hidden lg:flex items-center navlinks justify-evenly w-full">
          <div className="">Home</div>
          <div className="">About us</div>
          <div className="">Complaint Online</div>
          <div className="">Publication</div>
          <div className="">FAQs</div>
          <div className="">Grivance Redressal Officiers</div>
          <div className="">Related Links</div>
          <div className="">RTI</div>
          <div className="">
            <button class="bg-white text-green-700  hover:bg-green-700  hover:text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
        <div className="absolute  right-10 z-10 rounded flex justify-center items-center ">
      {/* Hamburger Button (visible only on small screens) */}
      <button
        onClick={toggleMenu}
        className="inline-block md:hidden p-4 focus:outline-none"
      >
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black mb-1"></div>
        <div className="w-6 h-0.5 bg-black"></div>
      </button>

      {/* Navigation Menu */}
      <nav
        className={`absolute top-full  w-40 bg-white border border-gray-300 rounded-lg shadow-lg p-2 ${isMenuOpen ? 'block' : 'hidden'} md:block`}
      >
        <ul className="space-y-2">
          <li>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700 hover:bg-gray-100 p-2 rounded">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>

      </div>
      

      <div class="overflow-hidden bg3 p-1 ">
        <p class="animate-marquee hover:animation-pause whitespace-nowrap  ">
          Insurance Ombudsman - One Stop Grievance Resolution -{" "}
          <span className="   text-red-800"> Click here</span>
        </p>
      </div>
      <div className="home flex    ">
        <div className="flex">
          <div className="flex-1 w-1/2 p-11">
            <img className=" " src="./MainPgImg.jpg" alt="" />
          </div>
          <div className="flex-1  ml-5 w-1/2 p-7">
            {" "}
            <img className=" " src="./VideoThumbnail.jpg" alt="" />
            <div className="flex items-center font-semibold justify-center  mr-10 text-blue-500">
              Self-help video for Online registration of complaint
            </div>
          </div>
        </div>
      </div>
      <div className="text-blue-600 font-bold ml-10 text-3xl m-3">
        Advertisement For Hiring Of Office Premises At Thane On Lease Basis
        &nbsp;
        <span className="text-red-700 cursor-pointer">Click here</span>
      </div>
      <div className="flex m-10">
        <div className="w-1/2">
          <div className="font-bold text-2xl text-green-900 ">
            Council for Insurance Ombudsmen
          </div>
          <div className="text-xs">
            The Offices of Insurance Ombudsman are under the administrative
            control of Council for Insurance Ombudsmen (CIO), which has been
            constituted under the Insurance Ombudsman Rules, 2017. <br /> <br />
            Office of Insurance Ombudsman is an alternate Grievance Redressal
            platform which has been setup with an aim to resolve grievances of
            aggrieved policyholders against Insurance Companies and its
            Intermediaries or Insurance Brokers in a speedy and cost-effective
            manner
          </div>
          <div className="mt-5   font-bold text-green-800 text-3xl">
            Ways to submit/lodge the complaint
          </div>
          <ul className="ml-2 list-disc  text-green-800 mt-4">
            <li>Online : click here for registering</li>
            <li>
              Offline : a) using email, b) via post or c) walk-in to Insurance
              Ombudsman Office (click here for details) of centres, email id,
              address and jurisdiction.
            </li>
            <li> For tracking your complaint click here</li>
          </ul>
        </div>

        <div className="w-1/2 ml-10 bg2 p-2 rounded  ">
          <div className="text-3xl text-green-800 mb-5  ">
            Before you submit your grievance to Insurance Ombudsman:
          </div>
          <div className="">
            You should have made a complaint to Insurance Company/Insurance
            Broker ○Insurance Company/Insurance Broker has failed to furnish
            reply to you within a period of one month of your complaint; <br />
            <span className=" flex justify-center mb-2">OR</span>
            &nbsp; &nbsp; You are not satisfied with the response given by
            Insurance Company/Insurance Broker <br /> The complaint is being
            made to the Insurance Ombudsman within one year from <br /> (a) Date
            of rejection of the complaint by the Insurance Company/Insurance
            Broker <br />
            <span className="flex items-center justify-center">OR</span>
            <br /> b) Expiry of one month of filing the complaint if the Insurer
            fails to reply <br /> The amount of Compensation sought in Insurance
            Ombudsman should not exceed Rs. 50 Lakhs. <br />
          </div>
          <br />
          <div className="bg-white mt-2 outline-green-700 shadow-lg border-green-700 flex items-center justify-center  text-green-700 hover:bg-green-700 hover:text-white   font-bold py-2 px-4 rounded ">
            OK, REGISTER MY COMPLAINT
          </div>
          {/* <div className="bg-white inline-block    text-center  mt-2  text-green-700 hover:bg-green-700 hover:text-white   font-bold py-2 px-4 rounded">
            <div className=" flex items-center justify-center" >OK, REGISTER MY COMPLAINT</div>
          </div> */}
        </div>
      </div>

      {/* //footer */}
      <div className="bg-green-800 pl-14 pr-14 pt-6 ">
        <div className="flex justify-evenly items-center underline   text-white">
          <div className="">Archives</div>
          <div className="">Download</div>
          <div className="">Carrers</div>
          <div className="">Contact us</div>
        </div>
        <div className="text-center text-white mt-5">
          <div className="">
            Visitor number: 35414188 since 7th December 2022
          </div>
          <div className="">Last Updated on: 01th July 2024</div>
        </div>
      </div>
      <div class="border-t-2 border-dotted border-gray-500"></div>
      <div className="text-white bg-green-800 text-center">
        © CIO. All Rights Reserved 2021. Disclaimer.
      </div>
    </div>
  );
};

export default Navbar;
