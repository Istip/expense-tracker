import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <Nav>
      <h2>
        <Link to="/">Logo</Link>
      </h2>

      <List>
        {!user ? (
          <>
            <ListItem>
              <Link to="/login">Login</Link>
            </ListItem>

            <ListItem>
              <Link to="/signup">Sign Up</Link>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem>
              <div>
                <small>Hello, {user.displayName}</small>
              </div>
            </ListItem>
            <ListItem>
              <button onClick={logout}>Log out</button>
            </ListItem>
          </>
        )}
      </List>
    </Nav>
  );
};

// styled components
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  height: 50px;
  background: #e1e1e1;

  a {
    text-decoration: none;
    color: #222;
  }
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export default Navbar;
