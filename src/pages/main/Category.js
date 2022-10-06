import React, { useState } from 'react';
import styled from 'styled-components';

const Category = ({ category, handleCategory }) => {
  const [activeTitle, setActiveTitle] = useState('Free');

  return (
    <CategoryContainer>
      <ul>
        {category?.map((categories, idx) => {
          return (
            <li
              key={idx}
              onClick={(e) => {
                setActiveTitle(e.target.textContent);
                handleCategory(categories);
              }}
            >
              <span className={activeTitle === categories ? 'active' : ''}>
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
      height: 35px;
      color: ${({ theme }) => theme.colors.grey};

      span {
        width: 100%;
        height: 35px;
        display: inline-block;
        text-align: center;

        &:last-child {
          margin-right: 60px;
        }
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
