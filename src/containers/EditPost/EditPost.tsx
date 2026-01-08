import PostForm from '../../components/PostForm/PostForm.tsx';

const EditPost = () => {
    return (
        <div>
           <PostForm isEdit={true}/>
        </div>
    );
};

export default EditPost;