import React from 'react';
import './login.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import Register from './Register';

class Login extends React.Component{
	constructor(){
		super();
		this.state={
			userName:"",
			passWord:"",
			error:""
		};
	}
	changeUserName = (e) => {
		this.setState({userName:e.target.value});
	}
	changePassword = (e) => {
		this.setState({passWord:e.target.value});
	}
	login = () => {
		const {userName, passWord} = this.state;
		if(userName==""){
			this.setState({error:"Please enter user Name"});
		}
		else if(passWord==""){
			this.setState({error:"Please enter password"});
		}else{
			//make login api call
			fetch('http://localhost:3001/login?un='+userName+"&pw="+passWord)
			.then( response => response.json())
			.then(
			(result) => {
				if(result.code=="1000"){
					this.props.history.push("/");
				}else{					
				  this.setState({
					error: result.message
				  });
				}
			})
			.catch( (error) => {

			});
		}
	}
	render(){
		return(<div>
			<div className="blank-space"></div>
			<div className="login-container">
			<div><div className="login-txt">Login</div>
			{this.state.error && <div>{this.state.error}</div>}
			<div className="login-div">UserName</div>
			<div><input type="text" onChange={this.changeUserName} className="login-input"/></div><br></br>
			<div className="login-div">Password</div>
			<div><input type="password" onChange={this.changePassword} className="login-input"/></div><br></br>
			<div><input type="button" value="Login" onClick={this.login} className="login-box"/></div><br></br></div><br></br>
			<h5>New to Raymart?</h5>
			<Link exact to={"/Register"}><input type="button" value="Click here to Register" className="raymart"/></Link>
		</div></div>);
	}
}

export default Login;