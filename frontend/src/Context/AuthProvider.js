import React, { createContext, useState } from "react";
const Context = createContext()


function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false)
    const [totalValue, setTotalValue] = useState('')

    return (

        <>

            <Context.Provider
                value={{
                    authenticated,
                    setAuthenticated,
                    totalValue,
                    setTotalValue
                }}>
                {children}
            </Context.Provider>
        </>
    )
}

export { Context, AuthProvider }