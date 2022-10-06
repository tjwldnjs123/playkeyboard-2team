import React from "react";
import styled from "styled-components";

function Dock() {
  return (
    <DockContainer>
      <DockWrapper>
        <IconWrapper>
          <Icon
            src={process.env.PUBLIC_URL + "/images/ic_nav_store_disabled.png"}
          />
          <Title>스토어</Title>
        </IconWrapper>
        <IconWrapper>
          <Icon src={process.env.PUBLIC_URL + "/images/ic_logo_charging.png"} />
          <Title>충전소</Title>
        </IconWrapper>
        <IconWrapper>
          <Icon src={process.env.PUBLIC_URL + "/images/ic_nav_mytheme.png"} />
          <ThemeTitle>MY테마</ThemeTitle>
        </IconWrapper>
        <IconWrapper>
          <Icon
            src={
              process.env.PUBLIC_URL + "/images/icon_material-settings_1_.png"
            }
          />
          <Title>설정</Title>
        </IconWrapper>
      </DockWrapper>
    </DockContainer>
  );
}

const DockContainer = styled.div`
  width: ${({ theme }) => theme.width.s20Ultra};
  padding: 0;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 -5px 5px -5px rgba(0, 0, 0, 0.3);
`;

const DockWrapper = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.width.iPhonePro}) {
    width: 95%;
  }
  @media screen and (max-width: ${({ theme }) => theme.width.iPhoneSe}) {
    width: 90%;
  }

  @media screen and (max-width: ${({ theme }) => theme.width.s80}) {
    width: 87%;
  }
`;

const IconWrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  height: 16px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.dockGrey};
`;

const ThemeTitle = styled.div`
  height: 16px;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.hotpink};
`;

const Icon = styled.img`
  width: 24px;
  height: 21px;
`;

export default Dock;
