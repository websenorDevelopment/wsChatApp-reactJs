import { Avatar } from "@mui/material";
import { chatList } from "lib/data";
import { useParams } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const ChatRoomHeader = () => {
  const { id } = useParams();
  const room = chatList?.find((room) => room.id == id);

  return (
    <div className="bg-primary-light h-[60px] flex items-center justify-between px-4 py-2">
      <div className="flex items-start gap-3">
        <Avatar src={room?.profile} />
        <div>
          <div className="text-white">{room?.name}</div>
          <div className="text-xs">Online</div>
        </div>
      </div>

      <div className="flex gap-5">
        <SearchOutlinedIcon />
        <MoreVertOutlinedIcon />
      </div>
    </div>
  );
};

export default ChatRoomHeader;
