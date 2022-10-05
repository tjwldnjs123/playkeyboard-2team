import styled from 'styled-components';

const LiveTheme = ({ figure }) => {
  return (
    <>
      {figure && (
        <Main>
          <ul className='imgContainer'>
            {figure.map((el) => {
              return (
                <li key={el.imageUrl}>
                  <img src={el.imageUrl} alt={el.text} />
                </li>
              );
            })}
          </ul>
          <div className='textContainer'>
            <p className='desc'>
              일부 앱에서는 움짤 형태로 전송되거나, 멈춰있는
              <br />
              이모티콘으로 전송될 수 있어요.
            </p>
            <p className='question'>이모티콘은 어떻게 전송하나요?</p>
          </div>
        </Main>
      )}
    </>
  );
};

export default LiveTheme;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .imgContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-bottom: 2.688rem;

    li {
      width: 33%;
    }
  }

  .textContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 3.063rem;

    .desc {
      text-align: center;
      margin-bottom: 0.188rem;
      color: ${({ theme }) => theme.colors.grey};
      line-height: 1.5rem;
      font-size: 0.875rem;
    }

    .question {
      color: #4b4e57;
      text-decoration: underline;
      text-underline-position: under;
      line-height: 1.5rem;
      font-size: 0.875rem;
      cursor: pointer;
      &:active {
        color: ${({ theme }) => theme.colors.black};
      }
    }

    @media screen and (max-width: 290px) {
      .desc {
        margin-bottom: 0.188rem;
        line-height: 1.25rem;
        font-size: 0.75rem;
      }

      .question {
        line-height: 1.25rem;
        font-size: 0.75rem;
      }
    }
  }
`;
