import EventItem from "./event-item";

import EventListStyle from "./event-list.module.css";

export default function EventList(props) {
  const { items } = props;

  return (
    <ul className={EventListStyle.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
}
