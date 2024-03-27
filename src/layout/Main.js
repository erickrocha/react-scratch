import React from "react";
import './Main.scss';
const Main = () => {
    return (
        <div className="main">
            <div className="header">
                Top menu
            </div>
            <div className="d-flex flex-grow-1">
                <div className="d-flex bg-success w-25 h-100">
                    Left Menu
                </div>
                <div className="d-flex flex-grow-1 bg-info h-100">
                    Body
                </div>
            </div>

        </div>
    )
}

export default Main;