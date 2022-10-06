import { useNavigate } from 'react-router-dom';
import { DetailContainer } from './DetailTopStyled';

const DetailTop = (data) => {
  const navigate = useNavigate();
  const backSpace = () => {
    navigate('/');
  };

  return (
    <>
      <DetailContainer>
        <div>
          <img
            src={process.env.PUBLIC_URL + 'images/ic_all_back.png'}
            className='backIcon'
            onClick={backSpace}
          ></img>
        </div>
        <div className='detailContents'>
          <div className='imageContent' onClick={() => data.setModal(true)}>
            <img src={data.data.imageUrl} className='imageUrl'></img>
          </div>
          <div className='nameContent'>
            <span>{data.data.name}</span>
            <img src={process.env.PUBLIC_URL + 'images/ic_all_share.png'}></img>
          </div>
          <div className='creatorContent'>
            <span>{data.data.creator}</span>
          </div>
          <div className='hashtagContainer'>
            {data.data.hashtag.map((item) => (
              <div className='hashtagContent' key={item}>
                <span>{item}</span>
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
    </>
  );
};

export default DetailTop;
