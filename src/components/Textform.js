import React, { useState } from 'react'

export default function Textform(props) {
    const [text,setText] = useState();
    const upperCase = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const Lowercase = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const ClearText = () =>{
        setText("");
    }
const RemoveSpace = () =>{
  let newText = text.split(" ");
  let newData = "";
  for(let i of newText){
    if(i!==" "){
newData+=i;
    }
    setText(newData);
  }
}
 
    const handleOnChange = (e) =>{
     
        setText(e.target.value)
    }
  return (
<div className='container'>
<textarea onChange={handleOnChange} value={text}></textarea>
<div>
<button onClick={upperCase}>Convert UpperCase</button>
<button onClick={Lowercase}>Convert LowerCase</button>
<button onClick={ClearText}>Clear</button>
<button onClick={RemoveSpace}>Remove Space</button>
<button onClick={() =>  navigator.clipboard.writeText(text)}>Copy Text</button>
</div>
<div className='datainfo'>
{/* <h4> Length: {text.length} Words: {text.split(" ").length}</h4> */}
</div>
</div>
  )
}
