import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HashTag from "./HashTag";

const Card = ({ cards }) => {
  const navigate = useNavigate();

  return (
    <CardBox>
      <CardContainer>
        {cards.map((card) => (
          <div
            key={card.themeId}
            className="card-list"
            onClick={() => {
              navigate(`/detail/${card.themeId}`);
            }}
          >
            <img className="card-img" src={card.imageUrl} alt="card-list-img" />
            <div className="card-content">
              <p className="card-name">{card.name}</p>
              <div className="card-hashtag">
                {card.hashtag.map((tag, idx) => {
                  return <HashTag key={idx} tag={tag} />;
                })}
              </div>
              <div className="card-data-container">
                <div className="card-data">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/mainCard/패스 657.png"
                    }
                    alt="download"
                  />
                  <span>{card.downloads}</span>
                </div>
                <div className="card-price">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/mainCard/Group 2022.png"
                    }
                    alt="price"
                  />
                  <span>{card.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContainer>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 850px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  .card-list {
    width: 164px;
    height: 199px;
    margin-bottom: 10px;

    &:nth-child(2n-1) {
      margin-right: 42px;
    }
    .card-img {
      width: 164px;
      height: 130px;
      border-radius: 10px;
    }

    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 65px;
      .card-name {
        display: block;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .card-hashtag {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${({ theme }) => theme.colors.grey};
      }

      .card-data-container {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;

        img {
          width: 12px;
          height: 12px;
        }

        .card-data {
          display: flex;
          align-items: center;
          img {
            background-color: gray;
            border-radius: 50%;
          }
          span {
            padding-left: 4px;
            color: ${({ theme }) => theme.colors.grey};
          }
        }

        .card-price {
          display: flex;
          align-items: center;
          span {
            padding-left: 4px;
            color: ${({ theme }) => theme.colors.skyblue};
          }
        }
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.width.iPhonePro}) {
      width: 150px;

      &:nth-child(2n-1) {
        margin-right: 50px;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.width.iPhoneSe}) {
      width: 150px;

      &:nth-child(2n-1) {
        margin-right: 35px;
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.width.s80}) {
      width: 150px;

      &:nth-child(2n-1) {
        margin-right: 20px;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
