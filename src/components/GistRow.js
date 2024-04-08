import React from 'react';
import { useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {getFirstFileName, getFileCount, getLanguages} from '../helpers/Helper';

const GistRow = ({gist}) => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/detail', { state: gist });        
    }
    
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton 
                onClick={(e) => handleClick()}
                >                
                <ul>
                    <li>Gist ID: {gist.id}</li>
                    <li>Filename of the first file: {getFirstFileName(gist)}</li>
                    <li>Description: {gist.description}</li>
                    <li>Number of files: {getFileCount(gist)}</li>
                    <li>Languages: {getLanguages(gist)}</li>
                </ul>
                </ListItemButton>
            </ListItem> 
        </>
    );
};

export default GistRow;