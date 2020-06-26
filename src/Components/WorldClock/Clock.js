import React from "react";
function Clock(props) {
  //   console.log(props);
  const { data, name } = props;
  const onRemove = (e) => {
    props.onRemove(e.target.dataset.id);
  };
  return (
    <div className="Clock-wrap">
      <div className="Clock-name">{name}</div>
      <div className="Clock">
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${data.hh}deg)`,
          }}
          className="hour"
        ></div>
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${data.mm}deg)`,
          }}
          className="min"
        ></div>
        <div
          style={{
            transform: `translate(-50%, -50%) rotate(${data.ss}deg)`,
          }}
          className="sec"
        ></div>
      </div>
      <div data-id={data.id} onClick={onRemove} className="Clock-close">
        &#128736;
      </div>
    </div>
  );
}

export default Clock;
