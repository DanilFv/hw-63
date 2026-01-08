import {
    Button,
    Grid,
    TextareaAutosize,
    TextField,
    Typography
} from '@mui/material';
import type {IPostForm} from '../../types';
import {useForm} from 'react-hook-form';

interface Props {
    isEdit?: boolean;
}


const PostForm: React.FC<Props> = ({isEdit = false}) => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IPostForm>({
        defaultValues: {
            title: '',
            description: ''
        }
    });

    return (
        <form>
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
                    <TextareaAutosize
                        aria-label="description"
                        minRows={3}
                        placeholder='Minimum 3 rows'
                        style={{ width: '100%', height: '100px' }}
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
                    <Button type='submit' sx={{ width: '100%' }} variant='contained'>{isEdit ? 'Edit' : 'Add'}</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default PostForm;