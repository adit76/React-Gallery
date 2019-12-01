import React, {Component} from 'react';
import '../App.css';
import Photo from './Photo'
import PropTypes from 'prop-types';


class Nav extends Component {

  render() {
    return this.props.addPhotos.map((addPhoto) => (
      <Photo key={addPhoto.id} addPhoto = {addPhoto} delImg = {this.props.delImg}/>
    ));
  }
}

 //Proptype Verification
 Nav.propTypes = {
   addPhotos: PropTypes.array.isRequired
}

export default Nav;
