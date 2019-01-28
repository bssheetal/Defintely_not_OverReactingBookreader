import React from "react";
import "./style.css";
import Button from "../Button";


function SearchGrid(props) {
    return (
        <div className="jumbotron text-center">
            <p>Book Search</p>
            <div className="input-group input-group-lg">
                <input className="form-control" type="text" {...props} />
            </div>
            <Button name="Search"></Button>
        </div>
    );
}

export default SearchGrid;
