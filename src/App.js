import React, {Suspense} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";


import MainPage from "./MainPage/MainPage";
import AboutLaith from "./AboutLaith/AboutLaith";
import NavigationBar from './Shared/NavigationBar';
import Contact from "./Contact/Contact";
import CurrentWork from "./CurrentWork/CurrentWork";
import Resume from "./Resume/Resume";


// const NavigationBar = React.lazy(() => import ('./Shared/NavigationBar'));
// const AboutLaith = React.lazy(() => import ('./AboutLaith/AboutLaith'));
// const Contact = React.lazy(() => import ('./Contact/Contact'));
// const Resume = React.lazy(() => import ('./Resume/Resume'));


const App = () => {
    return (
        <Router>
                <Switch>
                    <Route path="/" exact>
                        <MainPage/>
                    </Route>
                    <Route path="/AboutLaith" exact>
                        <NavigationBar/>
                        <AboutLaith/>
                    </Route>
                    <Route path="/CurrentWork" exact>
                        ...
                    </Route>
                    <Route path="/Contact" exact>
                        <NavigationBar/>
                        <Contact/>
                    </Route>
                    <Route path="/Resume" exact>
                        <NavigationBar/>
                        <Resume/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
        </Router>
    );
};

export default App;
