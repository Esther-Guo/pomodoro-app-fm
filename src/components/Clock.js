import clsx from 'clsx';

const Clock = ({ setStart, start, setPause, pause, timer, themeColor }) => {

    const ringColor = clsx('progress-ring__circle', {
        red: themeColor === 'red',
        blue: themeColor === 'blue',
        purple: themeColor === 'purple'
    });

    // click to start/pause/continue a timer
    function handleClick() {
        if (!start) setStart(true);
        else {
            setPause(!pause);
        }
    }

    return (
        <div className="clock">
            <button className="main-button" onClick={handleClick}>
                <svg
                    id="circle-tablet"
                    className="progress-ring"
                    height="339"
                    width="339"
                >
                    <circle
                    id="circle"
                    className={ringColor}
                    strokeWidth="8"
                    stroke="#F87070"
                    strokeLinecap="round"
                    fill="transparent"
                    r="165"
                    cx="169"
                    cy="169"
                    ></circle>
                </svg>
                <h1>{ Math.floor(timer / 60) < 10 ? '0'+Math.floor(timer/60) : Math.floor(timer/60) }:
                {Math.floor(timer % 60) < 10 ? '0'+Math.floor(timer % 60) : Math.floor(timer % 60)}
                </h1>
                <h3>{ !start||pause? 'start' : 'pause'}</h3>
            </button>
        </div>
    );
}

export default Clock;