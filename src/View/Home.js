import React, { useState } from "react";
import "../View/styles.css";
//import cx from "classnames";
import bats from "../Img/bats.jpg";
import vampire from "../Img/vampire.jpg";

function Home() {
  const theAge = 476;
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");

  const onClick = () => {
    const playerGuess = value;

    if (playerGuess == theAge) {
      setResult("It is correct!");
    } else if (playerGuess >= theAge) {
      setResult("Too high!");
    } else if (playerGuess <= theAge) {
      setResult("Too low!");
    } else setResult("");
  };

  //const onChange = (e) => setValue(e.target.value);

  return (
    <React.Fragment>
      <div className="firstCluster">
        <p className="header">Age of </p>
        <p className="sec-header, new">of</p>
        <p className="header">The Vampire</p>
        <div className="home_flex">
          {/* <div>
            <img src={bats} alt="bats" />
          </div> */}
          <div className="new_flex">
            <img src={vampire} alt="vampire" className="child_flex img" />
            <input
              type="number"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            ></input>
            <button onClick={onClick} type="submit" className="block">
              Submit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
