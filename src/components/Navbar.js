import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

// UI imports
import Button from './UI/Button';

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <Nav>
      <LogoWrapper>
        <Link to="/">
          <h2>
            <b>TRKR</b>
          </h2>
        </Link>
      </LogoWrapper>

      <List>
        {!user ? (
          <>
            <ListItem>
              <Link to="/login">
                <b>Login</b>
              </Link>
            </ListItem>

            <ListItem>
              <Link to="/signup">
                <b>Sign Up</b>
              </Link>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem>
              <NameWrapper>
                <h4>
                  <b>{user.displayName}</b>
                </h4>
              </NameWrapper>
            </ListItem>
            <ListItem>
              <Button onClick={logout} icon="fas fa-sign-out-alt">
                Log out
              </Button>
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
  flex-wrap: wrap;
  padding: 20px;
  min-height: 80px;
  background: #f0ebff;

  a {
    text-decoration: none;

    h2 {
      color: #3c315e;
    }
  }
`;

const List = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  list-style-type: none;

  a {
    color: #8168c9;
    transition: 250ms ease;

    &:hover {
      color: #5f4d94;
    }
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const NameWrapper = styled.div`
  h4 {
    color: #5f4d94;
  }
`;

const LogoWrapper = styled.div`
  margin-right: 20px;
`;

export default Navbar;
