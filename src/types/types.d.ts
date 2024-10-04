import React from "react";

export interface TextInputProps {
  type?: "text" | "number";
  startIcon?: React.ReactNode;
  placeholder?: string;
  autoFocus?: boolean
}

export interface ChatListCardProps {
  id: string;
  profile: string;
  lastMsg: string;
  name: string;
  time: string;
}

export interface ChatMessageProps {
  message: string;
  time: string;
  align: string
  showDate: boolean
}
