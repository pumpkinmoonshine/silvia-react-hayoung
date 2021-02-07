import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavWrapper>
      <section>
        <Logo>Hayoung Lee</Logo>
        <Menu>
          <ListItem activeClassName="active" exact={true} to="/">
            Todo
          </ListItem>
          <ListItem activeClassName="active" to="/movies">
            Movies
          </ListItem>
        </Menu>
      </section>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  padding: 18px 0;
  height: 60px;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eeeeee;

  & > section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    min-width: 328px;
    margin: 0 auto;
  }
`;

const Logo = styled.div`
  width: 180px;
  font-size: 24px;
  font-weight: bold;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const activeClassName = "nav-item-active";
const ListItem = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: black;
    font-weight: bold;
  }
  margin: 0 8px;
  color: grey;
`;
