import WarningIcon from "../assets/img/warning-filled-icon-white.svg";

function Notification() {
  return (
    <div className="notification__container">
      <img
        className="notification__container_img"
        src={WarningIcon}
        alt="warning"
      />
      <div>Please correct the form and try again</div>
    </div>
  );
}

export default Notification;
