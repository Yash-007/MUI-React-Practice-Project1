import { Box, List, ListItemButton, ListItemIcon, ListItemText, Switch, } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import React from 'react'

function Sidebar({mode,setMode}) {
  
  return (
    <Box
     flex={1}
     p={2}
     sx={{display: {xs:'none', sm:'block'}}}
     >
      <Box position='fixed'>
        <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
        component="a"
        href='#simple-list'
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>

        <ListItemButton
        component="a"
        href='#simple-list'
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>

        <ListItemButton
        component="a"
        href='#simple-list'
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>

        <ListItemButton
        component="a"
        href='#simple-list'
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>


        <ListItemButton
        component="a"
        href='#simple-list'
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>


        <ListItemButton
        component="a"
        href='#simple-list'
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <NotificationsIcon/>
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>

        <ListItemButton
        component="a"
        href='#simple-list'
        //   selected={selectedIndex === 0}
        //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DarkModeIcon/>
          </ListItemIcon>
          <Switch  onChange={(e)=> (mode==='light')? setMode("dark"): setMode("light")}/>
        </ListItemButton>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar