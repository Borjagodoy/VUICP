import React from 'react';

import gitImg from '../img/git.png';
import googleImg from '../img/google.png';

class LoginScreen extends React.Component {
    constructor() {
        super()
        this.handleGoogle = this.handleGoogle.bind(this);
    }

    handleGoogle() {
        // fetch('https://vuicp-backend.herokuapp.com/connect/google?callback=http://localhost:3000/auth/google/callback')
        // .then( res => res.json())
        // .then( data => {
        //   console.log(data);
        // })
    }

    render(){
        return(
            <section className="background login">
                <div className="title">
                    <h3><span>Develop</span> your Voice user interface</h3>
                    <h3><span>Deployed</span> in All platforms</h3>
                </div>
                <div className="accounts">
                    <p><button className="git" onClick={this.props.handleUser}><img src={gitImg} alt="Git"/> Login with github</button></p>
                    <p><button className="google" onClick={this.handleGoogle}><img src={googleImg} alt="Google"/> Login with Google</button></p>
                </div>
            </section>
        )
    }
}


export default LoginScreen;