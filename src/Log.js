import React from 'react'
import "./js/Log.css";
import { Link, Route, Routes } from 'react-router-dom';
import Reg from './js/Reg';
//import { Content } from 'antd/es/layout/layout';
import Content from './Content';
const Log = () => {
  return (
    <div>
        <center>
          <fieldset><legend>LOGIN</legend>
            <form className='f'>
                <br></br>
            <label>Username</label>
            <input type="text" id="t1" name="t1" placeholder="Enter name"/>
            <br></br>
            <label>Password</label>
            <input type="password" id="t2" name="t2" placeholder="Enter Password"/>
            <br></br>
            <i id='i'style={{color:"red"}}>If you dont have an account</i>
            <br></br>
            <nav>
        <Link to='/Reg'>create account</Link>
            <br></br>
            <Link to="/Content">LOGIN</Link>
        </nav>
            <br></br>
            </form>
            </fieldset>
            </center>        
        <Routes>
          <Route path='/Reg' element={<Reg/>}></Route>
          <Route path='/Content' element={<Content/>}></Route>
        </Routes>
    </div>

    
  )
}

export default Log