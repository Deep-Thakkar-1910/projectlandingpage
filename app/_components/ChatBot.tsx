import { MessageSquareMoreIcon } from "lucide-react";

const ChatBot = () => {
  return (
    <div className="fixed bottom-6 right-2 z-[60] flex size-16 cursor-pointer items-center justify-center gap-x-2 rounded-full bg-black p-3 text-white lg:bottom-8  lg:right-10  lg:size-fit  lg:rounded-xl ">
      <MessageSquareMoreIcon className="size-7" />
      <span className="hidden text-xl font-semibold lg:block">Chat</span>
      <div className="absolute -right-1 -top-1">
        <span className="size-4 rounded-full bg-red-500 px-1 text-xs font-semibold text-white">
          1
        </span>
      </div>
    </div>
  );
};

export default ChatBot;
