import { useState, React } from 'react';
import GistRow from '../components/GistRow';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {FormLabel } from '@mui/material';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import {getGistsByUsername, getGistsPageByUrl} from '../services/GistServices'

const MainPage = () => {
  const [username, setUsername] = useState('');
  const [gists, setGists] = useState([]);
  const [prevUrl, setPrevUrl]  = useState();
  const [nextUrl, setNextUrl]  = useState();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!username){
      alert('Please enter a username');
      return;
    }
    
    const data = await getGistsByUsername(username);   
    
    setGists(data.gists);
    //Handle pagination - If next url exist, update nextUrl state for Next button
    if(data.nextUrl &&  data.nextUrl.length > 0){
      setNextUrl(data.nextUrl);
    }else{
      setNextUrl();
    }
    setPrevUrl(); 
  }

  

  const handlePagination = async (url) => {
    
    const data = await getGistsPageByUrl(url);   
    
    setGists(data.gists);
    if(data.nextUrl &&  data.nextUrl.length > 0){
      setNextUrl(data.nextUrl);
    }else{
      setNextUrl();
    }
    if(data.prevUrl &&  data.prevUrl.length > 0){
      setPrevUrl(data.prevUrl);
    }else{
      setPrevUrl();
    }    
  }


  const GistList = () => {
    if(gists != null && gists.length > 0){
      return (
        <List>
            {
              gists
                .map(gist => 
                  <GistRow key={gist.id} gist={gist} />                  
                )
            }
        </List>
      )
    }
  }

  const NextButton = () => {
    if(nextUrl != null ){
      return (
        <Button 
              variant='contained'
              onClick={() => handlePagination(nextUrl)}
            >Next Page</Button>
      )
    }
  }

  const PrevButton = () => {

    if(prevUrl != null ){
      return (
        <Button 
              variant='contained' 
              onClick={() => handlePagination(prevUrl)}
            >Prev Page</Button>
      )
    }
  }


  return (
    <>
      <header>
        <h1>Gist Viewer</h1>
      </header>      
      <div>
        <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>          
            <FormLabel>Username:</FormLabel>
            <TextField
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />        
            <Button 
              variant='contained' 
              onClick={(e) => handleSubmit(e)}
            >Submit</Button>
        </Stack>
        
        
        <GistList/>
        <Stack direction='row' spacing={2} justifyContent='center' alignItems='center'>          
          <PrevButton/> 
          <NextButton/>        
        </Stack>
      </div>
    </>
  );
}

export default MainPage;