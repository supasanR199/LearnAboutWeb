import React from "react";
import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from "./NavbarElements";
// import logo from '../images/logo.png';

const Navbar = ()=>{
    return(
        <>
            <Nav>
                <NavLink to="/">
                    {/* <h1 class="navbar-logo"></h1>
                    <img src="../images/logo.png" class="img-fluid"></img> */}
                     <a class="navbar-brand" href="#">
                        <img src="/img/logo.png" width="100px" height="100px" alt=""></img>
                    </a>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/course" activeStyle>
                        คอร์สเรียน
                    </NavLink>
                    <NavLink to="/text" activeStyle>
                        บทความ
                    </NavLink>
                    <NavLink to="/business" activeStyle>
                        สำหรับภาคธุรกิจ/องค์กร
                    </NavLink>
                    <NavLink to="/about-us" activeStyle>
                        เกี่ยวกับเรา
                    </NavLink>
                    
                    <NavBtn>
                        <NavBtnLink to='/signin'>เข้าสู่ระบบ</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar;