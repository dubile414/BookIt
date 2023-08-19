import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


import Navbar from './Navbar';
import home from "./home.png";

const Todo = (props) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  let history = useHistory()

  const change = () => {
    if (!email || !pass || !email==='@') {
      alert("Email and Password cannot be blank")
    }
    else {
      history.push('/company')
    }
  }






  return (
    <>
      <Navbar mode={props.mode} toggleMode={props.toggleMode} />
      <section className="mt-5">
        <div className="container  h-100">
          <div className="row  d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8  col-lg-7 col-xl-6">
              <img src={home}
                className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7  col-lg-5 col-xl-5 offset-xl-1">
              <h1 style={{ color: props.mode === 'light' ? 'black' : 'white' }} className='text-center  mb-3'>Alerady User's</h1>
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" id="form1Example13" placeholder="abc@gmail" className="form-control form-control-lg" />
                  <label style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="form-label" for="form1Example13">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input value={pass} onChange={(e) => { setPass(e.target.value) }} type="password" id="form1Example23" placeholder="*****" className="form-control form-control-lg" />
                  <label style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="form-label" for="form1Example23">Password</label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                    <label style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="form-check-label" for="form1Example3"> Remember me </label>
                  </div>
                  <a to="#!">Forgot password?</a>
                </div>

                {/* <!-- Submit button --> */}
                <button onClick={change} className="btn btn-primary btn-lg btn-block mx-2" >Sign Up</button>
                <button onClick={change} className="btn btn-primary btn-lg btn-block mx-2" >Login</button>




              </form>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Todo