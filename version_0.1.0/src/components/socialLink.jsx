import React from 'react';
export default class SocialLink extends React.Component {
    render() {
        return (
			<div className="social-links">
	            <ul>
	                <li>
	                    <a target="_blank" rel="noopener noreferrer" className="facebook" href="https://www.facebook.com/">
	                    <i className="fab fa-facebook-f"></i>
	                </a>
	                </li>
	                <li>
	                    <a target="_blank" rel="noopener noreferrer" className="twitter" href="https://www.instagram.com/">
	                    <i className="fab fa-instagram"></i>
	                </a>
	                </li>
	                <li>
	                    <a target="_blank" rel="noopener noreferrer" className="google" href="https://www.trello.com/">
	                    <i className="fab fa-trello"></i>
	                </a>
	                </li>
	                <li>
	                    <a target="_blank" rel="noopener noreferrer" className="youtube" href="https://www.youtube.com/">
	                    <i className="fab fa-youtube"></i>
	                </a>
	                </li>
	            </ul>
	        </div>
        );
    }
}