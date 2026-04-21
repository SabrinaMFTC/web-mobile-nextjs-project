import Image from "next/image";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <Image width={32} height={32} src="/icon-portal-felino.png" alt="Logo do Portal Felino" />
        <p>© 2026 Portal Felino - Ajudando você a cuidar melhor do seu gatinho</p>
      </div>
    </footer>
  );
};
