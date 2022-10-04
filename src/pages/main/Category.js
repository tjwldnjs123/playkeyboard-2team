import React, { useEffect, useState } from "react";
import styled from "styled-components";

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://api.plkey.app/theme/category")
      .then((res) => res.json())
      .then((data) => setCategory(data.data));
  }, []);

  return (
    <CategoryContainer>
      <ul>
        {category?.map((categories) => {
          return <li>{categories}</li>;
        })}
      </ul>
    </CategoryContainer>
  );
}

export default Category;

const CategoryContainer = styled.div`
  width: ${({ theme }) => theme.width.s20Ultra};

  ul {
    height: 48px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    font-size: 14px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    li {
      padding-right: 20px;
      color: ${({ theme }) => theme.colors.grey};
    }
  }
  ul::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
