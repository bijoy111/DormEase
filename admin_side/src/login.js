
import React from "react";
import { NavLink } from 'react-router-dom';
import './login.css';
export function LoginCard() 
{
    // const handleSubmitClick = (event) => {
    //     console.log('Login clicked');
    //     window.open('/dashboard');
    // }
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">DormEase</h3>
                    <div className="form-group mt-3">
                        <label style={{fontSize:'20px'}}>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        style={{fontSize: '18px', borderRadius: '10px'}}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label style={{fontSize:'20px'}}>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        style={{fontSize: '18px', borderRadius: '10px'}}
                        />
                    </div>
                    <br/>
                    <div className="d-grid gap-2 mt-3">
                        <NavLink to="/dashboard">
                        <button type="submit" className="btn btn-primary" style={{width:'320px'}}>
                            Submit
                        </button>
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    )
}