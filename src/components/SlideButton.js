import React, { useContext } from 'react';
import { ModeContext } from "../contexts/ModeContext";

const Button = () => {

    const { darkMode, dark, light, toggleState } = useContext(ModeContext);
    const mode = darkMode ? dark : light;


    return(
        <div className="checkbox">
            <p className="theme-text" style={{color: mode.color}}>Change Theme:</p>
                <label className="switch">
                    <input type="checkbox" onChange={toggleState}/>
                    <span className="slider"></span>
                </label>
        </div>
    );
}

export default Button;
