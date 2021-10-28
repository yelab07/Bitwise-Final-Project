import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  height: 70px;
  justify-content: space-around;
    display: flex;
  background-color: #131921;
  position: sticky;
  top: 0;

`;
export const FormContainer = styled.div`
  
`;
export const SearchInput = styled.input`
  width: 400px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  padding-right: 80px;
  color: #1b130e;
`;


export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const NavMenu = styled.div`
width:100%;
  display: flex;
  justify-content:space-around;
    align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right:24px;
  margin-left:24px;
  height:23.2px;
  justify-content:flex-end;
`;

export const NavBtnLink = styled(Link)`
  background: #15cdfc;
  padding: 10px 22px;
  color: black;
  outline: none;
  border: none;
  border-radius:10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
