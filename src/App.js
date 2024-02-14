import "./App.css";
import questions from "./data";
import { useState } from "react";

function App() {
  const [selectedId, setSelectedId] = useState(null);
  function handlerflap(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="App">
      <div className="flashcards">
        {questions.map((question) => (
          <div
            className={question.id === selectedId ? "selected" : ""}
            key={question.id}
            onClick={() => handlerflap(question.id)}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
