
import * as React from 'react';
import { AppBar, Box, Button, Link, Toolbar } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


export function ApplicationBar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>


          <Button ><Link className="link"  onClick={() => navigate('/')>
            Home
  </Link></Button>
          <Button><Link className="link" onClick={() => navigate('/manage-bookings')} >
            Manage Booking
  </Link></Button>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
