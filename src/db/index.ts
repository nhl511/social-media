import { Blog, User } from "@/types";
import { openDB } from "idb";

const initDB = async () => {
  return openDB("social-media", 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("users")) {
        db.createObjectStore("users", { keyPath: "id", autoIncrement: true });
      }
      if (!db.objectStoreNames.contains("blogs")) {
        const blogStore = db.createObjectStore("blogs", {
          keyPath: "id",
          autoIncrement: true,
        });
        blogStore.createIndex("userId", "userId", { unique: false });
      }
    },
  });
};

export const registerUser = async ({ name, username, password }: User) => {
  const db = await initDB();
  db.transaction("users", "readwrite")
    .objectStore("users")
    .add({ name, username, password });
  return true;
};

export const loginUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const db = await initDB();
  const users = await db.transaction("users").objectStore("users").getAll();
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  return user
    ? { success: true, user }
    : { success: false, message: "Invalid credentials" };
};

export const getBlogs = async () => {
  const db = await initDB();

  const blogs = await db.transaction("blogs").objectStore("blogs").getAll();

  const users = await db.transaction("users").objectStore("users").getAll();

  const userMap = new Map(users.map((user) => [user.id, user]));

  return blogs.map((blog) => ({
    ...blog,
    user: userMap.get(blog.user) || null,
  }));
};

export const createBlog = async ({
  title,
  description,
  content,
  imgUrl,
  user,
  comments,
  likeCount,
  createdAt,
}: Blog) => {
  const db = await initDB();
  db.transaction("blogs", "readwrite").objectStore("blogs").add({
    title,
    description,
    content,
    imgUrl,
    user,
    comments,
    likeCount,
    createdAt,
  });
  return true;
};
