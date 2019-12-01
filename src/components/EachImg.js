import React, {Component} from 'react';
import '../App.css';

class EachImg extends Component {

  render() {
    let width = Math.abs(this.props.eachImg.x2 - this.props.eachImg.x1)
    let height = Math.abs(this.props.eachImg.y2 - this.props.eachImg.y1)
    return (
      <div className="image">
        <img src={this.props.eachImg.url} style={{ left: parseInt(this.props.eachImg.x1), top: parseInt(this.props.eachImg.y1), width: width, height: height}}/>
        <p>{}</p>
      </div>
    );
  }
}



export default EachImg;
