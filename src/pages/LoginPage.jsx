// src/pages/LoginPage.jsx
import { useState } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import useUserStore from '../store/userStore'; // Zustand store
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {  toast } from 'sonner';
import { jwtDecode } from 'jwt-decode';


export function LoginPage({ className, ...props }) {
    const [username, setUsername] = useState('');  // การใช้งาน useState อย่างถูกต้อง
    const [password, setPassword] = useState('');  // การใช้งาน useState อย่างถูกต้อง
    const [error, setError] = useState('');  // การใช้งาน useState อย่างถูกต้อง
    const navigate = useNavigate();
    const { setUser } = useUserStore();
    const apiUrl = import.meta.env.VITE_API_URL;


    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');  // รีเซ็ตข้อผิดพลาด

        try {
            const response = await axios.post(apiUrl + '/api/login', { username, password });
            const token = response.data.token;

            if (!response.data.token) {
                setError('Invalid credentials, please try again');
                return;
            }

            // ถอดรหัส token และดึงข้อมูล user
            const decodedToken = jwtDecode(token);

        //    console.log(decodedToken)
            // บันทึกข้อมูลใน localStorage
            localStorage.setItem('token', token);
            //  localStorage.setItem('user', JSON.stringify(response.data.myuser));
            localStorage.setItem('user', decodedToken);
            //   setUser(response.data.myuser);
            setUser(decodedToken);

            // นำผู้ใช้ไปที่หน้า Dashboard
            navigate('/dashboard');
        } catch (error) {
            console.error('Login error:', error);
            // แสดงข้อความผิดพลาด
           // setError('Invalid credentials, please try again');
            toast.error('Invalid credentials, please try again',{ duration: 3000, position: 'top-center' });
        }
    };

    return (

        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className={cn("flex flex-col gap-6", className)} {...props}>
                    <Card className="overflow-hidden ">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            {/* ฟอร์ม Login */}
                            <form className="p-6 md:p-8" onSubmit={handleLogin}>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center text-center">
                                        <h1 className="text-2xl font-bold">ยินดีต้อนรับ</h1>
                                        <p className="text-muted-foreground">เข้าสู่ระบบด้วยบัญชีของคุณ</p>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="username">ชื่อผู้ใช้</Label>
                                        <Input
                                            id="username"
                                            type="text"
                                            placeholder="MyUsername"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">รหัสผ่าน</Label>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="*********"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" className="w-full">Login</Button>
                                    {error && <p className="text-red-500 text-center">{error}</p>}



                                </div>
                            </form>
                            <div className="relative hidden bg-muted md:block">
                                <img
                                    src="/placeholder.svg"
                                    alt="Image"
                                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                                />
                            </div>
                        </CardContent>
                    </Card>
                    <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </div>
                </div>
            </div>
        </div>
    );
}
