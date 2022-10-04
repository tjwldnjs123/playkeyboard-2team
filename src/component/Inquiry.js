import React from "react";
import styled from "styled-components";

const Inquiry = () => {
  return (
    <PurchaseContainer>
      <InquiryButton>상품 문의</InquiryButton>
    </PurchaseContainer>
  );
};
export default Inquiry;

const PurchaseContainer = styled.div`
  height: 64px;
  width: 375px;
  border-top: 1px solid #f2f3f7;
`;

const InquiryButton = styled.button`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.hotpink};
  background-color: white;
  width: 330px;
  height: 40px;
  border: 3px solid ${({ theme }) => theme.colors.hotpink};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
`;
