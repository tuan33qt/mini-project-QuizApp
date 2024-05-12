import { type } from "@testing-library/user-event/dist/type";

function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to React Quiz</h2>
      <h3>{numQuestion} Question to test your React</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's get start
      </button>
    </div>
  );
}

export default StartScreen;
