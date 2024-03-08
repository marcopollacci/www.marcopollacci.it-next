import { Metadata } from "next";
import Link from "next/link";
import styles from "../../styles/Home.module.scss";

export const metadata: Metadata = {
  title: "Talk & Slides",
  description: "Talks and slides by Marco Pollacci",
};

export default function TalkPage() {
  return (
    <div>
      <h1>Talk & Slides</h1>
      <span>Follow this links to see my slide</span>
      <ul
        style={{ paddingInlineStart: "1.5em", textDecoration: "underline" }}
        className={styles.skills}
      >
        <li>
          <Link
            target={"_blank"}
            href={"https://marcopollacci.github.io/angular-signal/"}
          >
            Angular and Signal (2024)
          </Link>
        </li>
      </ul>
    </div>
  );
}
