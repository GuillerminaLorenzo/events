import Link from "next/link";

import ButtonStyle from "./button.module.css";

export default function Button(props) {
  return (
    <Link href={props.link} className={ButtonStyle.btn}>
      {props.children}
    </Link>
  );
}
