import React from 'react';
import {NavTile} from './NavTile.js';

export class NavBar extends React.Component {
  constructor(props){
    super(props);

    var data = require('./NavContent.json');
    this.state = data;
  }

  render(){

    const content = []

    for (const [index, value] of this.state.Tiles.entries()) {
        content.push(
          <NavTile title={value.title} page={value.page} />
        )
    }

    return(
      <div className = "nav-bar" >
        {content}
      </div>
    )
  }
}
