import Link from "next/link";

import EventItemStyle from "./event-item.module.css";

export default function EventItem(props) {
  const { id, title, date, location, image } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const formattedLink = `/events/${id}`;

  return (
    <li className={EventItemStyle.item}>
      <img src={"/" + image} alt={title} />
      <div className={EventItemStyle.content}>
        <div className={EventItemStyle.summary}>
          <h2>{title}</h2>
          <div className={EventItemStyle.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={EventItemStyle.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={EventItemStyle.actions}>
          <Link href={formattedLink}>Explore event</Link>
        </div>
      </div>
    </li>
  );
}
