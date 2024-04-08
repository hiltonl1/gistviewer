import React from 'react';
import ListItem from '@mui/material/ListItem';


const FileRow = ({file}) => {

    return (
        
        <>
            <ListItem>
            <ul>                
                <li>Filename: {file.filename}</li>
                <li>Language: {file.language}</li>
                <li>File size: {file.size} B</li>
            </ul>
            </ListItem>
        </>
    );
};

export default FileRow;