import React, {Component} from "react";
import MenuItem from  './MenuItem';
import MenuIcon from './MenuIcon';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
class Menu extends Component {
    
    render(){
        const menuData = [
        { 
            name: "Gmail",
            link:"/gmail"
        },
        { 
            name: "Images",
            link:"/image"
        }];

        const menuIcons = [
        { 
            icon: icon1,
            link:"/gmail"
        },
        { 
            icon: icon2,
            link:"/image"
        }];
        return (
            <div className="menu">  
                <MenuItem menuData={ menuData }/>
                <MenuIcon  menuIcons = {menuIcons} />

            </div>
        )
    }
}


// export the component
export default Menu;