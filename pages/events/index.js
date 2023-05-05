import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";

export default function AllEventsPage() {
  const event = getAllEvents();

  return (
    <div>
      <EventList items={event} />
    </div>
  );
}
