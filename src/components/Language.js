import React from 'react';

import spanish from '../img/spanish.png';
import english from '../img/english.png';

class Language extends React.Component {
    render(){
        return(
            this.props.languages.map( (res, index) =>
                <span key={index} className="languageIcon">
                    {(res === 'es') ? <img src={spanish} alt=""/> : (res === 'en') ? <img src={english} alt=""/> : null}
                </span>
            )
        )
    }
}

export default Language;