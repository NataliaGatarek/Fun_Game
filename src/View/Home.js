import React, { useState } from "react";
import "../View/styles.css";
import bats from "../Img/bats.jpg";

function Home() {
  const theAge = 476;
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const onClick = () => {
    const playerGuess = value;

    if (playerGuess == theAge) {
      setResult(console.log("correct"));
    } else if (playerGuess >= theAge) {
      setResult(console.log("too high"));
    } else if (playerGuess <= theAge) {
      setResult(console.log("too low"));
    } else setResult("");
  };

  //const onChange = (e) => setValue(e.target.value);

  return (
    <React.Fragment>
      <div className="firstCluster">
        <p className="header">Age of </p>
        <p className="sec-header new">of</p>
        <p className="header">The Vampire</p>
        <div>
          <img src={bats} alt="bats" />
        </div>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button onClick={onClick} type="submit">
          Submit
        </button>
      </div>
    </React.Fragment>
  );
}
export default Home;
