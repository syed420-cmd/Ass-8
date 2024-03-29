import React from "react";
import Book from "./images/bigbook.png";
import data from "./Data.json";
import Nav from "./Nav";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useState,useEffect } from "react";
const Bookdlts = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState('success');
    // State for alert type
  
    const handleClickButton1 = () => {
      setShowAlert(true);
      setAlertType('success');
      
    };
  
    const handleClickButton2 = () => {
      setShowAlert(true);
      setAlertType('error');
      
    };

    const handleCloseAlert = () => {
      setShowAlert(false);
    };
    useEffect(() => {
        if (showAlert) {
          const timeoutId = setTimeout(handleCloseAlert, 2000); // Set timeout to close alert after 3 seconds
          return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
        }
      }, [showAlert, handleCloseAlert]); 

  return (
    <>
      <Nav />
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 place-items-start">
        <div className="w-[573px] h-[711px] bg-[#d3d6db] rounded-lg flex justify-center items-center">
          <img className="lg:w-[425px] lg:h-[564px] sm:w-[390px] sm:h-[370px]" src={Book}></img>
        </div>
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-[40px] font-bold">The Catcher in the Rye</h1>
          <h1 className="text-[20px] mt-[20px] text-[#282828]">By : Awlad Hossain</h1>          
          <hr className=" h-[3px]  bg-gray-400"></hr>
          <h1 className="text-[20px] mt-[20px] text-[#282828]">Fiction</h1> 
          <hr className="h-[3px]  bg-gray-400"></hr>
          <div className="mt-[20px] flex  justify-between">
          <h1 className="h-[16px] text-[#131313] font-bold">Tags:</h1>
          <h1 className="text-[#23BE0A] ml-[50px] text-[16px]" >Young Adults</h1>
          <h1 className="text-[#23BE0A] ml-[50px] text-[16px]" >Identity</h1>
          </div>
          <h1 className="text-[16px] mt-[20px] text-[#282828]"><span className="text-[#131313] font-bold">Review:</span>
          Sit amet consectetur. Interdum porta pulvinar non sit  
          </h1>
          <h1 className="text-[16px] text-[#282828]">
          aliquam. Aenean pulvinar blandit vel non enim elementum penatibus  
          </h1>
          <h1 className="text-[16px] text-[#282828]">
          pellentesque ac. Nec accumsan euismod nulla adipiscing lectus.       
          </h1>
          <h1 className="text-[16px] text-[#282828]">
          Morbi elementum a auctor erat diam tellus. Fermentum faucibus        
          </h1>
          <h1 className="text-[16px] text-[#282828]">
          nulla enim ornare.       
          </h1>
          <h1 className="text-[16px] text-[#282828]">
          Id neque neque pretium enim platea urna non dictum. Faucibus      
          </h1>
          <div className="mt-[20px]  flex flex-row justify-between">
          <h1 className="text-[#282828] text-[16px]">Number of Pages:</h1>
          <h1 className="text-[#131313] ml-[40px] text-[16px] font-bold">1239</h1>
          </div>
          <div className="mt-[10px]  flex flex-row justify-between">
          <h1 className="text-[#282828] text-[16px]">Publisher:</h1>
          <h1 className="text-[#131313] ml-[40px] text-[16px] font-bold">J.B Lippincott & Co.</h1>
          </div>
          <div className="mt-[10px]  flex flex-row justify-between">
          <h1 className="text-[#282828] text-[16px]">Year of publishing:</h1>
          <h1 className="text-[#131313] ml-[40px] text-[16px] font-bold">1960</h1>
          </div>
          <div className="mt-[10px]  flex flex-row justify-between">
          <h1 className="text-[#282828] text-[16px]">Rating:</h1>
          <h1 className="text-[#131313] ml-[40px] text-[16px] font-bold">4.5</h1>
          </div>
          <div className="flex justify-between mt-[30px]">
          <button className="h-[57px] w-[101px] bg-white text-[#131313] rounded-lg border border-[#282828]" onClick={handleClickButton1}>Read</button>
          <button className="h-[57px] w-[128px] bg-[#50B1C9] rounded-lg ml-[20px]" onClick={handleClickButton2}>Wish list</button>
          </div>
          </div>
      </div>
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 bg-gray-200 opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded shadow-md p-4 flex items-center">
            {alertType === 'success' && <FaCheckCircle className="h-6 w-6 text-green-500 mr-2" />}
            {alertType === 'error' && <FaTimesCircle className="h-6 w-6 text-red-500 mr-2" />}
            <p>Book visiblity!</p>
            <button onClick={handleCloseAlert} className="ml-auto focus:outline-none">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Bookdlts;
