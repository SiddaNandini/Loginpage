import React from 'react'
import './js/Content.css';
import Submit from './js/Submit';
import { Link, Route, Routes } from 'react-router-dom';
const Content = () => {
  return (
    <div>
      <fieldset><legend >Registration from</legend>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter name"  name="name"/>
        <br></br><br></br>
        <label>e-mail</label>
        <input type="text" placeholder="example@gmail.com"/>
        <br></br><br></br>
        <label>Gender:</label>
        <input type="radio" id="m" value="male" name="t1"/><label>Male</label>
        <input type="radio" id="f" value="female" name="t1"/><label>Female</label>
        <br></br><br></br>
        <label>Courses:</label>
        <input type="checkbox"/><label>ML</label>
        <input type="checkbox"/><label>APP</label>
        <br></br><br></br>
        <input type="file" id="f"></input>
        <br></br><br></br>
        <Link to="/Submit.js">Submit</Link>
        <br></br><br></br>
      </form>
      </fieldset>
      <Routes>
          <Route path='/Submit' element={<Submit/>}></Route>
        </Routes>
    </div>
  )
}

export default Content