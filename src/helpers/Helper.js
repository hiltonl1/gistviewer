import ForkRow from '../components/ForkRow';
import FileRow from '../components/FileRow';
import List from '@mui/material/List';
import Chip from '@mui/material/Chip';

export const getFirstFileName = (gist) => {
    let filenames = Object.keys(gist.files);        
    return gist.files[filenames[0]].filename;
}

export const getFileCount = (gist) => {
    let filenames = Object.keys(gist.files);        
    return filenames.length;
}

export const getLanguages = (gist) => {
    let filenames = Object.keys(gist.files);   
    let languages =  [];
    
    filenames.map(filename => {
        let language = gist.files[filename].language;
        if(!language){
            let type = gist.files[filename].type;
            if(!languages.includes(type)){
                languages.push(type);   
            }
        }else if(!languages.includes(language)){
            languages.push(language);                
        }
    });        
    // return gist.files[filenames[0]].language;
    return (
        languages.map(language => 
            getLanguageBadge(language))   
        
    )
}

export const getLanguageBadge = (language) => {
    let color = "primary";
    switch(language) {
        case 'Javascript':
            color = "primary";
            break;
        case 'Python':
            color = "success";
            break;
        case 'Java':
            color = "seconardy";            
            break;
        case "PHP":
            color = "error";                            
            break;
        default:
            color =  "warning";
    }
    
    return (
        <Chip key={language} label={language} color={color} />
    )
}

export const getForksByOldest = (forks, numberOfForks) => {
    if(forks && forks.length > 0){
        return (
            <List>
            { 
                forks
                .sort((a, b) => a.created_at > b.created_at ? 1 : -1)
                .slice(0, numberOfForks)
                .map(fork => <ForkRow key={fork.id} fork={fork} />  
                )
            }
            </List>
        )
    }else{
        return (
            <span>N/A</span>
        )
    }
}

export const getFiles = (gist) => {
    let filenames = Object.keys(gist.files);   
    console.log(gist.files);   
    return (
        <List>
        { 
            filenames.map(filename => <FileRow key={filename} file={gist.files[filename]} />)   
        }
        </List>
    ) 
}