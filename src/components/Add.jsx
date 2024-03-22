import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import {Add as AddIcon, DateRange} from '@mui/icons-material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import React, { useState } from 'react'
import styled from '@emotion/styled';

const StyledModal= styled(Modal)({
  display:"flex",
  justifyContent:'center',
  alignItems:'center',
})

const UserBox= styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:10,
  marginBottom:10
})

function Add() {
  const [open,setOpen] = useState(false);
  return (
    <>
    <Tooltip
      onClick={()=>setOpen(true)}
      title="Delete"
      sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md:30}}}
    >
    <Fab color='primary' aria-label='add'>
       <AddIcon/>
    </Fab>
    </Tooltip>

    <StyledModal
    open={open}
    onClose={()=>setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
     <Box width={400} height={280} bgcolor="background.default" color="text.primary" p={3} borderRadius={5}>
       <Typography variant='h6' color='gray' textAlign='center'>
        Create post
       </Typography>

    <UserBox>
  <Avatar
  alt="Remy Sharp"
  src="https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg"
  sx={{ width: 30, height: 30 }}
 />  
  <Typography variant='span' fontWeight={500}>John Cena</Typography>
    </UserBox>
    <TextField
          id="standard-multiline-static"
          sx={{width:"100%"}}
          placeholder="what's on your mind?"
          multiline
          rows={3}
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} mb={3}>
       <AddAPhotoIcon color='primary'/>
       <AddIcCallIcon color='secondary'/>
       <AddReactionIcon color='success'/>
       <AddAlertIcon color='error'/>
        </Stack>

        <ButtonGroup
          fullWidth
          variant='contained'
          aria-label='outlined primary button group'
          >
           <Button>Post</Button>
           <Button sx={{width:'100px'}}>
            <DateRange/>
           </Button>
        </ButtonGroup>
     </Box>  
    </StyledModal>

    </>
  )
}

export default Add