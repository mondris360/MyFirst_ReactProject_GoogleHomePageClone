import React , { Component } from  'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
class MenuIcon extends Component {
    
    render(){
        const iconsData =  this.props.menuIcons;
        const menuIcons =  iconsData.map(menuIcon => {
            return <li styles={liStyles}><Link to={menuIcon.link}><img src={ menuIcon.icon } alt="menu icon" height="23px"/> </Link></li>
        });
        return (
            <Router>
                <ul style={ulStyles}>
                    {menuIcons}
                </ul>
             </Router>
        )
    }
}


// css styles
const ulStyles={
    marginTop:'-188px',
    marginRight: '30px',


}
const liStyles = {
    fontSize: '10px'

   
}
export default MenuIcon;