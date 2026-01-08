export interface IPostForm {
    title: string;
    description: string;
}

export interface IPost {
    id?: string;
    date: string;
    title: string;
    description?: string;
}

export interface IPostAPI {
    [key: string]: IPost;
}