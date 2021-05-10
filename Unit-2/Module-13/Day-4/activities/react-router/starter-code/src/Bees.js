import { useState } from 'react';
import Bee from './Bee.js';

function Bees() {

    const [family, setFamily] = useState("");

    function handleClick(e) {
        e.preventDefault();
        const index = e.target.href.indexOf("#");
        setFamily(e.target.href.substring(index + 1));
    }

    let tabContent;
    if (family === "") {
        tabContent = <h2>Select a Bee Family.</h2>;
    } else {
        tabContent = <Bee family={family} />;
    }

    return (
        <>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <a href="#Apidae" onClick={handleClick} className={"nav-link" + (family === "Apidae" ? " active" : "")}>Apidae</a>
                </li>
                <li className="nav-item">
                    <a href="#Halictidae" onClick={handleClick} className={"nav-link" + (family === "Halictidae" ? " active" : "")}>Halictidae</a>
                </li>
                <li className="nav-item">
                    <a href="#Melittidae" onClick={handleClick} className={"nav-link" + (family === "Melittidae" ? " active" : "")}>Melittidae</a>
                </li>
            </ul>
            {tabContent}
        </>
    );
}

export default Bees;