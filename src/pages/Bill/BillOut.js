import React from "react";
import { useLocation } from "react-router-dom";
const BillOut = () => {
  const location = useLocation();

  return (
    <div>
      {console.log(location)}
      <p>{location.state.val.from}</p>
      <p>{location.state.val.to}</p>
    </div>
  );
};

export default BillOut;
