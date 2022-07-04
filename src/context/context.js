import { createContext, useState } from "react";

export const AppContext = createContext()

export const DataProvider = (props) => {
    const [value, setValue] = useState(false)

    return (
        <AppContext.Provider value={{ value, setValue }}>
            {props.children}
        </AppContext.Provider>
    )
}