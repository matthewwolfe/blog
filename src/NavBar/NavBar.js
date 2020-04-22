import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { Link } from '../Link';

function NavBar() {
  return (
    <Box my={3}>
      <Link href="/">
        <Typography variant="h5">Home</Typography>
      </Link>
    </Box>
  );
}

export default NavBar;
