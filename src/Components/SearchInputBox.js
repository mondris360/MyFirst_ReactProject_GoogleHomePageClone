import React, { Component } from 'react';

class SearchInputBox extends Component {

    render(){
        return (
            <React.Fragment>
                <i style={fontIconStyle} className="fa fa-search" aria-hidden="true"></i> 
                <input  style = { styles } type="text" />
            </React.Fragment>

        )
    }
}
// styles for the search input field
const styles = {
    marginLeft:'615px',
    marginRight: '632px',
    marginTop:'0',
    marginBottom: '26px',
    display:'block',
    width: '586px',
    height:'43px',
    border: '1px solid #EBEDEF',
    borderRadius: '20px',
    paddingLeft: '45px'
}

// style the search icon in the search text box
const fontIconStyle = {
    marginLeft:'630px',
    position: 'absolute',
    marginTop: '15px',
   
}
// export the component
export default SearchInputBox;