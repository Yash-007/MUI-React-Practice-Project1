import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useState } from 'react'
import { theme } from '../theme'


const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between',
   });

const Search = styled("div")(({theme})=>({
    width:'40%',
    padding:'0 10px',
    backgroundColor:'white',
    borderRadius: '5px'
}));

const Icons = styled(Box)(({theme})=>({
    display:'none',
    gap:'20px',
    alignItems:'center',
    [theme.breakpoints.up("sm")]:{
        display:'flex'
    }
}))

const UserBox= styled(Box)(({theme})=>({
  display:'flex',
   alignItems:'center',
   gap:'10px',
   [theme.breakpoints.up("sm")]:{
     display:'none',
   }
}))

function Navbar() {
 const [open, setOpen] = useState(false);
 const handleClose =()=>{
    setOpen(false);
 }
  return (
    <AppBar position='sticky'>
     <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>My app</Typography>
        <WhatsAppIcon sx={{display:{xs:'block', sm:'none' }}}/>
         <Search > <InputBase sx={{color:'black'}} placeholder='search...'/> </Search>
         <Icons>
          <Badge badgeContent={4} color="error">
          <MailIcon />
          </Badge>

          <Badge badgeContent={4} color="error">
          <NotificationsIcon />
          </Badge>

          <Avatar
          alt="Remy Sharp"
          src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
          sx={{ width: 45, height: 45,cursor:'pointer' }}
          onClick={(e)=>setOpen(true)}
          />
         </Icons>
         <UserBox>
         <Avatar
          alt="Remy Sharp"
          src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
          sx={{ width: 45, height: 45, cursor:'pointer' }}
          onClick={(e)=>setOpen(true)}
          />
          <Typography variant='span'>Yash</Typography>
         </UserBox>

     </StyledToolbar>

     <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal:'right'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar