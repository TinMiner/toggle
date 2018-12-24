import React from 'react';

class Boxes extends React.PureComponent {
	/*
  constructor(props) {
    super(props)
   
    this.state = { 
      label: 'red',
      label2: 'blue'
    } 
	this.shuffle = this.shuffle.bind(this);
  } */
  
  state = { 
      label: 'red',
      label2: 'blue',
	  toggle: 'true'
    }
  
  shuffle = (state, toggle) => {
    // TODO: using react state, shuffle .box's to
    // new positions within .box-container and update
    // labels
	console.log(this.state.label)
	let label = this.state.label;
   if ( label === 'red'){
          return this.setState({label: 'blue', label2: 'red'});
        } else {
            this.setState({label: 'red', label2: 'blue'});
        }
		
		if ( toggle === 'true'){
            this.setState({toggle: 'false'});
        } else {
            this.setState({toggle: 'true'});
        }
		
   }
  
  render() {
	var toggle = this.state.toggle;
    return (
      <div className="container">
        <div className="box-container">
             <div className={`box ${ toggle ? "red" : "blue" }`}>
            <span className="box-label">
             {this.state.label}
            </span>
          </div>
          <div className={`box ${ toggle ? "blue" : "red" }`}>
            <span className="box-label">
              {this.state.label2}
            </span>
          </div>
          </div>
        <button
          className="button shuffle"
          onClick={this.shuffle.bind(this)}>
          Shuffle!
        </button>
      </div>
    );
  }
}

export default Boxes;