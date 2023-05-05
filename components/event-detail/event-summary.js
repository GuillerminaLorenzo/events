import EventSummaryStyle from "./event-summary.module.css";

export default function EventSummary(props) {
  const { title } = props;

  return (
    <section className={EventSummaryStyle.summary}>
      <h1>{title}</h1>
    </section>
  );
}
