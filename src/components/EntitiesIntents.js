import React from 'react';

class EntitiesIntents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
        this.handleModal = this.handleModal.bind(this);
    }

    handleModal () {
        this.setState({modal : !this.state.modal})
    }

    data(props) {
        if(props.synonimous !== undefined) {
            return(
                props.synonimous.map((synonimous, index) => 
                    <p key={index}>
                        {synonimous}
                    </p>
                )
            )
        } else {
            return(
                props.trainingPhrases.map((trainingPhrase, index) => 
                    <p key={index}>
                        {trainingPhrase}
                    </p>
                )
            )
        }
    }

    render(){
        return(
            this.props.data.map((res, index) =>
                <div key={index}>
                   <input type="checkbox" defaultChecked/><label className="personal" onClick={this.handleModal}>{res.name}</label>
                   <div className={this.state.modal ? "modalBackground" : "hideModal"}>
                        <div className="modal">
                            <h3 className="modalTitle">{res.name}</h3><span className="close" onClick={this.handleModal}>x</span>
                            <div className="modalData">{this.data(res)}</div>
                        </div>
                    </div>  
                </div>
            )
        )
    }
}

export default EntitiesIntents;