import React from 'react';
import Header from './common/Header';
import Nav from './common/Nav';
import List from './common/List';
import ListItem from './common/ListItem';
import Link from './common/Link';
import Logo from './Logo';

const Menu = () => {
  return (
    <Header display="flex" justify="space-between" align="center" py={3} px={10}>
      <Logo />
      <Nav>
        <List>
          <ListItem zIndex={2} mx={4}>
            <Link href="/" fontSize={20}>
              Projects
            </Link>
          </ListItem>
          <ListItem zIndex={2} mx={4}>
            <Link href="/" fontSize={20}>
              Store
            </Link>
          </ListItem>
        </List>
      </Nav>
    </Header>
  );
};

export default Menu;
