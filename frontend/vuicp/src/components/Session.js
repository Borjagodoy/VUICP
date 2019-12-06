import React from 'react';

import upload from '../img/upload.png';
import add from '../img/add.png';

class LoginScreen extends React.Component {
    render(){
            return(
                <section className="session">
                    <div className="space">
                        <a href="#" className="help">¿How export Alexa or DialogFlow code?</a>
                    </div>
                    <div className="containerInputs">
                        <div className="menu">
                            <p>Import your DIalog flow or alexa code</p>
                            <img src={upload} alt=""/>
                            <input type="file"/>
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

export default LoginScreen;