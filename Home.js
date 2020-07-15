import React from 'react';

class Home extends React.Component{
	constructor(){
		super();
		this.state={
			content:"",
			middle:""
		};
	}

	componentWillMount(){
		fetch('http://localhost:3001/home')
		.then( response => response.json())
		.then(
		(result) => {
		  this.setState({
			content: result
		  });
		  console.log(result);
		})
		.catch( (error) => {
		});
	}
	render(){
		return(<div>
		{this.state.middle}
		{this.state.content && <div><div>{this.state.content.homeHeader}</div>
		<div dangerouslySetInnerHTML={{__html:this.state.content.homeContent}}></div></div>}
		</div>);
	}
}

export default Home;