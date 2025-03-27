import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/blogs", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "test title",
        description: "test description",
        content: "",
        imgUrl:
          "https://images.unsplash.com/photo-1741851373816-91017faa8553?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "14:05 - 19/03/2025",
        likeCount: "4",
        comments: {
          commentList: [
            {
              id: 1,
              content: "test comment",
              createdAt: "15:47 - 19/03/2025",
              user: {
                id: 2,
                name: "HeoBeo",
              },
            },
            {
              id: 2,
              content: "hello world",
              createdAt: "15:47 - 19/03/2025",
              user: {
                id: 2,
                name: "HeoBeo",
              },
            },
            {
              id: 3,
              content: "A Long",
              createdAt: "15:47 - 19/03/2025",
              user: {
                id: 2,
                name: "HeoBeo",
              },
            },
          ],
          commentCount: 3,
        },
        user: {
          id: 1,
          name: "Hoang Long",
        },
      },
      {
        id: 2,
        title: "test title2",
        description: "test description2",
        content: "",
        imgUrl:
          "https://images.unsplash.com/photo-1741851373794-ab6b44b367c9?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "14:05 - 19/03/2025",
        likeCount: "8",
        comments: {
          commentList: [
            {
              id: 1,
              content: "test comment",
              createdAt: "15:47 - 19/03/2025",
              user: {
                id: 2,
                name: "HeoBeo",
              },
            },
          ],
          commentCount: 1,
        },
        user: {
          id: 1,
          name: "Hoang Long",
        },
      },
      {
        id: 3,
        title: "test title3",
        description: "test description3",
        content: "",
        imgUrl:
          "https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        createdAt: "14:05 - 19/03/2025",
        likeCount: "10",
        comments: {
          commentList: [
            {
              id: 1,
              content: "test comment",
              createdAt: "15:47 - 19/03/2025",
              user: {
                id: 2,
                name: "HeoBeo",
              },
            },
          ],
          commentCount: 1,
        },
        user: {
          id: 1,
          name: "Hoang Long",
        },
      },
    ]);
  }),

  http.post("/api/auth/register", () => {
    return HttpResponse.json({
      success: true,
      message: "Dang ki tai thoan thanh cong",
      data: {
        id: 999,
        name: "John Doe",
        username: "johndoe",
        createdAt: "2025-03-25T08:00:00.000Z",
      },
    });
  }),

  http.post("/api/auth/login", () => {
    return HttpResponse.json({
      success: true,
      message: "Dang nhap tai khoan thanh cong",
      accessToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30",
    });
  }),
];
