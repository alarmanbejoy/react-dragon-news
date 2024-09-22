import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div >
      <h1 className="text-xl">All Categories</h1>
      {categories.map((category) => (
        <div className="m-4" >
          <Link key={category.id} to={`/category ${category.id}`}>{category.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
