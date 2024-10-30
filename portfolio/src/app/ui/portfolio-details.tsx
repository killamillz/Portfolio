import React from "react";
type Params = { params: string };
function PortfolioDetails(params: Params) {
  return <div> {params.params}</div>;
}

export default PortfolioDetails;
