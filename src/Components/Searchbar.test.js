//Searchbar tests
import React from "react";
import { render, screen } from '../testing-utils';

import Searchbar from "./Searchbar";

describe("Searchbar", ()=> {
    test("renders a labeled input", () => {
        render(
            <Searchbar/>
        );
    const label = screen.getByText(/Filter dog breeds/i);
    expect(label).toBeInTheDocument();
    
    })


})