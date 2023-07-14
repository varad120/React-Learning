import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)

    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("Converted to uppercase!!","success")
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked" + text)

    let newText = text.toLowerCase();

    setText(newText);
    props.showAlert("Converted to lowercase!!","success")

  };

  const handleReverse = (event) => {
    let strArr = text.split("");

    strArr = strArr.reverse();

    let newText = strArr.join("");

    setText(newText);
    props.showAlert("String is reversed","success")
  };

  const handleOnChange = (event) => {
    // console.log("On change");

    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.Mode === "dark" ? "white" : "#0e0d39" }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.Mode === "dark" ? "grey" : "white",
              color: props.Mode === "dark" ? "white" : "#0e0d39",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-1" onClick={handleReverse}>
          Reverse
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.Mode === "dark" ? "white" : "#0e0d39" }}
      >
        <h1>Your text summary</h1>

        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>

        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>

        <p>
          {text.length > 0
            ? text
            : "Enter something in the text box to preview it here"}
        </p>
      </div>
    </>
  );
}
