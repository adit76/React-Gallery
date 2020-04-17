import React, {Component} from 'react';
import './App.css';
import OpenNav from './components/OpenNav';
import AddImg from './components/AddImg';
import ShowImg from './components/ShowImg';
import uuid from 'uuid';

class App extends Component {
  state = {
    addPhotos: [
    /*{
      id: uuid.v4(),
      title: 'Awesome',
      x1: 100,
      y1: 100,
      x2: 300,
      y2: 250,
      url: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },*/
    ]
  }

// var width = Math.abs(this.state.x2 - this.state.x1);


  // Delete Image
  delImg = (id) => {
    this.setState({ addPhotos: [...this.state.addPhotos.filter(addPhoto => addPhoto.id !== id)] })
    console.log(this.state.addPhotos.x2)
  }

  // Add Image
  addImg = (title, x1, y1, x2, y2, url) => {
    const newPhoto = {
      id: uuid.v4(),
      title,
      x1,
      y1,
      x2,
      y2,
      url

    }
    this.setState({ addPhotos: [...this.state.addPhotos, newPhoto] })
  }

  render() {
    return (
      <div className="App" style={{"overflow":"hidden"}}>

        <OpenNav>
          <AddImg addPhotos = {this.state.addPhotos} delImg = {this.delImg} addImg = {this.addImg} />
        </OpenNav>
        <ShowImg showImg = {this.state.addPhotos}/>
      </div>
    );
  }
}

export default App;
