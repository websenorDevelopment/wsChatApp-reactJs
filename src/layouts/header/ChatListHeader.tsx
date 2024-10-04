import { user } from "lib/data";
import { Avatar } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ChatListHeader = () => {
  return (
    <div className=" bg-primary-light h-[60px] flex justify-between items-center px-4 py-2">
      <Avatar src={user.profile} />
      <div className="flex gap-5 text-gray-400">
        <MessageIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default ChatListHeader;
