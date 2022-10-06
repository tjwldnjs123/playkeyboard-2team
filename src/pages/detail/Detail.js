import { useEffect, useState } from 'react';
import DetailTop from './components/DetailTop';
import Expression from './components/bottomSection/Expression';
import PurchaseBtn from './components/bottomSection/PurchaseBtn';
import InquiryBtn from './components/bottomSection/InquiryBtn';
import LiveTheme from './components/LiveTheme';
import Modal from './components/Modal';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Detail = () => {
  const [data, setData] = useState();
  const [modal, setModal] = useState(false);
  const param = useParams().id;
  useEffect(() => {
    fetch(`https://api.plkey.app/theme/${param}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <Container>
      {data && (
        <div>
          <DetailTop data={data} setModal={setModal} />
          {data.figure.length !== 0 && <LiveTheme figure={data.figure} />}
          <Expression />
          <InquiryBtn />
          <PurchaseBtn />
          {modal && <Modal setModal={setModal} />}
        </div>
      )}
    </Container>
  );
};
export default Detail;

const Container = styled.div`
  max-width: ${({ theme }) => theme.width.s20Ultra};
  margin: 0 auto;
`;
