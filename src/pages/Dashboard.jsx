// src/pages/Dashboard.js

import useUserStore from '../store/userStore';
import { useNavigate } from 'react-router';

const Dashboard = () => {
    const { user, logout } = useUserStore();
    const navigate = useNavigate();




    return (
        <div>
            <h1>Welcome, {user?.username}</h1>
            <p>Role: {user?.role}</p>
            <p>userCode: {user?.userId}</p>
            <p>username: {user?.userCode}</p>
            <button onClick={() => {
         
                logout();
                // นำผู้ใช้ไปที่หน้า LoginPage
                 navigate('/login');
            }}>Logout</button>
        </div>
    );
};

export default Dashboard;
