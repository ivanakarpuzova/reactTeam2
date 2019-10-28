
import React, {Component} from 'react';
import { Navigation } from './Navigation';

class Example extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: '/video.mp4'
        }
    }

    render () {
        return (
            <>
            <Navigation />
            <video id="background-video" loop autoPlay style={{ width: '100vw'
            }}>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            </>
        )
    }
};

export default Example;