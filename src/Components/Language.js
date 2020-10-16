import React, { Component } from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';


class Language extends Component {
    render (){
        const languagesInfo = this.props.languages;
        const languages =  languagesInfo.map((language, index) => {
            return <span style={linkStyle} key={ index }> <Link to={"/" + language}>{ language }</Link></span>
        });

        return (
            <Router>
                <div style={cssStyle}>
                    <span style={ textStyle }>Google offered in:</span>
                    { languages }
                </div>
            </Router>
        )
       
    }

}

const cssStyle ={
   marginLeft: '715px',
}

const textStyle = {
    margin: '10px'
}

//style for text links
const linkStyle = {
    marginLeft: '5px',
    fontSize: '13px',
    color: '#868BE5'
}
export default Language;