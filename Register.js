import React from 'react';
import './register.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class Register extends React.Component{

	constructor(){
		super();
		this.state={
			name:"",
			userName:"",
			passWord:"",
			confPassWord:"",
			email:"",
			phone:"",
			passwordHint : false,
			phoneerr : false,
			passWordValidation : {
				small : false,
				caps:false,
				special:false,
				number:false,
				leng:false
			},
			error:"",
			sema: false
		};
	}
	changeName = (evt) =>{
		this.setState({name:evt.target.value});
	}
	changeUserName = (evt) =>{
		this.setState({userName:evt.target.value});
	}
	changePassWord = (evt) =>{
		const val = evt.target.value;
		this.setState({passWord:val});
		if(/[a-z]/g.test(val)){
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {small:true})});
		}else{
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {small:false})});
		}
		if(/[A-Z]/g.test(val)){
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {caps:true})});
		}else{
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {caps:false})});
		}
		if(/[0-9]/g.test(val)){
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {number:true})});
		}else{
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {number:false})});
		}
		if(/[@#$]/g.test(val)){
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {special:true})});
		}else{
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {special:false})});
		}
		if(val.length >=8){
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {leng:true})});
		}else{
			this.setState({passWordValidation:Object.assign(this.state.passWordValidation, {leng:false})});
		}

	}

	changeConfPassWord = (evt) =>{
		this.setState({confPassWord:evt.target.value});
	}

	changeEmail = (evt) =>{
		this.setState({email:evt.target.value});
	}

	changePhone = (evt) =>{
		this.setState({phone:evt.target.value});
	}

	toggelHint = () => {
		this.setState({passwordHint:!this.state.passwordHint});
	}
	
	register = () => {
		const {name, userName, passWord, confPassWord, email, phone, passWordValidation} = this.state;
		if(!(/[a-z]/g.test(name))){
			this.setState({error : "Please enter Name"});
		}
		else if(userName==""){
			this.setState({error : "Please enter userName"});
		}
		else if(passWord==""){
			this.setState({error : "Please enter Password"});
		}
		else if(!(passWordValidation.small && passWordValidation.caps && passWordValidation.special && passWordValidation.number &&passWordValidation.leng)){
			this.setState({error: "one or more Password criteria fails"})
		}
		else if(confPassWord==""){
			this.setState({error : "Please enter Confirm password"});
		}
		else if(confPassWord!=passWord){
			this.setState({error : "Password doesn't match"});
		}
		else if(email==""){
			this.setState({error : "Please enter Email"});
		}
		else if(phone==""){
			this.setState({error : "Please enter Phone number"});
		}
		else if(!/^\d{10}$/g.test(phone)){
			this.setState({error : "Please enter a valid Phone number"});
		}
		else{
			// APi call to register service
			this.setState({sema: !this.state.sema});
			fetch('http://localhost:3001/register?un='+userName+'&pw='+passWord)
		}
	}

	render(){
		return(<div className="whole-box">
			<div className="blank-space"></div>
			<div className="reg-container"><div className="name">Create Account</div><br></br>
			{this.state.error && <div>{this.state.error}</div>}
			<div className="header-nam">Your name</div>
			<div><input type="text" className="box-text" onChange={this.changeName}/></div><br></br>
			<div className="header-nam">UserName</div>
			<div><input type="text" className="box-text" onChange={this.changeUserName}/></div><br></br>
			<div className="header-nam">Password</div>
			<div><input type="password" className="box-text" onChange={this.changePassWord} onFocus={this.toggelHint} onBlur={this.toggelHint}/></div><br></br>
			<div className="header-nam">Confirm Password</div>
			<div><input type="password" className="box-text" onChange={this.changeConfPassWord}/></div><br></br>
			<div className="header-nam">Email</div>
			<div><input type="email" className="box-text" onChange={this.changeEmail}/></div><br></br>
			<div className="header-nam">Phone Number</div>
			<div><input type="tel" className="box-text" onChange={this.changePhone}/></div><br></br>
			<div><input type="button" className="reg-box" value="Register" onClick={this.register}/></div>
			<div className="login-link">Already have an account? <Link exact to="/Login"> Login in</Link></div>
			{this.state.sema && <div>{`Register successfull! Login with username "${this.state.userName}" and password "${this.state.passWord}"`}</div>}<br></br></div>
				{this.state.passwordHint && <div className="password-box">
					<div>{this.state.passWordValidation.small ? <span>&#10004;</span> : <span>&#10006;</span>} One Small letter</div>
					<div>{this.state.passWordValidation.caps ? <span>&#10004;</span> : <span>&#10006;</span>} One Caps letter</div>
					<div>{this.state.passWordValidation.number ? <span>&#10004;</span> : <span>&#10006;</span>} One Number letter</div>
					<div>{this.state.passWordValidation.special ? <span>&#10004;</span> : <span>&#10006;</span>} One Special character letter</div>
					<div>{this.state.passWordValidation.leng ? <span>&#10004;</span> : <span>&#10006;</span>} 8 character Length</div>
				</div>}
			</div>);
	}
}

export default Register;