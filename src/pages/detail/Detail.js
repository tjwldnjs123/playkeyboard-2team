import { useEffect, useState } from 'react';
import DetailTop from './components/DetailTop';
import Expression from '../../components/Expression';
import Purchase from '../../components/Purchase';
import Inquiry from '../../components/Inquiry';
import LiveTheme from './components/LiveTheme';
import { useParams } from 'react-router-dom';

const Detail = (props) => {
  const [data, setData] = useState();
  const param = useParams().id;
  useEffect(() => {
    fetch(`https://api.plkey.app/theme/${param}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      {data && (
        <div>
          <DetailTop />
          {data.figure && <LiveTheme figure={data.figure} />}
          <Expression />
          <Inquiry />
          <Purchase />
        </div>
      )}
    </>
  );
};
export default Detail;
