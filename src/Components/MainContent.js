
import React, { Component } from 'react';
import MainLogo from './MainLogo';
import SearchInputBox from './SearchInputBox';
import Button from './Button';
import mainLogo from '../images/mainLogo.png';
import Translations from './Translations';


class MainContent extends Component {
    render(){
        const buttonsText = ["Google Search", "I'm Feeling Lucky"]
        return (
            <div style={mainContentStyle}>
                <MainLogo src={mainLogo} />
                <SearchInputBox />
                <Button  buttonsText= {buttonsText}/>
                <Translations />
            </div>

        )
    }
}

const mainContentStyle = {
    marginTop: '195px'
}

export default MainContent;