import {useNavigate, useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import axiosAPI from '../../axiosAPI.ts';
import type {IPost} from '../../types';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';
import FullPostInfo from '../../components/FullPostInfo/FullPostInfo.tsx';
import {toast} from 'react-toastify';

const FullPost = () => {
    const params = useParams<{id: string}>();
    const [currentPost, setCurrentPost] = useState<IPost | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

     const fetchPost = useCallback(async (id: string) => {
         try {
             setLoading(true);
             const response = await axiosAPI.get<IPost | null>(`/posts/${id}.json`);
             const postObject = response.data;

             if (postObject) {
                 setCurrentPost({...postObject, id: id});
             }

         } finally {
             setLoading(false);
         }
     }, []);

    useEffect(() => {
        if (params.id) {
            void fetchPost(params.id);
        }
    }, [params.id, fetchPost]);

    const deletePost = async (id: string) => {
        if (params.id) {
            try {
                setLoading(true);
                await axiosAPI.delete(`/posts/${id}.json`);
                toast.success('Пост успешно удален!');
                navigate('/');
            } finally {
                setLoading(false);
            }
        }
    };


    let fullPost = currentPost ? (
        <FullPostInfo post={currentPost} deleteButton={deletePost} />
     ): (<p>No post found!</p>);

    if (loading) {
        fullPost = <Spinner />;
    }

    return (
       <>
           {fullPost}
       </>
    );
};

export default FullPost;