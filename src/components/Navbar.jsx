import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"



const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    gap: 20px;

`;
const Navbar =()=>{

    return (
        <NavbarWrapper>

            <Link to="/">Home</Link>
            <Link to="/AllProducts">All Product</Link>

        </NavbarWrapper>
    )

}
export default Navbar;