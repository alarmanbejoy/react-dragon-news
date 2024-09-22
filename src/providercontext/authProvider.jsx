import React, { createContext } from 'react';
export const AuthContext = createContext(null)

const authProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}

            
        </AuthContext.Provider>
    );
};

export default authProvider;