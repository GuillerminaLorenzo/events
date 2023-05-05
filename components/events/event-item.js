import EventItemStyle from "./event-item.module.css";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRight from "../icons/arrow-right-icon";
import Button from "../ui/button";

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
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={EventItemStyle.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={EventItemStyle.actions}>
          <Button link={formattedLink}>
            <span>Explore event</span>
            <span className={EventItemStyle.icon}>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
