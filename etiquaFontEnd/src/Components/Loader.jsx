import React from "react";
import "./Css/Loader.css";
const Loader = (props) => {
  return (
    <div
      class="loader"
      style={{
        borderTopColor: props?.color || "#d63f3f",
        borderBottomColor: props?.color || "#d63f3f",
      }}
    />
  );
};

export default Loader;
