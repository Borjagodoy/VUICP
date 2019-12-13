import React from 'react';

//Solo para el ejemplo
import example from '../img/example.jpeg';

class Header extends React.Component {
    render(){
        if(this.props.user === true) {
            return(
                <header>
                    <h2>VUI Croos Platform</h2> <img src={example} alt="" onClick={this.props.handleUser}/>
                </header>
            )
        } else {
            return(
                <header>
                    <h2>VUI Croos Platform</h2>
                </header>
            )
        }
    }
}

export default Header;