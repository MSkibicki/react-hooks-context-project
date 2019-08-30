import React, { createContext, Component } from 'react';

export const ModeContext = createContext();

class ModeContextProvider extends Component {
    state = {
        darkMode: false,
        dark: {body: "#06131f", menu: "#4f89db", taskDetails: "#4779bf", li: "#1b4785", color: "lightgray"},
        light: {body: "darkgray", menu: "lightgray", taskDetails: "#d3d3d3", li: "#686868", color: "black"}
    }

    toggleState = () => {
        this.setState({darkMode: !this.state.darkMode});
    }

    render() {
        return (
            <ModeContext.Provider value={{...this.state, toggleState: this.toggleState}}>
                {this.props.children}
            </ModeContext.Provider>
        );
    }
}

export default ModeContextProvider;