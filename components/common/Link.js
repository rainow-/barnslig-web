import React from 'react';
import t from 'prop-types';
import NextLink from 'next/link';
import A from './A';

const Link = ({
  href, children, ...props
}) => {

  return (
    <NextLink href={href} passHref locale={false}>
      <A {...props}>
        {children}
      </A>
    </NextLink>
  );
};

Link.propTypes = {
  href: t.string.isRequired,
  children: t.node.isRequired
};

export default Link;
