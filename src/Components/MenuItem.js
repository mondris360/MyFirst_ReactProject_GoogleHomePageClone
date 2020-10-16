import React, {Component} from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

class MenuItem extends Component {

    render(){
        const menuData = this.props.menuData;
        let menuItems = menuData.map( menuInfo => {
            return <li key={menuInfo.id}style ={liStyles}> <Link to={menuInfo.link}>{menuInfo.name}</Link></li> 
        });
        return (
            <Router>
                <ul style={ulStyles}>
                    { menuItems }
                </ul>
            </Router>
        )
    }
}

// css styles
const ulStyles={
    marginTop:'-188px',
    marginRight: '100px'
}
const liStyles = {
    marginLeft: '10px',
}
export default MenuItem;