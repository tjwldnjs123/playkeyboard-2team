import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";

const Expression = () => {
  const [click, setClick] = useState(false);

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
            onClick={() => setClick((current) => !current)}
            key={result.id}
          >
            <div>
              <img alt="표정" src={result.image} />
              <Counter text={result.text} />
            </div>
          </ExpressionWrapper>
        );
      })}
    </ExpressionContainer>
  );
};
export default Expression;

const ExpressionContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 5rem;
  width: 100%;
`;

const ExpressionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 3.5rem;
  height: 4rem;
  font-size: 0.75rem;
  line-height: 1.125rem;
  margin-left: 0.6rem;
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.colors.dockGrey};

  img {
    width: 1.875rem;
    height: 1.5rem;
  }
  div {
    font-weight: 400;
    width: 3.5rem;
    height: 1.125rem;
    text-align: center;
  }
`;
