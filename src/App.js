import { useState } from "react";
import Button from "./components/Button";
import StatisticLine from "./components/StatisticLine";
import "./components/css/App.css";

const Statistics = (props) => {
  const { good, neutral, bad, allFeedback, score } = props;
  const average = allFeedback === 0 ? 0 : score / allFeedback;
  const positiveAverage = allFeedback === 0 ? 0 : (100 * good) / allFeedback;

  return (
    <div>
      <h2>Statistics</h2>
      <table>
      <tbody>
        <tr>
          <th>Good</th>
          <th>Neutral</th>
          <th>Bad</th>
          <th>All Feedback</th>
          <th>Average</th>
          <th>Positive</th>
        </tr>
        <tr>
          <td>
            <StatisticLine value={good} />
          </td>
          <td>
            <StatisticLine value={neutral} />
          </td>
          <td>
            <StatisticLine value={bad} />
          </td>
          <td>
            <StatisticLine value={allFeedback} />
          </td>
          <td>
            <StatisticLine value={average.toFixed(1)} />
          </td>
          <td>
            <StatisticLine value={positiveAverage + "%"} />
          </td>
        </tr>
      </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // enregistrer les clics de chaque bouton dans un état différent

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allFeedback, setAllFeedback] = useState(0);
  const [score, setScore] = useState(0);

  const setToGood = (newGood) => {
    console.log("good now", newGood);
    setGood(newGood);
    setAllFeedback(allFeedback + 1);
    setScore(score + 1);
  };

  const setToNeutral = (newNeutral) => {
    console.log("neutral now", newNeutral);
    setNeutral(newNeutral);
    setAllFeedback(allFeedback + 1);
  };

  const setToBad = (newBad) => {
    console.log("bad now", newBad);
    setBad(newBad);
    setAllFeedback(allFeedback + 1);
    setScore(score - 1);
  };

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      {allFeedback !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allFeedback={allFeedback}
          score={score}
        />
      ) : (
        <p>No Feedback given</p>
      )}
    </div>
  );
};

export default App;
