import React from 'react';
import '../styles/search.css';
export default class Search extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active: false
		}
		this.toggleSearch = this.toggleSearch.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	toggleSearch(){
		this.setState(prevState => ({
			active : !prevState.active
		}));
		let {refSearchInput} = this.refs;
		refSearchInput.value = '';
		refSearchInput.focus();
	}

	handleKeyUp(e){
		if (e.keyCode === 13) {
	    let data = this.refs.refSearchInput.value;
	    window.open('https://google.com/search?q='+ data);
	  }
	}

	render(){
		return(
			<div className="search-box">
	            <input ref="refSearchInput" type="text" placeholder="Search" 
	            onKeyUp={this.handleKeyUp}
	            className={`search-input ${this.state.active ? 'active' : ''}`} />
	            <div className={`search-btn ${this.state.active ? 'animate' : ''}`} onClick={this.toggleSearch}>
	                <i className="fa fa-search" aria-hidden="true"></i>
	            </div>
	        </div>
			);
	}
}