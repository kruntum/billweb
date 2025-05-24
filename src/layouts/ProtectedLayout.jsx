import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router'; // ใช้สำหรับการเปลี่ยนหน้า
import useUserStore from '../store/userStore';

const ProtectedRoute = () => {
    const { user } = useUserStore(); // ดึงข้อมูล user จาก store
    const navigate = useNavigate();

    useEffect(() => {
        // หากไม่ได้ล็อกอิน จะเปลี่ยนหน้าไปที่ LoginPage
        if (!user) {
            navigate('/login');

        }
    }, [user, navigate]);
    // ถ้ามี user (ล็อกอินแล้ว) ก็ให้แสดงเนื้อหาของหน้า
      return (
    <main className="container">
        {/* <hr /> */}
        <h1>Protected Route</h1>
        <Outlet />
    </main>
  )
};

export default ProtectedRoute;
