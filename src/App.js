import React from "react";
import ReactGA from "react-ga";
import { Switch, Route } from "react-router";
import { connect } from 'react-redux'
// import { resizeWindow } from './actions'
import "./App.css";
import MapPage from "./components/MapPage";
import Mission from "./components/pages/Mission";
import Project from "./components/pages/Project";
import Share from "./components/pages/Share";
import Contribute from "./components/pages/Contribute";
import Head from "./components/Head";
import Div100vh from "react-div-100vh";
import Login from "./components/Login";
import SignOut from "./components/SignOut";
import {setUserSignedIn} from "./actions";
import * as firebase from "firebase";

export class App extends React.Component {

    componentDidMount() {
        // window.addEventListener('resize',props.resizeWindow)
        ReactGA.initialize("UA-180456355-2");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            this.props.setUserSignedIn();
        });
        return () => unregisterAuthObserver();
    }

    render() {
        console.log("user sign in state");
        console.log(this.props.userSignedIn);
        if (!this.props.userSignedIn) {
            return (
                <Div100vh>
                    <div className="page-wrapper">
                        <Head/>
                        <Switch>
                            <Route exact path="/">
                                <MapPage/>
                            </Route>
                            <Route path="/mission">
                                <Mission/>
                            </Route>
                            <Route path="/project">
                                <Project/>
                            </Route>
                            <Route path="/share">
                                <Share/>
                            </Route>
                            <Route path="/contribute">
                                <Contribute/>
                            </Route>
                            <Route path="/login">
                                <Login/>
                            </Route>
                        </Switch>
                    </div>
                </Div100vh>
            )
        } else {
            return (
                <Div100vh>
                    <div className="page-wrapper">
                        <Head/>
                        <Switch>
                            <Route exact path="/">
                                <MapPage/>
                            </Route>
                            <Route path="/mission">
                                <Mission/>
                            </Route>
                            <Route path="/project">
                                <Project/>
                            </Route>
                            <Route path="/share">
                                <Share/>
                            </Route>
                            <Route path="/contribute">
                                <Contribute/>
                            </Route>
                            <Route path="/signOut">
                                <SignOut/>
                            </Route>
                        </Switch>
                    </div>
                </Div100vh>
            )
        }
    }
}

const mapStateToProps = state => ({
  userSignedIn: state.userSignedIn
});

const mapDispatchToProps = { setUserSignedIn };

// export default connect(null,mapDispatchToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
