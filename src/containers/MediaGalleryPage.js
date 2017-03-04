import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { searchMediaAct, selectedImgAct, selectedVidAct } from "../actions/mediaActions";

import PhotoPage from "../components/PhotoPage";
import VideoPage from "../components/VideoPage";

import "../styles/style.css";

class MediaGalleryPage extends Component {
    constructor(props){
        super(props);

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelectVid = this.handleSelectVid.bind(this);
        this.handleSelectImg = this.handleSelectImg.bind(this);
    }

    componentDidMount(){
        this.props.dispatch(searchMediaAct("rain"));
    }

    handleSearch(e){
        e.preventDefault();
        let keywords = e.target.keywords.value;
        
        if(keywords !== ""){
            this.props.dispatch(searchMediaAct(keywords));
            e.target.keywords.value = "";
        }
        
    }

    handleSelectVid(vid){
        this.props.dispatch(selectedVidAct(vid));   
    }

    handleSelectImg(img){
        this.props.dispatch(selectedImgAct(img));
    }


    render(){
        const { imgs, vids, selectedImg, selectedVid } = this.props;

        const renderImgs = () =>{
            if(selectedImg && imgs){
                return (
                    <PhotoPage 
                        imgs={imgs}
                        selectedImg={selectedImg}
                        handleSelectImg={this.handleSelectImg}
                    />
                )
            }else{
                return (<h4>Loading...</h4>);
            }
        }

        const renderVids = () => {
            if(selectedVid && vids){
                return (
                    <VideoPage 
                        vids={vids}
                        selectedVid={selectedVid}
                        handleSelectVid={this.handleSelectVid}
                    />
                )
            }else{
                return (<h4>Loading...</h4>);
            }
        }

        return (
            <div className="container-fluid">
                <form onSubmit={this.handleSearch}>
                    <div className="form-group">
                        <input type="text" className="form-control" name="keywords" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary btn-lg" />
                    </div>
                </form>
                <hr/>
                { renderImgs() }

                { renderVids() }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        vids: state.vids[0],
        selectedVid: state.vids.selectedVid,
        imgs: state.imgs[0],
        selectedImg: state.imgs.selectedImg
    };
};


MediaGalleryPage.propTypes = {
  imgs: PropTypes.array,
  selectedImg: PropTypes.object,
  vids: PropTypes.array,
  selectedVid: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

// const mapDispatchToProps = dispatch => {
//     searchMedia: (keywords) => dispatch(searchMediaAct(keywords))
// }

export default connect(mapStateToProps)(MediaGalleryPage);