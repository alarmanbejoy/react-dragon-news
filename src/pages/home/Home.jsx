import React from "react";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData()
  console.log(news)
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" md:col-span-2">
          {
            news.map(aNews =><NewsCard
            key={aNews._id}
            news={aNews}
            ></NewsCard>)
          }
          <h2>middle part news cumming soon</h2>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
