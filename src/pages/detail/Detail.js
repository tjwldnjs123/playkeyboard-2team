import React from "react";
import DetailTop from "./components/DetailTop";
import Expression from "../../components/Expression";
import Purchase from "../../components/Purchase";
import Inquiry from "../../components/Inquiry";

const Detail = (props) => {
  return (
    <div>
      <DetailTop />
      <Expression />
      <Inquiry />
      <Purchase />
    </div>
  );
};
export default Detail;
