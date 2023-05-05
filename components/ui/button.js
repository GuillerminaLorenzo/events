import Link from "next/link";

import ButtonStyle from "./button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={ButtonStyle.btn}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={ButtonStyle.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
