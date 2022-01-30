import Logo from "./images/logo.svg";
import SettingsIcon from "./images/icon-settings.svg";
import TodoIcon from "./images/icon-todo.svg";
import Button from "./components/Button";
import Clock from "./components/Clock";
import Settings from "./components/Settings";
import TodoTable from "./components/TodoTable";
// import { Button, Clock, Settings } from "esther-pomodoro-component";
import { useEffect, useState } from "react";
import clsx from "clsx";
import "./App.css";

function App() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const [timer, setTimer] = useState(25*60); // total seconds
  const [start, setStart] = useState(false); // session started/ended
  const [pause, setPause] = useState(false); // session started/paused
  const [session, setSession] = useState("pomodoro"); // pomodoro | short | long

  const [font, setFont] = useState("kumbh"); // kumbh | roboto | space
  const [themeColor, setThemeColor] = useState("red"); // red | blue | purple

  const fontClass = clsx("clock-container", {
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
    setStart(false);
    setPause(false);
  }

  // user click settings button to open settings tab
  function openSettings() {
    const settingsTab = document.querySelector('.settings-panel');
    settingsTab.style.display = 'block';
  }

  // user click close button to close settings tab & switch session to pomodoro
  function closeSettings() {
    const settingsTab = document.querySelector('.settings-panel');
    settingsTab.style.display = 'none';
    handleChangeSession(pomodoro, "pomodoro");
  }

  function toggleTodo() {
    const todo = document.querySelector('.todo-container');
    todo.style.display = todo.style.display === 'none'? 'block':'none';
  }

  useEffect(() => {
    if (start) {
      if (timer > 0) {
        if (!pause) {
          let interval = setInterval(() => {
            setTimer(seconds => seconds-1);
          }, 1000);
          return () => clearInterval(interval);
        }
      }
      else {
        setStart(false);
      }
    }
    // session ended
    else {
      if (session === 'pomodoro') setTimer(pomodoro*60);
      if (session === 'short') setTimer(shortBreak*60);
      if (session === 'long') setTimer(longBreak*60);
    }
  }, [start, pause, timer, longBreak, shortBreak, pomodoro, session]);

  return (
    <div className="App">
      {/* <img className="title" src={Logo} alt="pomodoro logo" /> */}
      <div className={fontClass}>
        <div className="control-panel">
          <Button buttonClass={session === "pomodoro" ? controlButtonColor : "control-button"} text="Pomodoro" onClick={() => handleChangeSession(pomodoro, "pomodoro")} />
          <Button buttonClass={session === "short" ? controlButtonColor : "control-button"} text="Short Break" onClick={() => handleChangeSession(shortBreak, "short")} />
          <Button buttonClass={session === "long" ? controlButtonColor : "control-button"} text="Long Break" onClick={() => handleChangeSession(longBreak, "long")} />
        </div>
        <Clock setStart={setStart}
          start={start}
          setPause={setPause}
          pause={pause}
          timer={timer}
          themeColor={themeColor}
          session={session}
          pomodoro={pomodoro}
          short={shortBreak}
          long={longBreak} />
        <Settings
          pomodoro={pomodoro}
          short={shortBreak}
          long={longBreak}
          fontFamily={font}
          themeColor={themeColor}
          setPomodoro={setPomodoro}
          setShort={setShortBreak}
          setLong={setLongBreak}
          setFont={setFont}
          setThemeColor={setThemeColor}
          apply={closeSettings} />
        <img src={SettingsIcon} alt="settings icon" className="settings-icon" onClick={openSettings} />
      </div>
      <div className="todo-container" style={{display:'none'}}>
        <div className="header">
          TODO
        </div>
        <TodoTable />
      </div>

      <img src={TodoIcon} alt="open todo list" className="todo-icon" onClick={toggleTodo} />
    </div>
    
  );
}

export default App;
