import Popover from "@mui/material/Popover";

import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

import { Input } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [loggedInData, setLoggedInData] = useState({});
  const [myinput, setmyInput] = useState({
    phone: "",
    username: "",
  });
  const [savedData, setSavedData] = useState(
    JSON.parse(localStorage.getItem("client"))
  );
  const handleFetchData = async () => {
    const response = await axios.get(
      `http://localhost:5000/data/${myinput.phone}`
    );
    if(response.data.name != myinput.username){
      seSavedData(null);
      setLoggedInData(null);
      setIsLogin(false)

    }
    else if (JSON.stringify(response.data)) {
      localStorage.setItem("client", JSON.stringify(response.data));

      setSavedData(response.data);
    }
  };

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("client");
    if (storedLoginStatus) {
    
      setIsLogin(true);
    }
  }, []);


  // useEffect(() => {
  //   if(savedData){
  //     if (myinput.phone == savedData.phone  && myinput.username === savedData.name  ) {
  //       setLoggedInData(savedData);
  //       localStorage.setItem("data", savedData);
  //     }
  //   }
    
  // }, [savedData, myinput.phone, myinput.password]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    await handleFetchData();
    setmyInput({
      phone: "",
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
      <div className="flex justify-around w-full   items-center  font-semibold nav">
        <div className="logo w-20 relative  flex items-center h-12 pl-5">
          <img src="CIO_LOGO.jpg" alt="" />
        </div>
        <div className=" text-justify hidden lg:block ">
          Welcome To Online Complaint mangement System
        </div>

        <>
          {isLogin ? (
            <></>
          ) : (
            <>
              <Button aria-describedby="popover2" onClick={handleClick2}>
                <div className="bg-white p-2   hover:bg-green-700 font-bold rounded relative  text-green-600 hover:text-white">
                  Login
                </div>
              </Button>
            </>
          )}

          {isLogin ? (
            <div className="flex w-full lg:w-2/3 absolute z-10  items-center mt-96 justify-center">
              <div className="pop mt-40 h-full flex justify-center items-center bg-gradient-to-br from-green-950 to-green-500   ">
                <div className="">
                  <div className="text-right text-white m-2 font-extrabold text-2xl shadow ">
                    {" "}
                    Client Details
                  </div>
                  <table class="w-full text-white  ">
                    <tbody>
                      <tr class=" ">
                        <th class=" px-4 text-left ">Complaint No.:</th>
                        <td class=" px-4 ">   { savedData &&  savedData.Complaintno}</td>
                      </tr>
                      <tr class=" ">
                        <th class=" px-4 text-left  ">Name:</th>
                        <td class=" px-4">{ savedData && savedData.name}</td>
                      </tr>

                      <tr class="">
                        <th class=" px-4 text-left ">DOB:</th>
                        <td class=" px-4">{ savedData &&  savedData.DOB}</td>
                      </tr>
                      <tr class="">
                        <th class="px-4  text-left">PAN:</th>
                        <td class=" px-4">{ savedData &&  savedData.pan}</td>
                      </tr>
                      <tr class="">
                        <th class=" px-4 text-left ">BANK Ac:</th>
                        <td class=" px-4">{ savedData &&  savedData.account}</td>
                      </tr>
                      <tr class="">
                        <th class=" px-4  text-left ">IFSC:</th>
                        <td class=" px-4">{ savedData &&  savedData.ifsc}</td>
                      </tr>
                      <tr class="">
                        <th class=" px-4  text-left ">Mobile No.</th>
                        <td class=" px-4">{ savedData &&  savedData.phone}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="">
                    <div className="text-right text-white m-2  font-extrabold text-2xl shadow ">
                      {" "}
                      Fund Details
                    </div>
                    <table class="w-full text-white  ">
                      <tbody>
                        <tr class=" ">
                          <th class="py-2 px-4  text-left ">
                            Invested in Mutual Fund:
                          </th>
                          <td class="py-2   px-4">{ savedData && savedData.mutual}</td>
                        </tr>

                        <tr class="">
                          <th class=" px-4 text-left  ">
                            Invested in Equity Fund:
                          </th>
                          <td class="px-4">{savedData && savedData.equity}</td>
                        </tr>
                        <tr class="">
                          <th class=" px-4 text-left ">
                            Consolidated Fund value:
                          </th>
                          <td class=" px-4">{savedData && savedData.fundvalue}</td>
                        </tr>
                        <tr class="">
                          <th class="px-4  text-left">Commision Due:</th>
                          <td class="px-4">{savedData && savedData.commissiondue}</td>
                        </tr>
                        <tr class="">
                          <th class=" px-4 text-left ">Commission Realised:</th>
                          <td class=" px-4">{savedData && savedData.commissionrealised}</td>
                        </tr>
                        <tr class="">
                          <th class="py-2 px-4 text-left">
                            Assigned officer Name:
                          </th>
                          <td class="py-2 px-4">{savedData && savedData.officer}</td>
                        </tr>
                        <tr class="">
                          <th class=" px-4 text-left  ">
                            Assigned Officer Mobile:
                          </th>
                          <td class=" px-4">{savedData && savedData.officermobile}</td>
                        </tr>
                        <tr class="">
                          <th class="py-2 px-4 text-left ">Status:</th>
                          <td class="py-2 px-4">{savedData && savedData.status}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ) : (
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
                       
                       
                        <br />{" "}
                        <div className=" mt-4 ">
                          <span className="text-white">UserName: </span> &nbsp;
                          &nbsp;
                          <input
                            className="rounded p-2  bg-green-200"
                            placeholder="Enter Your Username"
                            type="text"
                            name="username"
                            value={myinput.username}
                            onChange={(e) =>
                              setmyInput({
                                ...myinput,
                                username: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mt-10 flex items-center ">
                        <span className="text-white"> Phone no: </span> &nbsp;
                          &nbsp;
                          <input
                            className="rounded p-2 bg-green-200 "
                            type="text"
                            name="phone"
                            value={myinput.phone}
                            placeholder="Enter Your Phone no"
                            onChange={(e) =>
                              setmyInput({
                                ...myinput,
                                phone: e.target.value,
                              })
                            }
                          />
                            
                        </div>
                        <div className="text-center mt-10 flex justify-center items-center bg-green-300 text-green-700 p-2 rounded hover:bg-green-700   hover:cursor-pointer hover:text-white">
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
          )}
        </>
      </div>
      <div className="move p-1   wd  font-semibold">
        <div class="animate-marquee hover:animation-pause move hover:animation-pause whitespace-nowrap ">
          Insurance Ombudsman - One Stop Grievance Resolution
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
        <div className="   flex   lg:flex-row  m-10">
          <div className=" w-full lg:w-1/2">
            <div className="font-bold text-2xl text-green-900 ">
              Council for Insurance Ombudsmen
            </div>
            <div className="text-sm text-black">
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
          </div>
        </div>

        {/* //footer */}
        <div className="-ml-10 text-xl mb-10 lg:mb-0 ">
          <div className="bg-green-800  pl-14 pr-14 pt-6 ">
            <div className=" text-center lg:flex lg:justify-evenly items-center underline text-xl  text-white">
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
