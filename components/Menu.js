import React from 'react';
import Header from './common/Header';
import Nav from './common/Nav';
import List from './common/List';
import ListItem from './common/ListItem';
import Link from './common/Link';

const navItems = [
  {
    href: '/',
    text: 'About'
  },
  {
    href: '/',
    text: 'Projects'
  },
  {
    href: '/',
    text: 'Store'
  },
];

const Menu = (props) => {
  return (
    <Header height="10vh" display="flex" align="center" justify="flex-end" my={8} px={8} {...props}>
      <Nav>
        <List>
          {navItems.map(item => (
            <ListItem key={item.text} zIndex={2} mx={4}>
              <Link href={item.href} fontSize={72} fontWeight={700} color="white" textShadow="-4px -2px #ff4db5">
                {item.text}
              </Link>
            </ListItem>
          ))}
        </List>
      </Nav>
    </Header>
  );
};

export default Menu;
