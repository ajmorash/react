import React, { Component } from 'react';
import './App.css';
import{
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import {ImageGallery} from './ImageGalleryLib/ImageGallery.js';
import {NavBar} from './NavBar/NavBar.js';
import Shop from './Shop/Shop.js';
import {Home} from './Home';
import ShopEcwid from './ShopEcwid/ShopEcwid.js';


class App extends Component {
  render(){
    return (
      <HashRouter>
        <div className = "page-container">
          <NavBar />
          <div className = 'content'>
            <Route exact path="/" component={Home} />
            <Route path="/ImageGallery" component={ImageGallery} />
            <Route path="/Shop" component={Shop} />
            <Route path="/ShopEcwid" component={ShopEcwid} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
