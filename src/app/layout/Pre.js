import React from "react";
import './Pre.css'

function Pre(props) {
    return (
        <div id={props.load ? "preloader" : "preloader-none"}>
            {props.load && <div className="spinner"></div>}
        </div>
    );
}

export default Pre;