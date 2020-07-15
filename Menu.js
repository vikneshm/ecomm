import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import Products from './Products';
import Login from './Login';
import Register from './Register';

class Menu extends React.Component{
	render(){
		return(<Router>
			<nav><ul>
				<li><NavLink exact to={"/"} activeClassName="active">Home</NavLink></li>
				<li><NavLink exact to={"/search"} activeClassName="active">Search</NavLink></li>
				<li><NavLink exact to={"/products"} activeClassName="active">Product</NavLink></li>
				<li><NavLink exact to={"/login"} activeClassName="active">Login</NavLink></li>
				<li><NavLink exact to={"/register"} activeClassName="active">Register</NavLink></li>
			</ul></nav>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/search" component={Search}/>
				<Route path="/products" component={Products}/>
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register}/>
			</Switch>
		</Router>);
	}
}

export default Menu;