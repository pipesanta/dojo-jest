import React from 'react';
import MainLayout from './Layouts/Main/Main';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import './App.css';
import { SnackbarProvider } from 'notistack';

// Icons made by <a href="https://www.flaticon.com/authors/popcorns-arts" title="Icon Pond">Icon Pond</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

function App() {
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <BrowserRouter>
        <Switch>
          <Redirect exact path="/" to="/main" />
          <Route path="/main" render={ (props) => <MainLayout { ...props } /> } />
          {/* <Route path="/login" render={ (props) => <Login /> }/> */}
          {/* Redirect unhandled routes */}
          <Route>
            <Redirect to="/main" />
          </Route>
        </Switch>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
