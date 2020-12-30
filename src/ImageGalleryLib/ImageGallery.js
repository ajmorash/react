import React from 'react';
import { ImageTile} from './ImageTile.js';
import { VideoTile } from './VideoTile.js';
import './ImageGallery.css';

export class ImageGallery extends React.Component {
  constructor(props){
    super(props);

    var data = require('./GalleryContent.json');
    this.state = data;
  }

  render(){
    const content = []

    for (const [index, value] of this.state.Tiles.entries()) {
      if(value.type == 'Image'){
        content.push(<ImageTile imgURL={value.content} side={value.side} text={value.text} hyperlink={value.hyperlink}/>)
      }
      if(value.type == 'Video'){
        content.push(<VideoTile videoURL={value.content} side={value.side} text={value.text} hyperlink={value.hyperlink}/>)
      }

    }

    return (
      <div className='image-gallery'>
        {content}
      </div>
    )
  }
}

function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}
