import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase! ", "success");
  };
  const handleLoClick = () => {
    console.log("LowerCase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleOnClear = () => {
    // let newText ="";
    setText("");
  };
  const handleCopy = () => {
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2 >{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="5"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='dark' ? '#A0A0A0' : 'white', color: props.mode==='dark' ? 'white' : 'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleOnClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !==0}).length} words, {text.length} charaters</p>
        <p>{text.split(/\s+/).filter((element) => {return element.length !==0}).length * 0.008} min to read</p>
        <h3>Preview</h3>
        <p>{text.length > 0? text: "Enter your text to preview it here"}</p>
      </div>
    </>
  );
}
