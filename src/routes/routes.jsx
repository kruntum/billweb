// src/routes.js
import { BrowserRouter, Routes, Route } from 'react-router';
import { LoginPage } from '../pages/LoginPage';  // ตรวจสอบเส้นทางที่ถูกต้อง
import NotFound from '../pages/NotFound'; // ตรวจสอบเส้นทางที่ถูกต้อง
import Home from '../pages/Home'; // ตรวจสอบเส้นทางที่ถูกต้อง
import Dashboard from '../pages/Dashboard'; // ตรวจสอบเส้นทางที่ถูกต้อง
import Layout from '../layouts/Layout';
import ProtectedRoute from '../layouts/ProtectedLayout'; // ตรวจสอบเส้นทางที่ถูกต้อง



const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
           <Route path="/home" element={<Home />} />

          <Route path="login" element={<LoginPage />} />

        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>





        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;