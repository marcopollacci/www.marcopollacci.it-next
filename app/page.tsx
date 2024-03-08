import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Social from "./_components/social";
import WakaComponent from "./_components/waka";

export default async function HomePage() {
  const year = new Date().getFullYear();

  const res = await fetch(
    "https://wakatime.com/badge/user/2729ac0c-0ebb-4599-b424-3a6648627bff.svg",
    {
      next: {
        revalidate: 43200, // 12h in seconds
      },
    }
  );
  const svg = await res.text();

  return (
    <div>
      <h1>Marco Pollacci</h1>
      <span>Expert in Javascript Web Application Development</span>
      <p style={{ marginBottom: 0 }}>Main skills:</p>
      <ul className={styles.skills}>
        <li>NextJS / Lit / Angular</li>
        <li>NodeJS with NestJS</li>
      </ul>
      <p style={{ textDecoration: "underline" }}>
        <Link href={"/talk"}>Talk & Slide</Link>
      </p>
      {svg && <WakaComponent svg={svg} />}
      <Social />
      <div className={styles.footer}>
        <p>
          © <span id="date">{year}</span>
        </p>
      </div>
    </div>
  );
}
