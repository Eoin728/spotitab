import React,{useState} from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import MenuButton from '@mui/joy/MenuButton';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu'
import Stack from '@mui/material/Stack';
import Video from '../Components/video';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();
    const [difficultytext, setdifficultytext] = useState('Select Difficulty');
    const [isopen, setIsOpen]= useState(false);
  

 // var difficultytext = "Choose difficulty"
  let AuthSpotify = () => {
    console.log("penis");
        fetch('https://spotitab.onrender.com/api/get-auth').then((response) => response.json()).then((data) =>
         window.location.replace(data.url));


    }

  

    let SetDifficulty = (diff) =>
    {
      
        //console.log(difficulty);
    

        //this is actually retarded
       
               setdifficultytext(diff);
              
        setIsOpen(false);
        console.log(difficultytext)
    }

   
    let handlespotify = () =>
    {
console.log(difficultytext !== 'Select Difficulty')
        if (difficultytext !== 'Select Difficulty')
            { 
               
                fetch(`https://spotitab.onrender.com/api/create/`, {
                method: "POST",
               
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
               'difficulty':difficultytext[0],
               'usertype': "spotify"
             } )});
             AuthSpotify(); 

          
            }
    }

    let handleother = async () =>{
       
        if (difficultytext !== 'Select Difficulty'){
       await fetch(`https://spotitab.onrender.com/api/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'difficulty':difficultytext[0],
                'usertype': "dummy"
              } )});
              navigate("/songs");
    }
    }
    let openmenu = () =>
    {
        setIsOpen(true);
    }



  return (
   <div>
    <Video/>
      <Box   display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"

 >
        <Stack spacing={4} >

            <Typography textAlign={'center'} variant = 'h1' color = 'white' style = {{ fontFamily:'Cursize'}}> SPOTITAB</Typography>
    
            {(difficultytext === 'Select Difficulty') ?   <Typography style = {{ fontFamily:'Cursize'}} variant = 'h4' color = 'white' textAlign={'center'}>Select difficulty to begin</Typography> : null}

    <Button  style = {{backgroundColor :'#1DB954', borderRadius: 80}} variant="contained" onClick = { handlespotify} ><Typography style = {{ color:'#191414',fontFamily:'Monospace'}}>Spotify login</Typography></Button>
                
     
        <Button style = {{backgroundColor :'black', borderRadius: 80}} variant="contained" onClick = {handleother}><Typography style = {{ fontFamily:'Monospace'}}>Use default data </Typography></Button>

        <Dropdown open = {isopen}>
      <MenuButton  variant = 'soft' color = 'neutral'endDecorator = {<KeyboardArrowDownIcon/>}   style = {{ borderRadius: 80 }} onClick = {openmenu} ><Typography style = {{ fontFamily:'Monospace'}}>{difficultytext} </Typography></MenuButton>
      <Menu  style = {{ borderRadius: 10,  opacity: 0.8}} >
        <MenuItem  style ={{ justifyContent:'center'}}  onClick = {() => SetDifficulty('Beginner')}> <Typography  style = {{fontFamily:'Monospace'}}>Beginner </Typography></MenuItem>
        <Divider/>
       < MenuItem style ={{ justifyContent:'center'}}  onClick = {() => SetDifficulty('Intermediate')} > <Typography style = {{ fontFamily:'Monospace'}}>Intermediate </Typography></MenuItem>
       <Divider/>
      <  MenuItem style = {{justifyContent:'center' ,width :'100%', minWidth:'470px'}}onClick = {() => SetDifficulty('Advanced')} ><Typography style = {{ fontFamily:'Monospace'}}>Advanced </Typography></MenuItem>
      </Menu>
    </Dropdown>
   
        </Stack>
  
        </Box>
    </div>
  )
}

export default LoginPage


