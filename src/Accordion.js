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
    <section className="accordion">
      <div>
        <h1>Jokes</h1>
        <h4 className="joke__qtn">
          {joke.Question}
          <span className="toggle" onClick={handleClick}>
            {show ? "-" : "+"}
          </span>
        </h4>
        <h3 className={show ? "joke__ans show" : "joke__ans"}>{joke.Answer}</h3>
      </div>
    </section>
  );
};

export default Accordion;
