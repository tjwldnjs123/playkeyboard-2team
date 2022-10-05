import React from "react";
import styled from "styled-components";

function HashTag({ tag }) {
  return <TagStyle>#{tag}</TagStyle>;
}

export default HashTag;

const TagStyle = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.grey};
`;
