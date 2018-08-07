import React, { Component } from 'react';
import '../style/head.css';
import { NavLink,Switch,HashHistory,BrowserRouter as Router,Route} from 'react-router-dom'; 
import Page from '../client/page';
import Understand from '../client/understand';
import Chang from '../client/changzu';
import Duan from '../client/duanzu';
import Recruit from '../client/recruit';
import Brand from '../client/brand';

import Foots from './foots';

import Imgh from '../images/logo.png';

class Head extends Component {
	constructor(props){
		super(props);
	}
  render() {
    return (
      <div>
	      <Router>
	      	<div>
	      	    <div className="hh">
		      	    <div className="min">
			      	    <div className="hleft">
			      	        <img src={Imgh} />
			      	    </div>
			      		<ul className="hright">
				      	  	 <li><NavLink to='/home'>首页</NavLink></li>
				      	  	 <li><NavLink to='/understand'>了解APP</NavLink></li>
				      	  	 <li><NavLink to='/changzu'>长租公寓</NavLink></li>
				      	  	 <li><NavLink to='/duanzu'>短租民宿</NavLink></li>
				      	  	 <li><NavLink to='/recruit'>招募房东</NavLink></li>
				      	  	 <li><NavLink to='/brand'>品牌商入口</NavLink></li>
			      	  	</ul>
		      	  	</div>
	      	  	</div>
	      	  	<Switch>
	      	  		<Route exact path='/home' component={Page}></Route>
	      	  		<Route path='/understand' component={Understand}></Route>
	      	  		<Route path='/changzu' component={Chang}></Route>
	      	  		<Route path='/duanzu' component={Duan}></Route>
	      	  		<Route path='/recruit' component={Recruit}></Route>
	      	  		<Route path='/brand' component={Brand}></Route>
	      	  	</Switch>
	      	  	<Foots />
	      	</div>
	      </Router> 
      </div>
    );
  }
}

export default Head;
