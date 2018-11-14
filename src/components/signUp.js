import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUp } from '../actions/authAction'

class SignUp extends Component {
    state = {
        email: "",
        password: "",
        name: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }

    render() {
        return (
            <div id='signUpForm'>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="email" onChange={this.handleChange} value={this.state.email} placeholder="email" />
                    <input type="text" id='password' onChange={this.handleChange} value={this.state.password} placeholder="password" />
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name} placeholder="name" />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => { dispatch(signUp(newUser))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);