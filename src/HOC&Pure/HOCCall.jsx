import React from "react";

export default function HOCCall(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "2vh 0 2vh 0",
        padding: "2vh",
      }}
    >
      <p style={{ textAlign: "center" }}>HOCCall Function</p>
      <div style={{ textAlign: "center" }}>
        <h3>{<props.value />}</h3>
      </div>
    </div>
  );
}

function HOCCallBlue(props) {
  return (
    <div style={{ background: "blue", margin: "2vh 0 2vh 0", padding: "2vh" }}>
      <p style={{ textAlign: "center" }}>HOCCallBlue Function</p>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ background: "blue" }}>{<props.value />}</h3>
        <p>
          <b>Defination :</b>A higher-order component (HOC) is an advanced
          technique in React for reusing component logic.
        </p>
        <p>
          <b>Explaination of above Eg:</b> In above Eg there is an component
          name is ParentHOC.jsx which we used in HOCCallBlue function component.
          Same happen in below Eg. The Advantage of HOC concept is that we can
          use same component when we need and change some styling in it as per
          requirement
        </p>
      </div>
    </div>
  );
}
export { HOCCallBlue };

function HOCCallGreen(props) {
  return (
    <div style={{ background: "green", margin: "2vh 0 2vh 0", padding: "2vh" }}>
      <p style={{ textAlign: "center" }}>HOCCallGreen Function</p>
      <div style={{ textAlign: "center" }}>
        <h3 style={{ background: "green" }}>{<props.value />}</h3>
      </div>
    </div>
  );
}
export { HOCCallGreen };
