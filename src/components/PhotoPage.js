import React, { PropTypes } from "react";

const PhotoPage = ({ imgs, handleSelectImg, selectedImg }) => (
    <div className="col-md-6">
        <h2>Images</h2>
        <div className="selected-image">
            <div id={selectedImg.id}>
                <h6 className="title">{ selectedImg.title }</h6>
                <img src={selectedImg.mediaUrl} alt={selectedImg.title}/>
            </div>
        </div>
        <div className="image-thumbnail">
            { imgs.map((img, i) => (
                <div key={i} onClick={() => handleSelectImg(img)}>
                    <img src={img.mediaUrl} alt={img.title}/>
                </div>
            ))}
        </div>
    </div>
);



PhotoPage.prototypes = {
    img: PropTypes.array.isRequired,
    selectedImg: PropTypes.object.isRequired,
    handleSelectImg: PropTypes.func.isRequired
};

export default PhotoPage;