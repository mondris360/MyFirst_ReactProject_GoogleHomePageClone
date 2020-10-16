import React from  'react';
import {render, screen } from '@testing-library/react';
import { MainLogo } from '../MainLogo';

// test  MainLogo component

describe("Test For MainLogo Component", ()=>{
    // check if the main logo was rendered
    test("check if mainlogo is rendered", () =>{
        const mainLogo =  document.querySelector("#mainLogo")
        expect(mainLogo).toBeInDocument;
    })
})
