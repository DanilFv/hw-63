import {Box} from '@mui/material';
import type {IPost} from '../../types';
import PostCard from './PostCard/PostCard.tsx';
import * as React from 'react';

interface Props {
    posts: IPost[];
}

const PostBlock: React.FC<Props> = ({posts}) => {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
                gap: 2,
                mt: 6
            }}
                >
            {posts.map((post: IPost) => (
                <Box key={post.id}>
                    <PostCard post={post} />
                </Box>
            ))}
        </Box>
    );
};

export default PostBlock;