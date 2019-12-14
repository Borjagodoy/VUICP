import React from 'react';

class EntitiesIntents extends React.Component {
    render(){
        return(
            this.props.data.map((res, index) =>
                <p key={index}>
                   <input type="checkbox" defaultChecked/> <label className="personal">{res.name}</label>
                </p>
            )
        )
    }
}

export default EntitiesIntents;