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
  height: 4rem;
  width: 100%;
  border-top: 1px solid #f2f3f7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InquiryButton = styled.button`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.hotpink};
  background-color: white;
  width: 21rem;
  height: 2.5rem;
  border: 3px solid ${({ theme }) => theme.colors.hotpink};
  border-radius: 1.25rem;
  font-size: 14px;
  font-weight: 700;
`;
