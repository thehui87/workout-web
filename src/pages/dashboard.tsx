import { HeadingTag } from '../components/headingTag';
import { useAuth } from '../context/authContext';
import { refreshAccessToken } from '../redux/auth/auth.api';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import AppLayout from '../layouts/appLayout';

const Dashboard = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { logout } = useAuth();
    return (
        <AppLayout>
            <button
                className="text-active-color underline ml-2"
                onClick={() => dispatch(refreshAccessToken())}
            >
                Refresh Token
            </button>
        </AppLayout>
    );
};

export default Dashboard;
