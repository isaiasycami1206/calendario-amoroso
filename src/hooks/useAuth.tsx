import { useContext } from 'react';
import { AuthContext, AuthContextProps } from '../contexts/AuthContext';

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};