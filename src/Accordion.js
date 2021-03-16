import React, { useState } from "react";

const Accordion = () => {
  const joke = {
    Question: "What do you call a factory that makes okay products?",
    Answer: "A satisfactory."
  };

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <section>
      <h1>Jokes</h1>
      <div>
        <h4 className="joke__qtn">
          {joke.Question}
          <span className="toggle" onClick={handleClick}>
            {show ? "-" : "+"}
          </span>
        </h4>
        <p className={show ? "joke__ans show" : "joke__ans"}>{joke.Answer}</p>
      </div>
    </section>
  );
};

export default Accordion;
