import React, { useContext } from 'react';
import { ModeContext } from '../contexts/ModeContext';
import Menu from "./Menu";
import Tasks from "./Tasks";
import Form from "./Form";
import SlideButton from "./SlideButton";


const Body = () => {

    const { darkMode, dark, light } = useContext(ModeContext);
    const mode = darkMode ? dark : light;

    return(
        <div className="app-body" style={{background: mode.body}}>
            <div className="app-content">
                <Menu />
                <Tasks />
                <Form />
                <SlideButton />
            </div>
        </div>
    );
}

export default Body;