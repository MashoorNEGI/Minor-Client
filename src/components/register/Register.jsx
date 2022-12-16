import "./Register.scss"
function Register() {
    return (
        <div className="Register-div">

            <form className="Register-form" action="">
                <img src="https://cdn-icons-png.flaticon.com/512/3024/3024605.png" />
                <div className="R-I-div">
                    <label>Faculty ID : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>
                <div className="R-I-div">
                    <label>Faculty Name : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>
                <div className="R-I-div">
                    <label>Password : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>
                <div className="R-I-div">
                    <label>Password : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>
                <div className="R-I-div">
                    <label>Password : </label>
                    <input className="Login-input" type="text" name="" id="" />
                </div>
                <a className="Register-btn" href="/Login">Register</a>
                <div className="Register-l-btn">
                    Don't have account ?  <a href="/Login">Login</a>
                </div>
            </form>
        </div>
    );
}

export default Register;