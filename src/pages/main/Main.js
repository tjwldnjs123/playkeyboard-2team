import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import Category from "./Category";
import Dock from "./Dock";
import styled from "styled-components";

const Main = (props) => {
  const [category, setCategory] = useState([]);
  const [clickCategory, setClickCategory] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://api.plkey.app/theme/category")
      .then((res) => res.json())
      .then((data) => setCategory(data.data));
  }, []);

  const handleCategory = (clickList) => {
    setClickCategory(clickList);
  };

  useEffect(() => {
    fetch(`https://api.plkey.app/theme?category=${clickCategory}`)
      .then((res) => res.json())
      .then((data) => setCards(data.data));
  }, [clickCategory]);

  return (
    <MainResponsive>
      <MainContainer>
        <Header />
        {category && (
          <Category handleCategory={handleCategory} category={category} />
        )}
        {cards && <Card cards={cards} />}
      </MainContainer>
      <Dock />
    </MainResponsive>
  );
};

export default Main;

const MainResponsive = styled.div`
  height: ${({ theme }) => theme.height.common};
  max-width: ${({ theme }) => theme.width.s20Ultra};
`;

const MainContainer = styled.div`
  padding: 20px 20px 0 20px;
`;
