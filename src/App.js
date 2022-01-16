import Logo from "./images/logo.svg";
import settingsIcon from "./images/icon-settings.svg";
import Button from "./components/Button";
import Clock from "./components/Clock";
import Settings from "./components/Settings";
import { useState } from "react";
import clsx from "clsx";

function App() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const [timer, setTimer] = useState(25*60);
  const [startTimer, setStartTimer] = useState(false);
  const [session, setSession] = useState("pomodoro"); // pomodoro | short | long

  const [font, setFont] = useState("kumbh"); // kumbh | roboto | space
  const [themeColor, setThemeColor] = useState("red"); // red | blue | purple

  const fontClass = clsx({
    kumbh: font === "kumbh",
    roboto: font === "roboto",
    space: font === "space"
  });

  const controlButtonColor = clsx("control-button active", {
    red: themeColor === "red",
    blue: themeColor === "blue",
    purple: themeColor === "purple"
  });

  // user click button to switch to a different session 
  function handleChangeSession(timerLen, sessionName) {
    setTimer(timerLen * 60);
    setSession(sessionName);
    setStartTimer(false);
  }

  // user click apply to apply settings


  return (
    <div className="App">
      <img className="title" src={Logo} alt="pomodoro logo" />
      <div className={fontClass}>
        <div className="control-panel">
          <Button buttonClass={session === "pomodoro"? controlButtonColor:"control-button"} text="Pomodoro" onClick={() => handleChangeSession(pomodoro, "pomodoro")} />
          <Button buttonClass={session === "short"? controlButtonColor:"control-button"} text="Short Break" onClick={() => handleChangeSession(shortBreak, "short")} />
          <Button buttonClass={session === "long"? controlButtonColor:"control-button"} text="Long Break" onClick={() => handleChangeSession(longBreak, "long")} />
        </div>
        <Clock />
        <Settings />
        <img src={settingsIcon} alt="settings icon" className="settingsIcon" />
      </div>
    </div>
  );
}

export default App;
