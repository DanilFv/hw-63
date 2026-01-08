import type {IPost} from '../../types';
import * as React from 'react';
import {Box, Button, Card, CardContent, Typography} from '@mui/material';
import dayjs from 'dayjs';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
    post: IPost;
}

const FullPostInfo: React.FC<Props> = ({post}) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt: 6
            }}
        >
            <Card>
                <CardContent sx={{ height: '100%' }}>
                    <Typography variant="body2" component="p" color="grey" sx={{ mb: 2 }}>
                        📅 {dayjs(post.date).fromNow()}
                    </Typography>
                    <Typography variant="h5" component="h5" color="inherit" sx={{ mb: 1 }}>
                        {post.title}
                    </Typography>
                    <Typography variant="body2" component="p" color="inherit" sx={{ mb: 3 }}>
                        {post.description}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button variant="outlined" size='small' endIcon={<EditIcon />}>Edit</Button>
                        <Button variant="outlined" size='small' endIcon={<DeleteForeverIcon />}>Delete</Button>
                    </Box>
                </CardContent>
        </Card>
        </Box>
    );
};

export default FullPostInfo;