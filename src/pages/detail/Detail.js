import { useEffect, useState } from "react";
import DetailTop from "./components/DetailTop";
import Expression from "./components/bottomSection/Expression";
import PurchaseBtn from "./components/bottomSection/PurchaseBtn";
import InquiryBtn from "./components/bottomSection/InquiryBtn";
import LiveTheme from "./components/LiveTheme";
import { useParams } from "react-router-dom";

const Detail = () => {
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
          <DetailTop data={data} />
          {data.figure && <LiveTheme figure={data.figure} />}
          <Expression />
          <InquiryBtn />
          <PurchaseBtn />
        </div>
      )}
    </>
  );
};
export default Detail;
