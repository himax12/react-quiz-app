function StartState({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestions} Questions to test Your React Abilities</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Lets Start
      </button>
    </div>
  );
}

export default StartState;
