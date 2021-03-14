import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import data from "./TriviaData";

const QuestionList = () => {
  const resultData = useHistory();
  const startPageData = useLocation();
  const [score, updateScore] = useState(0);
  const [optionsArr, updateOptions] = useState([]);
  const [currentIndex, updateIndex] = useState(0);
  const shuffleArr = (arr) => {
    let ctr = arr.length,
      temp,
      index;
    // While there are elements in the array
    while (ctr > 0) {
      // Picks a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arr[ctr];
      arr[ctr] = arr[index];
      arr[index] = temp;
      return arr;
    }
  };

  useEffect(() => {
    const anotherArr = [...data];
    const ArrangeData = anotherArr.map((item) => {
      item.options = shuffleArr(item.incorrect.concat(item.correct));
      return item;
    });
    updateOptions(shuffleArr(ArrangeData));
  }, []);

  console.log(optionsArr[currentIndex]);
  const length = startPageData.data;
  const nextCard = (selected) => {
    if (optionsArr[currentIndex].correct === selected) {
      updateScore(score + 1);
    }
    if (currentIndex === length - 1) {
      resultData.push({
        pathname: "./resultpage",
        data: [score, length],
      });
    } else if (currentIndex < length - 1) {
      updateIndex(currentIndex + 1);
    }
  };

  return (
    <div>
      <h2>
        {currentIndex + 1} of {length}
      </h2>
      {optionsArr.length > 0 && (
        <div className="card">
          <h3 className="question">{optionsArr[currentIndex].question}</h3>
          <div className="options">
            {optionsArr[currentIndex].options.map((item) => {
              return <button onClick={() => nextCard(item)}>{item}</button>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionList;
