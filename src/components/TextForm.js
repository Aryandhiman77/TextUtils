import React, {useState} from 'react'
// const [ variable_name, function_to_update_variable_name ] = useState( 'current-state-of-variable' );

export default function TextForm(props) {
    const [text,setText]=useState(''); //useState is a hook
    const handleupCase = ()=>{
        setText(text.toUpperCase() )
        props.showAlert("success","text converted to Uppercase.")
    }
    const handlelwCase = ()=>{
        setText(text.toLowerCase() )
        props.showAlert("success","text converted to Lowercase.")
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const cleartext=(event)=>{
        setText(event.target.value="");
        props.showAlert(
            "success",
            "Your text has been cleared."
        );
    }
    const copyTxt=()=>{
        let copytxt = document.getElementById('copytxt');
        copytxt.select();
        navigator.clipboard.writeText(copytxt.value);
    }
    const removeExtraSpaces=()=>{   
        setText(text.replace(/\s{2,}/g, ' ').trim())
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.innerHTML === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            window.speechSynthesis.cancel()
            
        }
        msg.onend=()=>{
            toogle.innerHTML = "Speak"
        }
        
    }

    
    
    
    return (
        <>
        <div className={`container border text-${props.mode==='light'?'dark':'light'} `} style={{backgroundColor:props.mode==='light'?'white':'black',borderRadius:'20px'}}>
            <div className="mb-3 mt-5">
                <h1>{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleonchange} id='copytxt' rows="8"></textarea>
            </div>
            <button className="btn btn-primary mb-2" onClick={handleupCase}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2 mb-2" onClick={handlelwCase}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2 mb-2" id='toggle' onClick={speak}>Speak</button>
            <button className="btn btn-primary mx-2 mb-2"  onClick={cleartext}>Clear Text</button>
            <button className="btn btn-primary mx-2 mb-2"  onClick={copyTxt}>Copy Text</button>
            <button className="btn btn-primary mx-2 mb-2"  onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container mt-3 text-${props.mode==='light'?'dark':'light'}`} >
            <h2>Your text summary</h2>
            {`${text.split(' ').length===1 && text.length===0 ?'0':text.split(' ').length} words  ${text.length} Characters`}
            <div>can be read in {0.008 * text.length} Minutes.</div>
            <h3 className='mt-2'>Preview</h3>
            <p>{text}</p>
        </div>
        
        </>
        
    )
}
