import React,{useState,useEffect} from 'react'
import Tab from '../Components/Tab'
import List from '@mui/material/List';
import { AppBar, Typography } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom'

const SongsPage = () => {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }


    let [tabs,setTabs] = useState([])

    useEffect(() => {
   
        getTabs()

    },[])
    
    let getTabs = async () => {
      
       let response =  await fetch('https://spotitab.onrender.com/api/songs/')
        let data = await response.json()
        shuffleArray(data)
        setTabs(data)

    }

    var isnull = false;
if (tabs.length === 0)
{
  isnull = true;

 
}

//gonna provide listrs of artists i think bcos artists based website
  return (
    <div >
  <AppBar position="fixed" elevation={6}sx={{ paddingTop: 1,
  paddingBottom: 2, bgcolor: "black" }}>
        <Toolbar  sx={{ justifyContent: 'center'}}>
          <Link to ={'http://localhost:3000/'} style={{ textDecoration: 'none' }}>
          <Typography variant = 'h3' style = {{ fontFamily:'Cursize'}} color = 'white'>SPOTITAB</Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />

      {isnull? <div> <Typography style = {{ fontFamily:'Monospace'}}> Unable to find Artists from your spotify within your skill range. </Typography> <Typography>Try using dummy data or selecting another difficulty level</Typography> </div>:


<List sx = {{backgroundColor:'#263238'}} >
{tabs.map((song,index) =>(
               <Tab song = {song} />
            )
            
            )}
        
        </List>
}
    </div>
  )
}

export default SongsPage