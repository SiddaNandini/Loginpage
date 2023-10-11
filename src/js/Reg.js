import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Create from '../Create'

const Reg = () => {
  return (
    <div>
        <fieldset><legend>Registration from</legend>
            <form>
              <label>Name</label>
              <input type="text" placeholder="Enter name"  name="name"/>
              <br></br><br></br>
              <label>e-mail</label>
              <input type="text" placeholder="example@gmail.com"/>
              <br></br><br></br>
              <label>Password</label>
              <input type="password" id="t2" name="t2" placeholder="Enter Password"/>
              <br></br><br></br>
              <Link to='/Create'>create account</Link>
              </form>
        </fieldset>
        <Routes>
          <Route path='/Create' element={<Create/>}>
          </Route>
        </Routes>
    </div>
  )
}

export default Reg