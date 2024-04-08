import React from 'react';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

const ForkRow = ({fork}) => {

    return (
        <>
            <ListItem>
            <ul>                
                <li>
                    <Stack 
                        direction="row" spacing={2}                        
                        alignItems="center">
                        <div>User: </div>
                        <Avatar alt={fork.owner.login} src={fork.owner.avatar_url} />
                        <span style={{ fontWeight: 'bold' }}>{fork.owner.login}</span>
                    </Stack>
                </li>
                <li>Url: <Link href={fork.git_pull_url} target="_blank" rel="noreferrer">{fork.git_pull_url}</Link></li>
                <li>Created At: {fork.created_at}</li>
            </ul>
            </ListItem>
        </>
    );
};

export default ForkRow;