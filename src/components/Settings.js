import ArrowUpIcon from "./img/icon-arrow-up.svg";
import ArrowDownIcon from "./img/icon-arrow-down.svg";
import CloseIcon from "./img/icon-close.svg";

const Settings = (apply) => {

    return (
        <div className="settings-panel">
            <div className="settings-header">
                <h2>Settings</h2>
                <img src={CloseIcon} alt='close icon' className="close-button" onClick={apply} />
            </div>
        </div>
    );
}

export default Settings;