import React from 'react';
import FoodMenuList from '../Container/FoodMenuList';
import { Router, BrowserRouter, Route, Switch, Redirect, browserHistory } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Payment from '../Container/payment';
import AdminPage from '../Container/adminPage';
var adminTheme=JSON.parse(localStorage.getItem('secondaryColor'))

const theme = getMuiTheme({
    raisedButton: {
        secondaryColor:adminTheme ?adminTheme :'#4CAF50' ,
    },

});


const App = () => (


    <div>
       
        <div>
            <MuiThemeProvider muiTheme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={FoodMenuList  } />
                        <Route path="/payment" component={Payment} />
                        <Route path="/admin" component={AdminPage} />

                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        </div>


    </div>

);

export default App;
