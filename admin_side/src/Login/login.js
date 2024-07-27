
import axios from "axios";
import { React, useState } from "react";
// import { NavLink } from "react-router-dom";
import './login.css';
export function LoginCard() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitClick = async (event) => {
        console.log('Login clicked');
        // window.open('/dashboard');
        event.preventDefault(); // Prevent the default form submission behavior

        // Create an object with the email and password
        const formData = {
            id: id,
            password: password
        };
        console.log(formData);
        const response = await axios.post('http://localhost:3000/login', formData, { withCredentials: true });
        console.log('Response');
        console.log(response);
        // while (1);
        if (response.status === 200) {
            console.log('Login successful');
            window.open('/dashboard', '_self');
        }
        else {
            console.log('Login failed');
        }

    }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">DormEase</h3>
                    <div className="form-group mt-3">
                        <label style={{ fontSize: '20px' }}>Admin Id</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="Enter Id"
                            style={{ fontSize: '18px', borderRadius: '10px' }}
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label style={{ fontSize: '20px' }}>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            style={{ fontSize: '18px', borderRadius: '10px' }}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="d-grid gap-2 mt-3">
                        {/* <NavLink to="/dashboard"> */}
                        <button type="submit" className="btn btn-primary" style={{ width: '320px', color: 'black', marginBottom: '20px' }} onClick={handleSubmitClick}>
                            Submit
                        </button>
                        <br />
                        <br />
                        {/* </NavLink> */}
                    </div>
                </div>
            </form>
        </div>
    )
}