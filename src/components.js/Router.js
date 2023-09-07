import { BrowserRouter,NavLink, Route, Routes } from "react-router-dom";
import AboutCompo from "./About";
import HomeCompo from "./Home";
import StudentCompo from "./Student";
import './style.css'



function RouterCompo(){
    


    return(
        <>
        <BrowserRouter>
         <div className="navone">
        <NavLink style={({isActive})=>({color:isActive ? 'blue':'red'})} to='/' >Home</NavLink>
        <NavLink to='/Student' style={({isActive})=>({color:isActive ? 'blue':'red'})}>Student</NavLink>
        <NavLink to='/About' style={({isActive})=>({color:isActive ? 'blue':'red'})}>About</NavLink>
        </div>

        <Routes>
            <Route path="/" element={<HomeCompo/>}/>
            <Route path="/About" element={<AboutCompo/>}/>
            <Route path="/Student" element={<StudentCompo/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouterCompo;