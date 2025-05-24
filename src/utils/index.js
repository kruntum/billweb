
export const verifyToken = async (token) => {
    try {
        const response = await fetch('/api/verifyToken', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,  // ส่ง token ใน header
            },
            body: JSON.stringify({ token }),
        });

        if (!response.ok) {
            throw new Error('Token is invalid or expired');
        }

        const data = await response.json();
        return data.isValid;  // ถ้า server บอกว่า token valid ให้คืนค่า true
    } catch (error) {
        console.error("Error verifying token:", error);
        return false;
    }
};

export const getUserFromStorage = () => {
    // ดึงข้อมูล user จาก localStorage
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;  // คืนค่าข้อมูล user หรือ null หากไม่มี
};

// ตัวอย่างการใช้งาน:
//const user = getUserFromStorage();
//if (user) {
//    console.log("User is logged in:", user);
//} else {
 //   console.log("User is not logged in");
//}



      