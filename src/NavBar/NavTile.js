import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";

export class NavTile extends React.Component {
  
  render(){
    const isExact = this.props.page;

    if(isExact == "/"){
      return (
        <div className = "nav-tile" >
          <NavLink exact to={this.props.page}> {this.props.title} </NavLink>
        </div>
      )
    }
    else{
      return (
        <div className = "nav-tile" >
          <NavLink to={this.props.page}> {this.props.title} </NavLink>
        </div>
      )
    }
  }
}
