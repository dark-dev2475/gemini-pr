import React, { createContext, useContext, useState } from 'react';

// Create the context
export const UserContext = createContext(null);

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // You can add more user-related logic here

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Custom hook for consuming the context
