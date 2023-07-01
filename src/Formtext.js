import React, { useState } from 'react'
// import React, {useState}from 'react'

export default function Formtext(props) {
    const [text, settext] = useState("")
    const [btnname, setbtnname] = useState("upper case")
    const toupcase = () => {
        let newText
        if (btnname === "upper case") {
            newText = text.toUpperCase();
            settext(newText)
            setbtnname("lower case")
            props.showAlert("convert to upppercase", "success")
        }
        else {
            newText = text.toLowerCase();
            settext(newText)
            setbtnname("upper case")
            props.showAlert('convert to lower case', 'success')
        }
    }
    let clear = () => {
        let newtext = ("")
        settext(newtext)
        props.showAlert('text clear', 'danger')

    }


    const onchange = (event) => {
        console.log("change");
        settext(event.target.value)
    }
    let extraspace = () => {
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(""))
        props.showAlert('extra space remove', 'success')

    }

    return (
        <div className='container'>

            <div className="mb-3">
                <h1><strong> {props.heading}</strong></h1>
                <textarea className="form-control" value={text} onChange={onchange} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(49 70 76)' : 'white', color: props.mode === 'dark' ? 'white' : "black" }} id="TextEditor" rows="8" ></textarea>
                <button type="button" disabled={text.length === 0} className="btn btn-primary  my-2" onClick={toupcase}>{btnname}</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={clear}>clear</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary my-4 mx-2" onClick={extraspace}>extra space</button>
            </div>
            <h2>Your text summary</h2>
            <p>In text area words{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} and Character{text.length}</p>
            <h5>Preview</h5>
            <p>{text}</p>

        </div>
    )
}

