# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## โครงสร้างเว็บไซต์

my-billing-system/
├── public/               # ไฟล์ที่สามารถเข้าถึงได้จากภายนอก (เช่น รูปภาพ ไอคอน)
├── src/
│   ├── assets/           # ไฟล์ที่เกี่ยวกับ assets เช่น รูปภาพ ไอคอน
│   ├── components/       # Components ของ UI เช่น ปุ่ม ฟอร์ม ตาราง
│   ├── pages/            # หน้าเว็บหลัก เช่น หน้า Dashboard, หน้า User, หน้า Bill
│   ├── store/            # Zustand store สำหรับการจัดการ state
│   ├── services/         # สำหรับการเรียก API หรือฟังก์ชันที่เกี่ยวข้องกับการทำงานกับ backend
│   ├── utils/            # ฟังก์ชันช่วยต่างๆ เช่น การจัดการวันที่ หรือการคำนวณข้อมูล
│   ├── App.js            # ไฟล์หลักสำหรับ render app
│   ├── index.js          # จุดเริ่มต้นของการรัน React app
│   ├── vite.config.js    # ตั้งค่า Vite
│   └── styles.css        # สไตล์ทั่วๆ ไป
└── package.json          # ไฟล์กำหนด dependencies ของโปรเจกต์
"# billweb" 
