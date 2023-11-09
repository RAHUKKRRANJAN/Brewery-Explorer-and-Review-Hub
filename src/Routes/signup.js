import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from 'axios';
import swal from "sweetalert";

function Signup(){
    const [email, setEmail] = useState();
    const [name, setName]= useState();
    const [password, setPassword]= useState();
    const [city, setCity]= useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/', {name , email, password , city})
        .then(result => {console.log(result)
            swal("Succesffully Registered", "success")
            navigate('/login');
        })
        .catch(err => console.log(err))
    }


    return(
        <div className= "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className = "bg-warning p-3 rounded w-25">
            <h2 className="text-center font-weight-bold">
                Register
            </h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor= "email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0 "
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor= "email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor= "email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor= "email">
                            <strong>City</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your city"
                            autoComplete="off"
                            name="city"
                            className="form-control rounded-0"
                            onChange={(e)=>setCity(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 rounded-0">
                        Register
                    </button>
                    <p>Already Have an Account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                </form>

            </div>
        </div>
    )
}

export default Signup;