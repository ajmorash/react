import React from 'react';

export class ImageGallery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      imageArray: ['http://placekitten.com/200/300', 'http://placekitten.com/300/200']
    }
  }




  render(){
    const images = []

    for (const [index, value] of this.state.imageArray.entries()) {
      images.push(<img src={value} />)
    }

    return (
      <div>
        {images}
      </div>
    )
  }
}
