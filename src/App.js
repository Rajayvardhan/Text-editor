
import { useState } from 'react';
import About from './About';
import Alert from './Alert';
import './App.css';
import Formtext from './Formtext';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [btnname, setbtnname] = useState(' light mode')
  const [alert, setalert] = useState(null)

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);

  }
  let toglemode = () => {
    if (mode === 'light') {

      setmode('dark')
      setbtnname('light mode')

      document.body.style.backgroundColor = '#2d373a'
      document.body.style.color = "white"
      showalert("dark mode is enable", "success");
    }
    else {
      setmode('light')
      setbtnname(' dark mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = "black"
      showalert("light mode is enable", "success");

    }
  }
  return (

    <>
      <Router>

        <Navbar mode={mode} toglemode={toglemode} btnname={btnname} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<Formtext heading="TextEditor" mode={mode} showAlert={showalert} />}> </Route>
          <Route path='/about' element={<About mode={mode} />}> </Route>
        </Routes>

      </Router>
    </>
  )

}

export default App;
