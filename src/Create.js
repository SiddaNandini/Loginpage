import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Log from './Log'

const Create = () => {
  return (
    <div>
        <center>
        <h1>Created Succesfully</h1>
        <Link to='/Log'>Back to Login page</Link>
    </center>
    <Routes>
        <Route path='/Log'element={<Log/>}/>
    </Routes>
    </div>
  )
}

export default Create