import React, { useContext } from 'react';
import { ModeContext } from "../contexts/ModeContext";

const Button = () => {

    const { toggleState } = useContext(ModeContext);

    return(
        <button onClick={toggleState}>Toggle</button>
    );
}

export default Button;
