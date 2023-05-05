import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import EventLogisticsStyle from "./event-logistics.module.css";

export default function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = address.replace(", ", "\n");

  return (
    <section className={EventLogisticsStyle.logistics}>
      <div className={EventLogisticsStyle.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={EventLogisticsStyle.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{formattedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
