import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8080/login', {email, password})
        .then(result => {console.log(result)
            if(result.data === "Success"){
                swal("Successful login", "Welcome", "success")
                navigate('/home');
            }else{
                swal( "login failed", "Wrong credentials", "error")
            }
        
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-warning p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>
                            <strong>Email</strong>
                        </label>
                        <input 
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-0">
                        Login
                    </button>
                    <p>Don't have an account?</p>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-default">
                        Signup
                    </Link>

                </form>

            </div>
               
        </div>
    )

}

export default Login;