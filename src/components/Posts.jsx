import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import {Favorite,FavoriteBorder,MoreVert, Share } from '@mui/icons-material';
import React from 'react'

function Posts() {
  return (
    <Box>
      <Card sx={{margin:2, mx:{xs:1, sm:5}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img" 
        height="15%"
        image="https://c.ndtvimg.com/2024-02/mes9769g_virat-kohli-bcci_625x300_07_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
        </IconButton>   
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>


    <Card sx={{margin:5, mx:{xs:0, sm:5}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img" 
        height="15%"
        image="https://c.ndtvimg.com/2024-02/mes9769g_virat-kohli-bcci_625x300_07_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
        </IconButton>   
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>



    <Card sx={{margin:5, mx:{xs:0, sm:5}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img" 
        height="15%"
        image="https://c.ndtvimg.com/2024-02/mes9769g_virat-kohli-bcci_625x300_07_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
        </IconButton>   
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>


    <Card sx={{margin:5, mx:{xs:0, sm:5}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img" 
        height="15%"
        image="https://c.ndtvimg.com/2024-02/mes9769g_virat-kohli-bcci_625x300_07_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
        </IconButton>   
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>



    <Card sx={{margin:5, mx:{xs:0, sm:5}}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img" 
        height="15%"
        image="https://c.ndtvimg.com/2024-02/mes9769g_virat-kohli-bcci_625x300_07_February_24.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
        </IconButton>   
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Posts