import ArrowUpIcon from "./img/icon-arrow-up.svg";
import ArrowDownIcon from "./img/icon-arrow-down.svg";
import CloseIcon from "./img/icon-close.svg";
import CheckIcon from "./img/icon-check.svg";

const Settings = ({ pomodoro, short, long, setPomodoro, setShort, setLong, setFont, setThemeColor, apply }) => {

    const sessions = ['pomodoro', 'short', 'long'];
    const fonts = ['kumbh', 'roboto', 'space'];
    const themes = ['red', 'blue', 'purple'];

    function handleFontChange(font, e) {
        setFont(font);
        console.log(font);
    }

    function handleThemeChange(theme, e) {
        setThemeColor(theme);
        console.log(theme);
    }

    function sessionSwitch(session) {
        switch(session) {
            case 'pomodoro': return pomodoro;
            case 'short': return short;
            case 'long': return long;
        }
    }

    return (
        <div className="settings-panel">
            <div className="settings-header">
                <h2>Settings</h2>
                <img src={CloseIcon} alt="close icon" className="close-button" onClick={apply} />
            </div>
            <div className="settings-container">
                <div className="time-settings">
                    <h4>Time (Minutes)</h4>
                    <div className="time-control-container">
                        { sessions.map(session => {
                            return <div className="time-control" key={session}> 
                                        <p>{session}</p>
                                        <div className="time-adjust">
                                            <p>{sessionSwitch(session)}</p>
                                            <div className="toggles">
                                                <img src={ArrowUpIcon} alt="increase one minute" />
                                                <img src={ArrowDownIcon} alt="decrease one minute" />
                                            </div>
                                        </div>
                                    </div>
                            })
                        }
                    </div>
                </div>
                <div className="font-settings">
                    <h4>Font</h4>
                    <div className="font-buttons">
                        { fonts.map(font => {
                            return <button key={font}
                                            onClick={(e) => handleFontChange(font, e)}
                                            className={`font-button ${font}`} >
                                    Aa
                                    </button>
                        })}
                    </div>
                </div>
                <div className="theme-settings">
                    <h4>Color</h4>
                    <div className="theme-buttons">
                    { themes.map(theme => {
                            return <button key={theme} 
                                            onClick={(e) => handleThemeChange(theme, e)}
                                            className={`theme-button ${theme}`} >
                                    <img src={CheckIcon} alt="check icon" className="check-icon" />
                                    </button>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;