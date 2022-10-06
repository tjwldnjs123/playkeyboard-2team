import styled from "styled-components";

export const DetailContainer = styled.div`
  /* @media only screen and (max-width: ${({ theme }) =>
    theme.width.s20Ultra}) { */

  margin: 1.216rem 1.188rem;
  background-color: white;
  text-align: center;

  .backIcon {
    width: 1.125rem;
    top: 0.25rem;
    left: 0.188rem;
    float: left;
    margin-bottom: 1.216rem;
  }

  .imageContent {
    .imageUrl {
      width: 100%;
      border-radius: 0.313rem;
    }
  }

  .detailContents {
    text-align: left;

    .nameContent {
      margin-top: 0.938rem;
      display: flex;
      justify-content: space-between;

      span {
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: 0em;
      }

      img {
        width: 1.25rem;
        height: 1.25rem;
        margin-top: 0.25rem;
      }
    }

    .creatorContent {
      margin-top: 0.125rem;

      span {
        font-size: 0.825rem;
        font-weight: 500;
        line-height: 1.25rem;
        letter-spacing: 0em;
        color: ${({ theme }) => theme.colors.dockGrey};
        opacity: 1;
        display: flex;
      }
    }

    .hashtagContainer {
      margin-top: 1.1rem;

      .hashtagContent {
        margin-right: 0.4rem;
        margin-top: 0.4rem;
        padding: 0.38rem;
        text-align: center;
        display: inline-block;
        background: ${({ theme }) => theme.colors.hashGrey};
        border-radius: 1rem;

        span {
          font-family: "Noto Sans KR";
          font-style: normal;
          font-weight: 500;
          font-size: 0.825rem;
          line-height: 1.25rem;
          color: #4b4e57;
        }
      }
    }
  }
  button {
    width: 100%;
    height: 3.125rem;
    margin-top: 1.25rem;
    border-radius: 0.125rem;
    border-style: none;
    background: ${({ theme }) => theme.colors.bgGrey};

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 0.825rem;
      line-height: 1.25rem;
    }
  }
`;
