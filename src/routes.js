//Routes
import React from "react";
import { Switch, Route } from "react-router-dom";

//COMPONENTS
import Home from "./Components/Home";
import SpecificBreed from "./Components/SpecificBreed";

//Different components are rendered in Routes depending on the url path specified
const Routes = () => {
    return(
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/breed/:breed/:subBreed"><SpecificBreed/></Route>
            <Route path="/breed/:breed"><SpecificBreed/></Route>
        </Switch>
    )
}

export default Routes;