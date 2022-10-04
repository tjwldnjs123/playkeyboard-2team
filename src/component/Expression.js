import React, { useState } from "react";
import styled from "styled-components";

const Expression = () => {
  const [count, setCount] = useState(false);

  const ExpressionElem = [
    {
      id: 1,
      text: "맘에들어요",
      image: "images/smile.png",
    },
    {
      id: 2,
      text: "심쿵했어요",
      image: "images/love.png",
    },
    {
      id: 3,
      text: "응원해요",
      image: "images/wink.png",
    },
    {
      id: 4,
      text: "갖고싶어요",
      image: "images/laugh.png",
    },
  ];

  return (
    <ExpressionContainer>
      {ExpressionElem.map((result) => {
        return (
          <ExpressionWrapper
            onClick={() => {
              setCount((current) => !current);
            }}
            key={result.id}
          >
            <img alt="표정" src={result.image} />
            <div>{result.text}</div>
            <div> {count ? 1 : 0}</div>
          </ExpressionWrapper>
        );
      })}
    </ExpressionContainer>
  );
};
export default Expression;

const ExpressionContainer = styled.div`
  display: flex;
`;

const ExpressionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 56px;
  height: 64px;
  font-size: 12px;
  line-height: 18px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.dockGrey};
  img {
    width: 30px;
    height: 24px;
  }
  div {
    font-weight: 400;
    width: 56px;
    height: 18px;
    text-align: center;
  }
`;
