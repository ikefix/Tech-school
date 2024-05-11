import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'firebase/app';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMessage: null
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            // Optionally, you can do something with the userCredential here
            console.log(userCredential);
            // Redirect or do something else after successful registration
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }

    render() {
        const { username, email, password, confirmPassword, errorMessage } = this.state;

        return (
            <section className="page-wrapper single ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xl-6">
                            <div className="login-form">
                                <div className="form-header">
                                    <h2 className="font-weight-bold mb-3">Sign Up</h2>
                
                                    <div className="info">
                                        <span>Already have an account?  </span>
                                        <Link to="/login" className="text-decoration-underline">Sign In</Link>
                                    </div>
                                </div>

                                <form className="login login-register-form " onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <label>Username &nbsp;<span className="required">*</span></label>
                                        <input type="text" name="username" value={username} onChange={this.handleChange} className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-row">
                                        <label>Email address&nbsp;<span className="required">*</span></label>
                                        <input type="text" name="email" value={email} onChange={this.handleChange} className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-row">
                                        <label>Password&nbsp;<span className="required">*</span></label>
                                        <input type="password" name="password" value={password} onChange={this.handleChange} className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="form-row">
                                        <label>Re-Enter Password &nbsp;<span className="required">*</span></label>
                                        <input type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} className="form-control" placeholder="Re-Enter Password "/>
                                    </div>
                                    <div className="form-row py-2">
                                        <input type="checkbox" /> <span>Accept the Terms and Privacy Policy</span>
                                    </div>
                                    <div className="form-row">
                                        <button type="submit">Register</button>
                                    </div>
                                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RegisterForm;
