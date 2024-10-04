import TextInput from "components/TextInput";
import ChatListHeader from "layouts/header/ChatListHeader";
import SearchIcon from "@mui/icons-material/Search";
import ChatListCard from "components/ChatListCard";
import { chatList } from "lib/data";

const ChatList = () => {
  
  return (
    <div className="bg-[#131c21] min-w-[30%] w-[30%] border-r border-gray-800 overflow-auto">
      <div className="sticky top-0 z-10">
        <ChatListHeader />
      </div>
      <div className="py-2 px-4">
        <div className="sticky top-[70px] z-10">
          <TextInput
            placeholder={"Search or start a new chat"}
            startIcon={<SearchIcon fontSize="small" />}
          />
        </div>

        <div className="mt-2">
          {chatList.map((chat, index) => (
            <ChatListCard
              id={chat.id}
              key={index}
              name={chat.name}
              time={chat.time}
              lastMsg={chat.lastMsg}
              profile={chat.profile}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
