import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  // setText("text to set")
  const handleUpClick = (event) => {
    console.log("upper btn clicked");
    setText(text.toUpperCase());
    // setText(event.target.value);
  };
  const handleLoClick = (event) => {
    console.log("upper btn clicked");
    setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  const handleClearText = (event) => {
    setText('');
  };
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <textarea
            rows="5"
            col="5"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{text.split(" ").length * 1/125} minutes to read </p>
      </div>
    </>
  );
}
