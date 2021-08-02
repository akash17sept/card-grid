import React from 'react';
import "./App.css"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/index';
import Header from './component/Header/index';
import Home from './component/Home/index';
import Course from './component/course/index';
const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Course/:slug" component={Course} />
          <Route component={()=> <h1>404 page not found</h1> } />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
   );
}
 
export default App;