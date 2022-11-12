import linkStyles from "../styles/components/link.module.scss";

interface LinkProps {
  href: string;
  title: string;
  classname: string;
}

export default function Link({ href, title, classname }: LinkProps) {
  return (
    <>
      <a
        className={linkStyles[classname]}
        target="_blank"
        rel="noreferrer"
        href={href}
        title={title}
      />
    </>
  );
}
