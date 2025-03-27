export interface NavbarItem {
  title: string;
  path: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  user: User;
}

export interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  imgUrl: string;
  createdAt: string;
  user: User;
  likeCount: number;
  comments: {
    commentList: Comment[];
    commentCount: number;
  };
}

export interface BlogContextType {
  blog: Blog | null;
  setBlog: React.Dispatch<React.SetStateAction<Blog | null>>;
}

export interface DialogType {
  type: Type;
  data?: {
    blog: Blog;
  };
}

export interface DialogContextType {
  setDialogType: React.Dispatch<React.SetStateAction<DialogType | null>>;
}

export enum Type {
  login = "login",
  register = "register",
  blogCard = "blogCard",
}
