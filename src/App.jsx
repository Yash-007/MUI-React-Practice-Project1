import { useState } from 'react'
import {Box, Stack, ThemeProvider, createTheme} from '@mui/material';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import  Add  from './components/Add';



function App() {
 const [mode, setMode] = useState('dark');
  const darkTheme = createTheme({
    palette:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
   <Box bgcolor={"background.default"} color="text.primary">
    <Navbar/>
    <Stack direction='row' sx={{gap:{sm:2}}} display='flex' justifyContent='space-between'>
     <Sidebar mode={mode} setMode={setMode}/>
     <Feed/>
     <Rightbar/>
    </Stack>
    <Add/>
   </Box>
    </ThemeProvider>
  )
}

export default App
