import React, { useState } from "react";
function Form({ addClock }) {
  const [input, setInput] = useState([]);

  const valueForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleForm = (e) => {
    e.preventDefault();
    addClock(input);

    e.target.name.value = "";
    e.target.timeZone.value = "";
    setInput({});
  };

  return (
    <div className="Form">
      <form action="" onSubmit={handleForm}>
        <label htmlFor="">
          <div className="shrt-txt">Название</div>
          <input
            name="name"
            type="text"
            onChange={valueForm}
            value={input.name}
          />
        </label>
        <label htmlFor="">
          <div className="shrt-txt">Временная зона</div>
          <input
            name="timeZone"
            type="text"
            onChange={valueForm}
            value={input.timeZone}
          />
        </label>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default Form;
