import styled from "styled-components";

export const DetailContainer = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.width.s20Ultra}) {
    background-color: white;
    text-align: center;
    margin: 19.46px 19px;

    .backIcon {
      width: 18px;
      height: 16%;
      top: 4px;
      left: 3px;
      float: left;
      margin-bottom: 19.46px;
    }

    .imageContent {
      .imageUrl {
        border-radius: 5px;
      }
    }

    .detailContents {
      text-align: left;

      .nameContent {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;

        span {
          font-size: 20px;
          font-weight: 700;
          line-height: 28px;
          letter-spacing: 0em;
        }

        img {
          width: 20px;
          height: 20px;
          margin-top: 4px;
        }
      }

      .creatorContent {
        width: 26px;
        height: 20px;
        margin-top: 2px;

        span {
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0em;
          color: ${({ theme }) => theme.colors.dockGrey};
          opacity: 1;
        }
      }

      .hashtagContainer {
        margin-top: 24px;

        .hashtagContent {
          width: 18%;
          height: 28px;
          margin: 3px 2px;
          text-align: center;
          display: inline-block;
          background: ${({ theme }) => theme.colors.hashGrey};
          border-radius: 18px;

          span {
            font-family: "Noto Sans KR";
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #4b4e57;
          }
        }
      }
    }
    button {
      width: 100%;
      height: 50px;
      margin-top: 20px;
      border-radius: 1px;
      border-style: none;
      background: ${({ theme }) => theme.colors.bgGrey};

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
`;
