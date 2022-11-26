import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import me from "../assets/me.jpeg";
import styles from "../styles/Home.module.scss";

export default function Home(props: { svg: string }) {
  const year = new Date().getFullYear();
  const aSvg = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    aSvg.current!.innerHTML = props.svg;
  }, [props.svg]);

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.flexdiv}>
            <div>
              <Image className={styles.me} src={me} loading="eager" alt="me" />
            </div>
            <div>
              <h1>Marco Pollacci</h1>
              <span>Javascript Web Application Developer</span>
              <p style={{ marginBottom: 0 }}>Main skills:</p>
              <ul className={styles.skills}>
                <li>NextJS / Lit / Angular</li>
                <li>NodeJS with NestJS</li>
              </ul>
              <Link
                ref={aSvg}
                href="https://wakatime.com/@2729ac0c-0ebb-4599-b424-3a6648627bff"
                aria-label="Wakatime profile"
              />
              <ul className={styles.socialicons}>
                <li>
                  <Link
                    href="/cv_marco_pollacci_2022.pdf"
                    title="Download my CV"
                    className={styles.dribble}
                  />
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/marcopollacci/"
                    title="Linkedin"
                    className={styles.linkedin}
                  />
                </li>
                <li>
                  <Link
                    href="https://github.com/marcopollacci"
                    title="GitHub"
                    className={styles.github}
                  />
                </li>
                <li>
                  <Link
                    href="https://twitter.com/Cerins_Marco"
                    title="Twitter"
                    className={styles.twitter}
                  />
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/marco_pollacci"
                    title="Instagram"
                    className={styles.instagram}
                  />
                </li>
              </ul>
              <div className={styles.footer}>
                <p>
                  © <span id="date">{year}</span>
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://wakatime.com/badge/user/2729ac0c-0ebb-4599-b424-3a6648627bff.svg"
  );
  const svg = await res.text();

  return {
    props: {
      svg: svg.replace(/<\/?a[^>]*>/g, ""),
    },
    revalidate: 43200, // 12h in seconds
  };
}
