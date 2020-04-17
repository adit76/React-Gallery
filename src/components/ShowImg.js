import React, {Component} from 'react';
import '../App.css';
import EachImg from './EachImg';

class ShowImg extends Component {

  render() {
	if(this.props.showImg.length > 0){
		return this.props.showImg.map(( eachImg ) => (
			<EachImg key={eachImg.id} eachImg = {eachImg} />
		));
	}else{
		return (
			<p className="no-image-msg">No Images to show. Click + above to add new images</p>
		)
	}
  }
}


export default ShowImg;
