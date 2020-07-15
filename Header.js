import React from 'react';
import logo from './logo.jfif';
import './header.css';

class Header extends React.Component{
	render(){
		return(<div className="header-container">
					<img src={logo} className="header-logo"/>
					<input className="search" type="text" placeholder="search for products, brands and more."/>
			   </div>)
	}
}

export default Header;