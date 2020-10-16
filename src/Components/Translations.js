import React, { Component } from 'react';
import Language from './Language';

class Translations extends  Component {

    render(){
        const languages = ['Hausa', 'Igbo', 'Èdè Yorùbá', 'Nigerian Pidgin'];
        return (
            <div> 
                <Language  languages={languages} />
            </div>
        )
    }
}


//export default
export default Translations;