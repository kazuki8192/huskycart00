import React from 'react';
import './App.css';
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import TopPage from "./components_/pages/TopPage";
import {BrowserRouter, Route} from 'react-router-dom';
import RegisterPage from "./components_/pages/RegisterPage";
import LoginPage from "./components_/pages/LoginPage";
import ProfilePage from "./components_/pages/ProfilePage";
import ApiContextProvider from "./components_/context/ApiContext";
import AnyCartPage from "./components_/pages/AnyCartPage";

const theme = createMuiTheme({
    palette: {
        primary: blueGrey,
        secondary: {
            main: '#f44336'
        },
    },
    typography: {
        fontFamily: 'Comic Neue',
        button: {
            textTransform: 'none'
        }
    },
    props: {
        TextField: {
            variant: "standard"
        }
    }
})

function App() {
    return (
        <ApiContextProvider>
            <MuiThemeProvider theme={theme}>
                <BrowserRouter>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/register' component={RegisterPage}/>
                    <Route exact path='/profile' component={ProfilePage}/>
                    <Route exact path='/anycart' component={AnyCartPage}/>
                    <Route exact path='/' component={TopPage}/>
                </BrowserRouter>
            </MuiThemeProvider>
        </ApiContextProvider>
    );
}

export default App;
