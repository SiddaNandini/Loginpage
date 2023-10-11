import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { Link, Route,Routes } from 'react-router-dom';
import Log from './Log';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" >
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Sri Vasavi Engineering College
          </Typography>
          <AddIcon/>
          <Button color='inherit'><Link to="/Log">Login</Link></Button>
          
        </Toolbar>
      </AppBar>
      <Routes>
            <Route path='/Log' element={<Log/>}/>
          </Routes>
          
    </Box>
  );
}
