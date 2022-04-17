import React from "react";
import notfound from "../../Images/notfound.jpg";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img style={{ width: "600px" }} src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
