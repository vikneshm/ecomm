import React from 'react';
import './search.css';

class Search extends React.Component{
	render(){
		return(<div>
			<div className="corona">Sales is closed due to Corona Outbreak!</div>
			Search
			<div><input type="text" /> <input type="button" value="Search" /></div>
			<div className="container">
			<div className="box-1"></div>
			<div className="box-2"></div>
			<div className="box-3"></div>
			</div>
		</div>);
	}
}

export default Search;