import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.flexdiv}>
          <div>
            <Image
              width={200}
              height={200}
              className={styles.me}
              src="/images/me.jpeg"
              loading="eager"
              alt="me"
            />
          </div>
          <div>
            <h1 className="title">Marco Pollacci</h1>
            <p>Javascript Web Application Developer</p>
            <span>Main skills:</span>
            <ul className={styles.skills}>
              <li>Angular / NextJS / Lit</li>
              <li>NodeJS with NestJS</li>
            </ul>
            <a href="https://wakatime.com/@2729ac0c-0ebb-4599-b424-3a6648627bff">
              <Image
                src="https://wakatime.com/badge/user/2729ac0c-0ebb-4599-b424-3a6648627bff.svg"
                alt="Total time coded since Feb 1 2021"
                width={185}
                height={20}
              />
            </a>
            <ul className={styles.socialicons}>
              <li>
                <a
                  className={styles.dribbble}
                  target="_blank"
                  href="/cv_marco_pollacci_2022.pdf"
                  title="CV - PDF"
                >
                  Download CV
                </a>
              </li>
              <li>
                <a
                  className={styles.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/marcopollacci/"
                  title="Linkedin"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  className={styles.github}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/marcopollacci"
                  title="GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className={styles.twitter}
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/Cerins_Marco"
                  title="Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className={styles.instagram}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/marco_pollacci/"
                  title="Instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
            <div className={styles.footer}>
              <p>
                © <span id="date">{year}</span> - Marco Pollacci
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
