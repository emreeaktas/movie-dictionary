import React from "react";
import { useParams } from "react-router";
const Category = () => {
  const { category } = useParams();
  console.log(category);
  return <div>Category</div>;
};

export default Category;
