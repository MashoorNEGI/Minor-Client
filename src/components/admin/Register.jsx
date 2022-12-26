import { Button } from '@mui/material'
import { useState } from 'react';
const Register = () => {
    const [ account, setaccount ] = useState({
        Fac_ID: "",
        Fac_Name: "",
        Department: "",
        Phone_no: "",
        Email: "",
        Password: ""
    })

    let username, values;
    const handleit = (e) => {
        username = e.target.name
        values = e.target.value
        setaccount({ ...account, [ username ]: values })

    }

    const accountdata = async (e) => {
        e.preventDefault()

        const { Fac_ID, Fac_Name, Department, Phone_no, Email, Password } = account

        const res = await fetch("users/Register", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                Fac_Name,
                Fac_ID,
                Department,
                Phone_no,
                Email,
                Password
            })
        })

        if (res.status === 200) {
            window.location.reload()
        }

    }
    return (
        <>
            <div className="login-content container">
                <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="" />
                <form method='POST' className='row' onSubmit={accountdata}>
                    <input type="text" className='col' name="Fac_Name" value={account.Fac_Name} onChange={handleit} placeholder='Enter Name..' autoComplete='off' required />
                    <input type="text" className='col' name="Fac_ID" value={account.Fac_ID} onChange={handleit} placeholder='Faculty ID' autoComplete='off' required />
                    <div className="w-100"></div>
                    <input type="Email" className='col' name="Email" value={account.Email} onChange={handleit} placeholder='Your Email' autoComplete='off' required />
                    <input type="text" className='col' name="Department" value={account.Department} onChange={handleit} placeholder='Department' autoComplete='off' required />
                    <div className="w-100"></div>
                    <input type="Phone" className='col' name="Phone_no" value={account.Phone_no} onChange={handleit} placeholder='Phone no.' autoComplete='off' required />
                    <input type="Password" className='col' name="Password" value={account.Password} onChange={handleit} placeholder='Password' autoComplete='off' required />
                    <button className='btn'>Register</button>
                </form>
            </div>
        </>
    );
}

export default Register;