import React from 'react';
import { screen, render }  from '@testing-library/react';
import MainContent from "../MainContent";


// test for  MainContent Component

describe("test for Main Content", ()=>{
    // render the component
    render(< MainContent />);

    // test for Main Logo
    test("test for MainLogo", () => {

        const mainLogo =  document.querySelector("#mainLogo");
        expect(mainLogo).toBeInDocument;
    });

    // test for fontawesome  search icon
    test("test for search icon in search input box", () => {
        const searchIcon =  document.querySelector(".fa-search");
        expect (searchIcon).toBeInDocument;
    });

    // test for search input field
    test("test search input field", () => {
        const searchInputBox =  document.querySelector("input");
        expect(searchInputBox).toBeInDocument;
    });

    //test for Search Button

    test("Test Search Button", () => {
        const searchButton =  document.querySelector("#googleSearch");
        expect(searchButton).toBeInDocument;
    })

     //test I am feeling Lucky Button
     test("Test Search Button", () => {
        const feelinLuckyButton =  document.querySelector("#feelingLucky");
        expect(feelinLuckyButton).toBeInDocument;
    });

    // tests for translations session
    test("Test Translations", () => {
        render(<MainContent />)
        expect (screen.getByText("Google offered in:")).toBeInDocument;
    })


    test("Test Hausa Translation", () => {
        render(<MainContent />)
        expect (screen.getByText("Hausa")).toBeInDocument;
    });

    test("Test Èdè Yorùbá Translation", () => {
        render(<MainContent />)
        screen.debug();
        expect (screen.getByText("Èdè Yorùbá")).toBeInDocument;
    })

    test("Test Igbo Translation", () => {
        render(<MainContent />)
        screen.debug();
        expect (screen.getByText("Igbo")).toBeInDocument;
    });

    test("Test Nigerian Pidgin Translation", () => {
        render(<MainContent />)
        screen.debug();
        expect (screen.getByText("Nigerian Pidgin")).toBeInDocument;
    })
})