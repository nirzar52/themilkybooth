import { render } from '@testing-library/react';
import { React, useState } from 'react';
import Webcam from "react-webcam";

const Camera = () => {
    const [capturedImg, setCapturedImg] = useState()

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
        },
        [webcamRef]
    );
    return (
        <>
            <Webcam
                audio={false}
                height={720}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={1280}
                videoConstraints={videoConstraints}
                mirrored={true}
            />
            <button onClick={capture}>Capture photo</button>
        </>
    );
}

export default Camera;