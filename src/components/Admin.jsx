import { Popover } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const user = "admin";
  const pass = "admin";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
      complaintno: "",
     password:"",
      dob: "",
      pan: "",
      accountNumber: "",
      ifsc: "",
      phone: "",
      investedInMutualFund:"",
      investedInEquityFund:"",
      fundvconsolidatedFundValuealue:"",
      commissionDue:"",
      commissionRealised:"",
      assignedOfficerName:"",
      assignedOfficerMobile:"",
      status:""

  });

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      setErr("");
    } else {
      setErr("Invalid username or password");
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    setUsername("");
    setPassword("");
  };

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setSavedData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = " name is required";
      isValid = false;
    }

    if (!formData.dob) {
      tempErrors.email = " is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };


  const [clients,setClients] = useState(0);
const getClients = async () => {
  try {
    const res = await axios.get("http://localhost:5000/count");

    setClients(res.data.count)
  } catch (error) {
    
  }
}
getClients()

  useEffect(()=>{
    setClients(clients)
  },[clients])


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("object")
    
    try {
      const res = await axios.post("http://localhost:5000/save", { formData });
      setFormData({
        name: "",
        complaintno: "",
       password:"",
        dob: "",
        pan: "",
        accountNumber: "",
        ifsc: "",
        phone: "",
        investedInMutualFund:"",
        investedInEquityFund:"",
        fundvconsolidatedFundValue:"",
        commissionDue:"",
        commissionRealised:"",
        assignedOfficerName:"",
        assignedOfficerMobile:"",
     
        status:""
      });
    
      alert("Data submitted successfully");
      console.log("Form submitted", formData);
    } catch (error) {
      console.log(error);
    }
  };
  const [savedData, setSavedData] = useState({name: "",
        complaintno: "",
  
        dob: "",
        pan: "",
        accountNumber: "",
        ifsc: "",
        phone: "",
        investedInMutualFund:"",
        investedInEquityFund:"",
        fundvconsolidatedFundValue:"",
        commissionDue:"",
        commissionRealised:"",
        assignedOfficerName:"",
        assignedOfficerMobile:"",
        password:"",
        status:""});

  const handleSubmit2 = async (e) => {
    e.preventDefault();
   
    try {
      console.log(savedData)
      const res = await axios.post("http://localhost:5000/update", { savedData });
      setSavedData({
        name: "",
        complaintno: "",
  
        dob: "",
        pan: "",
        accountNumber: "",
        ifsc: "",
        phone: "",
        investedInMutualFund:"",
        investedInEquityFund:"",
        fundvconsolidatedFundValuealue:"",
        commissionDue:"",
        commissionRealised:"",
        assignedOfficerName:"",
        assignedOfficerMobile:"",
        password:"",
        status:""
      });
      alert("Client Edited Successfully")
      navigate("/admin")
      
    
    } catch (error) {
      console.log(error.message);
    }
  };

  const [anchorEl2, setAnchorEl2] = useState(null);

  const [isEdit, setIsEdit] = useState(false);
  const [myinput, setmyInput] = useState({
    phone: "",
    password: "",
    name:""
  });
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const open2 = Boolean(anchorEl2);
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleFetchData = async () => {
    const response = await axios.post(
      `http://localhost:5000/client`, {...myinput}
    );
    setSavedData(response.data.user);
    console.log(response.data.user)
   
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    await handleFetchData();
    setIsEdit(true);
    setmyInput({
      phone: "",
      password: "",
    });
  };
 

  return (
    <div>
      <div className="flex justify-around w-full   items-center  font-semibold nav">
        <div className="logo w-20 relative  flex items-center h-12 pl-5">
          <img src="CIO_LOGO.jpg" alt="" />
        </div>
        <div className=" text-justify  hidden lg:block ">
          Welcome To Online Complaint mangement System
        </div>
        {isLoggedIn ? (
          <>
            <div className="">
              <div className="">
                <button
                  onClick={handleLogout}
                  className="text-green-800 bg-white hover:text-white hover:bg-green-600 p-2 rounded  font-bold "
                >
                  ADMIN-LOGOUT{" "}
                </button>
                {isEdit ? (
                  <>
                  <div className="z-20 absolute  right-20  w-full lg:w-1/2  ">
                  <form
              onSubmit={handleSubmit2}
              className="bg-gradient-to-br   from-green-950 to-green-500   flex-col justify-center p-10 rounded shadow-lg items-center"
            >
              <fieldset className=" text-white  ">
                <legend className="text-center text-white font-bold text-2xl mb-2">
                  EDIT   Client Information
                </legend>
                <div className="form-group m-2  justify-between items-center  flex">
                  <div className="">
                    {" "}
                    <label htmlFor="Complaintno " className="whitespace-nowrap">
                      {" "}
                      Complaint NO:
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black w-full "
                      id="Complaintno"
                      name="Complaintno"
            
                      value={savedData.complaintno}
                      onChange={handleChange2}
                    />
                  </div>

                  {errors.Compalintno && (
                    <p className="error">{errors.Complaintno}</p>
                  )}
                </div>
                <div className="form-group m-2 flex justify-between items-center ">
                  <div className="">
                    <label htmlFor="name"> Name:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="name"
                      name="name"
                     
                      className="rounded p-1 text-black "
                      value={savedData.name}
                      onChange={handleChange2}
                    />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group m-2 flex justify-between">
                  <div className="">
                    {" "}
                    <label htmlFor="DOB">DOB:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="DOB"
               
                      name="DOB"
                      value={savedData.dob}
                      onChange={handleChange2}
                    />
                  </div>
                  {errors.DOB && <p className="error">{errors.DOB}</p>}
                </div>

                <div className="form-group flex justify-between m-2">
                  <div className="">
                    <label htmlFor="pan">Pan:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="pan"
                  
                      className="rounded p-1 text-black"
                      name="pan"
                      value={savedData.pan}
                      onChange={handleChange2}
                    />
                  </div>
                  {errors.pan && <p className="error">{errors.pan}</p>}
                </div>
                <div className="form-group m-2 flex justify-between">
                  <div className="">
                    {" "}
                    <label htmlFor="account">Account No:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="account"
                 
                      className="rounded p-1 text-black"
                      name="account"
                      value={savedData.accountNumber}
                      onChange={handleChange2}
                    />
                  </div>
                  {errors.account && <p className="error">{errors.account}</p>}
                </div>
                <div className="form-group flex justify-between m-2 ">
                  <div className="">
                    {" "}
                    <label htmlFor="ifsc">IFSC:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="ifsc"

                      className="rounded p-1 text-black "
                      name="ifsc"
                      value={savedData.ifsc}
                      onChange={handleChange2}
                    />
                  </div>
                  {errors.ifsc && <p className="error">{errors.ifsc}</p>}
                </div>

                <div className="form-group flex justify-between m-2">
                  <div className="">
                    <label htmlFor="phone">Phone:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="number"
                      className="rounded p-1 text-black"
                      id="phone"
                      name="phone"
                      value={savedData.phone}
                      onChange={handleChange2}
                    />
                  </div>
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div className="form-group flex justify-between m-2">
                  <div className="">
                    <label htmlFor="phone">Password:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="phone"
                      name="password"
                      value={savedData.password}
                      onChange={handleChange2}
                    />
                  </div>
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                
                
                
              </fieldset>
              <div className="flex justify-center mt-2">
                {" "}
                <button
                  type="submit"
                  className="text-green-700 w-48 flex items-center justify-center bg-white hover:bg-green-700 rounded-2xl text-center p-2 mt-2 font-bold  hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
                  </div>
                  </>
                ) : (
                  <>
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
                            ENTER CLIENT DETAILS
                          </div>

                          <div className="">
                            <form
                              className="flex-col justify-center items-center"
                              onSubmit={submitHandler}
                            >
                              <div className="mt-10 flex-col justify-center text-center items-center ">
                              <div className="">
                              <div className="">
                                <div className="">
                                  {" "}
                                  <span className="text-white">
                                    {" "}
                                    Name:{" "}
                                  </span>{" "}
                                  &nbsp;
                                </div>
                                &nbsp;
                                <div className="">
                                  <input
                                    className="rounded p-2 bg-green-200 "
                                    type="text"
                                    name="name"
                                    value={myinput.name}
                                    placeholder="Enter Client Name"
                                    onChange={(e) =>
                                      setmyInput({
                                        ...myinput,
                                        name: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                </div>
                              </div>
                                <div className="">
                                <div className="">
                                  {" "}
                                  <span className="text-white">
                                    {" "}
                                    Phone no:{" "}
                                  </span>{" "}
                                  &nbsp;
                                </div>
                                &nbsp;
                                <div className="">
                                  <input
                                    className="rounded p-2 bg-green-200 "
                                    type="text"
                                    name="phone"
                                    value={myinput.phone}
                                    placeholder="Enter Client Phone no"
                                    onChange={(e) =>
                                      setmyInput({
                                        ...myinput,
                                        phone: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                </div>
                                <div className="">
                                  {" "}
                                  <span className="text-white">
                                    {" "}
                                    Password:{" "}
                                  </span>{" "}
                                  &nbsp;
                                </div>
                                &nbsp;
                                <div className="">
                                  <input
                                    className="rounded p-2 bg-green-200 "
                                    type="text"
                                    name="password"
                                    value={myinput.password}
                                    placeholder="Enter client Password"
                                    onChange={(e) =>
                                      setmyInput({
                                        ...myinput,
                                        password: e.target.value,
                                      })
                                    }
                                  />
                                </div>
                                <div className="text-center mt-10 justify-center items-center bg-green-300 text-green-700 p-2 rounded hover:bg-green-700 inline-block hover:cursor-pointer hover:text-white">
                                  <button type="submit" className="w-20">
                                    Submit
                                  </button>
                                </div>
                              </div>
                              <br />{" "}
                            </form>
                          </div>
                        </div>
                      </div>
                    </Popover>
                  </>
                )}
              </div>
            </div>
            <div className="">
              <div className="">
                <button
                  aria-describedby="popover2"
                  onClick={handleClick2}
                  className="text-green-800 mr-2 bg-white hover:text-white hover:bg-green-600 p-2 rounded  font-bold "
                >
                  EDIT-CLIENT{" "}
                </button>
               <span className=" text-black inline-block p-2 rounded   bg-white   ">
                {clients} Clients
               </span>
              </div>
              
            </div>
          </>
        ) : (
          <>
            <form
              onSubmit={handleLogin}
              className="bg-white p-6 rounded shadow-md  z-10 mt-96 w-1/2 flex absolute justify-center items-center text-black"
            >
              <div className="">
                <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
                {err && <p className="text-red-500 mb-2">{err}</p>}
                <div className="mb-4">
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded font-light"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold">
                    Password:
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded font-light"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-700 text-white p-2 rounded"
                >
                  Login
                </button>
              </div>
            </form>
          </>
        )}
      </div>
      <div className="move p-1   wd  font-semibold">
        <div class="animate-marquee hover:animation-pause move hover:animation-pause whitespace-nowrap ">
          Insurance Ombudsman - One Stop Grievance Resolution
        </div>
      </div>

      {/* //form  */}
      {isLoggedIn ? (
        <>
          <h2 className="text-center text-3xl font-bold">Admin DashBoard</h2>
          <div className="flex items-center  justify-center text ">
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-green-950 to-green-500  lg:w-3/5  w-full ml-2 mr-2  flex-col justify-center p-10 rounded shadow-lg items-center"
            >
              <fieldset className=" text-white  ">
                <legend className="text-center text-white font-bold text-2xl mb-2">
                  Client Information
                </legend>
                <div className="form-group m-2  justify-between items-center  flex-col flex lg:flex-row">
                  <div className=" text-center ">
                    {" "}
                    <label htmlFor="Complaintno " className="whitespace-nowrap  ">
                      {" "}
                      Complaint NO:
                    </label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black w-full "
                      id="Complaintno"
                      name="complaintno"
                      value={formData.complaintno}
                      onChange={handleChange}
                    />
                  </div>

                  {errors.Compalintno && (
                    <p className="error">{errors.Complaintno}</p>
                  )}
                </div>
                <div className="form-group m-2  justify-between items-center flex-col flex lg:flex-row ">
                  <div className="text-center">
                    <label htmlFor="name"> Name:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="rounded p-1 text-black "
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div className="form-group m-2 flex-col items-center flex lg:flex-row justify-between">
                  <div className="text-center">
                    {" "}
                    <label htmlFor="DOB">DOB:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="DOB"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.DOB && <p className="error">{errors.DOB}</p>}
                </div>

                <div className="form-group flex-col flex items-center lg:flex-row justify-between m-2">
                  <div className="text-center">
                    <label htmlFor="pan">Pan:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="pan"
                      className="rounded p-1 text-black"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.pan && <p className="error">{errors.pan}</p>}
                </div>
                <div className="form-group m-2 flex-col items-center flex lg:flex-row justify-between">
                  <div className="text-center">
                    {" "}
                    <label htmlFor="account">Account No:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="account"
                      className="rounded p-1 text-black"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.account && <p className="error">{errors.account}</p>}
                </div>
                <div className="form-group flex-col flex items-center lg:flex-row justify-between m-2 ">
                  <div className="text-center">
                    {" "}
                    <label htmlFor="ifsc">IFSC:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      id="ifsc"
                      className="rounded p-1 text-black "
                      name="ifsc"
                      value={formData.ifsc}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.ifsc && <p className="error">{errors.ifsc}</p>}
                </div>

                <div className="form-group flex-col flex lg:flex-row items-center justify-between m-2">
                  <div className="text-center">
                    <label htmlFor="phone">Phone:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="tel"
                      className="rounded p-1 text-black"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div className="form-group flex-col flex lg:flex-row items-center justify-between m-2">
                  <div className="text-center">
                    <label htmlFor="password">Password:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="tel"
                      className="rounded p-1 text-black"
                      id="password"
                      name="password"
                      value={formData.passwrord}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>

                   <h4 className="font-bold text-center m-5 mt-10 shadow-xl"> Enter  Fund Details</h4>
                <div className="form-group flex justify-between m-2 flex-col  lg:flex-row ">
                  <div className="">
                    <label htmlFor="mutual">Invested In Mutual Fund:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="mutual"
                      name="investedInMutualFund"
                      value={formData.investedInMutualFund}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.mutual && <p className="error">{errors.mutual}</p>}
                </div>
                <div className="form-group flex justify-between flex-col  lg:flex-row m-2">
                  <div className="">
                    <label htmlFor="equity">Invested in Equity Fund:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="equity"
                      name="investedInEquityFund"
                      value={formData.investedInEquityFund}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.equity && <p className="error">{errors.equity}</p>}
                </div>
                <div className="form-group flex-col flex lg:flex-row justify-between m-2">
                  <div className="">
                    <label htmlFor="fundvalue">Consolidated  Fund Value:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="fundvalue"
                      name="fundconsolidateFundValue"
                      value={formData.fundvconsolidatedFundValuee}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.fundvalue && <p className="error">{errors.fundvalue}</p>}
                </div>
                <div className="form-group flex-col flex lg:flex-row justify-between m-2">
                  <div className="">
                    <label htmlFor="commissiondue">Commission Due:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="commissiondue"
                      name="commissionDue"
                      value={formData.commissionDue}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.commissiondue && <p className="error">{errors.commissiondue}</p>}
                </div>
                <div className="form-group flex-col flex lg:flex-row justify-between m-2">
                  <div className="">
                    <label htmlFor="commissionrealised">Commission Realised:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="commissionrealised"
                      name="commissionRealised"
                      value={formData.commissionRealised}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.commissionrealised && <p className="error">{errors.equity}</p>}
                </div>
                <div className="form-group flex-col flex lg:flex-row justify-between m-2">
                  <div className="">
                    <label htmlFor="officer">Assigned officier Name:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="officer"
                      name="assignedOfficerName"
                      value={formData.assignedOfficerName}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.officer && <p className="error">{errors.officer}</p>}
                </div>
                <div className="form-group flex-col flex lg:flex-row justify-between m-2">
                  <div className="">
                    <label htmlFor="officermobile">Assigned Officer Mobile:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="officermobile"
                      name="assignedOfficerMobile"
                      value={formData.assignedOfficerMobile}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.officermobile && <p className="error">{errors.officermobile}</p>}
                </div>
                <div className="form-group flex-col flex lg:flex-row justify-between m-2">
                  <div className="">
                    <label htmlFor="status">Status:</label>
                  </div>
                  <div className="">
                    {" "}
                    <input
                      type="text"
                      className="rounded p-1 text-black"
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.status && <p className="error">{errors.status}</p>}
                </div>

              </fieldset>
              <div className="flex justify-center mt-2">
                {" "}
                <button
                  type="submit"
                  className="text-green-700 w-48 flex items-center justify-center bg-white hover:bg-green-700 rounded-2xl text-center p-2 mt-2 font-bold  hover:text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <></>
      )}

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

export default Admin;
