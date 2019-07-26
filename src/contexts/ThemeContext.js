import React, { createContext, Component } from "react";
//creates a context and stores it on ThemeContext
export const ThemeContext = createContext();

//create a class component and have a state which will be shared

export class ThemeContextProvider extends Component {
	state = {
		isLightTheme: true,
		light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
		dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
	};
	render() {
		return (
			<ThemeContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContextProvider;
