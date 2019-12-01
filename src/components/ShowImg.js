import React, {Component} from 'react';
import '../App.css';
import EachImg from './EachImg';

class ShowImg extends Component {

  render() {
    return this.props.showImg.map(( eachImg ) => (
        <EachImg key={eachImg.id} eachImg = {eachImg} />
    ));
  }
}


export default ShowImg;
