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
            link:"/gmail",
            id:"gmail"
            
        },
        { 
            name: "Images",
            link:"/image",
            id:"/image"
            
        }];

        const menuIcons = [
        { 
            icon: icon1,
            link:"/gmail",
            id:"gmail"
        },
        { 
            icon: icon2,
            link:"/image",
            id: "image"
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