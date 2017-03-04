import React, { PropTypes } from "react";

const VideoPage = ({ vids, selectedVid, handleSelectVid }) => (
    <div className="col-md-6">
        <h2>Videos</h2>
        <div className="select-video">
            <div id={selectedVid.id}>
                <h6 className="title">{selectedVid.description}</h6>
                <video controls src={selectedVid.mediaUrl}  alt={selectedVid.description}/>
            </div>
        </div>

        <div className="video-thumbnail">
            {vids.map((vid, idx) => (
                <div key={idx} onClick={() => handleSelectVid(vid)}>
                    <video controls src={vid.mediaUrl} alt={vid.description}/>
                </div>
            ))}
        </div>
    </div>
);

VideoPage.proptypes = {
    vids: PropTypes.array.isRequired,
    selectedVid: PropTypes.object.isRequired,
    handleSelectVid: PropTypes.func.isRequired
};

export default VideoPage;