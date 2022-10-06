import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo
          src={process.env.PUBLIC_URL + "/images/logo_horizpntal_136x18.png"}
        />
        <Search
          src={process.env.PUBLIC_URL + "/images/ic_nav_store_search.png"}
        />
      </LogoContainer>
      <CategoryTitle>취향대로 골라보기</CategoryTitle>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
`;

const LogoContainer = styled.div`
  /* margin: 31px 15px 0px auto; */
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 136px;
  height: 18px;
`;

const Search = styled.img`
  width: 18px;
  height: 18px;
`;

const CategoryTitle = styled.div`
  width: 122px;
  height: 24px;
  /* margin: 21px 0px 16px auto; */
`;
