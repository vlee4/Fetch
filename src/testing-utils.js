import React from "react";
import {render} from "@testing-library/react";

import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./Store/index.js"

const appContext = ({children}) => {
    return (
        <Provider store={store}>
            <Router>
                {children}
            </Router>
        </Provider> 
    )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: appContext, ...options})

// re-export everything from the testing library
export * from '@testing-library/react'

// override render method to provide context when setting up tests
export {customRender as render}