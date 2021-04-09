import React from "react";

function Winner(props) {
    return (
        <div className="winner">
            You are Winner { props.firstName}!
            Hey { props.lastName}!
        </div>
    );
}

export default Winner;