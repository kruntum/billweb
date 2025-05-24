import { create } from 'zustand';






const useUserStore = create((set) => ({



  user: JSON.parse(localStorage.getItem('user')) || null, // อ่านข้อมูลจาก localStorage
  token: localStorage.getItem('token') || null, // อ่านข้อมูลจาก localStorage
  setUser: (user) => {
    localStorage.setItem('user', JSON.stringify(user)); // เก็บข้อมูลใน localStorage
    set({ user });
  },
  setToken: (token) => {
    localStorage.setItem('token', token); // เก็บข้อมูลใน localStorage
    set({ token });
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, token: null });
 
  }
}));

export default useUserStore;
