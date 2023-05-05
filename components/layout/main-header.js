import Link from "next/link";

import MainHeaderStyle from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={MainHeaderStyle.header}>
      <div className={MainHeaderStyle.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={MainHeaderStyle.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
