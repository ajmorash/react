import React, { useState, useEffect } from 'react';
import {NavTile} from './NavTile.js';

export class NavBar extends React.Component {
  constructor(props){
    super(props);

    var navContent = require('./NavContent.json');
    this.state = {
      data: navContent,
      scrolled: false
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(){
    const offset=window.scrollY;
    if(offset > 0){
        this.setState({scrolled: true});
    }
    else{
      this.setState({scrolled: false});
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  render(){

    const content = []

    for (const [index, value] of this.state.data.Tiles.entries()) {
          content.push(
            <NavTile title={value.title} page={value.page} />
          )
    }

    return(
      <header className={this.state.scrolled? 'nav-bar scrolled' : 'nav-bar'} >
        {content}
      </header>
    )
  }
}
