import React, { useState, createContext } from "react";

const ActiveLocationContext = createContext();

const ActiveLocationContextProvider = ({ children }) => {
	const [activeLocation, setActiveLocation] = useState(null);

	return (
		<ActiveLocationContext.Provider
			value={{ activeLocation, setActiveLocation }}
		>
			{children}
		</ActiveLocationContext.Provider>
	);
};

export { ActiveLocationContext, ActiveLocationContextProvider };
