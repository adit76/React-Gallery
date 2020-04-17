import React, {Component} from 'react';
import '../App.css';


class Drag extends Component {
  state = {
	initX: '0',
	initY: '0',
    x: '0',
    y: '0',
	x2: '0',
	y2: '0',
    w: '0',
    h: '0',
	drawing: false,
  }
  
  startDraw = (e) => {
	document.getElementById('dragHelper').style.top = (e.clientY)+'px';
	document.getElementById('dragHelper').style.left = (e.clientX)+'px';
	document.getElementById('dragHelper').style.height = '0';
	document.getElementById('dragHelper').style.width = '0';
	this.setState({
		'x':e.clientX,
		'y':e.clientY,
		'initX':e.clientX,
		'initY':e.clientY,
		'drawing':true,
	})
  }
  
  draw = (e) => {
	if(this.state.drawing){
		let h = e.clientY - this.state.initY
		let w = e.clientX - this.state.initX
		
		if (h < 0){
			document.getElementById('dragHelper').style.top = (e.clientY)+'px';
			document.getElementById('dragHelper').style.height = (this.state.initY - e.clientY)+'px';
			this.setState({
				'y':e.clientY,
				'y2':this.state.initY,
				'h':(this.state.initY - e.clientY)
			})
		}else{
			document.getElementById('dragHelper').style.height = (h)+'px';
			this.setState({
				'h':h,
				'y2':(e.clientY),
			})
		}
		
		if (w < 0){
			document.getElementById('dragHelper').style.left = (e.clientX)+'px';
			document.getElementById('dragHelper').style.width = (this.state.initX - e.clientX)+'px';
			this.setState({
				'x':(e.clientX),
				'x2':this.state.initX,
				'w':(this.state.initX - e.clientX)
			})
		}else{
			document.getElementById('dragHelper').style.width = (w)+'px';
			this.setState({
				'w':h,
				'x2':(e.clientX),
			})
		}
	}
  }
  
  exitDraw = (e) => {
	this.setState({
		'drawing':false,
	})
	this.props.setPoints(this.state.x, this.state.y, this.state.x2, this.state.y2);
  }

  render() {
	return(
		<div style={dragArea} onMouseDown={this.startDraw} onMouseMove={this.draw} onMouseUp={this.exitDraw}>
			<div style={dragHelper} id="dragHelper"></div>
		</div>
    );
  }
}

const dragArea = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(10,10,10,0.2)',
}

const dragHelper = {
	position: 'fixed',
	top: '0',
	left: '0',
	width: '0',
	height: '0',
	border: '1px dashed red',
	opacity: '1'
}


export default Drag;
