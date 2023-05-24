/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { styled } from "styled-components";

const NavComponent = () => {
  return (
    <NavBarStyled>
      <img alt="profile picture" />
      <h3>Username</h3>
      <button>Add transaction</button>
      <ul>
        <li><NavLink to="dashboard">Dashboard</NavLink></li>
        <li><NavLink to="transactions">Transactions</NavLink></li>
      </ul>
      <Link to="/">Log Out</Link>
    </NavBarStyled>
  );
};

const NavBarStyled = styled.nav`
  /* Style the navigation bar */

  height: 100%;
  width: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #E8E8E8;
  overflow-x: hidden;
  padding-top: 20px;
  ul {
    list-style-type: none;
    background-color: #00FF9B;
  }
  a {
    display: block;
    color: #2E2E2E;
    text-align: center;
    padding: 10px;
    text-decoration: none;
    &:hover {
      background-color: #ddd;
      color: #13293D;
    } 
    &.active {
      font-weight: bold;
    }
  }
`;
export default NavComponent;
