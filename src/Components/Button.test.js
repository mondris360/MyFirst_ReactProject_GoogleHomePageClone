import React  from 'react';
import { screen, render} from '@testing-library/react';
import Button from '../Components/Button';


//test for Button component
describe("Test for button component", () => {
        // test for search button
    test("test for google search  button", () =>{
        const buttonText =  ["Google Search"];
        render(< Button buttonsText={ buttonText }/>)

        const googleSearchBtn = document.querySelector("#googlesearch");
        expect(googleSearchBtn).toBeInDocument;
    })

        // test for i am feeling lucky button
    test("test for google search  button", () =>{
        const buttonText =  ["I'm Feeling Lucky"];
        render(< Button buttonsText={ buttonText }/>)

        const googleFeelingLuckyBtn = document.querySelector("#feelinglucky");
        expect(googleFeelingLuckyBtn).toBeInDocument;
    })
    
});


