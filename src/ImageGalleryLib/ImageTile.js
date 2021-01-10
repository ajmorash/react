import React from 'react';
import './ImageGallery.css';


export class ImageTile extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(link){
    window.location.href=this.props.hyperlink;
  }

  render(){


    return (
          <div className="image-tile content-tile" onClick={this.handleClick}>
              {(this.props.side === "left") && this.props.text && <div className='content-text' ><p >{this.props.text}</p></div> }
              {this.props.imgURL && <img className = 'content-img' src={this.props.imgURL} /> }
              {(this.props.side === "right") && this.props.text && <div className='content-text' ><p >{this.props.text}</p></div> }
          </div>);
  }
}
