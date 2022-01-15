import Logo from "./images/logo.svg";
import settingsIcon from "./images/icon-settings.svg";

function App() {
  return (
    <div className="App">
      <img className="title" src={Logo} alt="pomodoro logo" />
      <div className="control-panel">
        <Button />
        <Button />
        <Button />
      </div>
      <Clock />
      <Settings />
      <img src={settingsIcon} alt="settings icon" className="settingsIcon" />
    </div>
  );
}

export default App;
