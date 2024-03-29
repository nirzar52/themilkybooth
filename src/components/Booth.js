import React, { Component } from 'react';
import captureImg from "../images/capture.png";
import stickerImg from "../images/sticker.png";
import filterImg from "../images/filter.png";

class Booth extends Component {
    state = {
        imageURL: '',
    }

    videoEle = React.createRef();
    canvasEle = React.createRef();
    imageEle = React.createRef();

    componentDidMount = async () => {
        this.startCamera();
    }

    startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true
            });

            this.videoEle.current.srcObject = stream;

        } catch (err) {
            console.log(err);
        }
    }

    takeSelfie = async () => {
        // Get the exact size of the video element.
        const width = this.videoEle.current.videoWidth;
        const height = this.videoEle.current.videoHeight;

        // get the context object of hidden canvas
        const ctx = this.canvasEle.current.getContext('2d');

        // Set the canvas to the same dimensions as the video.
        this.canvasEle.current.width = width;
        this.canvasEle.current.height = height;

        // Draw the current frame from the video on the canvas.
        ctx.drawImage(this.videoEle.current, 0, 0, width, height);

        // Get an image dataURL from the canvas.
        const imageDataURL = this.canvasEle.current.toDataURL('image/png');
        this.stopCam();

        this.setState({
            imageURL: imageDataURL
        })
    }


    stopCam = () => {
        const stream = this.videoEle.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach(track => {
            track.stop();
        });
    }

    backToCam = () => {
        this.setState({
            imageURL: ''
        }, () => {
            this.startCamera();
        })
    }



    render() {
        return (
            <div className="selfie">
                <div className="frame">

                    {this.state.imageURL === '' && <div className="cam">
                        <video width="100%" height="100%" className="video-player" autoPlay={true} ref={this.videoEle}></video>
                        <div className="buttons-container align-middle grid-x align-spaced">
                            <div className="column text-center small-4"><img src={stickerImg} onClick={this.putStickers} alt="STICKERS" /></div>
                            <div className="column text-center small-4"><img src={captureImg} onClick={this.takeSelfie} alt="TAKE" /></div>
                            <div className="column text-center small-4"><img src={filterImg} onClick={this.putFilters} alt="FILTERS" /></div>
                        </div>
                    </div>
                    }

                    <canvas ref={this.canvasEle} style={{ display: 'none' }}></canvas>
                    {this.state.imageURL !== '' && <div className="preview">
                        <img className="preview-img" src={this.state.imageURL} ref={this.imageEle} />

                        <div className="btn-container">
                            <button className="btn back-btn" onClick={this.backToCam}>
                                BACK
                            </button>
                            <a href={this.state.imageURL} download="selfie.png"
                                className="btn download-btn">
                                DOWNLOAD
                            </a>
                        </div>

                    </div>
                    }
                </div>
            </div>
        )
    }
}

export default Booth;