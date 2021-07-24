//Routes
import React from "react";
import { Switch, Route } from "react-router-dom";

//COMPONENTS
import Home from "./Components/Home";
import SpecificBreed from "./Components/SpecificBreed";

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/:breed"><SpecificBreed/></Route>
        </Switch>
    )
}

export default Routes;