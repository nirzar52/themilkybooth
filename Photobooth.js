import React from 'react';
import Boothtitle from "./Boothtitle";
import Booth from "./Booth";
import Boothsteps from "./Boothsteps";

function Photobooth() {
    return (
        <div className="Photobooth mb-0">
            <Boothtitle></Boothtitle>
            <Booth></Booth>
            <Boothsteps></Boothsteps>
        </div>
    )
}

export default Photobooth