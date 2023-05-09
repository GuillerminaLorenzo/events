import ErrorAlertStyle from "./error-alert.module.css";

export default function ErrorAlert(props) {
  return <div className={ErrorAlertStyle.alert}>{props.children}</div>;
}
