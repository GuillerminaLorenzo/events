import EventItem from "./event-item";

export default function EventList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((event) => (
        <EventItem />
      ))}
    </ul>
  );
}
// key: {event.id} id: {event.id} title: {event.title} date:{event.date} location: {event.location} image: {event.image}