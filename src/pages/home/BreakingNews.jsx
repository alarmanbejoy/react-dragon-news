import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex  bg-slate-300 rounded-md">
      <button className="btn btn-secondary">BreakingNews</button>
      <Marquee pauseOnHover={true} speed={100}>
     <Link to ='/'>  news deatais update.....</Link>

     <Link to ='/'>  news deatais update.........</Link>

     <Link to ='/'>  news deatais update</Link>
    
      </Marquee>
  
    </div>
  );
};

export default BreakingNews;
