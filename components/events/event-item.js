import Link from "next/link";

export default function EventItem(props) {
  const { id, title, date, location, image } = props;

  const formattedDate = new Date(date).toLocaleDateString("es-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const formattedLink = `/events/${id}`;

  return (
    <li>
      <img src={"/" + image} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{formattedDate}</time>
        </div>
        <div>
          <address>{formattedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={formattedLink}>Explore event</Link>
      </div>
    </li>
  );
}
