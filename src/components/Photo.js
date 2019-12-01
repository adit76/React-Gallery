import React, {Component} from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class Photo extends Component {

  render() {
    const { id } = this.props.addPhoto;

    return (
      <div className="sidenav">
        <p>Title: {this.props.addPhoto.title}</p>
        <p>X1: {this.props.addPhoto.x1}</p>
        <p>X2: {this.props.addPhoto.x2}</p>
        <p>Y1: {this.props.addPhoto.y1}</p>
        <p>Y2: {this.props.addPhoto.y2}</p>


        <button onClick = {this.props.delImg.bind(this, id)} style={btnStyle}>Delete</button>
      </div>
    )
  }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
}

Photo.propTypes = {
  addPhoto: PropTypes.object.isRequired
}

export default Photo;
