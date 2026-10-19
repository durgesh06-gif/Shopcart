import { createContext, useState } from "react";

// 1. Capitalize context name so it's easily distinguishable
export const LoginContext = createContext();

// 2. React components must be Capitalized (LoginProvider)
// 3. React uses 'children' as the default prop name for wrapping elements
export const LoginProvider = ({ children }) => {
    // Safely read from localStorage on initial render
    const [user, setUser] = useState(() => localStorage.getItem('user'));

    const login = (data) => {
        localStorage.setItem('user', data);
        setUser(data);
    };

    const logout = () => {
        localStorage.clear();
        setUser(null);
    };

    // Use double exclamation to convert to boolean cleanly
    const auth = !!user; 

    // 4. Use uppercase for the Provider tag component
    return (
        <LoginContext.Provider value={{ user, login, logout, auth }}>
            {children}
        </LoginContext.Provider>
    );
};
