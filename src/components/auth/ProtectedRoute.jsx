import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ProtectedRoute = ({ children, requiredRole, requiredStationId }) => {
    const { user, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div className="flex h-screen items-center justify-center dark:bg-primary"><div className="w-8 h-8 border-4 border-accent-green border-t-transparent rounded-full animate-spin"></div></div>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (requiredRole && user.role !== requiredRole) {
        return (
            <div className="min-h-screen flex items-center justify-center p-6 dark:text-white dark:bg-primary">
                <div className="max-w-md text-center bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-8 rounded-2xl border border-red-200 dark:border-red-500/30">
                    <h2 className="text-xl font-bold mb-2">Access Denied</h2>
                    <p>This station is private. Please log in as a Partner to view.</p>
                </div>
            </div>
        );
    }

    // Task C: Partner Consumption checking
    if (requiredStationId && user.role === 'partner') {
        const ownsStation = user.stations?.includes(requiredStationId);
        if (!ownsStation) {
            return (
                <div className="min-h-screen flex items-center justify-center p-6 dark:text-white dark:bg-primary">
                    <div className="max-w-md text-center bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-8 rounded-2xl border border-red-200 dark:border-red-500/30">
                        <h2 className="text-xl font-bold mb-2">Unauthorized Station</h2>
                        <p>You do not have permission to view consumption data for this hardware ID ({requiredStationId}).</p>
                    </div>
                </div>
            );
        }
    }

    return children;
};

export default ProtectedRoute;
