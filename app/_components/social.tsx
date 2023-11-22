import Link from "next/link";
import { SOCIAL } from "../../config/social";
import styles from "../../styles/Home.module.scss";
export default function Social() {
  return (
    <ul className={styles.socialicons}>
      {SOCIAL.map((social) => (
        <li key={social.title}>
          <Link
            href={social.href}
            title={social.title}
            className={styles[social.className]}
          />
        </li>
      ))}
    </ul>
  );
}
