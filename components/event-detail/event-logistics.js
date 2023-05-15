import Image from "next/image";

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
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
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
