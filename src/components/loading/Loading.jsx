import React from "react";
import ReactLoading from "react-loading";
import "./Loading.scss"
const Loading = () => {

  return(
    <div className="loading">
        <div className="animation">
        <ReactLoading type="bars" color="#33691E"
        height={100} width={50} />
        </div>
         
    </div>
  );
};

export default Loading;
