import Chats from "pages/chat/Chats";
import Home from "pages/home/Home";
import { Navigate } from "react-router-dom";

export const routePath = {
  home: "/",
  chat: "/chat/:id",
};

export const routes = [
  {
    path: routePath.home,
    component: <Home />,
  },
  {
    path: routePath.chat,
    component: <Chats />,
  },
  {
    path: "*",
    component: <Navigate replace to={routePath.home} />,
  },
];
