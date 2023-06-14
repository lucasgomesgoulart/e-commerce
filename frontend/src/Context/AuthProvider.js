import React, { createContext, useState } from "react";
const Context = createContext()


function AuthProvider({ children }) {

    const [authenticated, setAuthenticated] = useState(false)
    const [totalValue, setTotalValue] = useState('')
    const [user_id, setUser_id] = useState('')
    return (

        <>

            <Context.Provider
                value={{
                    authenticated,
                    setAuthenticated,
                    totalValue,
                    setTotalValue,
                    user_id,
                    setUser_id
                }}>
                {children}
            </Context.Provider>
        </>
    )
}

export { Context, AuthProvider }