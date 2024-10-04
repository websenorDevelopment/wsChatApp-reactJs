import TextInput from "components/TextInput";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const ChatFooter = () => {
  return (
    <div className="flex gap-4 items-center justify-between h-[80px] bg-primary-dark px-4 py-4">
      <div className="flex items-center gap-4">
        <InsertEmoticonIcon className="cursor-pointer" />
        <AttachFileIcon className="cursor-pointer" />
      </div>
      <div className="w-full h-full">
        <TextInput autoFocus placeholder="Type a message" />
      </div>
      <div>
        <SendOutlinedIcon />
      </div>
    </div>
  );
};

export default ChatFooter;
