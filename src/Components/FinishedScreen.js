function FinishedScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 70 && percentage < 80) emoji = "😊";
  if (percentage >= 50 && percentage < 70) emoji = "🤔";
  if (percentage >= 0 && percentage < 50) emoji = "😳";
  return (
    <div>
      <>
        <p className="result">
          {" "}
          <span>{emoji}</span>
          You scored {points} out of {maxPossiblePoints} (
          {Math.ceil(percentage)}
          %)
        </p>
        <p className="highscore">(Highscore: {highscore} points)</p>
      </>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "startAgain" })}
      >
        {" "}
        Start Again
      </button>
    </div>
  );
}

export default FinishedScreen;
