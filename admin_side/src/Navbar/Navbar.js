import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <div>
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            DormEase
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/notice" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Notice</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/complaint" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="box">Complaint Box</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/seatallocation" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Seat Allocation</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/dining" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="utensils">Dining</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Log Out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        
      </CDBSidebar>
    </div>
    </div>
  );
}