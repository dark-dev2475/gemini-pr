import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Or your preferred HTTP client

// Create the context
export const UserContext = createContext({
    user: null,
    setUser: () => null,
});

// Provider component
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Prevents flicker

    // This useEffect hook is the key
    useEffect(() => {
        const fetchUser = async () => {
            // 1. Check for an auth token in local storage
            const token = localStorage.getItem('authToken');

            if (token) {
                try {
                    // 2. If token exists, make an API call to get user data
                    // This endpoint should verify the token and return the user
                    const response = await axios.get('/api/auth/me', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    // 3. Update the user state with the fetched data
                    setUser(response.data);
                } catch (error) {
                    console.error("Session expired or token is invalid", error);
                    // If the token is invalid, remove it
                    localStorage.removeItem('authToken');
                }
            }
            // 4. We are done with the initial loading process
            setLoading(false);
        };

        fetchUser();
    }, []); // The empty dependency array [] ensures this runs only ONCE

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {/* Don't render the rest of the app until the check is complete */}
            {!loading && children}
        </UserContext.Provider>
    );
};