import Popover from "@mui/material/Popover";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

import { Input } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [myinput, setmyInput] = useState({
    userName: "",
    password: "",
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const submitHandler = (e) => {
    console.log("sec");
    e.preventDefault();
    setmyInput({
      userName: "",
      password: "",
    });

    setIsLogin(true);
  };
  const changeHandler = (e) => {
    console.log("first");
    setmyInput({ ...myinput, [e.target.name]: e.target.value });
    console.log(myinput);
  };
  const open2 = Boolean(anchorEl2);
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;


  return (
    <div>
      <div className="flex w-full justify-between items-center  font-semibold nav">
        <div className="logo w-20 h-12 pl-5">
          <img src="CIO_LOGO.jpg" alt="" />
        </div>
        <div className="flex items-center justify-evenly   navlinks   ">
          <div className="">Home</div>
          <div className="">About us</div>
          <div className="">Complaint Online</div>
          <div className="">Publication</div>
          <div className="">FAQs</div>
          <div className="">Grivance Redressal Officiers</div>
          <div className="">Related Links</div>
          <div className="">RTI</div>
        </div>
        {isLogin ? (
          <></>
        ) : (
          <>
            <Button aria-describedby="popover2" onClick={handleClick2}>
              <div className="bg-white p-2 hover:bg-green-700 rounded relative -right-20 text-green-600 hover:text-white">
                Login
              </div>
            </Button>

            <div className="flex justify-center">
              <Popover
                id="popover2"
                open={open2}
                anchorEl={anchorEl2}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <div className="pop h-full  rounded flex justify-center items-center bg-gradient-to-br from-green-950 to-green-500   ">
                  <div className=" m-5 rounded">
                    <div className=" text-center mt-5 mb-5 text-white m-2 font-extrabold text-2xl shadow ">
                      {" "}
                      Please Login
                    </div>

                    <div className="">
                      <form
                        className="flex-col justify-center items-center"
                        onSubmit={submitHandler}
                      >
                        <div className="mt-10 flex items-center ">
                          <span className="text-white"> Username: </span> &nbsp;
                          &nbsp;
                          <input
                            className="rounded p-2 bg-green-200 "
                            type="text"
                            name="userName"
                            value={myinput.userName}
                            placeholder="Enter Your Username"
                            onChange={(e) =>
                              setmyInput({
                                ...myinput,
                                userName: e.target.value,
                              })
                            }
                          />
                        </div>
                        <br />{" "}
                        <div className=" mt-4 ">
                          <span className="text-white">Password: </span> &nbsp;
                          &nbsp;
                          <input
                            className="rounded p-2  bg-green-200"
                            placeholder="Enter Your password"
                            type="password"
                            name="password"
                            value={myinput.password}
                            onChange={(e) =>
                              setmyInput({
                                ...myinput,
                                password: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="text-center mt-10 flex justify-center items-center bg-green-300 text-green-700 p-2 rounded hover:bg-green-700 inline-block hover:cursor-pointer hover:text-white">
                          <button type="submit" className="w-20">
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
          </>
        )}

        {isLogin ? (
          <>
            <Button aria-describedby={id} onClick={handleClick}>
              <div className="bg-white p-2 hover:bg-green-700 rounded  text-green-600 hover:text-white">
                Show
              </div>
            </Button>

            <div className="flex justify-center">
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
              >
                <div className="pop h-full flex justify-center items-center bg-gradient-to-br from-green-950 to-green-500   ">
                  <div className="">
                    <div className="text-right text-white m-2 font-extrabold text-2xl shadow ">
                      {" "}
                      Client Details
                    </div>
                    <table class="w-full text-white  text-left">
                      <tbody>
                        <tr class=" ">
                          <th class=" px-4 absolute left-20 ">Name:</th>
                          <td class=" px-4">XXXX</td>
                        </tr>

                        <tr class="">
                          <th class=" px-4 absolute left-20 ">DOB:</th>
                          <td class=" px-4">XXXX</td>
                        </tr>
                        <tr class="">
                          <th class="px-4 absolute left-20 ">PAN:</th>
                          <td class=" px-4">XXXX</td>
                        </tr>
                        <tr class="">
                          <th class=" px-4 absolute left-20">BANK Ac:</th>
                          <td class=" px-4">XXXX</td>
                        </tr>
                        <tr class="">
                          <th class=" px-4 absolute left-20 ">IFSC:</th>
                          <td class=" px-4">XXXX</td>
                        </tr>
                        <tr class="">
                          <th class=" px-4 absolute left-20 ">Mobile No.</th>
                          <td class=" px-4">XXXX</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="">
                      <div className="text-right text-white m-2  font-extrabold text-2xl shadow ">
                        {" "}
                        Fund Details
                      </div>
                      <table class="w-full text-white  text-left">
                        <tbody>
                          <tr class=" ">
                            <th class="py-2 px-4 absolute left-20 ">
                              Invested in Mutual Fund:
                            </th>
                            <td class="py-2 px-4">XXXX</td>
                          </tr>

                          <tr class="">
                            <th class=" px-4 absolute left-20 ">
                              Invested in Equity Fund:
                            </th>
                            <td class="px-4">XXXX</td>
                          </tr>
                          <tr class="">
                            <th class=" px-4 absolute left-20 ">
                              Consolidated Fund value:
                            </th>
                            <td class=" px-4">XXXX</td>
                          </tr>
                          <tr class="">
                            <th class="px-4 absolute left-20">
                              Commision Due:
                            </th>
                            <td class="px-4">XXXX</td>
                          </tr>
                          <tr class="">
                            <th class=" px-4 absolute left-20 ">
                              Commission Realised:
                            </th>
                            <td class=" px-4">XXXX</td>
                          </tr>
                          <tr class="">
                            <th class="py-2 px-4 absolute left-20 ">
                              Assigned officer Name:
                            </th>
                            <td class="py-2 px-4">XXXX</td>
                          </tr>
                          <tr class="">
                            <th class=" px-4 absolute left-20 ">
                              Assigned Officer Mobile:
                            </th>
                            <td class=" px-4">XXXX</td>
                          </tr>
                          <tr class="">
                            <th class="py-2 px-4 absolute left-20 ">Status</th>
                            <td class="py-2 px-4">XXXX</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Popover>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="move p-1   wd  font-semibold">
        <div class="animate-marquee hover:animation-pause move hover:animation-pause ">
          Insurance Ombudsman - One Stop Grievance Resolution - Click here
        </div>
      </div>
      <div className=""></div>
      <div className="home     ">
        <div className="  lg:flex ">
          <div className="flex-1  lg:w-1/2 p-11">
            <img className=" " src="./MainPgImg.jpg" alt="" />
          </div>

          <div className="  ml-5 lg:w-1/2 p-7">
            {" "}
            <img className=" " src="./VideoThumbnail.jpg" alt="" />
            <div className="flex items-center font-semibold justify-center  mr-10 text-blue-500">
              Self-help video for Online registration of complaint
            </div>
          </div>
        </div>
      </div>

      <div className="text-blue-600  text-2xl m-3">
        <div className="text-blue-600 font-bold ml-10 text-3xl m-3">
          Advertisement For Hiring Of Office Premises At Thane On Lease Basis
          &nbsp;
          <span className="text-red-700 cursor-pointer">Click here</span>
        </div>
        <div className="   flex-col flex  lg:flex-row  m-10">
          <div className=" w-full lg:w-1/2">
            <div className="font-bold text-2xl text-green-900 ">
              Council for Insurance Ombudsmen
            </div>
            <div className="text-xs text-black">
              The Offices of Insurance Ombudsman are under the administrative
              control of Council for Insurance Ombudsmen (CIO), which has been
              constituted under the Insurance Ombudsman Rules, 2017. <br />{" "}
              <br />
              Office of Insurance Ombudsman is an alternate Grievance Redressal
              platform which has been setup with an aim to resolve grievances of
              aggrieved policyholders against Insurance Companies and its
              Intermediaries or Insurance Brokers in a speedy and cost-effective
              manner
            </div>

            <div className="mt-5   font-bold text-green-800 text-3xl">
              Ways to submit/lodge the complaint
            </div>
            <ul className="ml-2 list-disc  text-xl  text-green-800 mt-4">
              <li>Online : click here for registering</li>
              <li>
                Offline : a) using email, b) via post or c) walk-in to Insurance
                Ombudsman Office (click here for details) of centres, email id,
                address and jurisdiction.
              </li>
              <li> For tracking your complaint click here</li>
            </ul>
          </div>

          <div className=" w-full mt-2    lg:w-1/2 lg:ml-10 bg2 p-2 rounded  ">
            <div className="text-3xl text-green-800 mb-5  ">
              Before you submit your grievance to Insurance Ombudsman:
            </div>
            <div className="text-xl text-green-800">
              You should have made a complaint to Insurance Company/Insurance
              Broker.
              <br />Insurance Company/Insurance Broker has failed to furnish
              reply to you within a period of one month of your complaint;{" "}
              <br />
              <span className=" flex justify-center mb-2">OR</span>
               You are not satisfied with the response given by
              Insurance Company/Insurance Broker <br /> The complaint is being
              made to the Insurance Ombudsman within one year from <br /> (a)
              Date of rejection of the complaint by the Insurance
              Company/Insurance Broker. <br />
              <span className="flex items-center justify-center">OR</span>
              <br /> b) Expiry of one month of filing the complaint if the
              Insurer fails to reply. <br /> The amount of Compensation sought in
              Insurance Ombudsman should not exceed Rs. 50 Lakhs. <br/>
            </div>
            <br />
            <div className="bg-white mt-2 outline-green-700 shadow-lg border-green-700 flex items-center justify-center  text-green-700 hover:bg-green-700 hover:text-white   font-bold py-1 px-2 rounded ">
              OK, REGISTER MY COMPLAINT
            </div>
          </div>
        </div>

        {/* //footer */}
        <div className="-ml-10">
          <div className="bg-green-800  pl-14 pr-14 pt-6 ">
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
      </div>
    </div>
  );
};

export default Navbar;
