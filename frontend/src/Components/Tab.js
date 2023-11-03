import React from 'react'
import {  Grid, Typography} from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


//will be like a tab with all of the things

//puth the link somewhere else not the name like a thing that says get tab
const Tab = ({song}) => {

  const PaperStyle = styled(Paper)(({ theme }) => ({
  
    padding: theme.spacing(2),
    ...theme.typography.body2,
    
  }));
  
  return (
    <div>
      <PaperStyle   variant="elevation" elevation={5} square={true}  >
  <ListItem>
    <Grid container  direction="column">
    
  <Typography style = {{ fontFamily:'Monospace'}}>
{song.name}   
 </Typography>
 

 <Typography fontSize={12} style = {{ fontFamily:'Monospace'}}>
 {song.artistname}
 </Typography>

 </Grid>
 <Grid
  container
  spacing={0}

  alignItems="end"
  justifyContent="end"
>
<Button href = {song.link} sx={{display: 'flex', justifyContent: 'flex-end'  }}>
<Typography style = {{ fontFamily:'Monospace'}}>
  Get tab
  </Typography>
  </Button>
  </Grid>

    </ListItem>
    </PaperStyle>
    <Divider />
    </div>
  )
}

export default Tab