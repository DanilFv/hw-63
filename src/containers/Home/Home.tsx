import {useCallback, useEffect, useState} from 'react';
import type {IPost, IPostAPI} from '../../types';
import axiosAPI from '../../axiosAPI';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import {Typography} from '@mui/material';
import PostBlock from '../../components/PostBlock/PostBlock.tsx';


const Home = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchPosts = useCallback(async () => {
        try {
            setLoading(true);
            const response = await axiosAPI.get<IPostAPI | null>('/posts.json');
            const postsObjects = response.data;

            if (postsObjects) {
                const allPosts = Object.keys(postsObjects).map((idPost: string) => {
                    return {
                        ...postsObjects[idPost],
                        id: idPost,
                    }
                });
                setPosts(allPosts);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        void fetchPosts();
    }, [fetchPosts]);


    return (
        <div>
            {loading && <Spinner />}
            {!loading && posts.length === 0 && <Typography variant='h4' component='p'>No posts found.</Typography>}
            {!loading && posts.length > 0 && <PostBlock posts={posts} />}
        </div>
    );
};

export default Home;