
import { useNavigate } from "react-router";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>Home

     
                    <button onClick={() => {
         
              
                // นำผู้ใช้ไปที่หน้า LoginPage
                 navigate('/login');
            }}>Login</button>
      
    </div>
  )
}
export default Home