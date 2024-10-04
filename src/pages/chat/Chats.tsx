import TextMessage from "components/chat/TextMessage";
import ChatFooter from "layouts/footer/ChatFooter";
import ChatRoomHeader from "layouts/header/ChatRoomHeader";
import { chats } from "lib/data";

const Chats = () => {
  return (
    <div className="bg-chat-bg bg-contain h-full flex flex-col">
      <ChatRoomHeader />
      <div className="mt-2 px-5 flex-1 flex flex-col-reverse overflow-y-auto">
        <div className="grid gap-3 pb-4">
          {chats.map((message, index) => (
            <TextMessage
              key={index}
              time={message.time}
              showDate={index == 0}
              align={message.align}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <ChatFooter />
    </div>
  );
};

export default Chats;
