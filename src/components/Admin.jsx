import axios from "axios";
import React, { useState } from "react";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
   Complaintno:"",

    DOB: "",
    pan: "",
    account: "",
    ifsc: "",
    phone: "",
  });


  
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = " name is required";
      isValid = false;
    }
    
    if (!formData.DOB) {
      tempErrors.email = " is required";
      isValid = false;
    } 

    setErrors(tempErrors);
    return isValid;
  };
  const handleFetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/form-data');
      setSavedData(response.data.textData);
    } catch (error) {
      alert('Failed to fetch data');
    }
  };
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/save', { formData });
      console.log("first")
      alert('Data submitted successfully');
      
    console.log("Form submitted", formData);
    } catch (error) {
      // alert('Failed to submit data');
      console.log(error.message)
    }
    if (validateForm()) {
   
 
    }
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
      </div>
      <div className="move p-1   wd  font-semibold">
        <div class="animate-marquee hover:animation-pause move hover:animation-pause whitespace-nowrap ">
          Insurance Ombudsman - One Stop Grievance Resolution
        </div>
      </div>

      {/* //form  */}
      <h2 className="text-center text-3xl font-bold">Admin DashBoard</h2>
      <div className="flex items-center  justify-center text ">
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-green-950 to-green-500  w-3/5 flex-col justify-center p-10 rounded shadow-lg items-center"
        >
          <fieldset className=" text-white  ">
            <legend className="text-center text-white font-bold text-2xl mb-2">
              Client Information
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
                  className="rounded p-1 text-black "
                  id="Complaintno"
                  name="Complaintno"
                  value={formData.Complaintno}
                  onChange={handleChange}
                />
              </div>

              {errors.Compalintno && (
                <p className="error">{errors.Complaintno}</p>
              )}
            </div>
            <div className="form-group m-2 flex justify-between items-center ">
              <div className="">
                <label htmlFor="firstName"> Name:</label>
              </div>
              <div className="">
                {" "}
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="rounded p-1 text-black "
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && <p className="error">{errors.firstName}</p>}
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
                  id="DOV"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
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
                  value={formData.pan}
                  onChange={handleChange}
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
                  value={formData.account}
                  onChange={handleChange}
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
                  value={formData.ifsc}
                  onChange={handleChange}
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
          </fieldset>
          <div className="text-green-700 bg-white hover:bg-green-700 rounded-2xl text-center p-2 mt-2 font-bold  hover:text-white">
            {" "}
            <button type="submit" className="" >Submit</button>
          </div>
        </form>
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

export default Admin;
