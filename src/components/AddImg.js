import React, {Component} from 'react';
import '../App.css';


class AddImg extends Component {
  state = {
    title: '',
    x1: '',
    y1: '',
    x2: '',
    y2: '',
    url: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addImg(this.state.title, this.state.x1, this.state.y1,
      this.state.x2, this.state.y2, this.state.url);
    this.setState({ title: '', x1: '', y1: '', x2: '', y2: '', url: ''})
  }

  render() {
    return(
      <form onSubmit={this.onSubmit} className="newImg">
        <input type ="text" name="title" placeholder="Image Title" value={this.state.title} onChange={this.onChange} required/>
        <input type ="text" name="x1" placeholder="X1 Co-ordinates (Pixels)" value={this.state.x1} onChange={this.onChange} required/>
        <input type ="text" name="y1" placeholder="Y1 Co-ordinates (Pixels)" value={this.state.y1} onChange={this.onChange} required/>
        <input type ="text" name="x2" placeholder="X2 Co-ordinates (Pixels)" value={this.state.x2} onChange={this.onChange} required/>
        <input type ="text" name="y2" placeholder="Y2 Co-ordinates (Pixels)" value={this.state.y2} onChange={this.onChange} required/>
        <span style={{fontSize: '25px'}}>
        <input type="text" name="url" placeholder="Enter Image URL (https://www.freeiconspng.com/uploads/address-icon-1.png)" style={{width: 450}} value={this.state.url} onChange={this.onChange} required/>
        </span>
        <input type="submit" value="SUBMIT" className="btnSubmit" />
      </form>
    );
  }
}



export default AddImg;
