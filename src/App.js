import { useState } from "react";

import SingleQuestion from "./components/singleQuestion";
import data from "./Data/data";

function App() {
  const [questions, setQuestions] = useState(data);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddQuestion = () => {
    if (newQuestion.trim() === "" || newAnswer.trim() === "") {
      return;
    }

    const newQuestionObj = {
      id: questions.length + 1,
      title: newQuestion,
      info: newAnswer,
    };

    setQuestions([...questions, newQuestionObj]);
    setNewQuestion("");
    setNewAnswer("");
  };

  return (
    <>
      <main>
        <div className="container">
          <h3>Questions and Their Answers</h3>

          <section className="info">
            {questions.map((oneQuestion) => {
              return <SingleQuestion key={oneQuestion.id} {...oneQuestion} />;
            })}
            <div>
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Enter a new question"
                  className="question-input"
                  required
                />
                <textarea
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  placeholder="Enter a new Answer"
                  className="question-input"
                  required
                />
                <center>
                  <button
                    onClick={handleAddQuestion}
                    className="add-button"
                    type="submit"
                  >
                    Add Question
                  </button>
                </center>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
