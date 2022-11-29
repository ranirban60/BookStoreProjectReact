import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function BookStoreAppBar() {
  return (
    <Box sx={{ flexGrow: 1, background: "white", length: "100%"}}>
      <AppBar position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookStore
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// import React, { Component } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// class BookStoreAppBar extends Component {
//   render() {
//     return (
//       <div>
//         <Box sx={{ flexGrow: 1, background: "white"}}>
//        <AppBar position="static">
//          <Toolbar >
//            <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//              <MenuIcon />
//            </IconButton>
//            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//              BookStore
//            </Typography>
//            <Button color="inherit">Login</Button>
//          </Toolbar>
//        </AppBar>
//     </Box>
//       </div>
//     );
//   }
// }

// export default BookStoreAppBar;