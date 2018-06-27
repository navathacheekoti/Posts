import React, { Component } from "react";
import GoogleLogin from "../assets/Google-Login.png";
import { Link } from "react-router-dom";

const firebase = require("firebase");

let config = {
    apiKey: "AIzaSyAddQ8UgXyOjJlyqhWheCQ23mJStwIKRyY",
    authDomain: "authenticate-f71bd.firebaseapp.com",
    databaseURL: "https://authenticate-f71bd.firebaseio.com",
    projectId: "authenticate-f71bd",
    storageBucket: "authenticate-f71bd.appspot.com",
    messagingSenderId: "407128484728"
};
firebase.initializeApp(config);



class Login extends Component {
    google = () => {
        console.log("I am in google method");
        var provider = new firebase.auth.GoogleAuthProvider();
        var promise = firebase.auth().signInWithPopup(provider);
        promise.then(user => {

            const {name,picture}=user.additionalUserInfo.profile;
            this.props.user(name,picture)
            this.props.route(true);



        });
        promise.catch(e => {
            console.log(e.msg);
        });
    };

    render() {
        return (
            <article className="br3 ba dark-gray b--black-10 mv6 w-100 w-50-m w-25-l mw9 center mt0 tc pa4">
            <div className='signin'>
                <h2>You Need to Sign in To Add or See Posts</h2>
                {/* {this.props.signin=false} */}
                <Link to="/home"><img className='pointer br3 w-100' src={GoogleLogin} alt="GoogleLogin" onClick={this.google} /></Link>
            </div>
        </article>
        );
    }
}
export default Login;
