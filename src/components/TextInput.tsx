import { FC } from "react";
import { TextInputProps } from "types/types";

const TextInput: FC<TextInputProps> = ({
  type = "text",
  startIcon,
  placeholder,
  autoFocus
}) => {
  return (
    <div className="flex px-3 items-center bg-[#323739] rounded-full text-gray-400 w-full h-full">
      {startIcon && startIcon}
      <input
        type={type}
        autoFocus={autoFocus}
        className="bg-transparent outline-none p-2 h-full w-full text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
