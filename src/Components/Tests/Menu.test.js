import React   from 'react';
import  {screen, render}  from "@testing-library/react"
import  MenuItem from '../Menu';

describe("Tests for navbar/menu", () => {

    test("Test for menu items ", ()=>{
        // render the component
        render(< MenuItem />)
        screen.debug()
        const menuItem1 =  screen.getByText("Gmail");
        const menuItem2 = screen.getByText("Images");
        const menuItem3 = document.querySelector("#gmail");
        const  menuItem4 =  document.querySelector("#Images");
        expect(menuItem3).toBeInDocument;
        expect(menuItem4).toBeInDocument;
    })
});

