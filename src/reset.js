import React from 'react'
import './reset.css';
const reset = () => {
  return (
    <div>
        <form>
            <table border="3cm">
                <tr>
                    <th colspan="2" >Reset Password</th>
                </tr>
                <tr>
                    <th>USERNAME</th>
                    <td><input type="text" name="t"/></td>
                </tr>
                <tr>
                    <th>New Password</th>
                    <td><input type="text" name="t"/></td>
                </tr>
                <tr>
                    <th>Confirm Password</th>
                    <td><input type="text" name="t"/></td>
                </tr>
                <tr>
                    <th colspan="2"><a href="http://127.0.0.1:5500/first-react-app/src/submit.html"><input type="button" value="Reset" id="b"></input></a></th>
                </tr>
            </table>
        </form>
    </div>
  )
}

export default reset