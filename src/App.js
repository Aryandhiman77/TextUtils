import React, { useState } from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [btntxt, setbtnTxt] = useState("Enable Light Mode");

  const [myStyle, setmyStyle] = useState({
    color: "black"
  })
  const [alert, setAlert] = useState(null);
  const showAlert = (status, type) => {
    setAlert({
      status: status,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }



  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#0d0630";
      setbtnTxt('Enable Light Mode')
      showAlert("success", "Dark Mode has been enabled.")

      setmyStyle({
        color: "white",
        backgroundColor: "black"
      })

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      setbtnTxt('Enable Dark Mode')
      showAlert("success", "Dark Mode has been Disabled.")
      setmyStyle({
        color: "black",
        backgroundColor: "white"
      })

    }

  }

  return(  /*JSX - javascript ka syntax extension hai in which we write html and we can also embedd javascript in between using {javascript_Code} 
  babel compiles JSX down to React.createElement() calls.
  */
  <>
  {/* <Router> */}
    <Navbar title={"TextUtils"} aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} btntxt={btntxt} /> {/* title and aboutText are props(properties) that helps to dynamically change the functional component (navbar) through attributes (title, aboutText). */}
    <Alert alert={alert} />
      {/* <Routes> */}
        {/* exact path should be given because react do partial matching of components 
        /user --> Component-1 otherwise it will be returned 
        /user/home --> Component-2 */}
        {/* <Route exact path="/" element={}></Route> */}
        <TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert} />
        {/* <Route exact path="/about" element={<About myStyle={myStyle}/>}></Route> */}
      {/* </Routes> */}
  {/* </Router> */}
  </>
    );
}

export default App;
