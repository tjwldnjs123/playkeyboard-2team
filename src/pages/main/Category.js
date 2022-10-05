import React, { useState } from "react";
import styled from "styled-components";

const Category = ({ category, handleCategory }) => {
  const [activeTitle, setActiveTitle] = useState("");

  return (
    <CategoryContainer>
      <ul>
        {category?.map((categories) => {
          return (
            <li
              onClick={(e) => {
                setActiveTitle(e.target.textContent);
                handleCategory(categories);
              }}
            >
              <span className={activeTitle === categories ? "active" : ""}>
                {categories}
              </span>
            </li>
          );
        })}
      </ul>
    </CategoryContainer>
  );
};

export default Category;

const CategoryContainer = styled.div`
  padding: 16px;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    height: 48px;
    font-size: 14px;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    li {
      margin-right: 16px;
      height: 35px;
      padding-right: 20px;
      color: ${({ theme }) => theme.colors.grey};

      span {
        width: 100%;
        height: 35px;
        display: inline-block;
        margin-right: 20px;
        text-align: center;
        &.active {
          color: ${({ theme }) => theme.colors.hotpink};
          border-bottom: 3px solid ${({ theme }) => theme.colors.hotpink};
        }
      }
    }
  }
  ul::-webkit-scrollbar {
    display: none;
  }
`;
