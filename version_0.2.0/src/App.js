import React, { Component } from 'react';
import './styles/all.min.css';
import './styles/index.css';
import Search from './components/search.jsx';
import Watch from './components/watch.jsx';
import Greeting from './components/greeting.jsx';
import SocialLink from './components/socialLink.jsx';
import Quote from './components/quote.jsx';
import Config from './config/config.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.getBackgroundImage = this.getBackgroundImage.bind(this);
        this.state = {
            // backgroundUrl: Config.defaultBackgroundUrl
        };
        // this.getBackgroundImage();
    }
    
    getBackgroundImage() {
    	fetch(Config.backgroundUrl, 
            {
                headers: 
                    {
                        'Accept': 'application/json', 
                        'Access-Control-Allow-Origin': '*',
                        'mode': 'no-cors'
                    }
            })
    	.then(response => {
            if(!response.ok){
                throw Error(response.statusText);
            }
            this.setState({
                backgroundUrl: response.url
            });
        })
    	.catch(error => {
            console.log("Error: " + error);
            this.setState({
                backgroundUrl: Config.defaultBackgroundUrl
            });
        });
    }

    render() {
        const style = {
            // backgroundImage: `url(${this.state.backgroundUrl})`
            overflow: 'hidden'
        }
        return (
            <div className='background' style={style}>
            <iframe title="World Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d33434767.2009996!2d86.95816482082421!3d10.870253796888667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1550631457150" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                <div id='top'>
                    <Search />
                    <Watch />
                </div>
                <div id="center">
                    <Greeting />
                </div>

                <div id='bottom'>
                    <SocialLink />
                    <Quote />
                </div>
            </div>
                
        );
    }
}

export default App;