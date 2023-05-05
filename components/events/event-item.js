import Link from "next/link";

export default function EventItem(props) {
  const { id, title, date, location, image } = props;

  return (
    <li>
      <img src="" alt="" />
      <div>
        <h2>Title</h2>
        <div>
          <time>Date</time>
        </div>
        <div>
          <address>Location</address>
        </div>
      </div>
      <div>
        <Link href="/">Explore event</Link>
      </div>
    </li>
  );
}
