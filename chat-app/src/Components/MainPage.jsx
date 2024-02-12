import Chats from "./Chats";
import Navigation from "./Navigation";
import Search from "./Search";
import ChatRoom from "./ChatRoom";
import CurUser from "./CurUser";

export default function MainPage() {
  return (
    <div>
      <Navigation></Navigation>

      <div className="chatContainer">
        <div className="sideContainer">
          <CurUser />
          <Search />
          <Chats />
        </div>

        <ChatRoom />
      </div>
    </div>
  );
}
