// Sidebar.js
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const SidebarContainer = styled.div`
  width: 145px;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding-top: 20px;
`;

const SidebarHeader = styled.h3`
  text-align: center;
  text-decoration:undeline;
`;

const SidebarMenu = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 20px 0;
`;

const SidebarMenuItem = styled.li`
  padding: 10px 30px;
  cursor: pointer;
  transition: background-color 0.3s;
  

  &:hover {
    background-color: white;
    color:red;
    border-radius:20px
    
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>EIS-System</SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem><Link to="/map">Map</Link></SidebarMenuItem>
        <SidebarMenuItem><Link to="/schools">Schools</Link></SidebarMenuItem>
        <SidebarMenuItem><Link to="/headmasters">Headmasters</Link></SidebarMenuItem>
        <SidebarMenuItem><Link to="/teachers">Teachers</Link></SidebarMenuItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
