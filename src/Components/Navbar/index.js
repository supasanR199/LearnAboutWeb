import React from "react";

import { Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink } from "./NavbarElements";

const Navbar = ()=>{
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1>LOGO</h1>
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