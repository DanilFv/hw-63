import {Button, Card, CardContent, Typography} from '@mui/material';
import * as React from 'react';
import type {IPost} from '../../../types';
import dayjs from 'dayjs';

interface Props {
   post: IPost;
}


const PostCard: React.FC<Props> = ({post}) => {
    return (
        <Card>
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="body2" component="p" color="grey" sx={{ mb: 2 }}>
                  📅 {dayjs(post.date).fromNow()}
              </Typography>
              <Typography variant="h5" component="h5" color="inherit" sx={{ mb: 2 }}>
                  {post.title}
              </Typography>
                <Button variant="outlined" size='small'>Подробнее</Button>
            </CardContent>
        </Card>
    );
};

export default PostCard;