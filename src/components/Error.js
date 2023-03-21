import WarningIcon from "../assets/img/warning-filled-icon.svg";

function Error() {
  return (
    <div className="error__container">
      <img className="error__container_img" src={WarningIcon} alt="error" />
      <div className="error__container_text">
        <div>The password you entered was incorrect.</div>
        <u> Forgot your password?</u>
      </div>
    </div>
  );
}

export default Error;
