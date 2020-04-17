import React, {Component} from 'react';
import '../App.css';
import Drag from './Drag';
import Nav from './Nav';

class AddImg extends Component {
  state = {
    title: '',
    x1: '',
    y1: '',
    x2: '',
    y2: '',
    url: '',
	msgDisplay: 'none',
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
	console.log('Title: '+this.state.title)
	console.log('X1: '+this.state.x1)
	console.log('Y1: '+this.state.y1)
	console.log('X2: '+this.state.x2)
	console.log('Y2: '+this.state.y2)
	if(!this.state.title || !this.state.x1 || !this.state.y1 || !this.state.x2 || !this.state.y2 || !this.state.url){
		this.setState({msgDisplay: 'block'})
	}else{
		this.props.addImg(this.state.title, this.state.x1, this.state.y1, this.state.x2, this.state.y2, this.state.url);
		this.setState({ title: '', url: ''})
	}
  }
  
  setPoints = (x,y,w,h) => {
	this.setState({ x1: x, y1: y, x2: w, y2: h})
  }
  
  dragEnd = (e) => {
	document.getElementById('dragForm').style.top = ((e.clientY-20)<0?0:((e.clientY-20)>window.innerHeight-e.target.clientHeight?window.innerHeight-e.target.clientHeight:(e.clientY-20)))+'px'
	document.getElementById('dragForm').style.left = ((e.clientX-20)<0?0:((e.clientX-20)>window.innerWidth-e.target.clientWidth?window.innerWidth-e.target.clientWidth:(e.clientX-20)))+'px'
  }

  render() {
	return(
	  <div style={{"position":"relative"}}>
		  <form onSubmit={this.onSubmit} className="newImg" id="dragForm" onDragEnd={this.dragEnd} draggable>
			<input type ="text" name="title" placeholder="Image Title" value={this.state.title} onChange={this.onChange} required/>
			<span style={{fontSize: '25px'}}>
			<input type="text" name="url" placeholder="Enter Image URL (https://www.freeiconspng.com/uploads/address-icon-1.png)" style={{width: 450}} value={this.state.url} onChange={this.onChange} required/>
			</span>
			<input style={{"marginTop":"10px"}} type="submit" value="SUBMIT" className="btnSubmit" />
			<small style={{color:"black",display:this.state.msgDisplay,fontWeight:"900",fontFamily:"Arial",width:"100%",textAlign:"center"}}>Drag Across the screen and input valid url and title</small>
			
			<Nav addPhotos = {this.props.addPhotos} delImg = {this.props.delImg}/>
			
		  </form>
			
		  <Drag setPoints={this.setPoints} style={{"z-index":"1"}}/>
	  </div>
    );
  }
}


export default AddImg;
