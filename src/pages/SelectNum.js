import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const StartPage = () => {
  const pageData = useHistory();
  const [inputNum, updateInputNum] = useState(0);

  const GoToQuestionPage = (e) => {
    e.preventDefault();
    if (inputNum < 1) {
      alert("Number inputted is too low");
    } else if (inputNum > 21) {
      alert("Number inputted is too high");
    } else {
      pageData.push({
        pathname: "./questionlist",
        data: inputNum,
      });
    }
  };
  return (
    <div className="card start-page">
      <h3>Kindly input the number of questions you would like to answer</h3>
      <form onSubmit={GoToQuestionPage} className="num-form">
        <input
          type="number"
          name="input-num"
          id="input-num"
          value={inputNum}
          onChange={(e) => updateInputNum(e.target.value)}
          required
        />
        <button type="submit" className="btn start-btn">
          Start
        </button>
      </form>
    </div>
  );
};

export default StartPage;
