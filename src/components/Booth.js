import { React, useState, useEffect } from 'react';
import { fabric } from 'fabric';
import photoFrame from "../images/booth.png";
import Webcam from "react-webcam"


export default function Booth() {
    const [canvas, setCanvas] = useState('');
    useEffect(() => {
        setCanvas(initCanvas());
    }, []);

    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            height: 800,
            width: 800,
            backgroundColor: videoConstraints
        })
    )

    const videoConstraints = {
        width: 710,
        height: 1200,
        facingMode: "user"
    };

    return (
        <section className="about">
            <section className="grid-container text-center">
                <section className=" grid-x grid-padding-x">
                    <section className="cell large-12 small-12">
                        <img src={photoFrame} alt="photobooth frame" />
                        <canvas id="canvas" />
                        <Webcam
                            audio={false}
                            height={720}
                            screenshotFormat="image/jpeg"
                            width={1280}
                            videoConstraints={videoConstraints}
                            mirrored={true}
                        />
                        {/* <button onClick={capture}>Capture photo</button> */}
                    </section>
                    <div>
                    </div>
                </section>
            </section>
        </section>
    )
}