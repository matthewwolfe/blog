import React from 'react';
import NextLink from 'next/link';
import MaterialLink from '@material-ui/core/Link';

function Link({ children, href, ...props }) {
  return (
    <NextLink href={href}>
      <MaterialLink href={href} {...props}>
        {children}
      </MaterialLink>
    </NextLink>
  );
}

export default Link;
