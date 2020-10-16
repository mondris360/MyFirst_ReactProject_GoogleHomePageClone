import React, { Component } from 'react';

// component to render the main logo on the page

class MainLogo extends Component  {

    render(){
        return (
            <img id="mainLogo" style={imageStyle} src={this.props.src}  alt="menu icon"/>
        )
    }
}

const imageStyle = {
    marginLeft:'784px',
    marginBottom: '28px',
    display:'block'

}

export default MainLogo;