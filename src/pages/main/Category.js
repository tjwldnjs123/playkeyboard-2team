import React from "react";
import styled from "styled-components";

const Category = ({ category, handleCategory }) => {
  return (
    <CategoryContainer>
      <ul>
        {category?.map((categories) => {
          return (
            <li onClick={() => handleCategory(categories)}>{categories}</li>
          );
        })}
      </ul>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  width: ${({ theme }) => theme.width.s20Ultra};

  ul {
    display: flex;
    align-items: center;
    height: 48px;
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
    display: none;
  }
`;
