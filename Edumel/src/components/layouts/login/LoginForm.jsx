import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';



class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await signInWithEmailAndPassword( auth, email, password);
            // User successfully logged in
            // You can redirect or perform any action here
        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    render() {
        const { email, password, error } = this.state;

        return (
            <section className="page-wrapper single">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xl-6">
                            <div className="login-form">
                                <div className="form-header">
                                    <h2 className="font-weight-bold mb-3">Login</h2>

                                    <div className="info">
                                        <span>Don't have an account yet?  </span>
                                        <Link to="/register" className="text-decoration-underline">Sign Up for Free</Link>
                                    </div>
                                </div>

                                <form className="login login-register-form" onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <label>Email address<span className="required">*</span></label>
                                        <input type="email" className="form-control" name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
                                    </div>

                                    <div className="form-row">
                                        <label>Password<span className="required">*</span></label>
                                        <input className="form-control" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" required />
                                    </div>

                                    {error && <p className="text-danger">{error}</p>}

                                    <div className="d-flex align-items-center justify-content-between py-2">
                                        <div className="form-row">
                                            <input type="checkbox" /> <span>Remember me</span>
                                        </div>

                                        <p className="lost_password">
                                            <Link to="#">Forgot password?</Link>
                                        </p>
                                    </div>

                                    <div className="form-row">
                                        <button type="submit">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default LoginForm;
