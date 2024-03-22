import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import {Favorite,FavoriteBorder,MoreVert, Share } from '@mui/icons-material';
import React from 'react'
import Posts from './Posts';

function Feed() {
  return (
    <Box
     flex={4}
     p={2}
     >
    <Posts/>
    </Box> 
 )
}

export default Feed