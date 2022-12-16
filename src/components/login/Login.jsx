import "./Login.scss"
import React from 'react';
import { useState } from "react"
import { useNavigate } from "react-router-dom";
function Login() {
    const redirect = useNavigate()
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [Fac_ID, setFac_ID] = useState('')
    const userlogin = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/users/Login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    Email,
                    Password,
                    Fac_ID
                })
            })
            const data = await res.json()
            console.log(data);
            if (res.status === 400) {
                alert("somthing went wrong")
            } else if (res.status === 200) {

                localStorage.setItem("token", JSON.stringify(data));
                redirect('/cards')
            }
        } catch (err) {
            console.log(err);
        }


    }
    return (
        <div>
            <div className="left">
                <h1>welcome to  Attendance record system </h1>
                <p style={{ width: '85%' }}>  Easier to mark student attendance as well as record them in Digital sheets. Print students record as per the attendance sheet.</p>
                <button onClick={() => { window.location = "/contact" }} className="btn-1">Contact</button>
            </div>
            <form method="POST" onSubmit={userlogin} className="container">
                <div>
                    <h1 className="text-center">Log in</h1>
                    <h3 className="text-center">Mark  attendance in a digital way!</h3>
                    <hr className="hr1" />
                </div>
                <div className="your-input">
                    <div className="your-input">
                        <div className="input">
                            <input type="email" name="Email" id="Email" required placeholder="Enter Email" autoComplete="off"
                                value={Email}
                                onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input">
                            <input type="text" name="Fac_ID" id="Fac_ID" placeholder="Enter ID" required autoComplete="off"
                                value={Fac_ID}
                                onChange={(e) => setFac_ID(e.target.value)} />
                            <label htmlFor="facID">Faculty ID</label>
                        </div>
                        <div className="input">
                            <input type="password" name="Password" id="Password" required placeholder="Enter Password" autoComplete="off"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="password">
                                Password
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}
export default Login;
