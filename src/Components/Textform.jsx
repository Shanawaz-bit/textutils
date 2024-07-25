import React,{useState} from 'react'
import style from './Textform.module.css'

const Textform = (x) => {
    let [text,setText]=useState("Enter text here....")
    let textData=(event)=>{
        setText(event.target.value)
    }
    let formHandle=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        
    }
    let formHandle1=()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }
    let formHandle2=()=>{
        let newText=""
        setText(newText)
    }
    return (
        <div id={style.mainForm}>
        <h1 id={style.heading}>{x.heading}</h1>

            <div id={style.mybox}>
                <textarea name="" id={style.textArea} cols="50" rows="10" value={text} onChange={textData}></textarea>
            </div>
            <button id={style.upBtn} onClick={formHandle}>Uppercase</button>
            <button id={style.lowBtn} onClick={formHandle1}>Lowercase</button>
            <button id={style.clBtn} onClick={formHandle2}>Clear</button>
        <div id={style.summary}>
            <h3>Your text summary</h3>
            <p id={style.para1}>{text.split(" ").length} words and {text.length} characters</p>
        
        </div>
        <div id={style.preview}>
            <h3>Text Preview</h3>
            <p>{text}</p>
        </div>

        </div>

    )
}

export default Textform