import React from "react";
import "./style.css";

function Jumbotron({ props }) {
    return (
        <div className="jumbotron text-center">
           
            {<h2>(REACT) Google Books Search</h2>}
            {<p>Search for and Save Books of Interest</p>}
        </div>
    );
}

export default Jumbotron;
