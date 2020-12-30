import React from 'react';
import './ImageGallery.css';

export class VideoTile extends React.Component {
  constructor(props){
    super(props);
  }


  render(){


    return (
          <div className="content-tile video-tile" >
              {(this.props.side === "left") && this.props.text && <div className='content-text' ><p >{this.props.text}</p></div> }
              {this.props.videoURL &&
                <div className = 'video-container'>
                  <iframe
                    src={this.props.videoURL}
                    frameborder="0" allowfullscreen className="content-video">
                  </iframe>
                </div>
                }
              {(this.props.side === "right") && this.props.text && <div className='content-text' ><p >{this.props.text}</p></div> }
          </div>);
  }
}
