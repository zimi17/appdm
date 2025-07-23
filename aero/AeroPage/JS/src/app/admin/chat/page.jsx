import { AdminBreadcrumb } from "@/components";
import ChatApp from "./components/ChatApp";

export const metadata = {
  title: "Chat",
};

const Chat = () => {
  return (
    <>
      <AdminBreadcrumb title="Chat" />
      <ChatApp />
    </>
  );
};

export default Chat;
