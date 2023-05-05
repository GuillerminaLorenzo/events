import EventContentStyle from "./event-content.module.css";

export default function EventContent(props) {
  return (
    <section className={EventContentStyle.content}>{props.children}</section>
  );
}
