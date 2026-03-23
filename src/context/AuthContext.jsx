import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);

    useEffect(() => {
        // Check local storage for persisted session
        const storedUser = localStorage.getItem('lcev_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                localStorage.removeItem('lcev_user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (role, data) => {
        // Mock network delay
        await new Promise(resolve => setTimeout(resolve, 1200));

        let mockUser = {};

        if (role === 'customer') {
            mockUser = {
                id: 'cust_789',
                name: 'Demo Driver',
                phone: data.phone,
                role: 'customer'
            };
        } else if (role === 'partner') {
            mockUser = {
                id: 'part_123',
                name: 'Demo Partner',
                email: data.email,
                role: 'partner',
                partner_id: 'P-12345',
                stations: ['ST-001', 'ST-002']
            };
        }

        setUser(mockUser);
        localStorage.setItem('lcev_user', JSON.stringify(mockUser));
        return mockUser;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('lcev_user');
    };

    return (
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            isLoading: loading,
            redirectAfterLogin,
            setRedirectAfterLogin
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
