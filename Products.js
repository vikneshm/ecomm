import React from 'react';
import nba from './nba.png';
import "./nba.css";

class Products extends React.Component{

	render(){
		return(<div>
			<div className="corona">Sales is closed due to Corona Outbreak!</div>
			<img src={nba} className="nba"/>
			<div className="content">
			<h3>NBA</h3>
			The National Basketball Association (NBA) is a men's professional basketball league in North America, composed of 30 teams (29 in the United States and 1 in Canada). It is one of the four major professional sports leagues in the United States and Canada, and is widely considered to be the premier men's professional basketball league in the world.
			The league was founded in New York City on June 6, 1946, as the Basketball Association of America (BAA). It changed its name to the National Basketball Association on August 3, 1949, after merging with the competing National Basketball League (NBL). The NBA's regular season runs from October to April, with each team playing 82 games. Its playoffs extend into June. As of 2015, NBA players are the world's best paid athletes by average annual salary per player.
			The NBA is an active member of USA Basketball (USAB), which is recognized by FIBA (also known as the International Basketball Federation) as the national governing body for basketball in the United States. The league's several international as well as individual team offices are directed out of its head offices in Midtown Manhattan, while its NBA Entertainment and NBA TV studios are directed out of offices located in Secaucus, New Jersey. 
			</div>
		</div>);
	}
}

export default Products;