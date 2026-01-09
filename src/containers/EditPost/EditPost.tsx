import PostForm from '../../components/PostForm/PostForm.tsx';
import {useCallback, useEffect, useState} from 'react';
import type {IPostForm} from '../../types';
import {useParams} from 'react-router-dom';
import axiosAPI from '../../axiosAPI.ts';
import Spinner from '../../components/UI/Spinner/Spinner.tsx';

const EditPost = () => {
    const [editPost, setEditPost] = useState<IPostForm>();
    const params = useParams<{id: string}>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchEditPost = useCallback(async (id: string) => {
        try {
            setLoading(true);
            const response = await axiosAPI.get<IPostForm | null>(`/posts/${id}.json`);
            const postObject = response.data;

            if (postObject) setEditPost(postObject);

        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (params.id) {
            void fetchEditPost(params.id)
        }
    },[params.id, fetchEditPost]);

    const form = editPost ? (<PostForm isEdit={true} initialValuesForm={editPost} postId={params.id} />)
    : (<Spinner />);


    return (
        <div>
            {loading ? <Spinner /> : form}
        </div>
    );
};

export default EditPost;