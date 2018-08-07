import React, { Component } from 'react';

class Recruit extends Component {
	constructor(props){
		super(props);
	}
  render() {
  	let ss={
  		marginTop:"60px",
  	}
    return (
      <div style={ss}>
         这是招聘的内容
      </div>
    );
  }
}

export default Recruit;
