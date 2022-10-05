import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DetailContainer } from "./DetailTopStyled";

const DetailTop = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    themeId: "",
    imageUrl: "",
    name: "",
    creator: "",
    hashtag: [],
    isLiveTheme: "",
  });

  useEffect(() => {
    // fetch(`https://api.plkey.app/theme/${themeId}`, {
    fetch("/data/DetailTop.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        setData({
          ...data,
          imageUrl: result.data.imageUrl,
          name: result.data.name,
          creator: result.data.creator,
          hashtag: result.data.hashtag,
          isLiveTheme: result.data.isLiveTheme,
        });
      });
  }, []);

  const backSpace = () => {
    navigate("/");
  };

  return (
    <>
      <DetailContainer>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/ic_all_back.png"}
            className="backIcon"
            onClick={backSpace}
          ></img>
        </div>
        <div className="detailContents">
          <div className="imageContent">
            <img src={data.imageUrl} className="imageUrl"></img>
          </div>
          <div className="nameContent">
            <span>{data.name}</span>
            <img
              src={process.env.PUBLIC_URL + "/images/ic_all_share.png"}
            ></img>
          </div>
          <div className="creatorContent">
            <span>{data.creator}</span>
          </div>
          <div className="hashtagContainer">
            {data.hashtag.map((data) => (
              <div className="hashtagContent">
                <span>{data}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <button>
            <span>AD</span>
          </button>
        </div>
      </DetailContainer>
      {/* {data.isLiveTheme ? <LiveTheme /> : ""} */}
    </>
  );
};

export default DetailTop;
