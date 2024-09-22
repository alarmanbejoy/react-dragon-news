import React from "react";
import { FaGoogle, FaGithub, FaFacebookF,FaTwitter,FaInstagramSquare  } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div>
      <div className="p-2  ">
        <h2 className=" font-semibold text-2xl">Login With</h2>
        <button className="btn btn-outline w-full mt-2">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn btn-outline w-full mt-2">
          <FaGithub />
          Login with Github
        </button>
      </div>
      <div className="p-2 border rounded-lg ">
        <h2 className=" font-semibold text-2xl">Find Us On</h2>

        <a className="flex p-4 text-lg items-center border  rounded-t-lg " href=""><FaFacebookF className="mr-2"></FaFacebookF> Facebook</a> 
        <a className="flex p-4 text-lg items-center border  rounded-t-lg " href=""><FaTwitter className="mr-2"></FaTwitter> Twitter</a> 
        <a className="flex p-4 text-lg items-center border  rounded-t-lg " href=""><FaInstagramSquare className="mr-2"></FaInstagramSquare> Instergram</a> 
      
      </div>
      <div className="p-2 border rounded-lg ">
        <h2 className=" font-semibold text-2xl">Q Zone</h2>

           {/* <img src= {qZone1} alt="" />
         <img src= {qZone2} alt="" />
         <img src= {qZone3} alt="" />
       */}
        {
            [qZone1, qZone2, qZone3].map((qZone, index) => (
              <img
                key={index}
                className="w-full h-32 object-cover rounded-lg shadow-md m-2"
                src={qZone}
                alt="q-zone-logo"
              />
            ))

  
        }
     
      </div>
    </div>
  );
};

export default RightSideNav;
