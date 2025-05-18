import styles from "./page.module.css";
import Paragraph from "./paragraph";
import ServerParagraph from "./paragraph-server";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Hello World</h1>
      {/* rendering a client component in a server component */}
      <Paragraph>
        {/* Rendering a server component as children of a client component; This is valid */}
        <ServerParagraph />
      </Paragraph>
    </div>
  );
}
