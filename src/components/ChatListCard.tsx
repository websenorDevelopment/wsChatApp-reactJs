import { Avatar } from "@mui/material";
import { FC } from "react";
import { ChatListCardProps } from "types/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { routePath } from "routing/routes";
import { useNavigate } from "react-router-dom";

const ChatListCard: FC<ChatListCardProps> = ({
  id,
  lastMsg,
  name,
  profile,
  time,
}) => {
  const navigate = useNavigate();

  const handleOpenChat = (_id: string) => {
    navigate(routePath.chat?.replace(":id", _id));
  };

  return (
    <div
      onClick={() => handleOpenChat(id)}
      className="border-b border-gray-800 flex justify-between gap-2 text-gray-300 cursor-pointer group hover:bg-[#323739] p-2"
    >
      <div className="flex gap-3 w-full">
        <div>
          <Avatar src={profile} sx={{ width: 50, height: 50 }} />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="mt-1 line-clamp-1 text-sm text-gray-400">
            {lastMsg}
          </div>
        </div>
      </div>
      <div className="w-[50px] max-w-[50px] text-right">
        <div className="text-xs text-gray-400">{time}</div>
        <div className="mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatListCard;
