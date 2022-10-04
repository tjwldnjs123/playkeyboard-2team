import React from "react";
import styled from "styled-components";

const Purchase = () => {
  return (
    <PurchaseContainer>
      <PurchaseButton>
        <div>
          구매 <img alt="다이아" src="/images/diamond.png" />7
        </div>
        <div>광고제거˙무제한 사용</div>
      </PurchaseButton>
    </PurchaseContainer>
  );
};
export default Purchase;

const PurchaseContainer = styled.div`
  height: 64px;
  width: 375px;
  padding: 9px 10px;
  margin-top: 10px;
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.3);
`;

const PurchaseButton = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.colors.hotpink};
  width: 354px;
  height: 46px;
  border-radius: 30px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    padding-top: 3px;
    margin-left: 3px;
    margin-right: 4px;
  }

  div:last-child {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;
