import InputText from "./InputText";
import Navigation from "./Navigation";

export default function MainPage() {
  return (
    <div>
      <Navigation></Navigation>

      <div className="chatContainer">
        <h1 class="mainPageHeader">Welcome, This is the main page!</h1>
        <InputText></InputText>
      </div>
    </div>
  );
}
