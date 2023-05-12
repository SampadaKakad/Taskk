import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import { Start } from "./Components/Start";
import { Application } from './Components/Application';
import { Products } from './Components/Products';
import { Review } from './Components/Review';
import { View } from './Components/View';
import { Admin_part } from './Components/Admin_part';
function App() {
  return (
    <>
     <Routes>
        
        <Route path="/" element={<Start />} />
        <Route path="/register" element={<Application />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/review/:id" element={<Review/>} />
        <Route path="/view/:id" element={<View/>} />
        <Route path="/admin" element={<Admin_part/>} />
       
     </Routes>
    
    </>
  );
}

export default App;
