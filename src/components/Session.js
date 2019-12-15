import React from 'react';

import upload from '../img/upload.png';
import add from '../img/add.png';
import { Redirect } from "react-router-dom";

class LoginScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            on: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // console.log(event.target.value);
        let allowedExtensions = /(.zip)$/i;
        if(!allowedExtensions.exec(event.target.value)){
            alert("Need zip file!");
        } else {
            this.setState({on: true});
        }
    }

    render(){
        if(this.state.on) {
            return(
                <Redirect to="/user/project"/>
            )
        } else {
            return(
                <section className="container">
                    <div className="space">
                        <a href="/" className="help">¿How export Alexa or DialogFlow code?</a>
                    </div>
                    <div className="containerInputs">
                        <div className="menu">
                            <p>Import your DIalog flow or alexa code</p>
                            <img src={upload} alt=""/>
                            <input type="file" onChange={this.handleChange}/>
                        </div>
                        <div className="menu">
                            <p>Start a new project</p>
                            <img src={add} alt=""/>
                            <input type="button"/>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

export default LoginScreen;