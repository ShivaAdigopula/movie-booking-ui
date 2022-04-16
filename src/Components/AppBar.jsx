
import * as React from 'react';
import { AppBar, Box, Button, Link, Toolbar } from '@material-ui/core';


export function ApplicationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>


          <Button ><Link className="link" href="/" >
            Home
  </Link></Button>
          <Button><Link className="link" href="/manage-bookings" >
            Manage Booking
  </Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
