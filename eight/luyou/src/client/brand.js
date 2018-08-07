import React, { Component } from 'react';

class Brand extends Component {
	constructor(props){
		super(props);
	}
  render() {
  	let ss={
  		marginTop:"60px",
  	}
    return (
      <div style={ss}>
         这是品牌的内容
      </div>
    );
  }
}

export default Brand;
