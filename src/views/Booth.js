import React from "react";
import Webcam from "react-webcam";
import photoFrame from "../images/booth.png";

export default function Booth() {
        const videoConstraints = {
            width: 710,
            height: 1200,
            facingMode: "user"
        };
    
        const webcamRef = React.useRef(null);
    
        const capture = React.useCallback(() => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
            [webcamRef]
        );
    return (
        <section className="about">
            <section className="grid-container text-center">
                <section className=" grid-x grid-padding-x">
                    <section className="cell large-12 small-12">
                        <img src={photoFrame} alt="photobooth frame" />
                        <Webcam
                            audio={false}
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            mirrored={true}
                        />
                        <button onClick={capture}>Capture photo</button>
                    </section>
                </section>
            </section>
        </section>
    )
}