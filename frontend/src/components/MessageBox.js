import React from "react";

export default function MessageBox(props) {
  return (
    <div className={`full-center alert alert-${props.variant || "info"}`}>
      {props.children}
    </div>
  );
}
