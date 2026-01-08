import {Button, Grid, TextField, Typography} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import type {IPostForm} from '../../types';
import {useForm} from 'react-hook-form';
import * as React from 'react';
import {useState} from 'react';
import axiosAPI from '../../axiosAPI.ts';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

interface Props {
    isEdit?: boolean;
}




const PostForm: React.FC<Props> = ({isEdit = false,}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IPostForm>({
        defaultValues: {
            title: '',
            description: '',
        }
    });

    const onSubmit = async (data: IPostForm) => {


        try {
            setLoading(true);

            if (isEdit) {

            } else {
                await axiosAPI.post('/posts.json', {...data, date: new Date().toISOString()});
            }

        } finally {
            setLoading(false);
        }

        reset();
        toast.success('Пост успешно добавлен!');
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>
                {isEdit ? 'Edit post' : 'Add post'}
            </Typography>

            <Grid container spacing={2} sx={{ mx: 'auto', width: '50%', mt: 4 }}>
                <Grid size={12}>
                    <TextField
                        type="text"
                        label="Post title"
                        sx={{ width:'100%' }}
                        variant="outlined"
                        disabled={loading}
                         {...register('title', {
                            required: 'Обязательно к заполнению!',
                             minLength: {
                                value: 3,
                                 message: 'Минимум 3 символа'
                             },
                            setValueAs: (value: string) => value.trim(),
                        })}
                    />
                    {errors.title && <Typography variant='body1' component='p' sx={{ color: 'red', mt: 1 }}>{errors.title.message}</Typography>}
                </Grid>


                <Grid size={12}>
                    <TextField
                        label="Description"
                        multiline
                        minRows={3}
                        fullWidth
                        variant="outlined"
                        disabled={loading}
                         {...register('description', {
                            required: 'Обязательно к заполнению!',
                             minLength: {
                                value: 3,
                                 message: 'Минимум 3 символа'
                             },
                            setValueAs: (value: string) => value.trim(),
                        })}
                    />
                    {errors.description && <Typography variant='body1' component='p' sx={{ color: 'red', mt: 1 }}>{errors.description.message}</Typography>}
                </Grid>

                <Grid size={12}>
                    <Button
                        type="submit"
                        size="medium"
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        {isEdit ? 'Edit post' : 'Add post'}
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default PostForm;