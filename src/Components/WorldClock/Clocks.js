import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import moment from "moment";

function Clocks({ clock, removeTraining }) {
  return (
    <div className="Clocks">
      {clock.map((a) => (
        <Clock onRemove={removeTraining} key={a.id} data={a} />
      ))}
    </div>
  );
}

export default Clocks;
