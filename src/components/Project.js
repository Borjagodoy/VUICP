import React from 'react';

import Language from './Language.js';
import EntitiesIntents from './EntitiesIntents.js';

import dialogflow from '../img/dialogflow.png';
import alexa from '../img/alexa.png';

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            languages: [],
            type: '',
            entities: [],
            intents: []
        }
    }

    componentDidMount() {
        fetch("https://vuicp-backend.herokuapp.com/projects")
        .then( res => res.json())
        .then( data => {
            console.log(data);
            this.setState({
                title: data[0].title,
                description: data[0].description,
                languages: data[0].languages,
                type: data[0].type,
                entities: data[0].entities,
                intents: data[0].intents
            })
        })
    }

    render(){
            return(
                <section className="container">
                    <div className="alignLanguages">
                       {(this.state.type === 'Dialog' ? <img src={dialogflow} alt=""/> : (this.state.type === 'Alexa') ? <img src={alexa} alt=""/> : null)}
                       <h2>{this.state.title}</h2> 
                       <p><Language languages={this.state.languages}/></p>
                    </div>
                    <p>{this.state.description}</p>
                    <div className="alignInfo">
                        <div>
                            <h3>Entities</h3>
                            <EntitiesIntents data={this.state.entities}/>
                        </div>
                        <div>
                            <h3>Intents</h3>
                            <EntitiesIntents data={this.state.intents}/>
                        </div>
                    </div>
               </section>
            )
    }
}

export default Project;