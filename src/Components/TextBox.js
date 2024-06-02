import React , {useState} from 'react'
// import PropTypes from 'prop-types';

export default function TextBox(props) {
  const handleUpperclick = ()=>{
    // console.log("Uppercase was clicked" + text); // to clean on console window
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success")
  }
  const handleLowerclick = ()=>{
    let newText = text.toLowerCase();
    props.showAlert("Converted to Lower case", "success")
    setText(newText);
  }
  const clearText = ()=>{
    let newText = '';
    setText(newText);
  }
  const handleonChange = (event)=>{
    setText(event.target.value);
  }
  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text to speech!');
    }
  };
  const[text,setText] = useState('')
  return (
    <>
    <div className="container " style={{color:props.mode==="dark"?"white" : "black"}} >
    <div>
      {/* <h1>{text}</h1> */}
      <h1>Enter text here</h1>
<div className="mb-3 " >
  <label htmlFor="MyBox" className="form-label">{props.heading}</label>
  <textarea className="form-control" value = {text} style={{backgroundColor:props.mode==="dark"?"grey" : "white"}} onChange={handleonChange} id="MyBox" rows="8"></textarea>
</div>

<button className="btn btn-warning mx-2 my-2" onClick={handleUpperclick}>Convert to Upper</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowerclick}>Convert to Lower</button>
<button className="btn btn-danger mx-2 my-2" onClick={clearText}>Clear text</button>
<button className="btn btn-success mx-2 my-2" onClick={handleTextToSpeech}>Speech</button>
</div>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white" : "black"}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <h2>Text Preview</h2>
      <p>{text.length>0?text:"Enter something in text to preview it...."}</p>
    </div>
    </>
  )
}
