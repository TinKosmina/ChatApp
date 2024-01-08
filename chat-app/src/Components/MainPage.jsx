import Chats from "./Chats";
import InputText from "./InputText";
import Navigation from "./Navigation";
import Search from "./Search";

export default function MainPage() {
  return (
    <div>
      <Navigation></Navigation>

      <div className="chatContainer">
        <div className="sideContainer">
          <Search />
          <Chats />
        </div>

        <h1 class="mainPageHeader">Welcome, This is the main page!</h1>
        <InputText></InputText>
      </div>
    </div>
  );
}
