import React, { useEffect, useState } from "react";
import Card from "./Card";
import Category from "./Category";
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
    <MainContainer>
      {category && (
        <Category handleCategory={handleCategory} category={category} />
      )}
      {cards && <Card cards={cards} />}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: ${({ theme }) => theme.width.s20Ultra};
`;
