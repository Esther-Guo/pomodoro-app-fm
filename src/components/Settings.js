import ArrowUpIcon from "./img/icon-arrow-up.svg";
import ArrowDownIcon from "./img/icon-arrow-down.svg";
import CloseIcon from "./img/icon-close.svg";
import CheckIcon from "./img/icon-check.svg";
// import './styles/Settings.css';
import './styles/Settings.scss';
import React from 'react';

const Settings = ({ pomodoro, short, long, fontFamily, themeColor, setPomodoro, setShort, setLong, setFont, setThemeColor, apply }) => {

    const sessions = ['pomodoro', 'short', 'long'];
    const fonts = ['kumbh', 'roboto', 'space'];
    const themes = ['red', 'blue', 'purple'];

    // display current duration of each session
    function sessionSwitch(session) {
        switch(session) {
            // case 'pomodoro': return pomodoro;
            case 'short': return short;
            case 'long': return long;
            default: return pomodoro;
        }
    }

    function changeTime(session, direction) {
        if (direction === 'add') {
            if (session === 'pomodoro' && pomodoro < 60) setPomodoro(pomodoro+1);
            if (session === 'short' && short < 15) setShort(short+1);
            if (session === 'long' && long < 30) setLong(long+1);
        }
        else {
            if (session === 'pomodoro' && pomodoro > 0) setPomodoro(pomodoro-1);
            if (session === 'short' && short > 0) setShort(short-1);
            if (session === 'long' && long > 0) setLong(long-1);
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
                                                <img src={ArrowUpIcon} alt="increase one minute" onClick={ () => changeTime(session, 'add') }/>
                                                <img src={ArrowDownIcon} alt="decrease one minute" onClick={ () => changeTime(session, 'minus') }/>
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
                                            onClick={() => setFont(font)}
                                            className={ font === fontFamily? `font-button ${font} active`:`font-button ${font}` } >
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
                                            onClick={() => setThemeColor(theme)}
                                            className={ theme === themeColor? `theme-button ${theme} active`:`theme-button ${theme}`} >
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