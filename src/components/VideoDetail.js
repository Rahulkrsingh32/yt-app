import React from 'react';
//import VideoList from './VideoList';

const VideoDetail = ({ video }) => {
    if (!video){
        return <div><i class="yellow massive notched circle loading icon"></i></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                
            </div>

        </div>
        
    );
};

export default VideoDetail;