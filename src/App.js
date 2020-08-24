import React from 'react';
import Navegation from './components/Navegation';
import Home from "./components/Home";
import CreatePost from './components/CreatePost';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowPost from './components/ShowPost';


function App(){
    return (
      <BrowserRouter>
      <div className="App">
        <Navegation/>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/createapost" component={CreatePost} />
        <Route exact path="/showpost" component={ShowPost} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }

export default App;
