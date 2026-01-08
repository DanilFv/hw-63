export interface IPostForm {
    title: string;
    description: string;
}

export interface IPost {
    id: string;
    title: string;
    description: string;
}

export interface IPostAPI {
    [key: string]: IPostForm;
}