import React, {Component} from 'react';
import '../App.css';


class OpenNav extends Component {
  constructor(props) {
  super(props);
  this.state = {
    opened: false,
  };
  this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  render() {

    var { title, children } = this.props;
    const { opened } = this.state;

    if (opened){
      title = 'x';
    }else{
      title = '+';
    }


    return(
      <div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
					{title}
				</div>
				{opened && (
					<div className="boxContent">
						{children}
					</div>
				)}

			</div>
    );
  }
}



export default OpenNav;
