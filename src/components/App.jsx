import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [finalName, setFinalName] = useState("");

  function handleChange(event) {
    // console.log("changed");
    console.log(event.target.value);
    setName(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  function greet(event) {
    setFinalName(name);
  }

  function handleFormSubmit(event) {
    // prevent from refreshing the page
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {finalName}</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit" onClick={greet}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
