import React from "react";
import Expression from "../../components/Expression";
import Purchase from "../../components/Purchase";
import Inquiry from "../../components/Inquiry";

const Detail = (props) => {
  return (
    <div>
      <Expression />
      <Inquiry />
      <Purchase />
    </div>
  );
};
export default Detail;
