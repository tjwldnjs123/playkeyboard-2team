import React, { useEffect, useState } from "react";
import Category from "./Category";

const Main = (props) => {
  const [category, setCategory] = useState([]);
  const [clickCategory, setClickCategory] = useState("");

  useEffect(() => {
    fetch("https://api.plkey.app/theme/category")
      .then((res) => res.json())
      .then((data) => setCategory(data.data));
  }, []);

  const handleCategory = (clickEl) => {
    setClickCategory(clickEl);
  };

  return (
    <div>
      {category && (
        <Category handleCategory={handleCategory} category={category} />
      )}
    </div>
  );
};

export default Main;
