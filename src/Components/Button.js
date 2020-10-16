import React, {Component} from 'react';


//component  to render a button
class Button  extends Component {

    render(){
        const buttonsText = this.props.buttonsText;
        const buttons = buttonsText.map( buttonInfo => {
            return <button  key={buttonInfo.id} id={buttonInfo.id} style={ btnStyle }>{buttonInfo.btnText}</button>
        })
        return (
            <div style={divStyle}>
                {buttons}
            </div>
        )
    }
}

// css style for the div that is holding the btns
const divStyle = {
    marginLeft:'740px',
    marginRight: '725px',
    display:'inline-block',
    marginBottom: '30px'
}

// css style for the button elements
const btnStyle = {
    marginLeft: '15px',
    width:'163px',
    height: '37px',
    backgroundColor: '#F6F6F6',
    border: '1px solid white',
    borderRadius: '5px'
    
}

export default Button;