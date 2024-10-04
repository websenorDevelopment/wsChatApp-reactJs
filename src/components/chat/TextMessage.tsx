import clsx from "clsx";
import Date from "./Date";
import { FC, Fragment } from "react";
import { ChatMessageProps } from "types/types";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TextMessage: FC<ChatMessageProps> = ({
  align = "left",
  time,
  message,
  showDate,
}) => {
  return (
    <Fragment>
      {showDate && <Date />}

      <div
        className={clsx(
          "w-fit p-2 rounded-b-md max-w-[75%] flex items-end gap-3 group hover:items-start",
          align == "right"
            ? "bg-primary-green rounded-tl-md ml-auto"
            : "bg-primary-light rounded-tr-md mr-auto"
        )}
      >
        <div className="text-gray-200 text-sm">{message}</div>
        <div>
          <div className="hidden group-hover:block">
            <KeyboardArrowDownIcon fontSize="small" />
          </div>
          <div className="block group-hover:hidden text-xs text-gray-400">{time}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default TextMessage;
